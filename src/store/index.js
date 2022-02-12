import {createStore} from 'vuex'
import {postModule} from "./profile/post";
import {groupsModule} from "./groups/groups";
import {loginModule} from "./login/login";
import axios from 'axios'

export default createStore({
    modules: {
        post: postModule,
        groups: groupsModule,
        login: loginModule,
    },
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user : {},
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_error(state){
            state.status = 'error'
        },
        auth_success(state, token){
            state.status = 'success';
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:3000/login', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token)
                        commit('setUser', user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        console.log('fgss')
                        reject(err)
                    })
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:3000/register', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}){
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
})

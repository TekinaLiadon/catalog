import axios from "axios";

export const groupsModule = {
    state: {
        groups: [],
        limit: 9,
        page: 1,
        totalPages: 0,
    },
    getters: {

    },
    mutations: {
        setGroups (state, groups) {
            state.groups = groups;
        },
        // setLimit (state, limit){
        //     state.limit = limit;
        // },
        setPage (state, page){
            state.page = page;
        },
        setTotalPages (state, totalPages) {
            state.totalPages = totalPages;
        },
    },
    actions: {
        async fetchGroups({state, commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        }
                    }
                );
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit) )
                commit("setGroups", response.data)
            } catch (e) {
                console.log('Error');
            }
        },
    },
    namespaced: true
}
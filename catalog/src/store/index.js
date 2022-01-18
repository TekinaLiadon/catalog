import {createStore} from 'vuex'
import {postModule} from "./profile/post";
import {groupsModule} from "./groups/groups";
import {loginModule} from "./login/login";

export default createStore({
    modules: {
        post: postModule,
        groups: groupsModule,
        login: loginModule,
    },
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
})

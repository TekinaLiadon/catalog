import {createStore} from 'vuex'
import {postModule} from "./profile/post";

export default createStore({
    modules: {
        post: postModule,
    }
})

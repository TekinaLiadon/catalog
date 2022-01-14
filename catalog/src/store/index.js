import {createStore} from 'vuex'
import {postModule} from "./profile/post";
import {groupsModule} from "./groups/groups";

export default createStore({
    modules: {
        post: postModule,
        groups: groupsModule,
    }
})

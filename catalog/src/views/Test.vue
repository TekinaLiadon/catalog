<template>
    <el-row class="row-bg" justify="center">
        <el-col :span="20">
            <el-row class="row-bg" justify="center">
                <PostForm @create="createPost"
                          :cards="cards"
                          @postsSort="setCards"
                          v-model="newCards"
                          v-tracking
                />
            </el-row>
            <el-row class="row-bg" justify="center">
                <PostList :cards="cards"
                          @remove="removePost"/>
            </el-row>
            <el-row class="row-bg" justify="center">
                <div v-for="pageNumber in totalPages"
                     :key="pageNumber"
                     class="page"
                     :class="{'currentPage': page === pageNumber}"
                     @click="changePage(pageNumber)"
                >
                    {{pageNumber}}
                </div>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import {mapActions, mapGetters, mapState, mapMutations} from 'vuex'
    import PostList from "@/components/home/PostList";
    import PostForm from "@/components/home/PostForm";
    import testMixin from "@/components/mixins/testMixin";

    export default {
        name: "Test",
        components: {
            PostList,
            PostForm,
        },
        methods: {
            ...mapMutations({
                setCards: 'post/setCards'
            }),
            ...mapActions({
                fetchPosts: 'post/fetchPosts'
            }),
            createPost(post) {
                this.cards.push(post);
            },
            removePost(post) {
                this.cards = this.cards.filter(p => p.id !== post.id)
            },
            changePage(pageNumber) {
                this.page = pageNumber
            },
        },
        computed: {
            ...mapGetters({
                postsSort: 'post/postsSort'
            }),
            ...mapState({
                cards: state => state.post.cards,
                newCards: state => state.post.newCards,
                selectedSort: state => state.post.selectedSort,
                post: state => state.post.post,
                totalPages: state => state.post.totalPages,
                page: state => state.post.page,
                limit: state => state.post.limit,
            })
        },
        mounted() {
            this.fetchPosts();
        },
        mixins: [testMixin]
    }
</script>

<style scoped>
    .page {
        border: 1px solid black;
        padding: 10px;
    }

    .currentPage {
        border: 1px solid greenyellow;
    }
</style>
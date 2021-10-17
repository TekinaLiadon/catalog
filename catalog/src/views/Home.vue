<template>
    <el-row class="row-bg" justify="center">
        <el-col :span="20">
            <el-row class="row-bg" justify="center">
                <PostForm @create="createPost"
                          :cards="cards"
                          @postsSort="sortPosts"
                          v-model="newCards"
                />
            </el-row>
            <PostList :cards="cards"
                      @remove="removePost"/>
        </el-col>
    </el-row>
</template>

<script>

    import PostList from "@/components/home/PostList";
    import axios from "axios";
    import PostForm from "../components/home/PostForm";

    export default {
        name: 'Home',
        components: {
            PostList,
            PostForm,
        },
        data() {
            return {
                cards: [],
                newCards: [],
                selectedSort: "",
                post: {
                    title: "",
                    body: "",
                    id: "",
                },
                page: 1,
                limit: 10,
            }
        },
        methods: {
            createPost() {
                this.cards.push(this.post);
            },
            removePost(post) {
                this.cards = this.cards.filter(p => p.id !== post.id)
            },
            sortPosts(newArr) {
                this.cards = newArr;
            }, async fetchPosts() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                            params: {
                                _page: this.page,
                                _limit: this.limit,
                            }
                        }
                    );
                    this.cards = response.data
                } catch (e) {
                    console.log('Error');
                }
            },
        },
        mounted() {
            this.fetchPosts();
        },
    }
</script>

<style scoped>

</style>
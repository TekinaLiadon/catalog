<template>
    <el-row class="row-bg" justify="center">
        <el-col :span="20">
            <PostForm @create="createPost"/>
            <PostList :cards="cards"
                      @remove="removePost"/>
        </el-col>
    </el-row>
</template>

<script>

    import PostList from "@/components/home/PostList";
    import PostForm from "@/components/home/PostForm";
    import axios from "axios";

    export default {
        name: 'Home',
        components: {
            PostForm,
            PostList,
        },
        data() {
            return {
                cards: [],
            }
        },
        methods: {
            createPost(post) {
                this.cards.push(post);
            },
            removePost(post) {
                this.cards = this.cards.filter(p => p.id !== post.id)
            },
            async fetchPosts() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
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
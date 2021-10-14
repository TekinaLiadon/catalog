<template>
    <el-row class="row-bg" justify="center">
        <el-col :span="20">
            <el-row class="row-bg" justify="center">
                <el-form>
                    <el-form-item>
                        <el-input type="text" placeholder="Название" v-model="post.title"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="text" placeholder="Описание" v-model="post.body"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="createPost">Создать пост</el-button>
                    </el-form-item>
                    <el-form-item>
                        <Select :options="sortOptions" v-model="selectedSort"></Select>
                    </el-form-item>
                </el-form>
            </el-row>
            <PostList :cards="postsSort"
                      @remove="removePost"/>
        </el-col>
    </el-row>
</template>

<script>

    import PostList from "@/components/home/PostList";
    import axios from "axios";

    export default {
        name: 'Home',
        components: {
            PostList,
        },
        data() {
            return {
                cards: [],
                selectedSort: "",
                post: {
                    title: "",
                    body: "",
                },
                sortOptions: [
                    {value: 'title', label: 'Заголовки'},
                    {value: 'body', label: 'Описания'},
                ],
                page: 1,
                limit: 10,
            }
        },
        methods: {
            createPost() {
                this.post.id = Date.now()
                this.cards.push(this.post);
                this.post = {
                    title: '',
                    body: '',
                }
            },
            removePost(post) {
                this.cards = this.cards.filter(p => p.id !== post.id)
            },
            async fetchPosts() {
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
        computed: {
            postsSort() {
                return [...this.cards].sort((postA, postB) => postA[this.selectedSort]?.localeCompare(postB[this.selectedSort]))
            }
        }
    }
</script>

<style scoped>

</style>
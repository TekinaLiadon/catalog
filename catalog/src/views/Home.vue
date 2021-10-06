<template>
    <el-row class="row-bg" justify="center">
        <el-col :span="20">
            <el-row class="row-bg" justify="center">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item>
                        <el-input v-model="form.title" @input="title = $event"
                                  placeholder=" Название">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.body" @input="body = $event"
                                  placeholder=" Прикол">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="createPost">Создать</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
            <el-row class="row-bg" justify="center">
                <template v-for="(card, index) in cards" :key="index">
                    <el-col :span="5">
                        <CardPost :id="card.id" :title="card.title" :body="card.body"/>
                    </el-col>
                </template>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>

    import CardPost from "../components/ui/CardPost";
    import axios from "axios"

    export default {
        name: 'Home',
        components: {
            CardPost
        },
        data() {
            return {
                cards: [],
                page: 1,
                limit: 10,
                totalPage: 0,
                form: {
                    body: '',
                    title: '',
                },
            }
        },
        methods: {
            async fetchPosts() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        }
                    })
                    this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.cards = response.data
                } catch (e) {
                    console.log('Error')
                }
            },
            createPost() {
                const newPost = {
                    id: Date.now(),
                    title: this.form.title,
                    body: this.form.body,
                }
                this.cards.push(newPost);
                this.form.title = '';
                this.form.body = '';
            },
        },
        mounted() {
            this.fetchPosts();
        },
    }
</script>

<style scoped>

</style>
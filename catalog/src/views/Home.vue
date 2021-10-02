<template>
    <el-row class="row-bg" justify="center">
        <el-col :span="20">
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
        data () {
            return {
                cards: [],
                page: 1,
                limit: 10,
                totalPage: 0,
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
            }
        },
        mounted() {
            this.fetchPosts();
        },
    }
</script>

<style scoped>

</style>
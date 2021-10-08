<template>
    <el-row class="row-bg" justify="center">
        <el-col :span="20">
            <PostForm @create="createPost"/>
            <PostList :cards="cards"/>

        </el-col>
    </el-row>
</template>

<script>

    import PostList from "@/components/home/PostList";
    import PostForm from "@/components/home/PostForm";

    export default {
        name: 'Home',
        components: {
            PostForm,
            PostList,
        },
        data() {
            return {
                cards: [
                    {id: 1, title: 'Название1', body: 'Типикал рыбатекст1'},
                    {id: 2, title: 'Название2', body: 'Типикал рыбатекст2'},
                    {id: 3, title: 'Название3', body: 'Типикал рыбатекст3'},
                ],

            }
        },
        methods: {
            createPost(post) {
                this.cards.push(post);
            }
        },
        mounted() {

        },
    }
</script>

<style scoped>

</style>
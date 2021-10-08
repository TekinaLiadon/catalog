<template>
    <el-row class="row-bg" justify="center">
        <form>
            <el-row class="row-bg" justify="center">
                <input class="c-input" type="text" placeholder="Название" v-model="post.title">
            </el-row>
            <el-row class="row-bg" justify="center">
                <input class="c-input" type="text" placeholder="Описание" v-model="post.body">
            </el-row>
            <el-row class="row-bg" justify="center">
                <el-button class="c-button" type="primary" @click="createPost">Создать пост</el-button>
            </el-row>
        </form>
    </el-row>
</template>

<script>
    export default {
        name: "PostForm",
        data() {
            return {
                post: {
                    title: "",
                    body: "",
                },
            }
        },
        methods: {
            createPost() {
                this.id = Date.now().toString();
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: '',
                }
            },
        },
    }
</script>

<style scoped>
    .c-input, .c-button {
        width: 100%;
        margin-top: 10px;
    }
</style>
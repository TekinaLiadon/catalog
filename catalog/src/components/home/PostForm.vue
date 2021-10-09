<template>
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
        </el-form>
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
                this.post.id = Date.now()
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

</style>
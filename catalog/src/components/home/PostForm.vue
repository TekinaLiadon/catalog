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
            <el-form-item>
                <Select :options="sortOptions" v-model="selectedSort" @change="$emit('postsSort' , postsSort)"></Select>
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
                    id: "",
                },
                selectedSort: "",
                sortOptions: [
                    {value: 'title', label: 'Заголовки'},
                    {value: 'body', label: 'Описания'},
                    {value: 'id', label: 'id'},
                ],
            }
        },
        props: {
            cards: Array,
            default: () => [],
        },
        methods: {
            createPost() {
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: '',
                    id: '',
                }
            },
        },
        computed: {
            postsSort() {
                if (this.selectedSort == 'id') {
                    return [...this.cards].sort((postA, postB) => postA[this.selectedSort] - postB[this.selectedSort])
                } else {
                    return [...this.cards].sort((postA, postB) => postA[this.selectedSort]?.localeCompare(postB[this.selectedSort]))
                }
            }
        }
    }
</script>

<style scoped>

</style>
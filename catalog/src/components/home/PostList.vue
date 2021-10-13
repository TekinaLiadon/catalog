<template>
    <el-row class="row-bg" justify="center">
        <template v-for="post in cards" :key="post.id">
            <el-col :span="5">
                <CardPost :post="post"
                @remove="$emit('remove', post)"/>
            </el-col>
        </template>
    </el-row>
</template>

<script>

    export default {
        name: "PostList",
        props: {
            cards: {
                type: Array,
            },
        },

    }
</script>

<style scoped>

</style>
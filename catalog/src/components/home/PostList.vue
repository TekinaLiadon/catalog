<template>
    <el-row class="row-bg" justify="center" v-if="cards.length > 0">
        <template v-for="post in cards" :key="post.id">
            <el-col :span="5">
                <CardPost :post="post"
                @remove="$emit('remove', post)"/>
            </el-col>
        </template>
    </el-row>
    <el-row class="row-bg" justify="center" v-else>
        <el-col :span="5">
            <p>
                Список постов пуст.
            </p>
        </el-col>
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
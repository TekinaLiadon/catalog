<template>
    <el-row class="row-bg" justify="center">
        <template v-for="(card, index) in cards" :key="index">
            <el-col :span="5">
                <CardPost :id="card.id" :title="card.title" :body="card.body"/>
            </el-col>
        </template>
    </el-row>
</template>

<script>
    import CardPost from "../ui/CardPost";

    export default {
        name: "PostList",
        components: {
            CardPost,
        },
        props: {
            cards: {
                type: Array,
            },
        },

    }
</script>

<style scoped>

</style>
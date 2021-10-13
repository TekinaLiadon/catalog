<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>{{post.title}}</span>
                {{post.id}}
                <el-button type="primary"
                           @click="$emit('remove', post)">Удалить
                </el-button>
            </div>
        </template>
        <div class="text item">
            {{post.body}}
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "CardPost",
        props: {
            post: Object,
        },
    }
</script>

<style scoped>
    .box-card {
        margin: 5px;
    }
</style>
<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                        <span>{{title}}</span>
                        {{id}}
                        <el-button type="primary">Удалить</el-button>
            </div>
        </template>
        <div class="text item">
            {{body}}
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "CardPost",
        props: {
            title: String,
            id: Number,
            body: String,
        }
    }
</script>

<style scoped>
    .box-card {
        margin: 5px;
    }
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
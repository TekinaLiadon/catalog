<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>{{title}}</span>
                <div>{{id}}</div>
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
</style>
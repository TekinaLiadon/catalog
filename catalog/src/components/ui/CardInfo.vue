<template>
    <el-card class="box-card" :class="classCard">
        <template #header>
            <div class="compendium-header">
                <span>{{name}}</span>
            </div>
        </template>
        <img :src="url" class="image" v-once>
        <div class="text item">
            {{description}}
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "CardInfo",
        props: {
            classCard: String,
            name: String,
            description: String,
            url: String,
        },
    }
</script>

<style scoped>
    .compendium-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
        margin-top: 8px;
    }

    .box-card .image {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 200px;
        object-fit: none;
        object-position: center;
    }
</style>
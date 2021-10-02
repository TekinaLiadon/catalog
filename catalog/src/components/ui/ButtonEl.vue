<template>
    <el-button :type="type" plain>
        <slot/>
    </el-button>
</template>

<script>
    export default {
        name: "ButtonEl",
        props: {
            type: String,
        },
    }
</script>

<style scoped>

</style>
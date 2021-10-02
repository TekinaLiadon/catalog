<template>
    <el-link :type="typeLink">
        <router-link :to="{name: routeName}">
            <slot/>
        </router-link>
    </el-link>
</template>

<script>
    export default {
        name: "LinkTextEl",
        props: {
            typeLink: String,
            routeName: String,
        }
    }
</script>

<style scoped>

</style>
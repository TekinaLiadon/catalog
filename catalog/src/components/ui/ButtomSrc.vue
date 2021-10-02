<template>
    <router-link :to="{name: routeName}" class="btn">
        <slot/>
    </router-link>
</template>

<script>
    export default {
        name: "ButtomSrc",
        props: {
            routeName: String,
        },
    }
</script>

<style scoped>
    .btn {
        display: inline-block;
        background: #8C959D;
        color: #fff;
        padding: 0.6rem;
        text-decoration: none;
        border-radius: 3px;
        margin: 10px;
    }
</style>
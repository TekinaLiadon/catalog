<template>
    <el-select v-model="valueV" placeholder="Нажмите для выбора" @change="changeOption">
        <el-option
                v-for="option in options"
                :key="option.value"
                :label="option.label"
                :value="option.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "Select",
        data(){
            return {
                valueV: ''
            }
        },
        props: {
            options: {
                type: Array,
                default: () => [],
            }
        },
        methods: {
            changeOption(event) {
                this.$emit('update:valueV', event);
            }
        },
    }
</script>

<style scoped>

</style>
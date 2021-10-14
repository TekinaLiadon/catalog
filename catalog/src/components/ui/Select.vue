<template>
    <el-select v-model="modelValue" placeholder="Нажмите для выбора" @change="changeOption">
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
                modelValue: ''
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
                this.$emit('update:modelValue', event);
            }
        },
    }
</script>

<style scoped>

</style>
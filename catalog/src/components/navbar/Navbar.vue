<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" id="navbar" router>
        <el-menu-item :route="{name: 'Home'}" index="home">Главная</el-menu-item>
        <el-submenu index="1">
            <template #title>Каталог групп</template>
            <el-menu-item :route="{name: 'GroupList'}" index="groupList">Список групп</el-menu-item>
            <el-menu-item :route="{name: 'CreateGroup'}" index="createGroup">Создать новую группу</el-menu-item>
            <el-menu-item :route="{name: 'PlayerDirectory'}" index="playerDirectory">Каталог игроков</el-menu-item>
        </el-submenu>
        <el-menu-item :route="{name: 'Profile'}" index="profile">Профиль</el-menu-item>
        <el-menu-item :route="{name: 'Login'}" index="login">Логин</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                activeIndex: 'home',
            };
        },
    }
</script>

<style scoped>
#navbar {
    margin-bottom: 15px;
}
</style>
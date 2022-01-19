<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Profile'}" index="profile">Профиль</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Рейтинги
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" :to="{name: 'GroupList'}" index="groupList">Список групп</router-link></li>
              <li><router-link class="dropdown-item" :to="{name: 'CreateGroup'}" index="createGroup">Создание новой группы</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" :to="{name: 'PlayerDirectory'}" index="playerDirectory">Каталог игроков</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Test'}" index="test">Тест</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Поиск</button>
          <button class="btn btn-outline-success" type="submit">
            <router-link class="nav-link"
                         :to="{name: 'Login'}"
                         index="login"
                         style="padding: 0; color: #198754;"
            >
              Логин
            </router-link>
          </button>
        </form>
      </div>
    </div>
  </nav>
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
    .navbar {
        margin-bottom: 15px;
    }
</style>
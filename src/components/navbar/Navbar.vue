<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Profile'}" index="profile">Профиль</router-link>
          </li>
          <li class="nav-item dropdown" id="groups-dropdown">
            <a class="nav-link dropdown-toggle" href="#menu-groups"
               role="button"
               id="navbarDropdownMenuLink"
               data-bs-toggle="dropdown"
               aria-expanded="false">
              Рейтинги
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="menu-groups">
              <li>
                <router-link class="dropdown-item" :to="{name: 'GroupList' , query: {page: 1}}" index="groupList">Список групп
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{name: 'CreateGroup'}" index="createGroup">Создание новой
                  группы
                </router-link>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <router-link class="dropdown-item" :to="{name: 'PlayerDirectory'}" index="playerDirectory">Каталог
                  игроков
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Test'}" index="test">Тест</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Map'}" index="map">Карта</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"
               role="button"
               id="navbarDropdownProject"
               data-bs-toggle="dropdown"
               aria-expanded="false">
              Проекты
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownProject" id="menu-project">
              <li>
                <router-link class="dropdown-item" :to="{name: 'Gif'}" index="gif">
                  Гифки
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Поиск</button>
            <router-link class="nav-link btn btn-outline-success"
                         :to="{name: 'Login'}"
                         index="login"
                         style="color: #198754;"
                         v-if="!isLoggedIn"
            >
              Логин
            </router-link>
          <span v-else>
            <a
              class="nav-link btn btn-outline-success"
              @click="logout"
              style="color: #198754;"
          >
              Выход
            </a>
          </span>
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
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
    }
  },
  computed : {
    isLoggedIn : function(){
      return this.$store.getters.isLoggedIn
    }
  },
}
</script>

<style scoped>
.navbar {
  margin-bottom: 15px;
}
</style>
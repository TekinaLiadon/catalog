<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="btn-group" role="group">
          <button type="button"
                  class="btn btn-primary"
                  @click="changeType('login')"
          >
            Вход
          </button>
          <button type="button"
                  class="btn btn-primary"
                  @click="changeType('register')"
          >
            Регистрация
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center"
         v-if = 'authType ==="login"'
    >
      <div class="col-6">
        <Login/>
      </div>
    </div>
    <div class="row justify-content-md-center"
         v-if = 'authType ==="register"'
    >
      <div class="col-6">
        <Registration/>
      </div>
    </div>
  </div>
</template>

<script>
import Registration from "../components/authorization/Registration";
import Login from "../components/authorization/Login";
export default {
  name: "Auth",
  components: {
    Registration,
    Login,
  },
  data() {
    return {
      authType: 'login',
    }
  },
  methods: {
    changeType (type) {
      this.authType =  type;
    }
  },
}
</script>

<style scoped>
 .btn {
   margin-bottom: 1em;
 }
</style>
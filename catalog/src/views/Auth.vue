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
          <button type="button"
                  class="btn btn-primary"
                  @click="auth_success('testToken', 'testUser')"
          >
            Тестовый вход
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
import {mapState, mapMutations} from 'vuex'
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
  computed: {
    ...mapState({
      status: state => state.status,
    })
  },
  methods: {
    changeType (type) {
      this.authType =  type;
    },
    ...mapMutations({
      auth_success: 'auth_success',
    }),
  },
}
</script>

<style scoped>
 .btn {
   margin-bottom: 1em;
 }
</style>
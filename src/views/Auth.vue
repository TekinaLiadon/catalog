<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="btn-group" role="group"
        :class="{
          'btn-group-sm': windowSize < 600,
        'btn-group-lg': windowSize > 1000,
        'btn-group-vertical': windowSize < 600,
        }">
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
                  @click="auth_success('testToken'), setUser({name: 'testUser'}),
                   addToast(), changeType('test')"
          >
            Тестовый вход
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center"
         v-if='authType ==="login"'
    >
      <div class="col-6">
        <Login
            @addToast="addToast"
        />
      </div>
    </div>
    <div class="row justify-content-center"
         v-if='authType ==="register"'
    >
      <div class="col-6">
        <Registration
            @addToast="addToast"
        />
      </div>
    </div>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="liveToast">
        <div class="toast-header">
          <strong class="me-auto">Авторизация</strong>
          <small>11 мин назад</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
        </div>
        <div class="toast-body" v-if="authType == 'login'">
          Попытка войти в профиль неуспешна
        </div>
        <div class="toast-body" v-else-if="authType == 'register'" >
          Попытка зарегистрироваться неуспешна
        </div>
        <div class="toast-body" v-else-if="authType == 'test'" >
          Тестовый вход без сохранения токена
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Registration from "../components/authorization/Registration";
import Login from "../components/authorization/Login";
import {mapState, mapMutations} from 'vuex'
import {Toast} from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default {
  name: "Auth",
  components: {
    Registration,
    Login,
  },
  data() {
    return {
      authType: 'login',
      windowSize: 0,
    }
  },
  computed: {
    ...mapState({
      status: state => state.status,
    })
  },
  methods: {
    changeType(type) {
      this.authType = type;
    },
    ...mapMutations({
      auth_success: 'auth_success',
      setUser: 'setUser',
    }),
    addToast() {
      /*const toastTrigger = this.$refs.liveToastBtn*/
      const toastLiveExample = this.$refs.liveToast
      const toast = new Toast(toastLiveExample)
      toast.show()
    },
    windowsUpdate() {
      this.windowSize = window.innerWidth;
    },
  },
  mounted() {
    this.windowsUpdate()
  },
  created() {
    window.addEventListener('resize', this.windowsUpdate);
  },
}
</script>

<style scoped>
.btn-group {
  margin-bottom: 1em;
}
</style>
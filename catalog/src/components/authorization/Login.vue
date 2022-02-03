<template>
  <form @submit.prevent="login">
    <div class="form-floating mb-3">
      <input type="email"
             class="form-control"
             id="floatingInput"
             placeholder="name@example.com"
             v-model="email"
             autofocus
      >
      <label for="floatingInput">Почтовый ящик</label>
    </div>
    <div class="form-floating mb-3" id="password">
      <input type="password"
             class="form-control"
             id="floatingPassword"
             placeholder="Password"
             v-model="password">
      <label for="floatingPassword">Пароль</label>
    </div>
    <div class="mb-3 form-check form-css">
      <input type="checkbox" class="form-check-input">
      <label class="form-check-label">Запомнить</label>
    </div>
    <div class="mb-3 form-css">
      <button type="submit" class="btn btn-primary" @click="addToast" id="liveToastBtn" ref="liveToastBtn">Войти
      </button>
    </div>
  </form>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="liveToast">
      <div class="toast-header">
        <strong class="me-auto">Авторизация</strong>
        <small>11 мин назад</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
      </div>
      <div class="toast-body">
        Попытка войти в профиль неуспешна
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      status: '',
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', {email, password})
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    },
    addToast() {
      /*const toastTrigger = this.$refs.liveToastBtn*/
      const toastLiveExample = this.$refs.liveToast
      const toast = new Toast(toastLiveExample)
      toast.show()
    }
  },
  mounted() {
  },
  watch: {
    status() {
      this.addToast()
    }
  },
}
</script>

<style scoped>
.form-css {
  text-align: start;
}
</style>
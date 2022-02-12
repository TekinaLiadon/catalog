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
      <button type="submit" class="btn btn-primary" @click="$emit('addToast')" id="liveToastBtn" ref="liveToastBtn">Войти
      </button>
    </div>
  </form>
</template>

<script>

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
    /*addToast() {
      /!*const toastTrigger = this.$refs.liveToastBtn*!/
      const toastLiveExample = this.$refs.liveToast
      const toast = new Toast(toastLiveExample)
      toast.show()
    }*/
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
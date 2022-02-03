<template>
<form @submit.prevent="register">
  <div class="form-floating mb-3">
    <input id="name"
           placeholder="name"
           type="text"
           class="form-control"
           v-model="name"
           required
    >
    <label for="name">Имя</label>
  </div>
  <div class="form-floating mb-3">
    <input id="email"
           placeholder="email"
           type="email"
           class="form-control"
           v-model="email"
           required
    >
    <label for="email">Почтовый ящик</label>
  </div>
    <div class="form-floating mb-3">
      <input type="password"
             class="form-control"
             id="password"
             placeholder="Password"
             v-model="password"
             required
      >
      <label for="password">Пароль</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password"
             class="form-control"
             id="password-confirm"
             placeholder="Password-confirm"
             v-model="password_confirmation"
             required
      >
      <label for="password-confirm">Повторить пароль</label>
    </div>
    <div class="mb-3 form-css">
      <button type="submit" class="btn btn-primary">Регистрация</button>
    </div>
</form>
</template>

<script>
export default {
  name: "Registration",
  data(){
    return {
      name : "",
      email : "",
      password : "",
      password_confirmation : "",
      is_admin : null
    }
  },
  methods: {
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin
      }
      this.$store.dispatch('register', data)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
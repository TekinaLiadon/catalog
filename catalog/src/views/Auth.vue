<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-6">
        <form @submit.prevent="login">
          <div class="form-floating mb-3">
            <input type="email"
                   class="form-control"
                   id="floatingInput"
                   placeholder="name@example.com"
                   v-model="email">
            <label for="floatingInput">Почтовый ящик</label>
          </div>
          <div class="form-floating mb-3">
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
            <button type="submit" class="btn btn-primary">Войти</button>
          </div>
        </form>
      </div>
    </div>

    <div class="row justify-content-md-center">
      <div class="col-6">
        <Registration/>
      </div>
    </div>
  </div>
</template>

<script>
import Registration from "../components/authorization/Registration";
export default {
  name: "Login",
  components: {Registration},
  data(){
    return {
      email : "",
      password : ""
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }
  },
}
</script>

<style scoped>
.form-css {
  text-align: start;
}
</style>
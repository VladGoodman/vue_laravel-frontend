<template>
  <div class="form">
    <div class="form-title">
      registration
    </div>
    <div class="form-body">
      <form v-on:submit.prevent="login">
        <div class="form-body__input">
          <label for="login-email">Email</label>
          <input v-model="form.email" type="email" id="login-email" name="login-email">
        </div>
        <div class="form-body__input">
          <label for="login-password">Password</label>
          <input v-model="form.password" type="password" id="login-password" name="login-password">
        </div>
        <div class="form-body__danger">
          {{ checkErrors }}
        </div>
        <button class="form-body__btn">
          Login
        </button>
      </form>
    </div>
    <div class="form-social">
      <div class="form-social__item">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        repeat_password: '',
      },
      errors: {}
    }
  },
  computed:{
    checkErrors(){
      if (typeof  this.errors === 'string'){
        return this.errors
      }
      if(this.errors.hasOwnProperty('email')){
        return this.errors.email[0]
      }
      if(this.errors.hasOwnProperty('password')){
        return this.errors.password[0]
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('checkLoginInfo', {
        email: this.form.email,
        password: this.form.password
      })
        .then(response => {
          this.$router.push('/')
        })
        .catch(error => {
          this.errors = error.error
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  color: white;
  background-color: #40467C;
  border-radius: 40px;
  padding: 64px 44px;
  width: 520px;

  &-title {
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
    margin-bottom: 45px;
  }
  &-body {
    &__input {
      margin: 15px 0;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      label {
        display: block;
        font-size: 18px;
      }
      input {
        margin: 0;
        display: block;
        border: 3px white solid;
        border-radius: 6px;
        background: none;
        padding: 23px 17px;
      }
    }
    &__btn{
      width: 100%;
      padding: 16px 0;
      background: #23263E;
      font-size: 30px;
      font-weight: normal;
      color: white;
      border: none;
      margin-top: 26px;
      cursor: pointer;
    }
  }
  &-or{
    text-transform: uppercase;
    font-size: 50px;
    font-weight: bold;
  }
}
</style>

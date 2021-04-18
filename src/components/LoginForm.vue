<template>
  <div class="form">
    <div class="form-title">
      authorization
    </div>
    <div class="form-body">
      <form v-on:submit.prevent="onLogin">
        <div class="form-body__input">
          <label for="login-email">Email</label>
          <input v-model="form.email" type="email" id="login-email" name="login-email">
        </div>
        <div class="form-body__input">
          <label for="login-password">Password</label>
          <input v-model="form.password" type="password" id="login-password" name="login-password">
        </div>
        <button class="form-body__btn">
          Login
        </button>
      </form>
    </div>
    {{ form }}
    {{ errors }}
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
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    onLogin () {
      this.errors = {}
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

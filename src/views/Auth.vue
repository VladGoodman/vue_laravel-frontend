<template>
  <div class="container">
    <login-form/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: 'Auth',
  components: { LoginForm }
}
</script>

<style lang="scss">
  html{
    background: #252949;
  }
</style>

<style scoped>
  .container{
    max-width: 1440px;
    padding: 82px 52px;

    margin: 0 auto;
  }
</style>

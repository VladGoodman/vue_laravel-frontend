<template>
  <div class="container">
      <profile-menu></profile-menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ProfileMenu from '../components/ProfileMenu'
export default {
  components:{
    ProfileMenu
  }
}
</script>

<style scoped>
  .container{
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
</style>

<template>
  <div class="container">
      <profile-menu></profile-menu>
    <div class="content">
      <router-view></router-view>
    </div>
    <button @click="logout">Logout </button>
    <button @click="createAccountChange">Get</button>
  </div>
</template>

<script>
import ProfileMenu from '../components/ProfileMenu'
export default {
  components:{
    ProfileMenu
  },
  computed:{
    checkUser(){
      return this.$store.getters['user'];
    }
  },
  methods:{
    async logout(){
      try{
        await this.$store.dispatch('logout')
        .then(this.$router.push('/'));
      }catch (error){
        this.error = error;
      }
    },
    createAccountChange(){
      this.$store.dispatch('getUserInfo', {
        change_id: 1,
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
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

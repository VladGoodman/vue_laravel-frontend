<template>
  <div class="container">
      <profile-menu :username="username"></profile-menu>
    <div class="content">
      <router-view></router-view>
    </div>
    <button @click="logout">Logout </button>
  </div>
</template>

<script>
import ProfileMenu from '../components/ProfileMenu'
export default {
  components:{
    ProfileMenu
  },
  data(){
    return{
      username: '',
    }
  },
  created () {
    this.getAccountInfo()
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
    getAccountInfo(){
      this.$store.dispatch('getAccountInfo')
        .then(res => {
          this.username = this.$store.getters.username;
        })
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

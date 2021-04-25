<template>
  <div class="list-container">
    <input-add-change v-on:update="getAccountData"></input-add-change>
    <list-changes-item v-for="l in list" :item="l">
    </list-changes-item>
  </div>
</template>

<script>
import ListChangesItem from './ListChangesItem'
import InputAddChange from './InputAddChange'
export default {
  components:{
    ListChangesItem,
    InputAddChange
  },
  methods:{
    sortAccountData(mass){
      return mass.sort((a,b) =>{
        return Date.parse(b.date) - Date.parse(a.date)
      })
    },
    getAccountData(){
      this.$store.dispatch('getAccountChanges')
        .then(res => {
          console.log(res.data)
          this.list = this.sortAccountData(res.data)
        })
        .catch(err => console.log(err))
      console.log(this.list)
    }
  },
  created(){
    this.getAccountData()
  },
  data() {
    return {
        list: []
    }
  }
}
</script>

<style scoped>
  .list-container{
    margin: 20px 30px;
  }
</style>

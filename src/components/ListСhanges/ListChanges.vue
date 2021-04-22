<template>
  <div class="list-container">
    <list-changes-item></list-changes-item>
  </div>
</template>

<script>
import ListChangesItem from './ListChangesItem'
export default {
  components:{
    ListChangesItem
  }
}
</script>

<style scoped>
  .list-container{
    margin: 20px 30px;
  }
</style>

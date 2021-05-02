<template>
  <div class="item-container" :class="[item.change_id === 1 ? 'item-add': 'item-delete' ]">
    <div class="item-name">
      {{ item.type_changes }} <span>{{ item.change_id  }}</span>
    </div>
    <div class="item-score">
      <span>{{ item.date }}</span> {{ item.quantity }} <span>{{ item.currency_type }}</span>
    </div>
    <div class="item-delete">
      <button @click="deleteChangeAccount(item.id)">{{ item.id }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods:{
    deleteChangeAccount(id){
      console.log('ID in component: ' + id)
      this.$store.dispatch('deleteChangeAccount', id)
        .then(res => {
          this.$emit('update')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-add{
    border: 3px solid white;
  }
  .item-delete{
    border: 3px solid red;
  }
  .item-container{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .item-icon{
      margin-left: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #42b983;
    }
    .item-name{
      font-size: 25px;
    }
    .item-score{
      padding: 0 20px;
    }
  }
</style>

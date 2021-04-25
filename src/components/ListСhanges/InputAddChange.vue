<template>
  <div class="input-form">
    <form enctype="multipart/form-data" method="post" action="" v-on:submit.prevent="createAccountChange">
      <select v-model="change_type">
        <option v-for="t in changes_info" v-bind:value="t.type">{{t.name}}</option>
      </select>
      <input type="number">
      <button>+</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputAddChange',
  data() {
    return{
      changes_info: [
        {name: 'Затрата', type: 0},
        {name: 'Пополнение', type: 1}
      ],
      change_type: 0,
      change_quantity: 0
    }
  },
  methods:{
    createAccountChange(){
      this.$store.dispatch('createUserChange', {
        change_id: 1,
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>

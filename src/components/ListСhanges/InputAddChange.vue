<template>
  <div class="input-form">
    <form v-on:submit.prevent="createAccountChange">
      <select v-model="name_type">
        <option v-for="n in names_info" :value="n.id">{{n.name}}</option>
      </select>
      <select v-model="change_type">
        <option v-for="t in changes_info" v-bind:value="t.type">{{t.name}}</option>
      </select>
      <input v-model="change_quantity" type="number">
      <button> + </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputAddChange',
  data() {
    return{
      names_info: [],
      changes_info: [
        {name: 'Затрата', type: 1},
        {name: 'Пополнение', type: 2}
      ],
      name_type: 0,
      change_type: 1,
      change_quantity: undefined,
    }
  },
  methods:{
    async createAccountChange(){
      await this.$store.dispatch('createUserChange',{
        change_id: this.change_type,
        currency_id: 2,
        name_id: this.name_type,
        quantity: this.change_quantity
      })
        .then(res => {
          this.$emit('update')
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.names_info = this.$store.getters.names;
    let keys = Object.keys(this.names_info);
    this.name_type = this.names_info[keys[0]].id
  }
}
</script>

<style scoped>

</style>

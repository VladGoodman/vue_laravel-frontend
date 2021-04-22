<template>

</template>

<script>
export default {
  created () {
    this.$store.dispatch('removeToken')
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>

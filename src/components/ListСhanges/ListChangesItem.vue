<template>
  <div class="item-container">
    <div class="item-icon">

    </div>
    <div class="item-name">
      Name
    </div>
    <div class="item-score">
      1200 ₽
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .item-container{
    background: #23263E;
    border-radius: 40px;
    padding: 10px 5px;
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

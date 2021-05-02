<template>
  <div class="menu">
    <div class="menu-header">
      <div class="menu-header__name">
        AppName
      </div>
      <div class="menu-header__btn">
        |||
      </div>
    </div>
    <div class="menu-info">
      <div class="menu-info__img">

      </div>
      <div class="menu-info__username">
        {{ username }}
      </div>
      <div class="menu-info__score">
      </div>
    </div>
    <div class="menu-items">
      <ul>
        <li class="menu-items__item">
          <router-link to="/profile">List</router-link>
          <span class="item-icon">*</span>
        </li>
        <li class="menu-items__item">
          <router-link to="/profile/time">Time statistics</router-link>
          <span class="item-icon">*</span>
        </li>
        <li class="menu-items__item">
          Profile
          <span class="item-icon">*</span>
        </li>
        <li class="menu-items__item">
          Conversion
          <span class="item-icon">*</span>
        </li>
        <li class="menu-items__item">
          Banks
          <span class="item-icon">*</span>
        </li>
        <li class="menu-items__item">
          Index
          <span class="item-icon">*</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
  props: ['username'],
  data(){
    return{
      user: {}
    }
  },
  created () {
    this.$store.dispatch('getUserInfo')
      .then(res => {
        this.user = res.data
        console.log(this.user)
      })
  }
}
</script>

<style lang="scss" scoped>
.menu {
  background: #313D99;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 30px 10px;

  &-header {
    display: flex;
    justify-content: space-between;
  }

  &-info {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &__img{
      background: #42b983;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }

  &-items {
    margin-top: 100px;
  }
}
</style>

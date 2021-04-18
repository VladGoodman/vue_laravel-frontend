<template>
  <div class="container">
    <div class="header">
      <a href="">Index</a>
      <a href="">News</a>
    </div>
    <div class="body">
      <div class="body-image">
          <div class="img"></div>
      </div>
      <div class="body-title">
          <div class="body-title__text">
            Applications for keeping track
            of your finances
          </div>
        <div class="body-title__link">
          <router-link to="/auth">start now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss">
  html{
    background: linear-gradient(117.91deg, #313D99 0%, #5D3C87 100%) no-repeat;
  }
</style>

<style scoped lang="scss">
  *{
    color: white;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  .container{
    max-width: 1440px;
    padding: 40px 64px;
    margin: 0 auto;
    .header{
      display: flex;
      justify-content: space-between;
      font-size: 36px;
    }
   .body{
     display: flex;
     justify-content: space-between;
     padding: 80px 0;
     &-image{
       background: #42b983;
       border-radius: 30px;
       width: 400px;
       height: 400px;
     }
     &-title{
       margin-left: 106px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       &__text{
         font-size: 48px;
         font-weight: normal;
         text-align: center;
         margin-bottom: 100px;
       }
       &__link{
         display: inline;
         background-color: #17D5FF;
         border-radius: 60px;
         text-align: center;
         padding: 9px 35px;
         a{
           text-transform: uppercase;
           font-size: 36px;
           font-weight: normal;
         }
       }
     }
   }
  }
</style>

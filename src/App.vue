<template>
  <div id="app">
        <!-- <div class='denglu'>
          
        </div> -->
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
//     在页面加载时读取localStorage里的状态信息
// localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
 
// //在页面刷新时将vuex里的信息保存到localStorage里
// window.addEventListener("beforeunload",()=>{
// localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
// })

  },mounted(){
    // console.log(window.history)
  }
}
</script>

<style lang='less'>
#app {
  width: 1440px;
  height: 100%;
  margin: 0 auto;
background: url('./../static/img/bg.jpg') no-repeat;
background-size: cover;
}
</style>

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
 
//     在页面加载时读取localStorage里的状态信息
// localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
 
// //在页面刷新时将vuex里的信息保存到localStorage里


  mounted(){
    // if(window.localStorage.getItem('userMsg')){
    //   let  su=JSON.parse(window.localStorage.getItem('userMsg'));
    //   console.log(su);
    //   this.$store.commit('changall',su);
    // }
     
  },
//   beforeDestroy(){
//      window.addEventListener('onunload',()=>{

//        window.localStorage.setItem("userMsg",JSON.stringify(this.$store.state));
//      })

  
// }
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
@media all and (min-width: 681px) and (max-width: 1366px){
  #app {
  width: 100%;
}
}
</style>

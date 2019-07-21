import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // data:{
  //   history:[] //存储查询历史记录的数据
  // },
  // methods:{
  //   //刷新页面或者从别的页面进入，提取this.history的值
  //   getPageData:function(){
  //     this.history = JSON.parse(localStorage.getItem('this.$store.state'));//使用getItem方法的前提是，你再自己需要的地方使用了setItem方法
  //   }
  // },
  // //钩子函数，在实例被创建之后被调用，调用getPageData()
  // created:function(){
  //   this.getPageData();
  // },


  components: { App },
  template: '<App/>'
})
//axios
import axios from 'axios'
Vue.prototype.$axios = axios;

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;



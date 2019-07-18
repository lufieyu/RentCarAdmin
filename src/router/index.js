import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Denglu from './../denglu'
import Index from './../index'
import Home from './../home'
import Huiyuanchaxun from './../huiyuan/huiyuanchaxun'
import Huiyuanzhuce from './../huiyuan/huiyuanzhuce'
import Shouliyuding from './../yuding/shouliyuding'
import Yudingguanli from './../yuding/yudingguanli'
import Jiesuan from './../feiyong/jiesuan'
import Jiesuanguanli from './../feiyong/jiesuanguanli'
import Cheliangchaxun from './../cheliang/cheliangchaxun'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Denglu',
      component: Denglu
    },
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          // name:'home',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'huiyuanchaxun',
          name: 'Huiyuanchaxun',
          component: Huiyuanchaxun
        },
        {
          path: 'huiyuanzhuce',
          name: 'Huiyuanzhuce',
          component: Huiyuanzhuce
        },
        {
          path: 'shouliyuding',
          name: 'Shouliyuding',
          component: Shouliyuding
        },
        {
          path: 'yudingguanli',
          name: 'Yudingguanli',
          component: Yudingguanli
        },
        {
          path: 'jiesuan',
          name: 'Jiesuan',
          component: Jiesuan
        },
        {
          path: 'jiesuanguanli',
          name: 'Jiesuanguanli',
          component: Jiesuanguanli
        },
        {
          path: 'cheliangchaxun',
          name: 'Cheliangchaxun',
          component: Cheliangchaxun
        },
      ]
    },

  ]
})

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    Tab: {
      num: 0,
      tab: -1,
      Tab_t: [
        { tit: "首页", href: "/index/home", head: -1 },
        { tit: "车辆查询", href: "/index/cheliangchaxun", head: 6 }
      ],
      Tab_: [
        {
          tit: "会员管理",
          tits: [
            { tit: "会员注册", href: "/index/huiyuanzhuce", head: 0 },
            { tit: "会员查询", href: "/index/huiyuanchaxun", head: 1 }
          ]
        },
        {
          tit: "预订",
          tits: [
            { tit: "预订管理", href: "/index/yudingguanli", head: 2 },
            { tit: "受理预订", href: "/index/shouliyuding", head: 3 }
          ]
        },
        {
          tit: "费用结算",
          tits: [
            { tit: "结算管理", href: "/index/jiesuanguanli", head: 4 },
            { tit: "结算", href: "/index/jiesuan", head: 5 }
          ]
        }
      ]
    },
    tag: {
      name: [],
      light: -1,
      tag_: []
    }
  },
  mutations: {
    changetabnum(state, val) {
      state.Tab.num = val;
    },
    changetabtab(state, val) {
      state.Tab.tab = val;
    },
    changetagnum(state, val) {
      state.tag.num = val;
    },
    changetagtab(state, val) {
      state.tag.tab = val;
    },
    changetaglight(state, val) {
      state.tag.light = val;
    }

  }
})
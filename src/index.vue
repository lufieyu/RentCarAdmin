<template>
  <div id="index">
    <div class="header">
      <span>
        <router-link to="/">退出</router-link>
      </span>
      <div class="tou">
        <img src="./../static/img/touxianglogo@2x.png" alt />
      </div>
      <div class="head">
        <ul>
          <li @click="fn3" :class="{light:$store.state.tag.light==-1}">
            <router-link to="/index/home">首页</router-link>
          </li>
          <li
            v-for="(item,index) in $store.state.tag.tag_"
            :key="index"
            @click.self="fn2(index)"
            :class="{light:$store.state.tag.light==index}"
          >
            <router-link :to="item.url">
              {{item.name}}
              <span @click="del(index,$event)">×</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <section>
      <div class="left">
        <ul>
          <li>
            <router-link :to="$store.state.Tab.Tab_t[0].href">
              <h3
                @click="fn(0)"
                :class="{light:$store.state.Tab.num==0}"
              >{{$store.state.Tab.Tab_t[0].tit}}</h3>
              <span></span>
            </router-link>
          </li>
          <li v-for="(item,index) in $store.state.Tab.Tab_" :key="index">
            <h3 @click="fn(index+1)" :class="{light:$store.state.Tab.num==index+1}">
              {{item.tit}}
              <span></span>
            </h3>
            <ul>
              <li
                v-for="(items,ind) in item.tits"
                :key="ind"
                @click="fn_(ind)"
                :class="{light1:$store.state.Tab.tab==ind}"
              >
                <router-link :to="items.href">
                  {{items.tit}}
                  <span></span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="$store.state.Tab.Tab_t[1].href">
              <h3
                @click="fn(4)"
                :class="{light:$store.state.Tab.num==4}"
              >{{$store.state.Tab.Tab_t[1].tit}}</h3>
              <span></span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="txt">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Tab: {
      //   num: 0,
      //   tab: -1,
      //   Tab_t: [
      //     { tit: "首页", href: "/index/home", head: -1 },
      //     { tit: "车辆查询", href: "/index/cheliangchaxun", head: 6 }
      //   ],
      //   Tab_: [
      //     {
      //       tit: "会员管理",
      //       tits: [
      //         { tit: "会员注册", href: "/index/huiyuanzhuce", head: 0 },
      //         { tit: "会员查询", href: "/index/huiyuanchaxun", head: 1 }
      //       ]
      //     },
      //     {
      //       tit: "预订",
      //       tits: [
      //         { tit: "预订管理", href: "/index/yudingguanli", head: 2 },
      //         { tit: "受理预订", href: "/index/shouliyuding", head: 3 }
      //       ]
      //     },
      //     {
      //       tit: "费用结算",
      //       tits: [
      //         { tit: "结算管理", href: "/index/jiesuanguanli", head: 4 },
      //         { tit: "结算", href: "/index/jiesuan", head: 5 }
      //       ]
      //     }
      //   ]
      // },
      // tag: {
      //   name: [],
      //   light: -1,
      //   tag_: []
      // }
    };
  },
  mounted() {
    // this.$store.state.$router.go(0);
    console.log();
  },
  methods: {
    fn(ind) {
      // this.$store.state.Tab.num = ind;
      this.$store.commit("changetabnum", ind);
      this.$store.commit("changetabtab", -1);
      this.$store.commit("changetagnum", ind);
      this.$store.commit("changetagtab", -1);
      // this.$store.state.tag.num = ind;
      // this.$store.state.Tab.tab = -1;
      // this.$store.state.tag.tab = -1;
      if (this.$store.state.Tab.num == 4) {
        if (
          this.$store.state.tag.name.indexOf(
            this.$store.state.Tab.Tab_t[1].tit
          ) == -1
        ) {
          this.$store.state.tag.tag_.push({
            name: this.$store.state.Tab.Tab_t[1].tit,
            url: this.$store.state.Tab.Tab_t[1].href,
            num: this.$store.state.Tab.num,
            tab: this.$store.state.Tab.tab,
            head: this.$store.state.Tab.Tab_t[1].head
          });
          this.$store.state.tag.name.push(this.$store.state.Tab.Tab_t[1].tit);
        }
        this.$store.commit(
          "changetaglight",
          this.$store.state.Tab.Tab_t[1].head
        );
        console.log(
          this.$store.state.tag.light,
          this.$store.state.Tab.Tab_t[1].head
        );
      } else if (this.$store.state.Tab.num == 0) {
        this.$store.commit("changetaglight", -1);
      }
    },
    fn_(ind) {
      this.$store.commit("changetabtab", ind);
      this.$store.commit("changetagtab", ind);
      if (
        this.$store.state.tag.name.indexOf(
          this.$store.state.Tab.Tab_[this.$store.state.Tab.num - 1].tits[ind]
            .tit
        ) == -1
      ) {
        this.$store.state.tag.tag_.push({
          name: this.$store.state.Tab.Tab_[this.$store.state.Tab.num - 1].tits[
            ind
          ].tit,
          url: this.$store.state.Tab.Tab_[this.$store.state.Tab.num - 1].tits[
            ind
          ].href,
          num: this.$store.state.Tab.num,
          tab: this.$store.state.Tab.tab,
          head: this.$store.state.Tab.Tab_[this.$store.state.Tab.num - 1].tits[
            ind
          ].head
        });
        this.$store.state.tag.name.push(
          this.$store.state.Tab.Tab_[this.$store.state.Tab.num - 1].tits[ind]
            .tit
        );
      }
      this.$store.commit(
        "changetaglight",
        this.$store.state.Tab.Tab_[this.$store.state.Tab.num - 1].tits[ind].head
      );
    },
    fn2(i) {
      this.$store.commit("changetabnum", this.$store.state.tag.tag_[i].num);
      this.$store.commit("changetabtab", this.$store.state.tag.tag_[i].tab);
      this.$store.commit("changetaglight", i);
    },
    fn3() {
      this.$store.commit("changetabnum", 0);
      this.$store.commit("changetabtab", -1);
      this.$store.commit("changetaglight", -1);
    },
    del(i, e) {
      console.log(e);
      e = e || event;
      e.stopPropagation();
      e.CancelBubble = true;
        console.log(this.$store.state.tag.tag_[i].head,this.$store.state.tag.tag_.length-1);
      if (this.$store.state.tag.tag_.length == 1) {
        console.log(1);
      this.$store.commit("changetaglight", -1);
          this.$store.commit("changetabtab", -1);
      this.$store.commit("changetabnum", 0);
        setTimeout(() => {
          this.$router.push("/index/home");
        }, 30);
      } else {
        if (this.$store.state.tag.light == this.$store.state.tag.tag_[i].head) {
      this.$store.commit("changetabnum", this.$store.state.tag.tag_[i+1].num);
      this.$store.commit("changetabtab", this.$store.state.tag.tag_[i+1].tab);
      this.$store.commit("changetaglight", this.$store.state.tag.tag_[i+1].head);
        }else if(this.$store.state.tag.tag_[i].head==this.$store.state.tag.tag_.length-1){
          this.$store.commit("changetabnum", this.$store.state.tag.tag_[i-1].num);
      this.$store.commit("changetabtab", this.$store.state.tag.tag_[i-1].tab);
      this.$store.commit("changetaglight", this.$store.state.tag.tag_[i-1].head);
        }
      }
      this.$store.state.tag.tag_.splice(i, 1);
      this.$store.state.tag.name.splice(i, 1);
    }
  },
  components: {},
  computed: {
  }
};
</script>

<style scoped lang='less'>
#index {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 100px;
    // overflow: hidden;
    position: relative;
    span {
      float: right;
      margin-right: 24px;
      font-size: 20px;
      line-height: 100px;
      cursor: pointer;
      color: #333;
      text-decoration: none;
    }
    .tou {
      margin-top: 12px;
      float: right;
      margin-right: 12px;
      width: 76px;
      height: 76px;
      background: #ccc;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .head {
      position: absolute;
      top: 104px;
      left: 225px;
      width: 1186px;
      height: 50px;
      background: rgba(204, 204, 204, 0.6);
      ul {
        overflow: hidden;
        li {
          float: left;
          margin-top: 8px;
          margin-left: 15px;
          width: 123px;
          height: 31px;
          border: 2px solid #fc0;
          border-radius: 5px;
          &:not(:first-child) {
            text-indent: 20px;
          }
          &:first-child {
            text-align: center;
          }
          line-height: 31px;
          cursor: pointer;
          &.light {
            background: #fc0;
            color: #fff;
            span {
              background: #fff;
            }
          }
          a {
            text-decoration: none;
            display: block;
            width: 100%;
            height: 100%;
            color: #333;
            position: relative;
            span {
              text-indent: 0;
              text-align: center;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: -15px;
              width: 15px;
              height: 15px;
              line-height: 13px;
              border-radius: 50%;
              display: inline-block;
              background: rgba(255, 255, 255, 0.5);
              font-size: 12px;
              color: #333;
            }
          }
        }
      }
    }
  }
  section {
    width: 100%;
    height: calc(100% - 100px);
    .txt {
      width: calc(100% - 177px);
      height: calc(100% - 150px);
      margin-top: 50px;
      float: left;
    }
    .left {
      width: 177px;
      height: 100%;
      background: rgba(255, 255, 255, 0.8);
      float: left;
      & > ul {
        padding-top: 50px;
        text-indent: 30px;
        & > li {
          line-height: 65px;
          margin-top: 6px;
          a {
            color: #333;
            text-decoration: none;
            cursor: pointer;
          }
          span {
            float: right;
            margin-right: 10px;
            font-size: 16px;
          }
          h3 {
            font-size: 20px;
            cursor: pointer;
            &.light {
              background: #fc0;
              // span {
              // transform: rotateZ(90deg);
              // }
              & + ul {
                display: block;
                li {
                  margin-top: 6px;
                  &.light1 {
                    background: #888;
                  }
                  a {
                    color: #333;
                    text-decoration: none;
                    display: block;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
          ul {
            font-size: 16px;
            font-weight: bold;
            display: none;
            li {
              padding-left: 30px;
              height: 65px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>

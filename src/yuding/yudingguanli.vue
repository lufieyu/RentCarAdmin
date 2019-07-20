<template>
  <div id="guanli">
    <div class="box">
      <div class="chaxun">
        <input type="text" />
        <button>查询</button>
      </div>
      <div class="table">
        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>
              <input type="checkbox" />
              <span>客户姓名</span>
            </th>
            <th>电话号码</th>
            <th>租赁方式</th>
            <th>车型</th>
            <th>证件类型</th>
            <th>证件号码</th>
            <th>取车时间</th>
            <th>操作</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-for="(item,index) in guanli" :key="index">
            <td>
              <input type="checkbox" />
              <span v-text="item.name"></span>
            </td>
            <td v-text="item.phone"></td>
            <td v-text="item.zuping"></td>
            <td v-text="item.chexing"></td>
            <td v-text="item.zj"></td>
            <td v-text="item.zjh"></td>
            <td v-text="item.time"></td>
            <td>
              <div>
                <img src='./../../static/img/shouli.png' />
                <span style="color:#0a82e1">受理</span>
              </div>
              <div>
                <img src='./../../static/img/shanchu.png' />
                <span style="color:#cc0000" @click="deldata(index)">删除</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      guanli: [
        {
          name: "sdfg",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "str",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "gjgh长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱khg长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱gjh长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
        {
          name: "邱士长",
          phone: 17621322007,
          zuping: "国内租",
          chexing: "经济型",
          zj: "身份证",
          zjh: 411300167803194414,
          time: "2019-05-01"
        },
      ]
    };
  },
  methods: {
    deldata(ind){
      console.log(ind)
        // let len=this.guanli.length-ind+2;
        this.guanli.splice(ind,1);
        
    }
  },
  components: {},
 
};
</script>

<style scoped lang='less'>
#guanli {
  width: 100%;
  height: 100%;
  .box {
    margin-top: 50px;
    margin-left: 50px;
    width: 1182px;
    height: 720px;
    background: rgba(255, 255, 255, 0.85);
    .chaxun {
      padding-left: 24px;
      padding-top: 26px;
      margin-bottom: 34px;
      input {
        border: 2px solid #ccc;
        width: 260px;
        height: 38px;
        font-size: 16px;
        text-indent: 15px;
        outline: none;
      }
      button {
        margin-left: 118px;
        width: 156px;
        height: 40px;
        border: none;
        outline: none;
        background: #fc0;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
      }
    }
    .table {
      position: relative;
      width: 1141px;
      max-height:554px;
      display: flex;
      margin-left: 12px;
      overflow-y: auto;
      overflow-x: hidden;
      border: 3px solid #e2e3e3;
      &::-webkit-scrollbar {
        display: none;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      table {
        width: 100%;
        height: 100%;
        text-align: center;
        tr {
          color: #fff;
          font-size: 20px;
          &:nth-child(2n) {
            background: #eceded;
          }
          &:nth-child(2n + 1) {
            background: #fff;
          }
          &:nth-child(n + 1) {
            height: 42px;
            line-height: 42px;
          }
          &:first-child {
            height: 47px;
            line-height: 47px;
            background: #0099ff;
            position: fixed;
            // th {
            //   margin-left: 3px;
            // }
          }
          &:nth-child(2) {
            height: 47px;
            line-height: 47px;
          }
          th {
            font-weight: normal;
            border-left: 3px solid #e2e3e3;
            font-size: 20px;
            &:nth-child(1) {
              border: none;
              width: 136px;
              span {
                display: block;
                float: right;
                width: 80px;
                margin-right: 10px;
              }
            }
            &:nth-child(2) {
              width: 136px;
            }
            &:nth-child(3) {
              width: 112px;
            }
            &:nth-child(4) {
              width: 76px;
            }
            &:nth-child(5) {
              width: 122px;
            }
            &:nth-child(6) {
              width: 210px;
            }
            &:nth-child(7) {
              width: 142px;
            }
            &:nth-child(8) {
              width: 186px;
            }
          }
          td {
            font-size: 18px;
            color: #666;
            border-left: 3px solid #e2e3e3;
            &:nth-child(1) {
              border: none;
              width: 136px;
              span {
                display: block;
                float: right;
                width: 80px;
                margin-right: 10px;
              }
            }
            &:nth-child(2) {
              width: 136px;
            }
            &:nth-child(3) {
              width: 114px;
            }
            &:nth-child(4) {
              width: 76px;
            }
            &:nth-child(5) {
              width: 122px;
            }
            &:nth-child(6) {
              width: 210px;
            }
            &:nth-child(7) {
              width: 142px;
            }
            &:last-child{
              overflow: hidden;
              div{
                float: left;
                margin-left: 20px;
        cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
@media all and (min-width: 681px) and (max-width: 1366px) {
  .box {
    width: 97% !important;
    height: 446px !important;
  }
  .table {
    width: 96% !important;
    max-height: 300px !important;
  }
  #guanli .box .table table tr td:last-child div[data-v-c2d07204] {
    margin-left: 5px !important;
  }
  #guanli .box .table table tr th[data-v-c2d07204]:nth-child(8) {
    width: 125px !important;
  }
  #guanli .box .table table tr th[data-v-c2d07204]:nth-child(3) {
    width: 114px !important;
  }
}

</style>

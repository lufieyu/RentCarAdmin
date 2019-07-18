<template>
  <div id="chaxun">
    <div class="top">
      <div class="t_left">
        <h3>会员信息</h3>
        <p>
          <span>姓名</span>
          <span>张顺顺</span>
        </p>
        <p>
          <span>账户</span>
          <span>123456789</span>
        </p>
        <p>
          <span>手机号</span>
          <span>123456789</span>
        </p>
        <p>
          <span>邮箱</span>
          <span>2134567@qq.com</span>
        </p>
        <p>
          <span>证件号</span>
          <span>123456789765432</span>
        </p>
        <span>编辑</span>
      </div>
      <div class="t_right">
        <h3>账户信息</h3>
        <div>
          <p>
            平驾币
            <span>800</span>
          </p>
          <p>
            积分
            <span>800</span>
          </p>
        </div>
        <button>去充值</button>
      </div>
    </div>
    <div class="bottom">
      <h3>消费记录</h3>
      <div class="table">
        <table cellspacing="0" cellpadding="0">
          <tr>
            <th>时间</th>
            <th>车型</th>
            <th>租赁方式</th>
            <th>状态</th>
            <th>支付金额</th>
            <th>充值平驾币</th>
            <th>积分</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-for="(item,index) in xiaofei" :key="index">
            <td v-text="item.time"></td>
            <td v-text="item.chexing"></td>
            <td v-text="item.zuping"></td>
            <td v-text="item.zt"></td>
            <td v-text="item.zhifu"></td>
            <td v-text="item.chongzhi"></td>
            <td v-text="item.jifen"></td>
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
      name: "张顺顺",
      zhanghu: "",
      phone: "",
      email: "",
      xiaofei: [
        {
          time: "2019-01-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        {
          time: "2019-05-01",
          chexing: "豫A 12365",
          zuping: "国内租",
          zt: "预订",
          zhifu: 500,
          chongzhi: 1000,
          jifen: 1000
        },
        
      ]
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
#chaxun {
  width: 100%;
  height: 100%;
  .top {
    margin-left: 50px;
    margin-top: 50px;
    width: 1186px;
    height: 250px;
    .t_left {
      width: 590px;
      height: 100%;
      border-right: 1px solid #ccc;
      background: rgba(255, 255, 255, 0.85);
      position: relative;
      float: left;
      h3 {
        padding-top: 12px;
        font-size: 24px;
        color: #333;
        text-align: center;
        margin-bottom: 24px;
      }
      p {
        font-size: 18px;
        color: #333;
        margin-bottom: 12px;
        span {
          display: inline-block;
          &:nth-child(1) {
            width: 110px;
            margin-right: 28px;
            text-align: right;
          }
        }
      }
      & > span {
        position: absolute;
        font-size: 18px;
        top: 138px;
        left: 352px;
        color: #09f;
        cursor: pointer;
      }
    }
    .t_right {
      float: left;
      width: 595px;
      height: 100%;
      background: rgba(255, 255, 255, 0.85);
      h3 {
        padding-top: 12px;
        font-size: 24px;
        color: #333;
        text-align: center;
        margin-bottom: 30px;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 26px;
        p {
          text-indent: 50px;
        }
      }
      button {
        width: 219px;
        height: 57px;
        outline: none;
        border: none;
        border-radius: 5px;
        background: #fc0;
        margin-left: 200px;
        margin-top: 50px;
        color: #fff;
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
  .bottom {
    margin-left: 50px;
    margin-top: 50px;
    width: 1186px;
    height: 390px;
    background: rgba(255, 255, 255, 0.85);
    h3 {
      font-size: 24px;
      padding-top: 10px;
      padding-left: 30px;
      margin-bottom: 15px;
    }
    .table {
      position: relative;
      width: 1117px;
      max-height: 300px;
      display: flex;
      overflow-y: auto; 
      overflow-x: hidden;
        border: 3px solid #e2e3e3;
        margin-left: 17px;
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
          }
          &:nth-child(2) {
            height: 47px;
            line-height: 47px;
          }
          th {
            border-left: 3px solid #e2e3e3;
            &:nth-child(1) {
              border: none;
              width: 178px;
            }
            &:nth-child(2) {
              width: 153px;
            }
            &:nth-child(3) {
              width: 147px;
            }
            &:nth-child(4) {
              width: 141px;
            }
            &:nth-child(5) {
              width: 176px;
            }
            &:nth-child(6) {
              width: 162px;
            }
            &:nth-child(7) {
              width: 142px;
            }
          }
          td {
            border-left: 3px solid #e2e3e3;

            &:nth-child(1) {
              border: none;
              width: 178px;
            }
            &:nth-child(2) {
              width: 153px;
            }
            &:nth-child(3) {
              width: 147px;
            }
            &:nth-child(4) {
              width: 141px;
            }
            &:nth-child(5) {
              width: 176px;
            }
            &:nth-child(6) {
              width: 162px;
            }
            // &:nth-child(7) {
            //   width: 142px;
            // }
          }
        }
      }
    }
  }
}
</style>

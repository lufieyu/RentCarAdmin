<template>
  <div id="chaxun">
    <div class="chaxun">
      <div class="c_left">
        <ul>
          <li v-for="(item,index) in chepai" :key="index" v-text="item"></li>
        </ul>
      </div>
      <div class="c_right">
        <div class="c_cha">
          <span>车牌号</span>
          <input type="text" name="carPlate" v-model="$store.state.cheliang.chepaihao" />
          <button @click="fn">查询</button>
        </div>
        <div class="c_xinxi">
          <h3>车辆信息</h3>
          <ul>
            <li>
              <span>车辆品牌/名称</span>
              <span>雪佛兰BH7141MY</span>
            </li>
            <li>
              <span>车辆识别代码</span>
              <span>SGFHJNBDGDFGHKNNBB</span>
            </li>
            <li>
              <span>车牌号</span>
              <span>豫A 88888</span>
            </li>
            <li>
              <span>发动机号码</span>
              <span>LE5</span>
            </li>
            <li>
              <span>核载人数</span>
              <span>5人</span>
            </li>
            <li>
              <span>外廊尺寸(mm)</span>
              <span>4673*1868*1756</span>
            </li>
          </ul>
          <img src="./../../static/img/yua88888.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chepai: [
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345",
        "豫A 12345"
      ]
    };
  },
  methods: {
    fn() {
      console.log(this.chaxun);
      this.$axios
        .get(
          this.$store.state.IP+"/cartrade/findCarPlate?carPlate=" +
            this.$store.state.cheliang.chepaihao
        )
        .then((res) => {
          console.log(res);
          this.$store.commit(
            "changechpaixinxi",
            this.$store.state.cheliang.xinxi
          );
        });
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
#chaxun {
  width: 100%;
  height: 100%;
  .chaxun {
    margin-top: 50px;
    margin-left: 50px;
    width: 1186px;
    height: 675px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid transparent;
    overflow: hidden;
    .c_left {
      margin-top: 24px;
      margin-left: 24px;
      width: 186px;
      max-height: 628px;
      border: 2px solid #0099ff;
      overflow-y: auto;
      float: left;
      &::-webkit-scrollbar {
        display: none;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      ul {
        width: 100%;
        li {
          width: 100%;
          height: 35px;
          color: #333;
          font-size: 16px;
          text-align: center;
          line-height: 35px;
          &:nth-child(2n) {
            background: #fff;
          }
          &:nth-child(2n + 1) {
            background: #f3f2f2;
          }
        }
      }
    }
    .c_right {
      margin-left: 50px;
      float: left;
      margin-top: 60px;
      .c_cha {
        span {
          font-size: 24px;
          color: #333;
          line-height: 40px;
        }
        input {
          margin-left: 20px;
          width: 262px;
          height: 40px;
          background: transparent;
          border: 1px solid #ccc;
          outline: none;
          font-size: 20px;
          color: #333;
          text-indent: 15px;
        }
        button {
          margin-left: 120px;
          width: 156px;
          height: 40px;
          border: none;
          border-radius: 5px;
          outline: none;
          background: #fc0;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
        }
      }
      .c_xinxi {
        margin-top: 50px;
        border: 3px solid #09f;
        width: 886px;
        height: 490px;
        h3 {
          text-align: center;
          margin-top: 10px;
          margin-bottom: 38px;
        }
        ul {
          overflow: hidden;
          width: 100%;
          margin-bottom: 20px;
          li {
            float: left;
            width: 49%;
            margin-bottom: 36px;
            font-size: 16px;
            color: #333;
            &:nth-child(2n + 1) {
              span {
                &:nth-child(1) {
                  margin-left: 32px;
                }
              }
            }
            span {
              &:nth-child(1) {
                display: inline-block;
                width: 168px;
              }
            }
          }
        }
        img {
          display: block;
          width: 414px;
          height: 224px;
          margin: 0 auto;
        }
      }
    }
  }
}
@media all and (min-width: 681px) and (max-width: 1366px) {
  .chaxun {
    width: 96% !important;
    height: 445px !important;
  }
  .c_left {
    width: 155px !important;
    max-height: 410px !important;
  }
  .c_right {
    width: 81% !important;
    margin-left: 20px !important;
    margin-top: 20px !important;
  }
  .c_cha {
    line-height: 30px !important;
    span {
      font-size: 20px !important;
    }
    input {
      height: 30px !important;
    }
    button {
      height: 30px !important;
      font-size: 20px !important;
      width: 135px !important;
    }
  }
  .c_xinxi {
    margin-top: 30px !important;
    height: 340px !important;
    h3 {
      margin-bottom: 20px !important;
    }
    img {
      width: 310px !important;
      height: 138px !important;
    }
  }
  .c_xinxi ul li {
    margin-bottom: 20px !important;
  }
}
</style>

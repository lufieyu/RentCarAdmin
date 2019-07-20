<template>
  <div id="home">
    <div class="chaxun">
      <input type="text" placeholder="请输入手机号" />
      <button>查询</button>
      <router-link to='/index/huiyuanzhuce'><button>注册</button></router-link>
      <router-link to='/index/yudingguanli'><button>预约查询</button></router-link>
    </div>
    <div class="chaxun">
      <input type="text" placeholder="请输入车牌号" />
      <button>查询</button>
      <router-link to='/index/huiyuanzhuce'><button>登记</button></router-link>
      <router-link to='/index/yudingguanli'><button>违章查询</button></router-link>
    </div>
    <div class="mingxi">
      <div id="main"></div>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
export default {
  data() {
    return {
      chaxun1: "",
      chaxun2: ""
    };
  },
  mounted() {
    this.mychart();
  },
  methods: {
    mychart() {
      var myChart = echarts.init(document.getElementById("main"));
      var option = {
        xAxis: {
          type: "category",
          data: ["宝马", "奔驰", "奥迪", "法拉利", "玛莎拉蒂", "宾利"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [4, 15, 5, 13, 4, 15],
            type: "line",
            smooth: true
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
#home {
  width: 100%;
  height: 100%;
  .chaxun {
    margin-top: 50px;
    margin-left: 50px;
    width: 1045px;
    height: 44px;
    padding: 38px 68px;
    background: #fff;
    input {
      width: 356px;
      height: 100%;
      outline: none;
      text-indent: 20px;
      font-size: 18px;
    }
    input::-webkit-input-placeholder {
      color: #dcdcdc;
    }
    button {
      margin-left: 60px;
      &:nth-child(2) {
        margin-left: 54px;
      }
      width: 161px;
      height: 100%;
      background: #fc0;
      font-size: 20px;
      color: #fff;
      border: none;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      a{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
      }
    }
  }
  .mingxi {
    margin-top: 50px;
    margin-left: 50px;
    width: 1181px;
    height: 334px;
    background: #fff;
    #main {
      width: 100%;
      height: 100%;
    }
  }
}
@media all and (min-width: 681px) and (max-width: 1366px) {
 #home{
   width: 100% !important;
 }
 .chaxun{
   width: 1111px !important;
   padding:20px !important;
   margin-top:20px !important;
   &:first-child{
   margin-top:40px !important;
   }
 }
 .chaxun1{
    margin-top:40px !important;
 }
 .mingxi{
    width: 1111px !important;
    margin-top:20px !important;
    height: 257px !important;
    #main {
      width: 100%;
      height: 100%;
    }
 }
}

</style>

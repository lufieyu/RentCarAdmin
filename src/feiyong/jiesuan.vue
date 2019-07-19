<template>
  <div id="jiesuan">
    <div class="jiesuan">
      <ul class="j_top">
        <li>
          <span>取车时间</span>
          <span>2019-07-25 14:30</span>
        </li>
        <li>
          <span>车辆品牌/名称</span>
          <span>雪佛兰HB7141MY</span>
        </li>
        <li>
          <span>车辆识别码</span>
          <span>SGFHJNBDGDFGHKNNBB</span>
        </li>
        <li>
          <span>还车时间</span>
          <span>2019-08-02 16:30</span>
        </li>
        <li>
          <span>车牌号</span>
          <span>豫A 88888</span>
        </li>
        <li>
          <span>核载人数</span>
          <span>5人</span>
        </li>
      </ul>
      <ul class="j_bottom">
        <li>
          <span>基础服务费<span>(元)</span></span>
          <span>100</span>
        </li>
        <li>
          <span>车辆整备费<span>(元)</span></span>
          <span>20</span>
        </li>
        <li>
          <span>车辆租凭及服务费<span>(元)</span></span>
          <span>300</span>
        </li>
        <li>
          <span>尊享服务费<span>(元)</span></span>
          <span>100</span>
        </li>
        <li>
          <span>维修损失费<span>(元)</span></span>
          <span>1000</span>
        </li>
        <li>
          <span>合计<span>(元)</span></span>
          <span>1520</span>
        </li>
      </ul>
      <button>结算</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
#jiesuan {
  width: 100%;
  height: 100%;
  .jiesuan {
    margin-top: 50px;
    margin-left: 50px;
    width: 1182px;
    height: 685px;
    background: rgba(255, 255, 255, 0.85);
    position: relative;
    .j_top{
      width: calc(100%-30px);
      height: 200px;
      border-bottom: 3px solid #09f;
      padding-left: 32px;
      overflow: hidden;
      li{
        float: left;
        width: 33%;
        line-height: 100px;
        height: 100px;
        span{
          color: #333;
          &:nth-child(1){
            font-size: 20px;
            display: inline-block;
            width: 150px;
            font-weight: bold;
          }
          &:nth-child(2){
            font-size: 16px;
          }
        }
      }
    }
    .j_bottom{
      width: 80%;
      padding-left: 32px;
      overflow: hidden;
      margin-top: 82px;
      li{
        float: left;
        width: 33%;
        margin-bottom: 79px;
          color: #333;
        &>span{
            font-size: 20px;
          font-weight: bold;
          margin-right: 22px;
          span{
          font-weight: normal;
            font-size: 16px;
            margin-left: 10px;
          }
        }
      }
    }
    button{
      width: 206px;
      height: 50px;
      border: none;
      border-radius: 5px;
      background: #fc0;
      color: #fff;
      font-size: 24px;
      position: absolute;
      bottom: 95px;
      left: 50%;
      transform: translateX(-50%);
      outline: none;
        cursor: pointer;
    }
  }
}
</style>

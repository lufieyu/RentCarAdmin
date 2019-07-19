<template>
  <div id="zhuce">
    <div class="zhuce">
      <ul>
        <li>
          <span>姓名:</span>
          <input type="text">
        </li>
        <li>
          <span>手机号:</span>
          <input type="text">
        </li>
        <li>
          <span>城市:</span>
          <input type="text">
        </li>
        <li>
          <span>验证码:</span>
          <input type="text">
        </li>
        <li>
          <span>身份证号:</span>
          <input type="text">
        </li>
        <li>
          <span>驾驶证有效期:</span>
          <input type="text">
        </li>
        <li>
          <span>邮箱:</span>
          <input type="text">
        </li>
      </ul>
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
#zhuce{
  width: 100%;
  height: 100%;
  .zhuce{
    position: relative;
    margin-top: 50px;
    margin-left: 50px;
    width: 1186px;
    height: 685px;
    background: rgba(255, 255, 255, .85);
    ul{
      overflow: hidden;
      padding-top: 122px;
      width: 100%;
      li{
        width: 50%;
        float: left;
        margin-bottom: 54px;
        span{
          display: inline-block;
          padding-left: 77px;
          height: 40px;
          line-height: 40px;
          width: 100px;
          font-size: 16px;
          color: #666;
        }
        input{
          width: 300px;
          height: 38px;
          border: 1px solid #bbb;
          outline: none;
          background: transparent;
          font-size: 16px;
        }
      }
    }
    button{
      position: absolute;
      left: 474px;
      bottom: 72px;
      width: 229px;
      height: 65px;
      border-radius: 5px;
      border:none;
      outline: none;
      background: #fc0;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>

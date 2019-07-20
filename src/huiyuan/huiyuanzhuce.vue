<template>
  <div id="zhuce">
    <div class="zhuce">
      <ul>
        <li>
          <span>姓名:</span>
          <input type="text" v-model='name'>
        </li>
        <li>
          <span>手机号:</span>
          <input type="text" v-model='phone'>
        </li>
        <li>
          <span>城市:</span>
          <input type="text" v-model='citay'>
        </li>
        <li>
          <span>验证码:</span>
          <input type="text" v-model='yanzheng'>
        </li>
        <li>
          <span>身份证号:</span>
          <input type="text" v-model='shenfen'>
        </li>
        <li>
          <span>驾驶证有效期:</span>
          <input type="text" v-model='jiazhao'>
        </li>
        <li>
          <span>邮箱:</span>
          <input type="text" v-model='emial'>
        </li>
      </ul>
      <el-button
    plain
    @click="open">
    成功
  </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      phone:'',
      citay:'',
      yanzheng:'',
      shenfen:'',
      jiazhao:'',
      emial:'',
    }
  },
  methods: {
    fn(a, b, c) {
      let aa = document.getElementsByClassName(a)[0];
      aa.setAttribute("placeholder", b);
      aa.setAttribute("class", a + " input_light");
      setTimeout(() => {
        aa.setAttribute("placeholder", c);
        aa.setAttribute("class", a);
        this.lock = true;
      }, 1000);
      return;
    },
open() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

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
          &.input_light::-webkit-input-placeholder {
          color: red;
        }
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
@media all and (min-width: 681px) and (max-width: 1366px) {
  .zhuce{
    height:83% !important;
  }
  .zhuce ul{
    padding-top:20px !important;
  }
  .zhuce ul li{
    width: 45% !important;
    margin-bottom:45px !important;
    input{
      width: 250px !important;
    }
  }
  .zhuce button{
    bottom:33px !important;
    height: 45px !important;
    left:37% !important;
    width: 220px !important;
    font-size: 20px !important;
  }
}

</style>

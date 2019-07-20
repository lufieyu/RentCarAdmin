<template>
  <div id="denglu">
    <div class="denglu_in" v-if="tab">
      <form name="login">
        <div class="in_title">
          <h3>用户登录</h3>
          <h3 @click="tab=false">立即注册</h3>
        </div>
        <div class="in_input">
          <input
            name="admin"
            @keydown.enter="denglu_btn"
            class="text"
            v-model="text"
            type="text"
            placeholder="请输入账户名"
          />
          <input
            name="password"
            @keydown.enter="denglu_btn"
            class="password"
            v-model="password"
            type="password"
            placeholder="请输入密码"
          />
        </div>
        <div class="in_check">
          <input type="checkBox" />
          <span>记住密码</span>
          <span>忘记密码</span>
        </div>
        <div class="in_btn">
          <button @click.prevent="denglu_btn">登录</button>
        </div>
      </form>
    </div>
    <div class="denglu_ins" v-if="!tab">
      <div class="denglu_ins_in">
        <form name="register">
          <div class="ins_title">
            <h3 @click="tab=true">用户登录</h3>
            <h3>立即注册</h3>
          </div>
          <div class="ins_input">
            <input name="admin" class="text" v-model="text1" type="text" placeholder="请输入账户名" />
            <input
              name="password"
              class="password"
              v-model="password1"
              type="password"
              placeholder="请输入密码"
            />
            <input class="password" v-model="password2" type="password" placeholder="请确认密码" />
          </div>
          <div class="ins_btn">
            <button @click.prevent="res">立即注册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: true,
      lock: true,
      text: "",
      password: "",
      text1: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
    denglu_btn() {
      if (this.lock == true) {
        this.lock = false;
        if (this.text == "") {
          this.fn("text", "账户名不能为空", "请输入账户名");
        } else if (this.text !== "admin") {
          this.text = "";
          this.fn("text", "账户名不存在", "请输入账户名");
        } else if (this.password == "") {
          this.fn("password", "密码不能为空", "请输入密码");
        } else {
          console.log("登录成功");
          this.lock = true;
          this.$axios
            .post(
              "http://172.25.1.82:8080/admin/findAll?admin=" +
                this.text +
                "&password=" +
                this.password
            )
            .then(res => {
              console.log(res);
            })
            .then(err => {
              console.log(err);
            });
          this.$router.push("/index/home");
        }
      }
    },
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
    res() {
      if (this.lock == true) {
        this.lock = false;
        if (this.text1 == "") {
          this.fn("text1", "账户名不能为空", "请输入账户名");
        } else if (this.text1 == "") {
          this.fn(
            "text1",
            "请输入6-12位字母和数字组成的账户名",
            "请输入账户名"
          );
        } else {
          console.log("注册成功");
          this.lock = true;
          this.$axios
            .get(
              "http://172.25.1.82:8080/admin/save?admin=" +
                this.text1 +
                "&password=" +
                this.password1
            )
            .then(function(res) {
              console.log(res);
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      }
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
#denglu {
  position: absolute;
  top: 182px;
  left: 50%;
  transform: translateX(-50%);
  width: 442px;
  height: 546px;
  background: url("./../static/img/denglu_bg.png") no-repeat;
  background-size: 100% 100%;
  .denglu_in {
    width: 100%;
    height: 100%;
    background: url("./../static/img/denglu_bg1.png") no-repeat;
    background-size: 100% 100%;
    .in_title {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: space-around;
      h3 {
        height: 90px;
        font-size: 30px;
        line-height: 90px;
        &:first-child {
          color: #fff;
        }
        &:last-child {
          color: #666;
          cursor: pointer;
        }
      }
    }
    .in_input {
      width: 294px;
      margin: 0 auto;
      padding-top: 50px;
      input {
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 10px;
        text-indent: 60px;
        outline: none;
        &:nth-child(1) {
          margin-bottom: 52px;
          background: #fff url("./../static/img/yonghu.png") no-repeat 12px 12px;
          background-size: 25px 30px;
        }
        &:nth-child(2) {
          margin-bottom: 48px;
          background: #fff url("./../static/img/mima.png") no-repeat 12px 12px;
          background-size: 25px 30px;
        }
        &.input_light::-webkit-input-placeholder {
          color: red;
        }
      }
    }
    .in_check {
      width: 294px;
      margin: 0 auto;
      font-size: 12px;
      color: #fff;
      overflow: hidden;
      padding-left: 10px;
      span {
        &:last-child {
          float: right;
          margin-right: 10px;
        }
      }
    }
    .in_btn {
      width: 294px;
      margin: 0 auto;
      button {
        margin-top: 6px;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background: #ffcc00;
        font-size: 26px;
        color: #fff;
        text-indent: 20px;
        outline: none;
        letter-spacing: 20px;
        cursor: pointer;
      }
    }
  }
  .denglu_ins {
    width: 100%;
    height: 100%;
    background: url("./../static/img/denglu_bg1.png") no-repeat;
    transform: rotateY(180deg);
    background-size: 100% 100%;
    .denglu_ins_in {
      transform: rotateY(180deg);
      .ins_title {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: space-around;
        h3 {
          height: 90px;
          font-size: 30px;
          line-height: 90px;
          &:first-child {
            color: #666;
            cursor: pointer;
          }
          &:last-child {
            color: #fff;
          }
        }
      }
      .ins_input {
        width: 294px;
        margin: 0 auto;
        padding-top: 50px;
        input {
          width: 100%;
          height: 50px;
          border: none;
          border-radius: 10px;
          text-indent: 60px;
          outline: none;
          &:nth-child(1) {
            margin-bottom: 52px;
            background: #fff url("./../static/img/yonghu.png") no-repeat 12px
              12px;
            background-size: 25px 30px;
          }
          &:nth-child(2) {
            margin-bottom: 48px;
            background: #fff url("./../static/img/mima.png") no-repeat 12px 12px;
            background-size: 25px 30px;
          }
          &:nth-child(3) {
            margin-bottom: 48px;
            background: #fff url("./../static/img/mima.png") no-repeat 12px 12px;
            background-size: 25px 30px;
          }
          &.input_light::-webkit-input-placeholder {
            color: red;
          }
        }
      }
      .ins_check {
        width: 294px;
        margin: 0 auto;
        font-size: 12px;
        color: #fff;
        overflow: hidden;
        padding-left: 10px;
        span {
          &:last-child {
            float: right;
            margin-right: 10px;
          }
        }
      }
      .ins_btn {
        width: 294px;
        margin: 0 auto;
        button {
          margin-top: 6px;
          width: 100%;
          height: 50px;
          border-radius: 10px;
          border: none;
          background: #ffcc00;
          font-size: 26px;
          color: #fff;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
}
@media all and (min-width: 681px) and (max-width: 1366px) {
  #denglu {
    width: 30%;
    height: 60%;
    overflow: hidden;
  }
  .in_title,
  .ins_title {
    height: 60px !important;
    line-height: 60px !important;
  }
  h3 {
    font-size: 25px !important;
    height: 60px !important;
    line-height: 60px !important;
  }
  .in_input,
  .ins_input {
    padding-top: 20px !important;
  }
  .text,
  .password {
    margin-bottom: 30px !important;
  }
  .in_btn button {
    font-size: 20px !important;
  }
  .ins_btn button {
    font-size: 20px !important;
  }
}
</style>

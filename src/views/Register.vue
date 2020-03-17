<template>
  <div class="register">
    <!-- header -->
    <div class="register-header">
      <Header content1="已有账号?" content2="马上登录>" to="/login"></Header>
    </div>

    <!-- 注册 -->
    <div class="register-content">
      <div class="w1180">
        <h3>注册账号</h3>
        <div class="register-form">
          <div class="phone">
            <input type="text" v-model="phoneNum" @blur="blurInput" @focus="focusInput" placeholder="请输入手机号码" />
            <img v-show="isOk" src="../assets/register/yes.png" />
            <div class="err" v-show="isError">
              <img src="../assets/register/err.png" />
              <span>手机号格式错误，请重新输入</span>
            </div>
          </div>
          <div class="getInfo">
            <input type="text" placeholder="请输入短信验证码" />
            <button @click="clickGetInfo">获取短信验证码</button>
          </div>
          <div class="immediately-register">立即注册</div>
          <div class="consent-register">
            注册表示同意
            <span>《网站注册协议》</span>
          </div>
          <Wechat></Wechat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Wechat from "../components/Wechat";
export default {
  components: {
    Header,
    Wechat
  },
  data() {
    return {
      // 输入错误
      isError: false,
      // 显示对号
      isOk: false,
      // 输入框内容
      phoneNum: ""
    }
  },
  methods: {
    // 输入框失去焦点 
    blurInput() {
      let reg = /^1[3-9]\d{9}$/;
      if (!reg.test(this.phoneNum)) {
        this.isError = true;
        this.isOk = false;
        return;
      }
      this.isOk = true;
    },
    // 输入框获取焦点
    focusInput() {
      this.isError = false;
    },
    // 点击获取验证码
    clickGetInfo() {
      if (!this.isOk) {
        return;
      }
      // 发送验证码(暂未开通)
      // this.$Message.warning({
      //     duration: 2,
      //     background: true,
      //     content: "暂未开通"
      // });
    }
  },
    // // 组件内的守卫
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("setIsLoginOrRegister", false);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setIsLoginOrRegister", true);
    next();
  }
};
</script>


<style scoped>
.register-header {
  background: #ffffff;
}

.register-content {
  background-color: #ffffff;
  box-sizing: border-box;
}

.register-form {
  width: 390px;
  margin: 0 auto;
  color: #171920;
  font-size: 14px;
}

.register-content > div h3 {
  font-size: 26px;
  color: #333333;
  text-align: center;
  height: 47px;
  line-height: 26px;
  padding-top: 70px;
  font-weight: normal;
}

.phone {
  position: relative;
  margin-bottom: 35px;
}

.phone input {
  font-size: 14px;
  padding: 0 15px;
  border: 1px solid #dddddd;
  width: 358px;
  height: 48px;
  line-height: 48px;
  border-radius: 2px;
}

.phone > img {
  width: 20px;
  height: 13px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.phone .err {
  position: absolute;
  left: 0;
  top: 53px;
  margin-left: 15px;
  color: red;
  font-size: 12px;
}

.phone .err img {
  width: 15px;
  height: 15px;
  vertical-align: -3px;
  margin-right: 10px;
}

.getInfo {
  margin-bottom: 35px;
}

.getInfo input {
  font-size: 14px;
  padding: 0 15px;
  border: 1px solid #dddddd;
  width: 224px;
  margin-right: 8px;
  height: 48px;
  line-height: 48px;
  border-radius: 2px;
}

.getInfo button {
  color: #ffffff;
  background: #649cf0;
  height: 48px;
  line-height: 48px;
  border: 1px solid #649cf0;
  text-align: center;
  font-size: 14px;
  width: 124px;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
}

.immediately-register {
  width: 390px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  border-radius: 2px;
  background: #dddfe8;
  cursor: pointer;
}

.consent-register {
  width: 390px;
  font-size: 12px;
  color: #686a71;
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 35px;
}

.consent-register span {
  color: #649cf0;
}
</style>
<template>
  <div class="login">
    <!-- header -->
    <div class="login-header">
      <Header content1="还没有账号?" content2="立即注册>" to="/register"></Header>
    </div>

    <div class="login-bg">
      <div class="login-container w1180">
        <div class="login-content">
          <div class="login-router clear">
            <span class="left mima" :class="isActive && 'active'" @click="isActive = true">密码登录</span>
            <span class="left" :class="!isActive && 'active'" @click="isActive = false">短信登录</span>
          </div>
          <div class="login-info">
            <div v-if="isActive">
              <form action>
                <div class="login-input">
                  <input type="text" placeholder="请输入手机号/用户名" autocomplete />
                </div>
                <div class="login-input">
                  <input type="password" placeholder="请输入密码" autocomplete />
                </div>
              </form>
              <ul class="login-ul">
                <li>
                  <label
                    for="autologin"
                    :class="isChecked ? 'checked' : 'nochecked'"
                    @click="clickRadio"
                  ></label>
                  <input type="radio" name="autologin" checked ref="checkRadio" />
                  自动登录
                </li>
                <li @click="clickForgetPassword" class="forget-password">忘记密码?</li>
              </ul>
              <div class="login-submit" @click="clickSubmit">登录</div>
              <Wechat></Wechat>
            </div>
            <div v-else>
              <div class="phone">
                <input
                  type="text"
                  v-model="phoneNum"
                  @blur="blurInput"
                  @focus="focusInput"
                  placeholder="请输入手机号码"
                />
                <div class="err" v-show="isError">
                  <img src="../assets/register/err.png" />
                  <span>手机号格式错误，请重新输入</span>
                </div>
              </div>
              <div class="getInfo">
                <input type="text" placeholder="请输入短信验证码" />
                <button @click="clickGetInfo">获取短信验证码</button>
              </div>
              <div class="login-submit">登录</div>
              <p class="articleinfo">
                提示：未注册环球网校账号的手机号，登录时将自动注册，且代表您已同意
                <a
                  href="http://www.hqwx.com/help/article.htm"
                  target="_blank"
                >《网站注册协议》</a>
              </p>
              <Wechat></Wechat>
            </div>
          </div>
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
      // 密码登录or短信登录
      isActive: true,
      // 是否自动登录
      isChecked: true,
      phoneNum: "",
      isError: false
    };
  },
  methods: {
    // 点击切换自动登录否
    clickRadio() {
      this.isChecked = !this.isChecked;
      this.$refs.checkRadio.checked = this.isChecked;
    },
    // 忘记密码
    clickForgetPassword() {},
    // 登录
    clickSubmit() {},
    // 输入框失去焦点
    blurInput() {
      let reg = /^1[3-9]\d{9}$/;
      if (!reg.test(this.phoneNum)) {
        this.isError = true;
        return;
      }
    },
    // 输入框获取焦点
    focusInput() {
      this.isError = false;
    },
    // 点击获取验证码
    clickGetInfo() {}
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
.login-header {
  background: #ffffff;
}

.login-bg {
  box-sizing: border-box;
  height: 548px;
  min-height: 548px;
  background: url("../assets/login/bg.png") center center no-repeat #649cf0;
}

.login-container {
  position: relative;
}

.login-content {
  position: absolute;
  right: 0;
  top: 20px;
  padding: 30px 30px 20px;
  width: 315px;
  background: #ffffff;
  border-radius: 6px;
}

.login-router {
  color: #686a71;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 28px;
}

.mima {
  border-right: 1px solid #efeff0;
}

.login-router span {
  text-align: center;
  width: 155px;
  cursor: pointer;
}

.login-router span.active {
  color: #649cf0;
  font-weight: bold;
}

.login-input {
  margin-bottom: 30px;
}

.login-input input {
  width: 298px;
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  border: 1px solid #dddddd;
  padding-left: 15px;
  border-radius: 2px;
}

.login-ul li:nth-child(1) label {
  display: inline-block;
  width: 15px;
  height: 15px;
  position: relative;
  top: 3px;
}

.checked {
  background-image: url(../assets/login/checked.png);
}

.nochecked {
  background-image: url(../assets/login/nochecked.png);
}

.login-ul {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 5px;
}

.login-ul li:nth-child(1) input {
  display: none;
}

.login-submit {
  cursor: pointer;
  margin-bottom: 45px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 100%;
  font-size: 18px;
  color: #ffffff;
  background-color: #649cf0;
  border-radius: 3px;
}

.phone {
  position: relative;
  margin-bottom: 35px;
}

.phone input {
  font-size: 14px;
  padding-left: 15px;
  border: 1px solid #dddddd;
  width: 298px;
  height: 48px;
  line-height: 48px;
  border-radius: 2px;
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
  padding-left: 15px;
  border: 1px solid #dddddd;
  width: 161px;
  margin-right: 8px;
  height: 48px;
  line-height: 48px;
  border-radius: 2px;
}

.getInfo button {
  color: #ffffff;
  margin-left: 10px;
  background: #649cf0;
  height: 48px;
  line-height: 48px;
  border: 1px solid #649cf0;
  text-align: center;
  font-size: 14px;
  width: 115px;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
}

.articleinfo {
  position: relative;
  top: -38px;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
  color: #686a71;
}
</style>
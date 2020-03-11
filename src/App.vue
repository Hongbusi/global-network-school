<template>
  <div id="app">
    <!-- header -->
    <div class="header" v-if="isLoginOrRegister">
      <div class="header-content w1180">
        <!-- logo -->
        <router-link class="header-logo left" to="/"></router-link>
        <!-- gif -->
        <router-link class="header-gif left" to="/coupon"></router-link>
        <!-- 首页 -->
        <router-link class="header-link left" :class="linkActive == 1 ? 'header-link-active' : ''" to="/">首页</router-link>
        <!-- 直播 -->
        <router-link class="header-link left" :class="linkActive == 2 ? 'header-link-active' : ''" to="/zhibo">直播</router-link>
        <!-- App -->
        <router-link class="header-link left" :class="linkActive == 3 ? 'header-link-active' : ''" to="/download/app">App</router-link>
        <!-- 搜索框 -->
        <div class="header-search left">
          <input type="text" class="search-input" placeholder="搜索考试名称、老师名称或课程名称" />
          <span class="search-btn"></span>
        </div>
        <!-- 学习中心 -->
        <router-link class="header-link header-center left" :class="linkActive == 4 ? 'header-link-active' : ''" to="/learning/center">学习中心</router-link>
        <!-- 登录注册优惠卷 -->
        <div class="header-unlogin">
          <router-link class="header-unlogin-link header-unlogin-link1" to="/login">登录</router-link>
          <router-link class="header-unlogin-link header-unlogin-link2" to="/register">注册</router-link>
          <div class="header-coupon">
            <router-link to="/coupon">
              <img class="coupon-icon" src="./assets/header/micon.png" />
              新人领150元优惠卷
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 内容区域 -->
    <router-view />

    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import {mapState} from "vuex";
export default {
  components: {
    Footer
  },
  data() {
    return {
      linkActive: 1,
      isLoginOrRegister: true
    };
  },
  computed: {
    ...mapState(["isLogin"])
  },
  watch: {
    $route: function(newUrl, oldUrl) {
      if (newUrl.name == "Login" || newUrl.name == "Register") {
          this.isLoginOrRegister = false;
      } else {
          this.isLoginOrRegister = true;
      }
      switch (newUrl.name) {
        case "Zhibo":
          this.linkActive = 2;
          break;
        case "Download":
        case "Phone":
        case "Pc":
          this.linkActive = 3;
          break;
        case "LearningCenter":
          if (!this.isLogin) {
            this.$router.push("/login");
          }
          this.linkActive = 4;
          break;
        default:
          this.linkActive = 1;
          break;
      }
    }
  }
};
</script>

<style scoped>
.header {
  background: #ffffff;
}

.header-content {
  height: 105px;
}

.header-content a {
  cursor: pointer;
}

.header-logo {
  width: 126px;
  height: 40px;
  margin: 33px 0 0 20px;
  background-image: url("./assets/header/index.png");
}

.header-gif {
  width: 100px;
  height: 88px;
  margin: 4px 29px 0 25px;
  background-image: url("./assets/header/zn17.gif");
}

.header-link {
  font-size: 16px;
  padding-bottom: 5px;
  margin: 44px 33px 0 0;
  color: inherit;
  border-bottom: 3px solid transparent;
  line-height: 16px;
}

.header-search {
  width: 280px;
  height: 24px;
  border: 1px solid #cfd1d6;
  margin-top: 40px;
}

.header-link:hover {
  color: #649cf0;
  border-bottom: 3px solid #649cf0;
}

.header-link-active {
  color: #649cf0;
  border-bottom: 3px solid #649cf0;
}

.search-input {
  font-size: 12px;
  border: none;
  width: 236px;
  margin: -16px 0 0 10px;
  line-height: 1.5;
  outline: none;
  vertical-align: middle;
}

.search-btn {
  display: inline-block;
  width: 34px;
  height: 26px;
  background: #659cef;
  margin-top: -1px;
  background-image: url("./assets/header/search.png");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.header-center {
  margin-left: 79px;
  margin-right: 0px;
}

.header-unlogin {
  float: right;
  text-align: right;
  height: 105px;
  position: relative;
}

.header-unlogin-link {
  line-height: 24px;
  font-size: 14px;
  border-radius: 28px;
  border: 1px solid #649cf0;
  padding: 0 30px;
  margin: 39px 0 0 13px;
  display: inline-block;
  cursor: pointer;
  height: 24px;
  color: #649cf0;
}

.header-unlogin-link1 {
  background: #649cf0;
  color: #fff;
}

.header-unlogin-link1:hover {
  background: #3578dd;
  color: #fff;
}

.header-unlogin-link2:hover {
  color: #fff;
  background: #649cf0;
}

.header-coupon {
  background: rgb(245, 64, 48) none repeat scroll 0% 0%;
  width: 185px;
  display: block;
  height: 23px;
  font-size: 12px;
  text-align: center;
  line-height: 23px;
  position: absolute;
  right: 0px;
  top: 74px;
  border-radius: 5px;
}

.coupon-icon {
  width: 15px;
  height: 11px;
  position: relative;
  top: 1px;
}

.header-coupon a {
  color: #ffffff;
}
</style>

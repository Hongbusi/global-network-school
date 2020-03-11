<template>
  <div class="header-login clear w1180">
    <!-- logo -->
    <router-link class="header-login-logo left" to="/"></router-link>
    <!-- gif -->
    <router-link class="header-login-gif left" to="/coupon"></router-link>
    <router-link class="go-to" :to="to">
      {{content1}}
      <span>{{content2}}</span>
    </router-link>
  </div>
</template>


<script>
export default {
  props: ["content1", "content2", "to"]
}
</script>


<style scoped>
.header-login {
  position: relative;
}

.header-login-logo {
  width: 126px;
  height: 40px;
  margin: 33px 0 0 20px;
  background-image: url("../assets/header/index.png");
}

.header-login-gif {
  width: 100px;
  height: 88px;
  margin: 4px 29px 0 25px;
  background-image: url("../assets/header/zn17.gif");
}

.go-to {
  color: #686a71;
  position: absolute;
  top: 45px;
  font-size: 16px;
  left: 50%;
  margin-left: 415px;
}

.go-to span {
    color: #649cf0;
}
</style>
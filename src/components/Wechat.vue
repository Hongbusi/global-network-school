<template>
  <div class="wechat">
    <div class="else">
      <span>其他方式登录</span>
    </div>
    <button class="wechat-btn" @click="clickWechat">微信扫码一键登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 点击切换微信登录
    clickWechat() {
      this.$router.push("/no");
    }
  }
};
</script>


<style scoped>
.else {
  height: 1px;
  margin-bottom: 26px;
  border-bottom: 1px solid #dddddd;
  position: relative;
  font-size: 14px;
  color: #9598a2;
}

.else span {
  padding: 0 21px;
  background: #ffffff;
  position: absolute;
  line-height: 14px;
  left: 50%;
  transform: translateX(-50%);
  top: -6px;
}

.wechat-btn:hover {
  background: #3cb035;
  color: #ffffff;
}

.wechat-btn {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid #3cb035;
  text-align: center;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
</style>
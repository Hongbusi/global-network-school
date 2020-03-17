<template>
  <div class="rightbar2018new">
    <a>
      <span>课程咨询</span>
    </a>

    <a>
      <span>学员服务</span>
    </a>
    <a>
      <span>校企合作</span>
    </a>
    <a class="rightbar2018new_phone">
      <span>电话咨询</span>
      <div>400-678-3456</div>
    </a>
    <a class="rightbar2018new_code">
      <span>公众号</span>
      <div>
        <p>扫描关注微信公众号</p>
        <img src="http://s.hqwx.com/statics/home/mall/images/mp.png?v=20180628.1108" />
      </div>
    </a>
    <a class="rightbar2018new_code">
      <span style="padding:0px;height:50px">
        APP
        <em style="display: block;line-height: 10px;color: #f9f186; font-size: 12px;">立减150</em>
      </span>
      <div>
        <p>注册APP立减150元</p>
        <img src="http://s.hqwx.com/statics/home/mall/images/app.png?v=20180628.1108" />
      </div>
    </a>
    <a class="righttop" v-show="isSticky">
      <span>
        <b></b>
      </span>
      <div @click="goToTop">
        <span>返回顶部</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false
    };
  },
  methods: {
    handleScroll() {
      // 当前滚动的值
      var newScrollTop = document.documentElement.scrollTop;
      // 导航栏距离顶部的距离
      let navSearchTop = 800;
      if (newScrollTop >= navSearchTop && !this.isSticky) {
        this.isSticky = true;
      }
      if (newScrollTop < navSearchTop && this.isSticky) {
        this.isSticky = false;
      }
    },
    goToTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  },
  mounted() {
    // 给window添加scroll事件监听
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }
};
</script>


<style scoped>
.rightbar2018new {
  font-family: "microsoft yahei";
  position: fixed;
  right: 10px;
  top: 25%;
  z-index: 6;
  width: 60px;
}

.rightbar2018new a {
  background: #be0f34;
  display: block;
  position: relative;
  margin-bottom: 2px;
  left: 10px;
  width: 50px;
  height: 50px;
}

.rightbar2018new a span {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  line-height: 16px;
  width: 36px;
  height: 32px;
  padding: 9px 7px;
  display: block;
  font-style: normal;
}

.rightbar2018new .rightbar2018new_phone div {
  text-align: center;
  width: 126px;
  height: 50px;
  background: #cb3454;
  position: absolute;
  right: 0px;
  top: 0px;
  line-height: 50px;
  font-size: 16px;
  color: #fff;
  font-family: "arial";
  font-weight: bold;
}

.rightbar2018new a div {
  z-index: 2;
  display: none;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: fadeInRight;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.rightbar2018new_phone:hover div {
  display: block;
}

.rightbar2018new .rightbar2018new_code span {
  width: 50px;
  line-height: 32px;
  padding: 9px 0;
}

.csshackwin .rightbar2018new .rightbar2018new_code span {
  line-height: 30px;
}

.rightbar2018new .rightbar2018new_code div {
  width: 120px;
  padding: 14px;
  background: #cb3454;
  position: absolute;
  left: -148px;
  bottom: 0px;
}

.rightbar2018new_code:hover div {
  display: block;
}

.rightbar2018new .rightbar2018new_code div p {
  text-align: center;
  font-size: 12px;
  line-height: 1;
  color: #ffffff;
  padding-bottom: 10px;
}

.rightbar2018new .righttop {
  background: #c5c6cb;
}

.rightbar2018new a span {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  line-height: 16px;
  width: 36px;
  height: 32px;
  padding: 9px 7px;
  display: block;
  font-style: normal;
}

.rightbar2018new .righttop span b {
  background: url(http://hqkc.hqwx.com/uploadfile/2018/0705/20180705012844751.png)
    top center no-repeat;
  width: 20px;
  height: 11px;
  display: block;
  margin-top: 10px;
  margin-left: 8px;
}

.rightbar2018new .righttop div {
  width: 50px;
  height: 50px;
  background: #cb3454;
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.rightbar2018new a span {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  line-height: 16px;
  width: 36px;
  height: 32px;
  padding: 9px 7px;
  display: block;
  font-style: normal;
  cursor: pointer;
}

.rightbar2018new .righttop:hover div {
  display: block;
}
</style>
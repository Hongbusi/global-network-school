<template>
  <div class="banner" @mouseenter="enterBanner" @mouseleave="leaveBanner">
    <span v-show="isShow" @click="last" class="banner-left"></span>
    <span v-show="isShow" @click="next" class="banner-right"></span>
    <div class="banner-pic">
      <img :class="imgIndex == 0 ? 'active' : ''" src="../assets/zhibo/2.jpg" />
      <img :class="imgIndex == 1 ? 'active' : ''" src="../assets/zhibo/1.jpg" />
      <img :class="imgIndex == 2 ? 'active' : ''" src="../assets/zhibo/3.jpg" />
    </div>
    <div class="banner-choose">
      <ul>
        <li :class="imgIndex == 0 ? 'choose-active' : ''" @mouseenter="imgIndexChange(0)"></li>
        <li :class="imgIndex == 1 ? 'choose-active' : ''" @mouseenter="imgIndexChange(1)"></li>
        <li :class="imgIndex == 2 ? 'choose-active' : ''" @mouseenter="imgIndexChange(2)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgIndex: 0,
      timer: null,
      isShow: false
    };
  },
  mounted() {
    this.autoPlay();
  },
  methods: {
    // 当前显示图片索引+1
    next() {
      if (this.imgIndex == 2) {
        this.imgIndex = 0;
      } else {
        this.imgIndex = this.imgIndex + 1;
      }
    },
    // 当前显示图片索引-1
    last() {
      if (this.imgIndex == 0) {
        this.imgIndex = 2;
      } else {
        this.imgIndex = this.imgIndex - 1;
      }
    },
    // 自动轮播
    autoPlay() {
      this.timer = setInterval(() => {
        this.next();
      }, 4000);
    },
    // 鼠标进入
    enterBanner() {
      this.isShow = true;
      clearInterval(this.timer);
    },
    // 鼠标离开
    leaveBanner() {
      this.isShow = false;
      this.autoPlay();
    },
    imgIndexChange(value) {
      this.imgIndex = value;
    }
  }
};
</script>

<style scoped>
.banner {
  background-color: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 236px;
  width: 100%;
  margin-bottom: 20px;
}

.banner-pic {
  height: 100%;
}

.banner-pic img {
  width: 100%;
  height: 100%;
  background-color: #f5f7f9;
  cursor: pointer;
  display: none;
}

.banner-pic img.active {
  display: block;
}

.banner-choose {
  text-align: center;
  width: 280px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  margin-left: -140px;
  font-size: 0px;
}

.banner-choose ul li {
  width: 26px;
  height: 13px;
  margin: 0 7px;
  display: inline-block;
  background-image: url("../assets/zhibo/bannern.png");
}

.banner-choose ul li.choose-active {
  background-image: url("../assets/zhibo/bannerc.png");
}

.banner-left {
  position: absolute;
  left: 10px;
  margin-left: 0;
  top: 50%;
  margin-top: -20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  z-index: 2;
  background-image: url("../assets/zhibo/banner-left.png");
  border-radius: 50%;
}

.banner-right {
  position: absolute;
  right: 10px;
  margin-left: 0;
  top: 50%;
  margin-top: -20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  z-index: 2;
  background-image: url("../assets/zhibo/banner-right.png");
  border-radius: 50%;
}

.banner span:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
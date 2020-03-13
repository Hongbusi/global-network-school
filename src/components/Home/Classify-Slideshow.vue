<template>
  <div class="banner" @mouseenter="enterBanner" @mouseleave="leaveBanner">
    <span v-show="isShow" @click="last" class="banner-left"></span>
    <span v-show="isShow" @click="next" class="banner-right"></span>
    <div class="banner-pic">
      <div :class="imgIndex == 0 ? 'active' : ''"></div>
      <div :class="imgIndex == 1 ? 'active' : ''"></div>
      <div :class="imgIndex == 2 ? 'active' : ''"></div>
      <div :class="imgIndex == 3 ? 'active' : ''"></div>
      <div :class="imgIndex == 4 ? 'active' : ''"></div>
      <div :class="imgIndex == 5 ? 'active' : ''"></div>
    </div>
    <div class="banner-choose">
      <ul>
        <li :class="imgIndex == 0 ? 'choose-active' : ''" @mouseenter="imgIndexChange(0)"></li>
        <li :class="imgIndex == 1 ? 'choose-active' : ''" @mouseenter="imgIndexChange(1)"></li>
        <li :class="imgIndex == 2 ? 'choose-active' : ''" @mouseenter="imgIndexChange(2)"></li>
        <li :class="imgIndex == 3 ? 'choose-active' : ''" @mouseenter="imgIndexChange(3)"></li>
        <li :class="imgIndex == 4 ? 'choose-active' : ''" @mouseenter="imgIndexChange(4)"></li>
        <li :class="imgIndex == 5 ? 'choose-active' : ''" @mouseenter="imgIndexChange(5)"></li>
      </ul>
    </div>
    <!-- 分类 -->
    <ul class="examlist">
      <li class="examlist-item" v-for="(item, index) in examlist" :key="index">
        <p class="title">
          {{item.title}}
          <span></span>
        </p>
        <div class="list" v-for="(li, i) in item.list" :key="i">
          <router-link to="/no" v-for="(l, k) in li" :key="k">{{l}}</router-link>
        </div>
        <div class="courselist">
          <div class="part" v-for="(part, p) in item.courselist" :key="p">
            <span>{{part.title}}</span>
            <div>
              <router-link to="/no" v-for="(h, u) in part.list" :key="u">{{h}}</router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    examlist: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
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
      if (this.imgIndex == 5) {
        this.imgIndex = 0;
      } else {
        this.imgIndex = this.imgIndex + 1;
      }
    },
    // 当前显示图片索引-1
    last() {
      if (this.imgIndex == 0) {
        this.imgIndex = 5;
      } else {
        this.imgIndex = this.imgIndex - 1;
      }
    },
    // 自动轮播
    autoPlay() {
      this.timer = setInterval(() => {
        this.next();
      }, 2000);
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
  height: 506px;
  width: 100%;
  margin-bottom: 20px;
}

.banner-pic {
  height: 100%;
}

.banner-pic div {
  width: 100%;
  height: 100%;
  background-color: #f5f7f9;
  cursor: pointer;
  display: none;
}

.banner-pic div:nth-child(1) {
  background: url("../../assets/home/1.jpg") no-repeat scroll center top;
}

.banner-pic div:nth-child(2) {
  background: url("../../assets/home/2.jpg") no-repeat scroll center top;
}

.banner-pic div:nth-child(3) {
  background: url("../../assets/home/3.jpg") no-repeat scroll center top;
}

.banner-pic div:nth-child(4) {
  background: url("../../assets/home/4.jpg") no-repeat scroll center top;
}

.banner-pic div:nth-child(5) {
  background: url("../../assets/home/5.jpg") no-repeat scroll center top;
}

.banner-pic div:nth-child(6) {
  background: url("../../assets/home/6.jpg") no-repeat scroll center top;
}

.banner-pic div.active {
  display: block;
}

.banner-choose {
  text-align: center;
  width: 280px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  margin-left: 10px;
  font-size: 0px;
}

.banner-choose ul li {
  width: 26px;
  height: 13px;
  margin: 0 7px;
  display: inline-block;
  background-image: url("../../assets/zhibo/bannern.png");
}

.banner-choose ul li.choose-active {
  background-image: url("../../assets/zhibo/bannerc.png");
}

.banner-left {
  position: absolute;
  left: 50%;
  margin-left: -290px;
  top: 50%;
  margin-top: -20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  z-index: 2;
  background-image: url("../../assets/zhibo/banner-left.png");
  border-radius: 50%;
}

.banner-right {
  position: absolute;
  left: 50%;
  margin-left: 550px;
  top: 50%;
  margin-top: -20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  z-index: 2;
  background-image: url("../../assets/zhibo/banner-right.png");
  border-radius: 50%;
}

.banner > span:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.examlist {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -590px;
  height: 485px;
  padding: 17px 0;
  padding-top: 17px;
  padding-top: 4px;
  width: 280px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

.examlist li {
  border-left: 3px solid transparent;
  padding-left: 17px;
  display: block;
  flex-grow: 1;
  /* height: 80px; */
  /* overflow: hidden; */
}

.examlist li:hover {
  border-color: rgb(100, 156, 240) !important;
  background-color: #fff;
}

.examlist li:hover .title {
  color: rgb(100, 156, 240) !important;
}

.examlist li:hover .title > span {
  display: none;
}

.examlist a:hover {
  color: rgb(100, 156, 240) !important;
}

.examlist li .title {
  font-size: 14px;
  color: #171920;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 8px;
  line-height: 1;
  position: relative;
}

.examlist li .title span {
  position: absolute;
  right: 20px;
  top: 12px;
  background-image: url("../../assets/home/sprite.png");
  background-position: -120px -100px;
  width: 6px;
  height: 11px;
}

.examlist li .list {
  height: 21px;
  overflow: hidden;
}

.examlist li .list a {
  line-height: 21px;
  color: #686a71;
  font-size: 12px;
  margin-right: 9px;
  word-break: keep-all;
  float: left;
}

.examlist li:hover .courselist {
  background-color: #fff;
  display: block;
}

.examlist li .courselist {
  transition: 0.5s;
  position: absolute;
  top: 0;
  left: 280px;
  height: 460px;
  border-top: 1px solid #efeff0;
  border-bottom: 1px solid #efeff0;
  width: 900px;
  background: #fff;
  overflow: auto;
  display: none;
  padding-top: 44px;
  z-index: 999;
}

.examlist li .courselist .part span {
  width: 126px;
  padding-left: 47px;
  float: left;
  font-size: 14px;
  line-height: 28px;
  font-weight: 700;
  color: #686a71;
}

.examlist li .courselist .part div {
  width: 723px;
  padding-bottom: 24px;
  float: left;
}

.examlist li .courselist .part div a {
  width: 170px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 28px;
  color: #686a71;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>



<template>
  <div class="home-teacher">
    <div class="w1180">
      <p class="live-title-box">
        <span class="live-title">网校名师</span>
        <router-link to="/no">
          <span class="more right">
            <span>更多</span>
            <span class="more-icon"></span>
          </span>
        </router-link>
      </p>

      <div class="content" @mouseenter="enterBanner" @mouseleave="leaveBanner">
        <span v-show="isShow" @click="last" class="btn-left content-btn"></span>
        <span v-show="isShow" @click="next" class="btn-right content-btn"></span>
        <div class="teacher-list" :style="'transform: translateX(' + slateX + 'px);'">
          <Teacheritem v-for="(item, index) in teacherList" :key="index" :teacher="item"></Teacheritem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Teacheritem from "./Teacher-item.vue";
export default {
  components: {
    Teacheritem
  },
  data() {
    return {
      slateX: 0,
      timer: null,
      isShow: false
    };
  },
  mounted() {
    this.autoPlay();
  },
  props: {
    teacherList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    // 下一张
    next() {
      if (this.slateX == -5900 + 236 * 5) {
        this.slateX = 0;
      } else {
        this.slateX = this.slateX - 236;
      }
    },
    // 上一张
    last() {
      if (this.slateX == 0) {
        this.slateX = -5900 + 236 * 5;
      } else {
        this.slateX = this.slateX + 236;
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
.live-title-box {
  width: 100%;
  height: 90px;
  line-height: 90px;
  margin-top: 8px;
  font-size: 20px;
  font-weight: 700;
}

.live-title-box span {
  cursor: pointer;
}

.more {
  font-size: 12px;
  color: #9598a2;
}
.more:hover {
  color: #649cf0;
}

.more-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: sub;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../assets/zhibo/icon-more.png");
}

.more:hover .more-icon {
  background-image: url("../../assets/zhibo/icon-more-hover.png");
}

.content {
  width: 100%;
  height: 334px;
  overflow: hidden;
  position: relative;
}

.teacher-list {
  width: 5900px;
  height: 344px;
  transition-duration: 1s;
}

.content-btn {
  width: 40px;
  height: 40px;
  z-index: 2;
  cursor: pointer;
  position: absolute;
}

.btn-left {
  top: 120px;
  left: 50%;
  margin-left: -580px;
  background-image: url("../../assets/home/sprite.png");
  background-position: 0 0;
  border-radius: 50%;
}

.btn-right {
  top: 120px;
  right: 50%;
  margin-right: -580px;
  background-image: url("../../assets/home/sprite.png");
  background-position: -50px -50px;
  border-radius: 50%;
}

.content-btn:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
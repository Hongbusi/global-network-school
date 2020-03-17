<template>
  <div class="zhibo w1180">
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 分类 -->
    <Classify :classify="zhiboData.classify"></Classify>

    <!-- 今日直播 -->
    <p class="title">今日直播</p>
    <div class="live-container clear">
      <div class="left">
        <img src="../assets/zhibo/live-bg.jpg" />
        <p class="left-title">{{zhiboData.liveing ? zhiboData.liveing[bigOrSmall].txt : ''}}</p>
        <p class="left-subtitle">
          <span>{{zhiboData.liveing && zhiboData.liveing[bigOrSmall].isEnd ? '已结束' : '直播中'}}</span>
          <span>621人已预约</span>
        </p>
        <p class="left-btn-group">
          <a>{{zhiboData.liveing && zhiboData.liveing[bigOrSmall].isEnd ? '直播已结束' : '进入直播'}}</a>
        </p>
        <div class="left-taguser">
          <img src="../assets/zhibo/user.jpg" />
          <span>{{zhiboData.liveing ? zhiboData.liveing[bigOrSmall].teacher : ''}}</span>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in zhiboData.liveing" :key="index" :class="bigOrSmall == index ? 'bc' : ''" @click="bigOrSmall = index">
            <span :class="bigOrSmall == index ? 'right-big' : 'right-small'"></span>
            <p class="right-time">
              <i>{{item.isEnd ? '已结束' : '直播中'}}</i>
              <span class="tag">{{item.tag}}</span>
            </p>
            <p class="right-title">
              <span class="icon" :class="!item.isEnd && 'icon-bg'"></span>
              <span class="txt">{{item.txt}}</span>
              <span class="teacher">主讲：{{item.teacher}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <ClassifyLive v-for="(item, index) in zhiboData.classifyLive" :key="index" :classifyLive="item"></ClassifyLive>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "../components/Banner.vue";
import Classify from "../components/Classify.vue";
import ClassifyLive from "../components/Classify-live.vue";

export default {
  components: {
    Banner,
    Classify,
    ClassifyLive
  },
  data() {
    return {
      zhiboData: {},
      bigOrSmall: 0
    };
  },
  created() {
    axios.get("/zhibo-classify.json").then(res => {
      this.zhiboData = res.data;
    });
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit("setLinkActive", 2);
    });
  },
};
</script>

<style scoped>
.zhibo {
  margin-top: 20px;
  margin-bottom: 20px;
}

.title {
  width: 100%;
  height: 24px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
}

.live-container {
  height: 320px;
}

.live-container .left {
  width: 520px;
  height: 280px;
  position: relative;
  padding: 20px 30px;
}

.live-container .right {
  width: 600px;
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
  position: relative;
}

.live-container .right ul {
  width: 533px;
  float: right;
}

.live-container .right ul li {
  height: 80px;
  border-left: 2px solid #e7eced;
  position: relative;
  padding-left: 20px;
  float: right;
  width: 100%;
  cursor: pointer;
}

.live-container .right ul li.bc {
  background-color: #e8f5ff;
}

.live-container .right ul li:hover {
  background-color: #e8f5ff;
}

.live-container .left img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.left-title {
  font-size: 26px;
  line-height: 1;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 18px;
  color: #ffffff;
  font-weight: 700;
  overflow: hidden;
  height: 28px;
}

.left-subtitle {
  font-size: 14px;
  text-align: center;
  line-height: 1;
  color: #ffffff;
  width: 100%;
  margin-bottom: 38px;
}

.left-subtitle span:nth-child(1) {
  margin-right: 17px;
}

.left-btn-group {
  text-align: center;
}

.left-btn-group a {
  width: 133px;
  background-color: #fff;
  color: #649cf0;
  border: 1px solid #fff;
  margin: auto;
  display: inline-block;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  text-align: center;
  border-radius: 50px;
  padding: 0 10px;
  cursor: pointer;
}

.left-taguser {
  position: absolute;
  bottom: 21px;
  height: 40px;
  left: 30px;
  color: #ffffff;
  font-size: 14px;
}

.left-taguser img {
  margin-right: 10px;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50%;
}

.left-taguser span {
  position: relative;
  top: 10px;
  left: 50px;
}

.right-big {
  width: 15px;
  height: 15px;
  background: #649cf0;
  border: 2px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -11px;
  margin-top: -19px;
}

.right-small {
  width: 10px;
  height: 10px;
  background: #649cf0;
  border: 2px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -8px;
  margin-top: -17px;
}

.right-time {
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  color: #9598a2;
  margin-bottom: 9px;
  margin-top: 20px;
}

.right-time i {
  display: inline-block;
  width: 45px;
  text-align: center;
  font-style: normal;
}

.right-time .tag {
  margin-left: 15px;
  border-radius: 3px;
  height: 18px;
  font-size: 12px;
  display: inline-block;
  vertical-align: middle;
  line-height: 18px;
  padding: 0 4px;
  margin-top: -5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
}

.icon {
  width: 16px;
  margin: 0 30px 0 15px;
  position: relative;
  display: inline-block;
  top: -2px;
  height: 14px;
}

.icon-bg {
  animation: isLiving 0.6s steps(5) infinite;
  background-image: url("../assets/zhibo/living.png");
}

@keyframes isLiving {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -180px 0;
  }
}

.txt {
  width: 290px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

.teacher {
  float: right;
  width: 150px;
  color: #9598a2;
  font-size: 14px;
}
</style>
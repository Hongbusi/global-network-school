<template>
  <div class="home-live">
    <router-link class="home-live-link" to="/zhibo"></router-link>
    <div class="home-live-content clear">
      <div class="home-live-video left">
        <!-- 进入直播间 -->
        <router-link to="/no">
          <div class="video-rapid left">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>进入直播间
        </router-link>
        <!-- 音量 -->
        <span class="volume"></span>
        <!-- title -->
        <div class="video-title">
          <span class="lb-video-title-inner">
            {{homeLive[activeNum] && homeLive[activeNum].tag}}
            <i>|</i>
            {{homeLive[activeNum] && homeLive[activeNum].title}}
          </span>
        </div>
        <!-- 老师信息 -->
        <dl class="clear teacher">
          <dt class="left teacher-pic">
            <img :src="homeLive[activeNum] && homeLive[activeNum].teacherPic" />
          </dt>
          <dd class="left teacher-name">
            主讲
            <p>{{homeLive[activeNum] && homeLive[activeNum].teacherName}}</p>
          </dd>
        </dl>
      </div>
      <div class="home-live-list right">
        <div class="list-title clear">
          <h4 class="left">今日直播</h4>
          <router-link to="/zhibo" class="right">查看全部</router-link>
        </div>
        <div class="list-wrap">
          <div class="list-wrap-box" @scroll="wrapScroll">
            <div class="bar-bg"></div>
            <div class="bar" :style="'height:' + 475 / homeLive.length + 'px;top:' + barTop + 'px'"></div>
            <ul class="list-wrap-container">
              <li
                v-for="(item, index) in homeLive"
                :key="index"
                :class="activeNum == index ? 'active' : ''"
                @click="activeNum = index"
              >
                <div class="list-wrap-top clear">
                  <span class="top-point left" :class="activeNum == index ? 'ractive' : ''">
                    <i :class="activeNum == index ? 'iactive' : ''"></i>
                  </span>
                  <span class="top-time left" :class="activeNum == index ? 'bcactive' : ''">
                    <i class="left" :class="activeNum == index ? 'bgactive' : ''"></i>
                    {{item.time}}
                  </span>
                  <router-link to="/no" class="right">进入课堂</router-link>
                </div>
                <dl class="clear">
                  <dt class="left">
                    <img :src="item.teacherPic" />
                  </dt>
                  <dd class="left">
                    <h5 class="text-overflow">{{item.tag}}</h5>
                    <p class="clear">
                      <i class="right">-{{item.teacherName}}</i>
                      <span title="证书宅急送-8小时福利不间断" class="text-overflow">{{item.title}}</span>
                    </p>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNum: 0,
      barTop: 0
    };
  },
  props: {
    homeLive: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    wrapScroll(e) {
        this.barTop =  e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight) * (475 -  (475 / this.homeLive.length)) 
    }
  }
};
</script>

<style scoped>
.home-live {
  width: 100%;
  height: 545px;
  padding-top: 10px;
  font-size: 12px;
  color: #fff;
  overflow: hidden;
  background-image: url("../../assets/home/live_banner.jpg");
}

.home-live-link {
  cursor: pointer;
  display: block;
  position: relative;
  width: 100%;
  height: 555px;
  top: -10px;
}

.home-live-content {
  position: relative;
  z-index: 2;
  top: -555px;
  width: 999px;
  height: 531px;
  margin: 0 auto;
  background-color: #333;
  border: 1px solid #4d4d4d;
}

.home-live-video {
  width: 690px;
  height: 518px;
  overflow: hidden;
  margin: 7px 0 0 7px;
  background-color: #000;
  position: relative;
}

.home-live-list {
  width: 302px;
  position: relative;
  height: 531px;
  background: url("../../assets/home/live_banner_line.gif") no-repeat 17px 7px;
}

.home-live-video a {
  display: inline-block;
  background-color: #09a3b2;
  width: 172px;
  height: 43px;
  line-height: 43px;
  border: 1px solid #09a3b2;
  border-radius: 4px;
  color: #fff;
  position: absolute;
  left: 260px;
  top: 260px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.video-rapid {
  margin: 6px 0 0 10px;
}

.video-rapid > div {
  background-color: #fff;
  width: 2px;
  height: 20px;
  border-radius: 2px;
  margin: 2px;
  overflow: hidden;
  display: inline-block;
  animation: line-scale-pulse-out-rapid 0.9s 0s infinite
    cubic-bezier(0.11, 0.49, 0.38, 0.78);
}

.video-rapid > div:nth-child(1),
.video-rapid > div:nth-child(5) {
  animation-delay: 0.5s;
}

.video-rapid > div:nth-child(2),
.video-rapid > div:nth-child(4) {
  animation-delay: 0.25s;
}

@keyframes line-scale-pulse-out-rapid {
  0% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.3);
  }
  90% {
    transform: scale(1);
  }
}

.volume {
  position: absolute;
  left: 12px;
  bottom: 10px;
  width: 33px;
  height: 32px;
  background: url("../../assets/home/live_banner_icons.png") no-repeat 0 -33px;
}

.video-title {
  position: absolute;
  width: 100%;
  bottom: 280px;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  color: #fff;
}

.video-title span {
  margin: 0 30px;
  display: inline-block;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.8);
  padding: 11px 19px;
}

.video-title span i {
  font-weight: normal;
  margin: 0 14px;
  font-style: normal;
}

.teacher {
  position: absolute;
  right: 40px;
  bottom: 10px;
  color: #fff;
}

.teacher-pic {
  width: 42px;
}

.teacher-pic img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
}

.teacher-name {
  margin-left: 12px;
  line-height: 19px;
}

.teacher-name p {
  font-size: 16px;
}

.list-title {
  height: 56px;
  line-height: 56px;
  margin-left: 39px;
}

.list-title a {
  color: #afafaf;
  margin-right: 20px;
}

.list-title h4 {
  font-size: 20px;
  color: #fff;
  font-weight: normal;
}

.list-wrap {
  width: 302px;
  height: 475px;
  overflow: hidden;
  position: relative;
}

.list-wrap-box {
  width: 302px;
  height: 475px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 30px;
  color: #eeeded;
}

.bar-bg {
  position: absolute;
  width: 8px;
  height: 475px;
  overflow: hidden;
  background-color: #252525;
  right: 0;
  top: 0;
}

.bar {
  position: absolute;
  width: 8px;
  height: 30px;
  overflow: hidden;
  background-color: #8a8a8a;
  right: 0;
  cursor: pointer;
}

.list-wrap-container {
  width: 302px;
}

.list-wrap-container li {
  padding: 15px 20px 15px 10px;
  background: url("../../assets/home/live_banner_on.gif") no-repeat left bottom;
}

.list-wrap-container li.active {
  background-color: #3e3e3e;
  z-index: -1;
  background: url("../../assets/home/live_banner_on.gif") repeat-y;
}

.list-wrap-container li .list-wrap-top a {
  border: #fff 1px solid;
  padding: 0 8px;
  height: 25px;
  line-height: 25px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
}

.list-wrap-container li .list-wrap-top a:hover {
  color: #00c1d2;
  border-color: #00c1d2;
}

.top-point {
  width: 16px;
  height: 16px;
  overflow: hidden;
  background-color: #333;
  margin-top: 8px;
}

.top-point i {
  display: block;
  width: 8px;
  height: 8px;
  overflow: hidden;
  background-color: #bcbcbc;
  border-radius: 50%;
  margin: 4px auto 0;
}

.top-point.ractive {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #575757;
  margin-left: -2px;
  margin-top: 2px;
}

.top-point i.iactive {
  width: 12px;
  height: 12px;
  background-color: #00c1d2;
}

.top-time {
  font-size: 18px;
  height: 23px;
  line-height: 23px;
  overflow: hidden;
  width: 143px;
  margin-top: 3px;
  margin-left: 10px;
}

.top-time i {
  border: 12px solid #333;
  overflow: hidden;
  border-left: none;
  font-style: normal;
  width: 0;
  height: 0;
}

.top-time.bcactive {
  background-color: #00c1d2;
}

.top-time i.bgactive {
  border-color: #3e3e3e;
  display: block;
  border-right-color: #00c1d2;
}

.list-wrap-container li dl {
  margin-top: 13px;
}

.list-wrap-container li dl dt {
  width: 42px;
  height: 42px;
  margin-left: 24px;
}

.list-wrap-container li dl dt img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
}

.list-wrap-container li dl dd {
  width: 195px;
  margin-left: 9px;
}

.text-overflow {
  font-size: 14px;
  margin-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-wrap-container li dl dd p {
  font-size: 16px;
  margin-top: 8px;
}
.list-wrap-container li dl dd p i {
  font-style: normal;
  overflow: hidden;
  width: 56px;
  line-height: 18px;
  height: 18px;
  text-align: right;
  color: #afafaf;
  font-size: 12px;
  margin-top: -1px;
}

.list-wrap-container li dl dd p span {
  display: inline-block;
  width: 130px;
}
</style>
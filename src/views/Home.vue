<template>
  <div class="home">
    <!-- 直播 -->
    <HomeLive :homeLive="homeData.homeLive"></HomeLive>
    <!-- 轮播图和分类 -->
    <ClassifySlideshow :examlist="homeData.examlist"></ClassifySlideshow>

    <div class="home1">
      <div class="w1180">
        <div class="userlink">
          <router-link to="/no">
            <span></span>
            考试日历
          </router-link>
          <router-link to="/no">
            <span></span>
            学员评价
          </router-link>
          <router-link to="/no">
            <span></span>
            图书商城
          </router-link>
          <router-link to="/no">
            <span></span>
            课程兑换
          </router-link>
          <router-link to="/no">
            <span></span>
            团企培训
          </router-link>
          <router-link to="/no">
            <span></span>
            环球青藤
          </router-link>
        </div>
        <router-link class="h" to="/no">
          <img src="../assets/home/link3.jpg" />
        </router-link>
        <router-link class="h" to="/no">
          <img src="../assets/home/link1.png" />
        </router-link>
        <router-link class="h" to="/no">
          <img src="../assets/home/link2.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HomeLive from "../components/Home/Home-live.vue";
import ClassifySlideshow from "../components/Home/Classify-Slideshow.vue";
export default {
  components: {
    HomeLive,
    ClassifySlideshow
  },
  data() {
    return {
      homeData: {}
    };
  },
  created() {
    axios.get("/homeData.json").then(res => {
      this.homeData = res.data;
    });
  }
};
</script>

<style scoped>
.home1 {
  margin-bottom: 20px;
}

.home1 .w1180 {
  display: flex;
  justify-content: space-between;
}

.userlink {
  background: url("../assets/home/partlink.png") top center no-repeat;
  width: 280px;
  height: 158px;
  float: left;
}

.userlink a {
  width: 93px;
  height: 79px;
  float: left;
  text-align: center;
  line-height: 1;
  font-size: 12px;
  color: #6582b0;
}

.userlink a span {
  display: block;
  margin: 19px auto 7px;
  background-image: url("../assets/home/sprite.png");
  width: 30px;
  height: 30px;
}

.userlink a:hover {
  color: rgb(100, 156, 240);
}

.userlink a:nth-child(1) span {
  background-position: -140px -80px;
}

.userlink a:nth-child(1):hover span {
  background-position: -80px -100px;
}

.userlink a:nth-child(2) span {
  background-position: -140px -40px;
}

.userlink a:nth-child(2):hover span {
  background-position: 0 -140px;
}

.userlink a:nth-child(3) span {
  background-position: -100px 0px;
}

.userlink a:nth-child(3):hover span {
  background-position: -100px -40px;
}

.userlink a:nth-child(4) span {
  background-position: 0 -100px;
}

.userlink a:nth-child(4):hover span {
  background-position: -40px -100px;
}

.userlink a:nth-child(5) span {
  background-position: -120px -140px;
}

.userlink a:nth-child(5):hover span {
  background-position: -140px 0;
}

.userlink a:nth-child(6) span {
  background-position: -180px -37px;
  width: 27px;
  height: 27px;
}

.userlink a:nth-child(6):hover span {
  background-position: -180px 0;
}

.h img {
  width: 100%;
  height: 100%;
}

.h {
  transition: 0.3s;
}

.h:hover {
  box-shadow: 0 0 10px 5px rgb(221, 217, 217);
}
</style>

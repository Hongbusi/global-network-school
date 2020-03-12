<template>
  <div class="classify-live">
    <p class="live-title-box">
      <span class="live-title">{{classifyLive.title}}</span>
      <router-link to="/no">
        <span class="more right">
          <span>更多</span>
          <span class="more-icon"></span>
        </span>
      </router-link>
    </p>
    <div class="live-container">
      <CalssifyLiveItem v-for="(item, index) in classifyLive.content" :key="index" :content="item"></CalssifyLiveItem>
    </div>
  </div>
</template>

<script>
import CalssifyLiveItem from "../components/Classify-live-item.vue";
export default {
  components: {
    CalssifyLiveItem
  },
  props: {
    classifyLive: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.live-title-box {
  width: 100%;
  height: 24px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 30px;
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
  background-image: url("../assets/zhibo/icon-more.png");
}

.more:hover .more-icon {
  background-image: url("../assets/zhibo/icon-more-hover.png");
}

.live-container {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
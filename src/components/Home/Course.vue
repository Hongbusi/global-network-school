<template>
  <div class="course w1180">
    <div class="course-title">
      <h2>{{course.title}}</h2>
      <ul>
        <li
          :class="activeNum == index && 'active'"
          v-for="(item, index) in course.tags"
          :key="index"
          @mouseenter="activeNum = index"
        >
          <router-link to="/no" :title="item">{{item}}</router-link>
          <span :class="activeNum == index && 'active'"></span>
        </li>
      </ul>
    </div>
    <div
      v-for="(item, index) in course.content"
      :key="index"
      v-show="activeNum == index"
      class="course-part clear"
    >
      <Coursemain :content="item"></Coursemain>
      <Courseinfo :content="item"></Courseinfo>
    </div>
  </div>
</template>

<script>
import Coursemain from "./Course-main.vue";
import Courseinfo from "./Course-info.vue";

export default {
  components: {
    Coursemain,
    Courseinfo
  },
  data() {
    return {
      activeNum: 0
    };
  },
  props: {
    course: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.course {
  padding-bottom: 19px;
}

.course-title {
  padding-top: 8px;
  height: 90px;
  position: relative;
}

.course-title h2 {
  font-size: 24px;
  font-weight: 700;
  color: #171920;
  line-height: 90px;
}

.course-title ul {
  position: absolute;
  right: 0;
  top: 49px;
  height: 29px;
  overflow: hidden;
  max-width: 1050px;
  text-align: right;
}

.course-title ul li {
  display: inline-block;
  margin-left: 30px;
  text-align: center;
  position: relative;
  cursor: pointer;
  height: 30px;
}

.course-title ul li a {
  font-size: 16px;
  line-height: 1;
  color: #171920;
}

.course-title ul li.active a {
  color: #649cf0;
}

.course-title ul li span {
  position: absolute;
  left: 50%;
  top: 25px;
  margin-left: -16px;
  width: 32px;
  border-top: 3px solid transparent;
}

.course-title ul li span.active {
  border-top: 3px solid #649cf0;
}
</style>
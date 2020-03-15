<template>
  <div class="course-main">

    <router-link to="/no" class="left">
      <img :src="content.picUrl" />
    </router-link>


    <Coursemainitme class="coursemain" v-for="(item, index) in 4" :key="index"></Coursemainitme>
  </div>
</template>

<script>
import Coursemainitme from "./Course-main-item.vue";

export default {
  components: {
    Coursemainitme
  },
  props: {
      content: {
          type: Object,
          default: function() {
              return {}
          }
      }
  }
};
</script>

<style scoped>
.course-main {
  width: 880px;
  float: left;
}

.course-main a:hover {
    transform: translateY(-10px);
    transition: all .3s;
}

.coursemain:nth-of-type(1) {
    margin-left: 20px;
}

.coursemain:nth-of-type(2), .coursemain:nth-of-type(3) {
    margin-right: 20px;
}
</style>
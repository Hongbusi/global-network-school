<template>
  <div class="classify">
    <ul class="clear">
      <li v-for="(item, index) in classify" :key="index" class="left">
        <router-link to="/no">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    classify: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.classify {
  min-height: 83px;
  padding: 5px 20px;
  background-color: #fff;
  margin-bottom: 20px;
  overflow: hidden;
}

.classify ul {
  overflow: hidden;
}

.classify ul li {
  width: 140px;
  font-size: 14px;
  line-height: 1;
  border-left: 1px solid #f0f0f0;
  text-align: center;
  margin: 15px 0;
  margin-left: -1px;
}

.classify ul li a {
  color: #171920;
}

.classify ul li a:hover {
  color: #649cf0;
}
</style>
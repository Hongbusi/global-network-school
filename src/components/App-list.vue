<template>
  <div class="app-list">
    <span class="title">{{appList.title}}</span>
    <div class="list-item">
      <Appitem v-for="(item, index) in appList.apps" :key="index" :appList="item"></Appitem>
    </div>
  </div>
</template>

<script>
import Appitem from "./App-item.vue";
export default {
  components: {
    Appitem
  },
  props: ["appList"]
};
</script>

<style scoped>
.app-list {
  background: #ffffff;
  padding: 25px 25px 0 25px;
  width: 950px;
  overflow: hidden;
  margin-bottom: 15px;
}

.title {
  display: block;
  font-size: 16px;
  color: #666;
  border-bottom: 1px solid #ccdcea;
  padding-bottom: 8px;
}

.list-item {
    width: 1200px;
}
</style>
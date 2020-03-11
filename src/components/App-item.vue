<template>
  <div class="app-item">
    <img :src="appList.imgUrl" />
    <h3>{{appList.name}}</h3>
    <h4>{{appList.info}}</h4>
    <a :href="appList.href" target="_blank">下载</a>
  </div>
</template>

<script>
export default {
  props: ["appList"]
}
</script>

<style scoped>
.app-item {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 423px;
  margin: 20px 0;
  margin-right: 100px;
}

.app-item img {
  width: 69px;
  height: 69px;
  margin-right: 20px;
  float: left;
}

.app-item h3 {
  font-size: 20px;
  color: #004f96;
  padding: 8px 0 20px;
  font-weight: normal;
  width: 81%;
}

.app-item h4 {
  font-size: 14px;
  color: #666666;
  font-weight: normal;
  line-height: 20px;
  overflow: hidden;
}

.app-item a {
  position: absolute;
  right: 0px;
  top: 3px;
  border-width: 1px;
  border-color: #0095db;
  border-style: solid;
  border-radius: 2px;
  background-color: white;
  width: 58px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  color: #0095db;
  font-size: 12px;
}

.app-item a:hover {
  color: #fff;
  background-color: #0095db;
}
</style>
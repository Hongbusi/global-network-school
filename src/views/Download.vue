<template>
  <div class="download">
    <div class="download-nav">
      <div class="w1000">
        <router-link to="/download/app/">
          手机软件大全
          <span></span>
        </router-link>
        <router-link to="/download/app/pc">
          PC软件大全
          <span></span>
        </router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>


<style scoped>
.download {
  padding-bottom: 25px;
  overflow: hidden;
}

.download-nav {
  margin-top: 15px;
}
.download-nav .w1000 {
  background: #00a7eb;
  background-image: -webkit-linear-gradient(90deg, #1492d7 0%, #00a7eb 100%);
  box-shadow: 0px 3px 5px 0px rgba(223, 223, 223, 0.75);
  height: 40px;
  border-radius: 3px;
}

.download-nav .w1000 a {
  font-size: 16px;
  color: #ffffff;
  float: left;
  height: 40px;
  line-height: 40px;
  width: 180px;
  text-align: center;
  position: relative;
}

.download-nav .w1000 a span {
  border-bottom: 5px solid #f8f9fa;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -2.5px;
  z-index: 99;
  display: none;
}

.download-nav .w1000 a:hover span {
    display: block;
}

.download-nav .w1000 a.router-link-exact-active span {
    display: block;
}
</style>
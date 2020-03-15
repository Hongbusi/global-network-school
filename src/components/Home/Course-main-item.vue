<template>
  <div class="course-main-item">
    <div class="item-wrap">
      <router-link to="/no">
        <div class="course-body">
          <p class="body-title">2020年监理工程师-备考指导班</p>
          <p class="subtitle">
            <span class="exam-name">监理工程师</span>
            <i class="ornament-line"></i>
            <span class="course-len">12次课</span>
            <span class="daytime">共6小时</span>
          </p>
          <p class="tag-group clearfix">
            <span class="tag">命题趋势解读</span>
            <span class="tag">考试形式分析</span>
          </p>
          <div class="teacher-group clear">
            <p class="teacher-block">
              <img
                class="teacher-face lazyloaded"
                data-src="http://edu24ol.bs2cdn.100.com/造价-王双增-100100-1535100968175.png"
                alt
                src="http://edu24ol.bs2cdn.100.com/造价-王双增-100100-1535100968175.png"
              />
              <span class="teacher-name">王双增</span>
            </p>
            <p class="teacher-block">
              <img
                class="teacher-face lazyloaded"
                data-src="http://edu24ol.bs2cdn.100.com/shenlei-1524562501534.jpg"
                alt
                src="http://edu24ol.bs2cdn.100.com/shenlei-1524562501534.jpg"
              />
              <span class="teacher-name">沈磊</span>
            </p>
            <p class="teacher-block clearfix">
              <img
                class="teacher-face lazyloaded"
                data-src="http://edu24ol.bs2cdn.100.com/757f2787171fa72c153434624463e9e9043365bf.jpg"
                alt
                src="http://edu24ol.bs2cdn.100.com/757f2787171fa72c153434624463e9e9043365bf.jpg"
              />
              <span class="teacher-name">孙玉保</span>
            </p>
          </div>
        </div>

        <div class="course-footer">
          <p class="limit">限购600</p>
          <p class="people-number">1513人已买</p>
          <p class="footer-price">
            ¥
            <span>1</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.course-main-item {
  width: 280px;
  float: left;
  margin-bottom: 20px;
}

.item-wrap {
  width: 240px;
  min-height: 199px;
  padding: 20px;
  padding-top: 27px;
  display: table;
  background-color: #fff;
  position: relative;
  transition: all 0.3s;
}

.item-wrap:hover {
  transform: translateY(-10px);
  box-shadow: 2px 0 10px 3px rgb(241, 239, 239);
}

.item-wrap a {
  margin-left: 0;
}

.course-body {
  position: relative;
}

.course-footer {
  height: 53px;
  position: relative;
  width: 240px;
  border-top: 1px soldi #f0f0f0;
  color: #9598a2;
  line-height: 12px;
  font-size: 12px;
}

.body-title {
  line-height: 22px;
  margin-bottom: 20px;
  height: 44px;
  font-size: 16px;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #171920;
}

.subtitle {
  color: #9598a2;
  margin-bottom: 12px;
  height: 12px;
  line-height: 12px;
  font-size: 12px;
  font-weight: normal;
}

.subtitle {
  color: #9598a2;
  line-height: 12px;
  font-size: 12px;
  font-weight: normal;
}

.ornament-line {
  height: 10px;
  width: 1px;
  background: #9b9b9b;
  margin: 0 8px;
  display: inline-block;
}

.tag-group {
  margin-bottom: 36px;
  height: 20px;
}

.teacher-group {
  margin-bottom: 18px;
}

.teacher-block {
  float: left;
  width: 40px;
  margin-right: 17px;
}

.teacher-block .teacher-face {
  width: 40px;
  height: 40px;
  display: block;
  margin-bottom: 5px;
  background: #dddddd;
  border-radius: 50%;
}

.teacher-block .teacher-name {
  color: #9598a2;
  text-align: center;
  display: inline-block;
  width: 140%;
  margin-left: -20%;
  font-size: 12px;
}

.tag-group span {
  background: #f7f7f7;
  color: #9598a2;
  /* display: inline-block; */
  padding: 0 5px;
  height: 20px;
  line-height: 20px;
  float: left;
  margin-right: 10px;
  max-width: 72px;
  overflow: hidden;
  font-size: 12px;
}

.course-footer p {
  position: absolute;
}

.course-footer .limit {
  bottom: 24px;
  left: 0;
}

.people-number {
  bottom: 0;
  left: 0;
}

.footer-price {
  bottom: 0;
  right: 0;
  color: #f54030;
  height: 20px;
  line-height: 20px;
}
</style>
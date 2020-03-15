<template>
  <div class="classify-live-item">
    <div class="card-wrap">
      <div class="front">
        <div class="course-card-body">
          <p class="eui f16 title ellipsis2">{{content.title}}</p>
          <p class="tag-group clearfix">
            <span class="tag">{{content.tag}}</span>
            <span class="tag tag-blue">{{content.price}}</span>
          </p>
          <p class="daytime-block f14">
            <span class="eui icon icon-living"></span>
            <span class="eui icon icon-time"></span>
            <span class="icon_time4">{{content.time}}</span>
          </p>
          <p class="teacher-block clearfix">
            <img :src="content.teacherHref" class="teacher-face" />
            <span class="eui f14 teacher-name">{{content.teacherName}}</span>
          </p>
        </div>
        <div class="eui f12 course-card-footer">
          <a class="button-primary">{{content.btn}}</a>
          <p>
            <span>{{content.count}}人</span>已预约
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.classify-live-item {
  width: 280px;
  height: 286px;
  user-select: none;
  float: left;
  margin-bottom: 20px;
  position: relative;
  transition: all 0.5s;
}

.classify-live-item:hover {
  box-shadow: 2px 0 10px 3px rgb(241, 239, 239);
  transform: translateY(-10px);
}

.card-wrap {
  position: relative;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  width: 240px;
  min-height: 206px;
  padding: 20px;
}

.front {
  width: 240px;
  height: 246px;
  padding: 20px;
  display: table;
  background-color: #ffffff;
  height: 100%;
  min-height: 246px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.title {
  line-height: 22px;
  height: 44px;
  margin-top: -3px;
  margin-bottom: 12px;
}

.eui.f16 {
  font-size: 16px;
  font-weight: normal;
}

.tag-group {
  margin-bottom: 16px;
  height: 20px;
}

.tag-group span {
  background: #f7f7f7;
  color: #9598a2;
  display: inline-block;
  padding: 0 5px;
  height: 20px;
  line-height: 20px;
  border-radius: 3px;
  margin-right: 10px;
  max-width: 108px;
  overflow: hidden;
  font-size: 12px;
}

.tag-blue {
  color: #649cf0;
  background: #eff5ff;
}

.daytime-block {
  height: 12px;
  line-height: 12px;
  margin-bottom: 21px;
}

.icon-time {
  margin-top: -1px;
  margin-right: 8px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAAOVBMVEVHcEwXGCgWGCcWGCgWGCgWGCgWFygQECkWGCgWGCcXGSkWGCgTEyUWGCkWGCgVFSMWGSkWGSkWGCnZ8VB7AAAAEnRSTlMApmb0q+k1CplA1sYbingjUNjw/sDJAAAAYUlEQVQI10XOWQ7AIAgE0FHBgS6p9f6HLdUuk5D4+MABABctKo4RWxpZ92IDK8dyW4Netnj2GC4O2fEITaD1ExWdvzp0KoJDIRVvssDTi/smLD9I9/e0VMkjnzZbRM8+e14IFgLYlwl8igAAAABJRU5ErkJggg==);
  width: 13px;
  height: 13px;
  float: left;
}

.icon_time4 {
  font-size: 14px;
}

.teacher-face {
  width: 40px;
  height: 40px;
  display: block;
  margin-bottom: 10px;
  background: #dddddd;
  border-radius: 50%;
  margin-right: 17px;
}

.teacher-name {
  color: #9598a2;
}

.f14 {
  font-size: 14px;
  font-weight: normal;
}

.course-card-footer {
  position: absolute;
  width: 240px;
  bottom: 0;
  border-top: 1px solid #efeff0;
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
}

.course-card-footer p {
  position: absolute;
  right: 0;
  top: -25px;
  font-size: 14px;
}

.course-card-footer p span {
  color: #649cf0;
}

.center-button {
  margin: auto;
  width: 124px;
  float: none;
}

.button-primary {
  background: #649cf0;
  border: 1px solid #649cf0;
  color: #ffffff !important;
  height: 38px;
  line-height: 38px;
  text-align: center;
  display: inline-block;
  border-radius: 50px;
  font-size: 16px;
  padding: 0 15px;
  cursor: pointer;
  min-width: 78px;
  margin: auto;
  width: 124px;
  float: none;
}
</style>
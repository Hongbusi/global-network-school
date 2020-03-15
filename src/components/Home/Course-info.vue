<template>
  <div class="course-info">
    <div class="courseinfo-news">
      <div class="newslink clear">
        <a class="newslink1">报考指南</a>
        <a class="newslink2">考试报名</a>
        <a class="newslink3">准考证打印</a>
        <a class="newslink1">成绩查询</a>
        <a class="newslink2">历年真题</a>
        <a class="newslink3">QQ群交流</a>
      </div>
      <p class="newschoose clear">
        <span :class="active == 0 && 'active'" @mouseenter="active = 0">热点</span>
        <em></em>
        <span :class="active == 1 && 'active'" @mouseenter="active = 1">即时</span>
        <em></em>
        <span :class="active == 2 && 'active'" @mouseenter="active = 2">免费资料</span>
      </p>
      <div class="newslist" v-show="active == 0">
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月15日)</a>
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月14日)</a>
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月13日)</a>
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月12日)</a>
        <a>2020年一级建造师《工程经济》备考模拟试题汇总</a>
        <a>2020年一级建造师考试报名时间汇总</a>
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月11日)</a>
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月10日)</a>
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月9日)</a>
        <a>2020年一级建造师《市政工程》备考模拟试题汇总</a>
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月8日)</a>
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月6日)</a>
      </div>
      <div class="newslist" v-show="active == 1">
        <a>环球网校2020年一级建造师每日一练及答案免费下载(3月15日)</a>
        <a>2020年湖南一级建造师考试报名时间开始了吗？</a>
        <a>2020年河北一级建造师考试报名费需要准备多少</a>
        <a>2020年上海一级建造师考试报名费用</a>
        <a>2020年天津一级建造师考试报名费用</a>
        <a>2020年北京一级建造师考试报名费用是多少</a>
        <a>2020部分省份二建考试推迟 一级建造师考试会受到影响吗？</a>
        <a>贵州省公布领取一级建造师注册证书通知（2019年42批—2020年第4批）</a>
        <a>2020年一级建造师考试《工程法规》考点16：建造师注册执业制度</a>
        <a>2020年一级建造师考试《工程法规》考点15：施工企业从业资格制度</a>
        <a>2020年一级建造师《项目管理》备考模拟试题3</a>
        <a>2020年一级建造师《项目管理》备考模拟试题2</a>
      </div>
      <div class="newslist" v-show="active == 2">
        <ul class="down_block">
          <li>
            <a class="down_title">【环球网校】2019年一建经济思维导图-1574497381017.pdf</a>
            <span class="down_size">8.3 MB</span>
            <span class="down_num">下载数 400</span>
            <a class="down_btn">下 载</a>
          </li>
          <li>
            <a class="down_title">【环球网校】2019年一建经济考试模拟卷及答案-1574496784966.pdf</a>
            <span class="down_size">1.3 MB</span>
            <span class="down_num">下载数 184</span>
            <a class="down_btn">下 载</a>
          </li>
          <li>
            <a class="down_title">【环球网校】2019年一建经济考试经典习题100道-1574501624542.pdf</a>
            <span class="down_size">1.2 MB</span>
            <span class="down_num">下载数 212</span>
            <a class="down_btn">下 载</a>
          </li>
          <li>
            <a class="down_title">【环球网校】2019年一建经济考试大纲-1574497184872.pdf</a>
            <span class="down_size">817 KB</span>
            <span class="down_num">下载数 135</span>
            <a class="down_btn">下 载</a>
          </li>
          <a class="down_more">更多资料</a>
        </ul>
      </div>
    </div>
    <a class="gopage">
      <p>浏览更多</p>
      <span>一级建造师</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
.course-info {
  width: 280px;
  float: left;
  margin-left: 20px;
}

.course-info a {
  cursor: pointer;
}

.courseinfo-news {
  height: 577px;
  background: #fff;
}

.newslink {
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #efeff0;
}

.newslink a {
  font-size: 14px;
  color: #171920;
  line-height: 26px;
  width: 85px;
  float: left;
}

.newslink a:hover {
  color: #649cf0;
}

.newslink .newslink2 {
  width: 83px;
}

.newslink .newslink3 {
  width: 72px;
}

.newschoose {
  padding: 22px 20px 11px;
}

.newschoose span {
  color: #171920;
  font-size: 16px;
  line-height: 1;
  padding-bottom: 10px;
  border-bottom: 3px solid transparent;
  float: left;
}

.newschoose em {
  float: left;
  height: 19px;
  width: 1px;
  background: #efeff0;
  margin: 0 20px;
}

.newschoose span.active {
  color: #649cf0;
  border-color: #649cf0;
}

.newslist {
  padding: 0 20px;
}

.newslist a {
  font-size: 14px;
  color: #9598a2;
  line-height: 34px;
  height: 34px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.down_block li {
  color: #9598a2;
  display: inline-block;
  white-space: normal;
  width: 240px;
  margin: 9px 0;
}

.down_more {
  width: 240px;
  text-align: center;
  height: 30px;
  line-height: 30px;
}

.down_block li a.down_title {
  width: 240px;
  display: inline-block;
  height: 46px;
  line-height: 22px;
  white-space: initial;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.down_size {
  margin-right: 20px;
  color: #9598a2;
  line-height: 30px;
  float: left;
}

.down_block li span {
  color: #9598a2;
  line-height: 30px;
  float: left;
}

.down_block li a.down_btn {
  width: 70px;
  float: right;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #fff;
  border: 1px solid #dcdcdc;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
}

.gopage {
  background: url("../../assets/home/gopage.png") top center no-repeat;
  width: 280px;
  height: 75px;
  margin-top: 20px;
  display: block;
  position: relative;
  top: 0;
  -o-transition: all 0.2s ease-in 0s;
  transition: all 0.2s ease-in 0s;
  -webkit-transition: all 0.2s ease-in 0s;
  -moz-transition: all 0.2s ease-in 0s;
}

.gopage p {
  color: #171920;
  font-size: 16px;
  line-height: 1;
  top: 18px;
  left: 22px;
  position: absolute;
}

.gopage span {
  color: #9598a2;
  font-size: 12px;
  line-height: 1;
  top: 45px;
  left: 22px;
  position: absolute;
}

.gopage:hover {
  transform: translateY(-10px);
}

.down_block li:hover .down_title,
.down_block li:hover .down_num,
.down_block li:hover .down_size {
  color: #649cf0;
}

.down_block li:hover .down_btn {
  color: white;
  background-color: #649cf0;
}

.newslist a:hover {
  color: #649cf0;
}
</style>
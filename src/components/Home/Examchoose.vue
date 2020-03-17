<template>
  <div class="examchoose">
    <p class="title">
      <span @click="isShowFlase" class="icon18 icon18-indexclose"></span>
      <span>请选择你的考试意向</span>
      <em>可选择1个考试 随时调整</em>
    </p>
    <div class="list1">
      <ul>
        <li>
          <p>
            <em class="icon18 icon18-circle"></em>建筑工程
          </p>
          <span data-id="775">一级建造师</span>
          <span data-id="5583">二级建造师</span>
          <span data-id="7114">一级建筑师</span>
          <span data-id="7484">一级消防工程师</span>
          <span data-id="7344">中级注册安全工程师</span>
          <span data-id="7485">二级消防工程师</span>
        </li>
        <li>
          <p>
            <em class="icon18 icon18-circle"></em>财会经济
          </p>
          <span data-id="5607">中级经济师</span>
          <span data-id="7349">高级经济师</span>
          <span data-id="5719">初级会计职称</span>
          <span data-id="5722">中级会计职称</span>
          <span data-id="5846">注册会计师</span>
          <span data-id="5783">中级审计师</span>
        </li>
        <li style="margin:0">
          <p>
            <em class="icon18 icon18-circle"></em>医药健康
          </p>
          <span data-id="8391">健康管理师</span>
          <span data-id="5592">执业药师</span>
          <span data-id="5911">执业护士</span>
          <span data-id="5680">临床执业医师</span>
          <span data-id="5956">中级主管护师</span>
          <span data-id="5973">初级检验技士</span>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            <em class="icon18 icon18-circle"></em>职业资格
          </p>
          <span data-id="8716">一级人力资源师</span>
          <span data-id="5637">心理咨询师</span>
        </li>
        <li>
          <p>
            <em class="icon18 icon18-circle"></em>学历教师
          </p>
          <span data-id="7447">考研</span>
          <span data-id="7559">MBA</span>
          <span data-id="5982">成人高考</span>
        </li>
        <li style="margin:0">
          <p>
            <em class="icon18 icon18-circle"></em>外语少儿
          </p>
          <span data-id="7099">翻译资格(英语)</span>
          <span data-id="9497">KET</span>
          <span data-id="8827">少儿美术</span>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            <em class="icon18 icon18-circle"></em>新职业技能
          </p>
          <span data-id="9184">平面设计</span>
          <span data-id="9463">绘画美术</span>
          <span data-id="8768">理财投资</span>
        </li>
      </ul>
    </div>
    <div class="list2">
      <p class="title2">
        <em class="icon18 icon18-circle"></em>建筑工程
      </p>
      <ul>
        <li>
          <span>建造造价</span>
          <p>
            <em data-id="775" :class="id == '775' && 'active'" @click="id='775';isOk = true">一级建造师</em>
            <em data-id="5583" :class="id == '5583' && 'active'" @click="id='5583';isOk = true">二级建造师</em>
            <em data-id="5632" :class="id == '5632' && 'active'" @click="id='5632';isOk = true">一级造价工程师</em>
            <em data-id="7069" :class="id == '7069' && 'active'" @click="id='7069';isOk = true">二级造价工程师</em>
            <em data-id="5633" :class="id == '5633' && 'active'" @click="id='5633';isOk = true">监理工程师</em>
            <em data-id="7372" :class="id == '7372' && 'active'" @click="id='7372';isOk = true">咨询工程师（投资）</em>
          </p>
        </li>
        <li>
          <span>消防安全</span>
          <p>
            <em data-id="7484" :class="id == '7484' && 'active'" @click="id='7484';isOk = true">一级消防工程师</em>
            <em data-id="7485" :class="id == '7485' && 'active'" @click="id='7485';isOk = true">二级消防工程师</em>
            <em data-id="9095" :class="id == '9095' && 'active'" @click="id='9095';isOk = true">初级消防员</em>
            <em data-id="8882" :class="id == '8882' && 'active'" @click="id='8882';isOk = true">中级消防员</em>
            <em data-id="7344" :class="id == '7344' && 'active'" @click="id='7344';isOk = true">中级注册安全工程师</em>
            <em data-id="7268" :class="id == '7268' && 'active'" @click="id='7268';isOk = true">环境影响评价师</em>
          </p>
        </li>
        <li>
          <span>设计勘察</span>
          <p>
            <em data-id="7114" :class="id == '7114' && 'active'" @click="id='7114';isOk = true">一级建筑师</em>
            <em data-id="7124" :class="id == '7124' && 'active'" @click="id='7124';isOk = true">二级建筑师</em>
            <em data-id="7141" :class="id == '7141' && 'active'" @click="id='7141';isOk = true">结构工程师</em>
            <em data-id="7135" :class="id == '7135' && 'active'" @click="id='7135';isOk = true">注册土木工程师（岩土）</em>
            <em data-id="7268" :class="id == '7268' && 'active'" @click="id='7268';isOk = true">给排水工程师</em>
            <em data-id="7246" :class="id == '7246' && 'active'" @click="id='7246';isOk = true">暖通工程师</em>
            <em data-id="7129" :class="id == '7129' && 'active'" @click="id='7129';isOk = true">电气工程师</em>
            <em data-id="7404" :class="id == '7404' && 'active'" @click="id='7404';isOk = true">城乡规划师</em>
            <em data-id="5663" :class="id == '5663' && 'active'" @click="id='5663';isOk = true">房地产估价师</em>
            <em data-id="7251" :class="id == '7251' && 'active'" @click="id='7251';isOk = true">环保工程师</em>
            <em data-id="7273" :class="id == '7273' && 'active'" @click="id='7273';isOk = true">水利水电工程师</em>
            <em data-id="7260" :class="id == '7260' && 'active'" @click="id='7260';isOk = true">化工工程师</em>
          </p>
        </li>
        <li>
          <span>技能实训</span>
          <p>
            <em data-id="8390" :class="id == '8390' && 'active'" @click="id='8390';isOk = true">BIM</em>
            <em data-id="8477" :class="id == '8477' && 'active'" @click="id='8477';isOk = true">工程造价实训</em>
            <em data-id="8895" :class="id == '8895' && 'active'" @click="id='8895';isOk = true">装配式</em>
            <em data-id="8907" :class="id == '8907' && 'active'" @click="id='8907';isOk = true">施工项目实训</em>
            <em data-id="8051" :class="id == '8051' && 'active'" @click="id='8051';isOk = true">八大员</em>
            <em data-id="9228" :class="id == '9228' && 'active'" @click="id='9228';isOk = true">安全三类人员</em>
          </p>
        </li>
      </ul>
      <p class="title2">
        <em class="icon18 icon18-circle"></em>财会经济
      </p>
      <ul>
        <li>
          <span>经济师</span>
          <p>
            <em data-id="5609">初级经济师</em>
            <em data-id="5607">中级经济师</em>
            <em data-id="7349">高级经济师</em>
          </p>
        </li>
        <li>
          <span>会计</span>
          <p>
            <em data-id="5719">初级会计职称</em>
            <em data-id="5722">中级会计职称</em>
            <em data-id="5846">注册会计师</em>
            <em data-id="8774">初级管理会计师</em>
            <em data-id="9009">中级管理会计师</em>
          </p>
        </li>
        <li>
          <span>金融从业</span>
          <p>
            <em data-id="7073">银行从业资格</em>
            <em data-id="5634">证券从业资格</em>
            <em data-id="7341">基金从业资格</em>
            <em data-id="7337">期货从业资格</em>
          </p>
        </li>
        <li>
          <span>财税</span>
          <p>
            <em data-id="5782">初级审计师</em>
            <em data-id="5783">中级审计师</em>
            <em data-id="5794">统计师</em>
            <em data-id="7572">税务师</em>
          </p>
        </li>
        <li>
          <span>技能实训</span>
          <p>
            <em data-id="5668">会计实训</em>
            <em data-id="9016">财务新青年系列课</em>
          </p>
        </li>
      </ul>
      <p class="title2">
        <em class="icon18 icon18-circle"></em>医药健康
      </p>
      <ul>
        <li>
          <span>营养健康</span>
          <p>
            <em data-id="8391">健康管理师</em>
          </p>
        </li>
        <li>
          <span>执业药师</span>
          <p>
            <em data-id="5592">执业药师</em>
          </p>
        </li>
        <li>
          <span>执业护士</span>
          <p>
            <em data-id="5911">执业护士</em>
          </p>
        </li>
        <li>
          <span>医师资格</span>
          <p>
            <em data-id="5706">医学实践技能</em>
            <em data-id="5680">临床执业医师</em>
            <em data-id="5726">临床助理医师</em>
            <em data-id="9239">口腔执业医师</em>
            <em data-id="9240">口腔助理医师</em>
            <em data-id="8560">中医（专长）医师资格</em>
            <em data-id="5727">中医执业医师</em>
            <em data-id="5728">中医助理医师</em>
            <em data-id="5812">中西医结合执业医师</em>
            <em data-id="5813">中西医结合助理医师</em>
            <em data-id="8502">乡村全科执业助理医师</em>
          </p>
        </li>
        <li>
          <span>卫生职称</span>
          <p>
            <em data-id="5936">初级护师</em>
            <em data-id="5956">中级主管护师</em>
            <em data-id="5868">初级药士</em>
            <em data-id="5863">初级药师</em>
            <em data-id="5858">中级主管药师</em>
            <em data-id="5883">初级中药士</em>
            <em data-id="5878">初级中药师</em>
            <em data-id="5873">中级主管中药师</em>
            <em data-id="5973">初级检验技士</em>
            <em data-id="5955">初级检验技师</em>
            <em data-id="5948">检验主管技师</em>
            <em data-id="6043">内科主治医师</em>
            <em data-id="6042">外科主治医师</em>
            <em data-id="6044">妇产科主治医师</em>
            <em data-id="9241">儿科主治医师</em>
            <em data-id="9242">全科主治医师</em>
          </p>
        </li>
      </ul>
      <p class="title2">
        <em class="icon18 icon18-circle"></em>职业资格
      </p>
      <ul>
        <li>
          <span>人力</span>
          <p>
            <em data-id="8716">一级人力资源师</em>
            <em data-id="8717">二级人力资源师</em>
            <em data-id="8718">三级人力资源师</em>
            <em data-id="8923">四级人力资源师</em>
            <em data-id="8359">人力资源实训</em>
            <em data-id="8840">劳动关系协调师</em>
            <em data-id="8844">国际注册人力资源管理师</em>
          </p>
        </li>
        <li>
          <span>心理</span>
          <p>
            <em data-id="5637">心理咨询师</em>
            <em data-id="8360">心理咨询实操课</em>
            <em data-id="9492">中科院在职课程研修班</em>
          </p>
        </li>
        <li>
          <span>资格</span>
          <p>
            <em data-id="7569">育婴师</em>
            <em data-id="8319">导游证</em>
          </p>
        </li>
        <li>
          <span>职称</span>
          <p>
            <em data-id="8521">软考高级职称</em>
            <em data-id="8520">软考中级职称</em>
          </p>
        </li>
      </ul>
      <p class="title2">
        <em class="icon18 icon18-circle"></em>学历教师
      </p>
      <ul>
        <li>
          <span>考研</span>
          <p>
            <em data-id="7559">在职研究生(MBA)</em>
            <em data-id="7447">考研</em>
          </p>
        </li>
        <li>
          <span>学历</span>
          <p>
            <em data-id="5982">成人高考</em>
            <em data-id="5853">自学考试</em>
            <em data-id="8648">网络教育学历</em>
          </p>
        </li>
        <li>
          <span>教师</span>
          <p>
            <em data-id="7211">教师资格</em>
            <em data-id="6013">教师招聘考试</em>
            <em data-id="9454">普通话</em>
          </p>
        </li>
        <li>
          <span>公考</span>
          <p>
            <em data-id="5594">国家公务员</em>
            <em data-id="6025">社会工作者</em>
          </p>
        </li>
        <li>
          <span>银行招聘</span>
          <p>
            <em data-id="8851">银行校园招聘</em>
          </p>
        </li>
      </ul>
      <p class="title2">
        <em class="icon18 icon18-circle"></em>外语少儿
      </p>
      <ul>
        <li>
          <span>英语</span>
          <p>
            <em data-id="7099">翻译资格(英语)</em>
            <em data-id="9497">KET</em>
            <em data-id="7096">新概念</em>
            <em data-id="7094">BEC商务英语</em>
            <em data-id="7100">公共英语</em>
            <em data-id="7079">成人英语三级</em>
            <em data-id="5854">自考英语</em>
            <em data-id="8856">英语地道说</em>
            <em data-id="7098">英语四六级</em>
          </p>
        </li>
        <li>
          <span>少儿</span>
          <p>
            <em data-id="8847">少儿英语</em>
            <em data-id="8744">少儿编程</em>
            <em data-id="8827">少儿美术</em>
            <em data-id="9485">少儿书法</em>
            <em data-id="8899">国学诗词</em>
          </p>
        </li>
      </ul>
      <p class="title2">
        <em class="icon18 icon18-circle"></em>新职业技能
      </p>
      <ul>
        <li>
          <span>设计</span>
          <p>
            <em data-id="9184">平面设计</em>
            <em data-id="9018">影视后期</em>
          </p>
        </li>
        <li>
          <span>理财</span>
          <p>
            <em data-id="8768">理财投资</em>
            <em data-id="8921">每天听本书</em>
          </p>
        </li>
        <li>
          <span>绘画美术</span>
          <p>
            <em data-id="9194">彩铅手绘</em>
            <em data-id="9196">水彩绘画</em>
          </p>
        </li>
        <li>
          <span>大数据</span>
          <p>
            <em data-id="9206">数据分析师</em>
            <em data-id="9207">大数据工程师</em>
          </p>
        </li>
        <li>
          <span>计算机技能</span>
          <p>
            <em data-id="9223">Office办公软件</em>
          </p>
        </li>
      </ul>
    </div>
    <p class="choosemore">
      <span>点击查看更多考试 &gt;</span>
    </p>
    <a href="javascript:;" @click="isOk && setIsShow(false)" :class="isOk && 'active'">选好了</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      isOk: false,
      id: ""
    };
  },
  methods: {
    ...mapMutations(["setIsShow"]),
    isShowFlase() {
      this.setIsShow(false);
    }
  },
  computed: {
    ...mapState(["isShow"])
  }
};
</script>

<style scoped>
.examchoose {
  height: 570px;
  width: 1050px;
  background: #fff;
  position: fixed;
  top: 50%;
  margin-top: -285px;
  left: 50%;
  margin-left: -525px;
  z-index: 11;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.examchoose .title {
  position: relative;
  color: #333;
  padding: 25px 50px 30px;
  font-size: 20px;
  line-height: 1;
}

.examchoose .list1 {
  display: none;
}

.examchoose .list2 {
  display: block;
  width: 1035px;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}

.examchoose .title .icon18 {
  position: absolute;
  right: 25px;
  top: 20px;
  cursor: pointer;
}

.icon18-indexclose {
  background-image: url("../../assets/home/sprite.png");
  background-position: -180px -74px;
  width: 16px;
  height: 16px;
}

.examchoose .title {
  color: #333;
  font-size: 20px;
  line-height: 1;
}

.examchoose .title em {
  color: #676a73;
  font-size: 14px;
  margin-left: 30px;
  font-style: normal;
}

.examchoose .list2 .title2 {
  color: #333;
  font-size: 16px;
  line-height: 1;
  float: left;
  width: 100%;
  padding-left: 50px;
  padding-bottom: 13px;
}

.examchoose .list2 .title2 .icon18 {
  vertical-align: middle;
  margin-right: 10px;
  position: relative;
  top: -1px;
}

.icon18-circle {
  background-image: url("../../assets/home/sprite.png");
  background-position: -140px -120px;
  width: 8px;
  height: 8px;
}

.examchoose .list2 ul {
  padding-bottom: 5px;
}

.examchoose .list2 ul li {
  width: 1000px;
}

.examchoose .list2 ul li span {
  padding-left: 70px;
  width: 70px;
  color: #333;
  font-size: 14px;
  line-height: 30px;
  float: left;
}

.examchoose .list2 ul li p {
  float: left;
  width: 860px;
}

.examchoose .list2 ul li p em {
  float: left;
  font-size: 12px;
  line-height: 1;
  color: #676a73;
  padding: 9px 13px;
  -webkit-border-radius: 38px;
  -moz-border-radius: 38px;
  border-radius: 38px;
  border: 1px solid #c9cace;
  margin: 0 15px 15px 0;
  white-space: nowrap;
  font-style: normal;
  cursor: pointer;
}

.examchoose .choosemore {
  display: none;
  color: #659cef;
  font-size: 14px;
  line-height: 1;
  position: absolute;
  bottom: 85px;
  left: 0;
  width: 100%;
  text-align: center;
}

.examchoose a {
  width: 156px;
  height: 40px;
  line-height: 40px;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  border-radius: 40px;
  text-align: center;
  background: #dddfe8;
  color: #fff;
  display: block;
  margin: 0 auto;
  margin-left: auto;
  position: absolute;
  bottom: 38px;
  left: 50%;
  margin-left: -78px;
}

.examchoose .active {
  background: #659cef;
  border: 1px solid #659cef !important;
  color: #fff !important;
}
</style>
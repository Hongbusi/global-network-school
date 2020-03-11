<template>
    <div class="phone w1000">
        <Applist v-for="(item, index) in appList" :key="index" :appList="item"></Applist>
    </div>
</template>

<script>
import Applist from "./App-list.vue";
export default {
    components: {
        Applist
    },
    data() {
        return {
            appList: [
                {
                    title: "学习工具",
                    apps: [
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/logo_副本-1544148318946.png",
                            name: "环球网校",
                            info: "移动智能学习平台，涵盖建工类、财经类、医卫类、职业资格类、外语类、教师公考类、学历类、职称类等百余项课程。在线直播，名师牛，免费课程常更新，随时随地随身学！环球网校领军职业教育16年！",
                            href: "http://www.hqwx.com/download/edu24olapp.html?from=official"
                        }
                    ]
                },
                {
                    title: "题库练习",
                     apps: [
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/logo3-1510641008788.png",
                            name: "建造师快题库",
                            info: "150万建工学员的选择！帮助一级建造师、二级建造师、一级造价工程师、二级造价工程师、一级消防工程师、监理工程师、一级建筑师学员查缺补漏，突破盲区，快速提分！",
                            href: "http://www.hqwx.com/download/tk_jianzaoshi.html?from=official"
                        },
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/logo4-1510641067131.png",
                            name: "经济师快题库",
                            info: "刘艳霞老师推荐！边学习边做题，备考效率更高，复习节奏更强，过关机会更大！涵盖初级经济师、中级经济师、银行从业资格、证券从业资格、基金从业资格、期货从业资格、软考中/高级职称等考试，累计服务51万学员！",
                            href: "http://www.hqwx.com/download/tk_jinjishi.html?from=official"
                        },
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/logo5-1510641077198.png",
                            name: "会计快题库",
                            info: "考财会，一定不能少了做题！每个考试为你准备了3000+道好题，涵盖初级会计职称、中级会计职称、注册会计师、初级审计师、中级审计师等考试，下载免费做题！",
                            href: "http://www.hqwx.com/download/tk_kuaiji.html?from=official"
                        },
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/logo17-1510641089978.png",
                            name: "快题库",
                            info: "涵盖建工类、财经类、医卫类、职业资格类、外语类、教师公考类、学历类、职称类等百余项课程，帮助百万考生顺利拿到证书！",
                            href: "http://www.hqwx.com/download/tikuapp.html?from=official"
                        },
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/%E5%8C%BB%E5%AD%A6APP-1515393393664.png",
                            name: "医学快题库",
                            info: "一款专门为备考执业药师、执业医师、中药师、中药士、护师、技师、护士证书的学员打造的免费刷题APP，每时每刻、随时随地想刷就刷！每天进步一点点，证书到手快一点！",
                            href: "http://www.hqwx.com/download/tk_zhiyeyishi.html?from=official"
                        },
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/%E6%95%99%E5%B8%88APP-1515394067125.png",
                            name: "教师资格快题库",
                            info: "10000+道免费习题，帮助你快速拿下教师资格证书！累计7万+名教师考试学员选择快题库，轻松实现教师梦，快加入他们！",
                            href: ""
                        },
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/%E4%BA%BA%E5%8A%9B-1534988992691.png",
                            name: "人力快题库",
                            info: "一级人力资源师、二级人力资源师、三级人力资源师、四级人力资源管理师考试通关必备利器，10000+道历年真题、模拟题、章节练习随你刷！学习+做题，双管齐下，通关无忧！",
                            href: "http://www.hqwx.com/download/tk_renliziyuan.html?from=official"
                        },
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/96x96-1552461221300.png",
                            name: "消防快题库",
                            info: "消防工程师学员的专属题库！历年真题、章节练习、每日一练等免费习题等你领取！",
                            href: "http://www.hqwx.com/download/tk_xiaofang.html?from=official"
                        },
                        {
                            imgUrl: "http://edu24ol.bs2cdn.100.com/360%E3%80%81%E8%B1%8C%E8%B1%86%E8%8D%9A_512-1581324207405.png",
                            name: "社会工作者快题库",
                            info: "社会工作者考试全覆盖",
                            href: "http://www.hqwx.com/download/tk_shegong.html?from=official"
                        }
                    ]
                }
            ]
        }
    }
}
</script>
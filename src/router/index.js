import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Zhibo from "../views/Zhibo.vue";
import Download from "../views/Download.vue";
import LearningCenter from "../views/Learning-center.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Coupon from "../views/Coupon.vue";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "【环球网校官方网站】职业教育在线_移动学习、职达未来！"
    }
  },
  {
    path: "/zhibo",
    name: "Zhibo",
    component: Zhibo,
    meta: {
      title: "环球网校直播课程预告--环球网校"
    }
  },
  {
    path: "/no",
    name: "No",
    component: () => import("../views/No.vue"),
    meta: {
      title: "功能暂未开通--环球网校"
    }
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
    meta: {
      title: "搜索"
    }
  },
  {
    path: "/download/app",
    name: "Download",
    component: Download,
    meta: {
      title: "环球网校移动应用APP下载"
    },
    children: [{
        path: "/download/app/",
        name: "Phone",
        component: () => import("../components/Phone-app.vue"),
        meta: {
          title: "环球网校移动应用APP下载"
        },
      },
      {
        path: "/download/app/pc",
        name: "Pc",
        component: () => import("../components/Pc-app.vue"),
        meta: {
          title: "环球网校离线课堂"
        },
      }
    ]
  },
  {
    path: "/learning/center",
    name: "LearningCenter",
    component: LearningCenter,
    meta: {
      title: "学习中心--环球网校"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "学员登录-环球网校"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "学员注册-环球网校"
    }
  },
  {
    path: "/coupon",
    name: "Coupon",
    component: Coupon,
    meta: {
      title: "环球网校新人注册领150元优惠券活动"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
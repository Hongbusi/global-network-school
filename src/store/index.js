import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否登录
    isLogin: false,
    isShow: false,
    isLoginOrRegister: true,
    linkActive: 1
  },
  mutations: {
    setIsShow(state, value) {
      state.isShow = value
    },
    setIsLoginOrRegister(state, value) {
      state.isLoginOrRegister = value
    },
    setLinkActive(state, value) {
      state.linkActive = value;
    }
  },
  actions: {},
  modules: {}
})
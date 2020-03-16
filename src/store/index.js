import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否登录
    isLogin: false,
    isShow: false
  },
  mutations: {
    setIsShow(state, value) {
      state.isShow = value
    }
  },
  actions: {
  },
  modules: {
  }
})

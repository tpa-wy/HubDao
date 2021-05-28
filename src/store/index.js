import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: ''
  },
  mutations: {
    setAccount(state, account) { //设置参数
      state.account = account;
    }
  },
  actions: {},
  modules: {}
})
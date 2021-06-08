import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: '',
    removeLiquidity:null
  },
  mutations: {
    setAccount(state, account) { //设置参数
      // console.log('切换了账户',account)
      state.account = account;
    },
    setremoveLiquidity(state, info) { //设置参数
      state.removeLiquidity = info;
    }
  },
  actions: {},
  modules: {}
})
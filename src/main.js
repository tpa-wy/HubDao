import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 element-ui 框架
import {
  container,
  header,
  aside,
  main,
  menu,
  submenu,
  menuItemGroup,
  menuItem,
  dropdown,
  dropdownItem,
  DropdownMenu,
  Switch,
  input,
  progress,
  checkbox,
  message
} from 'element-ui';
Vue.use(container)
Vue.use(header)
Vue.use(aside)
Vue.use(main)
Vue.use(menu)
Vue.use(submenu)
Vue.use(menuItemGroup)
Vue.use(menuItem)
Vue.use(dropdown)
Vue.use(dropdownItem)
Vue.use(DropdownMenu)
Vue.use(Switch)
Vue.use(input)
Vue.use(progress)
Vue.use(checkbox)

Vue.prototype.$message = message
// 引入封装的Dialog弹框
import dialog from './components/dialog/dialog.js'
Vue.use(dialog)
// 引入公共的方法
import util from '@/util/util'
Vue.prototype.$util = util
Vue.config.productionTip = false
// 检测用户是否安装MetaMask
if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
}
// 使用懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('../public/assets/loading.gif'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('../public/assets/loading.gif')  //加载失败图片
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
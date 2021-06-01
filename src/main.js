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
  message,
  option,
  select
} from 'element-ui';

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataset'
import 'zrender/lib/svg/svg'
import "echarts/extension/dataTool/index"


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
Vue.use(option)
Vue.use(select)
Vue.component('v-chart', ECharts);

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
  loading: require('../public/assets/loading.gif'), //加载中图片，一定要有，不然会一直重复加载占位图
  error: require('../public/assets/loading.gif') //加载失败图片
});

import sdk from '@/util/index'
Vue.prototype.$sdk = sdk
// 获取账户的余额
// console.log(sdk.getBalance('0x19bEB3f673D119cdC5f526710d89f162B2D3E8d3'))
// 转账
// console.log(sdk.transfer('0x26b9F14f32a3063142EaE9535aee2228B6078a84', '0.01', 18))
// 一件查询合约
/* this.$sdk.getMultiBalanceOf()
.then(list=>{console.log(list)})
.catch(error=>console.error(error))
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
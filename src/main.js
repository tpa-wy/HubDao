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
// console.log(sdk.transfer('0x26b9F14f32a3063142EaE9535aee2228B6078a84', '0.01', '0xa71edc38d189767582c38a3145b5873052c3e47a', 18))
// 一件查询合约
/* this.$sdk.getMultiBalanceOf()
.then(list=>{console.log(list)})
.catch(error=>console.error(error))
 */

// 获取HT的余额
/* const {
  // 将金额转换为小数
  formatUnits,
  // 将小数转换为金额
  parseUnits
} = require("@ethersproject/units");
sdk.getHTCurrency().then(res => {
  // 得到HT的余额
  console.log(formatUnits(res))
}).catch(error => {
  console.log('error=>', error)
})
var obj = {
  "name": "HT",
  // wht
  "address": "",
  "symbol": "HT",
  "decimals": 18,
  "chainId": 128,
  "logoURI": "data:image/png;base64,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"
}
 */
// 添加流动性
// sdk.addLiquidity('0xa71edc38d189767582c38a3145b5873052c3e47a')
/* this.$sdk
        .addLiquidity(
          "0xa71edc38d189767582c38a3145b5873052c3e47a", // usdt合约
          "0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c", // mdx合约
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", // usdt的授权金额
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", // usdt的授权金额
        //   "0x00", // mdx的授权金额
          "0.01", // usdt的金额
          "0.0039390087" // mdx的金额
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error)); */

/* // 查询lp
const {
    // 将金额转换为小数
    formatUnits,
    // 将小数转换为金额
    parseUnits
} = require("@ethersproject/units");
sdk.getLpBalance()
    .then(list => {
        console.log(list)
        for (var i = 0; i < list.length; i += 5) {
            console.log(formatUnits(list[i]))
            console.log(list[i + 1])
            console.log(list[i + 2])
        }
    })
    .catch(error => console.error(error))
 */
// 去除流动性
// sdk.removeLpETH("0x1b498643DeB60bbaedC1fc1FD526a09937713AD9","0xa71edc38d189767582c38a3145b5873052c3e47a","0x00","0.0001")
// sdk.removeLpETH("0x1b498643DeB60bbaedC1fc1FD526a09937713AD9","0xa71edc38d189767582c38a3145b5873052c3e47a","0xfffffffffffffffffffffffffffffffffffff","0.0001")

// sdk.removeLp("0xc1467C024cF2c68Fc487dE4e6735a720CD508c38","0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c","0xa71edc38d189767582c38a3145b5873052c3e47a","0x00","0.0001")
/* sdk.removeLp("0xc1467C024cF2c68Fc487dE4e6735a720CD508c38", "0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c", "0xa71edc38d189767582c38a3145b5873052c3e47a", "0xfffffffffffffffffffffffffffff", "0.0001")
    .then(res => {
        console.log(res)
    })
    .catch(error => console.error(error)) */

    // sdk.swapExactETH()
    sdk.swapExactTokensForETH()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
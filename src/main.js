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
  checkbox
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
// 引入封装的Dialog弹框
import dialog from './components/dialog/dialog.js'
Vue.use(dialog)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
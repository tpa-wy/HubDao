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
  Switch
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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
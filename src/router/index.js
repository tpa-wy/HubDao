import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: '/Index',
    component: () => import('@/views/Home.vue'),
    children: [{
      path: 'Index',
      name: 'Index',
      component: () => import('@/views/Index.vue'),
    }, {
      path: 'Swap',
      name: 'Swap',
      component: () => import('@/views/ExchangeHUB/Swap.vue'),
    }, {
      path: 'YieldFarming',
      name: 'YieldFarming',
      component: () => import('@/views/StakeHUB/YieldFarming.vue'),
    }]
  },
  {
    path: '/error',
    name: 'Error',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Error.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
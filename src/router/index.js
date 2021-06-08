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
      path: 'ExchangeHUB',
      name: 'ExchangeHUB',
      component: () => import('@/views/ExchangeHUB/ExchangeHUB.vue'),
      redirect: '/ExchangeHUB/Swap',
      children: [{
        path: 'Swap',
        name: 'Swap',
        component: () => import('@/views/ExchangeHUB/Swap.vue'),
      }, {
        path: 'Liquidity',
        component: () => import('@/views/ExchangeHUB/Liquidity.vue'),
        children:[
          {
            name:'Add-Liquidity',
            path:'',
            component: () => import('@/views/ExchangeHUB/liquidity/index.vue'),
          },
          {
            name:'remove-Liquidity',
            path:'remove-Liquidity',
            component: () => import('@/views/ExchangeHUB/removeLiquidity/index.vue'),
          },
          {
            name:'Supply-Liquidity',
            path:'Supply-Liquidity',
            component: () => import('@/views/ExchangeHUB/liquidity/supply.vue'),
          }
        ]
      }]
    }, {
      path: 'Start-upHUB',
      name: 'Start-upHUB',
      component: () => import('@/views/Start-upHUB/Start-upHUB.vue'),
      redirect: '/Start-upHUB/IHO',
      children: [{
        path: 'IHO',
        name: 'IHO',
        component: () => import('@/views/Start-upHUB/IHO.vue'),
      }, {
        path: 'IHOs',
        name: 'IHOs',
        component: () => import('@/views/Start-upHUB/IHOs.vue'),
      }]
    },{
      path: 'StakeHUB/YieldFarming',
      name: 'YieldFarming',
      component: () => import('@/views/StakeHUB/YieldFarming.vue'),
    }, {
      path: 'StakeHUB/CommunityPool',
      name: 'CommunityPool',
      component: () => import('@/views/StakeHUB/CommunityPool.vue'),
    },
    {
      path:'PredictionHUB/Lottery',
      name:'Lottery',
      component: () => import('@/views/Lottery/index.vue'),
    },
    {
      path:'/Vote/vote',
      name:'Vote',
      component: () => import('@/views/Vote/index.vue'),
    },
  ]
  },

  {
    path: '/error',
    name: 'Error',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Error.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue'),
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
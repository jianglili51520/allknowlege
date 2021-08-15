import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'statistics',
    component: () => import('../views/statistics.vue')
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('../views/statistics.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search.vue')
  },
  {
    path: '/companyDetail/:companyId',
    name: 'companyDetail',
    component: () => import('../views/companyDetail.vue')
  },
  {
    path: '/riskReport/:reportId/:companyId',
    name: 'riskReport',
    component: () => import('../views/riskReport.vue')
  },
  {
    path: '/riskList/:reportId',
    name: 'riskList',
    component: () => import('../views/riskList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

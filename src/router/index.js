import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Values',
    component: () => import('../components/organisms/Values.vue')
  },
  {
    path: '/agile-principles',
    name: 'principles',
    component: () => import('../components/organisms/Principles.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
})

export default router

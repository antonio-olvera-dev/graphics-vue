import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home2',
    name: 'home2',

    component: () => import('../views/Home2.vue')
  },
  {
    path: '/home3',
    name: 'home3',

    component: () => import('../views/Home3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

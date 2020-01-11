import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import On from '../views/on.vue'
import Off from '../views/off.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/on',
    name: 'on',
    component: On
  },
  {
    path: '/off',
    name: 'off',
    component: Off
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => MainPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('../views/CardResult')
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: () => import('../views/PromotionDisplay')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

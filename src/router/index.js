import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/FrontPage')
  },
  {
    path: '/new',
    name: 'New User',
    component: () => import('../views/MainPage')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/SignUp')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../views/CardResult')
  },
  {
    path: '/promotions',
    name: 'Promotion List',
    component: () => import('../views/ListPromotions')
  },
  {
    path: '/promotion/:id',
    name: 'Promotion',
    component: () => import('../views/PromotionDisplay')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { path: '/*', component: () =>import('../views/NotFound')}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

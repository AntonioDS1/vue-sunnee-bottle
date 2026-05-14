import { createRouter, createWebHistory } from 'vue-router'
import ThankView from '../views/ThankView/ThankView.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/WelcomeView/WelcomeView.vue')
  },
  {
    path: '/home',
    component: () => import('../views/HomeView/HomeView.vue')
  },
  {
    path: '/thank',
    component: ThankView
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})

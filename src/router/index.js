import { createRouter, createWebHistory } from 'vue-router'


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
    component: () => import('../views/ThankView/ThankView.vue')
  },


]

export default createRouter({
  history: createWebHistory(),
  routes
})

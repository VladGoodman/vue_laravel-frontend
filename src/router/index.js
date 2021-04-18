import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

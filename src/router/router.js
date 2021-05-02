import { createRouter, createWebHistory } from 'vue-router'


import Index from '../views/Index.vue'
import Auth from '../views/Auth.vue'
import Logout from '../components/Logout.vue'
import Profile from '../views/Profile.vue'
import ListChanges from '../components/ListСhanges/ListChanges'
import helper from './helper/helper'
import TimeStatistics from '../components/TimeStatistics/TimeStatistics'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    beforeEnter: helper.guest
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    beforeEnter: helper.user
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: helper.user,
    children: [
      {
        path: '/profile',
        name: 'profileIndex',
        component: ListChanges
      },
      {
        path: '/profile/time',
        name: 'profileTime',
        component: TimeStatistics
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

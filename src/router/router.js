import { createRouter, createWebHistory } from 'vue-router'


import Index from '../views/Index.vue'
import Auth from '../views/Auth.vue'
import Logout from '../components/Logout.vue'
import Profile from '../views/Profile.vue'
import ListChanges from '../components/ListСhanges/ListChanges'


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
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    children: [
      {
        path: '/profile',
        component: ListChanges
      }
      // {
      //   path: '/profile/test2',
      //   component: ExampleTwo
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

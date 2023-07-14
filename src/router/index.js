import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,

      children: [
        {
          path: '/',
          name: 'home',
          component: () => import("../views/Home/Home.vue"),
        },
        {
          path: '/employee',
          name: 'employee',
          component: () => import("../views/Employee/Employee.vue"),
        },
        {
          path: '/hotels',
          name: 'hotels',
          component: () => import("../views/Hotels/Hotels.vue"),
        },
        {
          path: '/tours',
          name: 'tours',
          component: () => import("../views/Tours/Tours.vue"),
        },
        {
          path: '/social',
          name: 'social',
          component: () => import("../views/Social/Social.vue"),
        },
        {
          path: '/chat',
          name: 'chat',
          component: () => import("../views/Chat/Chat.vue"),
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import("../views/Error/Error.vue"),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/Login/Login.vue"),
    }

  ]
})

export default router

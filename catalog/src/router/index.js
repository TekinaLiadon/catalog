import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index.js'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'CardPost',
    component: () => import('@/components/home/PostSolo.vue')
  },
  {
    path: '/group-list/:id',
    name: 'GroupSolo',
    component: () => import('@/components/groups/GroupSolo.vue')
   },
  {
    path: '/group-list',
    name: 'GroupList',
    component: () => import('../views/group-directory/GroupList.vue')
  },
  {
    path: '/create-group',
    name: 'CreateGroup',
    component: () => import('../views/group-directory/CreateGroup.vue')
  },
  {
    path: '/player-directory',
    name: 'PlayerDirectory',
    component: () => import('../views/group-directory/PlayerDirectory.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth')
 },
  {
    path: '/test',
    name: 'Test',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Test')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
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
    component: () => import('../views/Test')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

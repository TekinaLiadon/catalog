import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

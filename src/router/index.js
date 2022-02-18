import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index.js'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная'
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/components/error/NotFound404'),
  },
  {
    path: '/group-list/:id',
    name: 'GroupSolo',
    component: () => import('@/components/groups/GroupSolo.vue')
   },
  {
    path: '/group-list',
    name: 'GroupList',
    meta: {
      title: 'Список групп'
    },
    component: () => import('../views/group-directory/GroupList.vue')
  },
  {
    path: '/create-group',
    name: 'CreateGroup',
    meta: {
      requiresAuth: true,
      title: 'Создание группы'
    },
    component: () => import('../views/group-directory/CreateGroup.vue')
  },
  {
    path: '/player-directory',
    name: 'PlayerDirectory',
    meta: {
      requiresAuth: true,
      title: 'Каталог игроков'
    },
    component: () => import('../views/group-directory/PlayerDirectory.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      requiresAuth: true,
      title: 'Профиль'
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Авторизация'
    },
    component: () => import('../views/Auth')
 },
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: 'Тест'
    },
    component: () => import('../views/Test')
  },

  {
    path: '/test/:id',
    name: 'CardPost',
    component: () => import('@/components/home/PostSolo.vue')
  },
  {
    path: '/map',
    name: 'Map',
    meta: {
      title: 'Карта'
    },
    component: () => import('../views/Map')
  },
  {
    path: '/gif',
    name: 'Gif',
    meta: {
      title: 'Гифки'
    },
    component: () => import('../views/project/Gif')
  },
  {
    path: '/gif/:id',
    name: 'UserGif',
    component: () => import('@/components/gif/UserGif')
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

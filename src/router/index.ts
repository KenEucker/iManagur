import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Hello',
    component: () => import('../views/Hello.vue'),
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('../views/Albums.vue'),
  },
  {
    path: '/albums/:album',
    name: 'Images',
    component: () => import('../views/Images.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

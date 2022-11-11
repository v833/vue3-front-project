import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'main',
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: []
  }
]

export default routes

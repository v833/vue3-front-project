import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible'
import pcRoutes from './pc-routes'
import mobileRoutes from './mobile-routes'

export default createRouter({
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes,
  history: createWebHistory()
})

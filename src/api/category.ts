// import request from '@/utils/request'

import { ALL_CATEGORY } from '@/constants'

/**
 * 获取分类列表
 */
export const getCategory = () => {
  return Promise.resolve([
    ALL_CATEGORY,
    { name: 'UI/UX', id: '0' },
    { name: '平面', id: '1' },
    { name: '插画/漫画', id: '2' },
    { name: '摄影', id: '3' },
    { name: '游戏', id: '4' },
    { name: 'UI/UX', id: '5' },
    { name: '平面', id: '6' },
    { name: '插画/漫画', id: '7' },
    { name: '摄影', id: '8' },
    { name: '游戏', id: '9' }
  ])
}

export const init = () => {
  return Promise.resolve({ name: 'init' })
}

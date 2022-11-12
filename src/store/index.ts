import { createStore } from 'vuex'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'

const modules = {}
const modulesFiles: any = import.meta.glob('./modules/*.ts', { eager: true })

Object.keys(modulesFiles).forEach((key) => {
  const moduleName = key.replace(/(\.\/modules\/|\.ts)/g, '')
  modules[moduleName] = modulesFiles[key].default
})

export default createStore({
  getters,
  modules,
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      key: 'front-end',
      paths: ['user', 'category', 'theme']
    })
  ]
})

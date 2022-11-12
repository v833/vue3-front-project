import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import { useREM } from '@/utils/flexible'
import mLibs from '@/libs'
// 注册svg-icons
import 'virtual:svg-icons-register'

useREM()

createApp(App).use(router).use(store).use(mLibs).mount('#app')

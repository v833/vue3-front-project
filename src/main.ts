import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import { useREM } from '@/utils/flexible'
import useTheme from './utils/theme'

import mLibs from '@/libs'
// 注册svg-icons
import 'virtual:svg-icons-register'

useTheme()
useREM()

createApp(App).use(router).use(store).use(mLibs).mount('#app')

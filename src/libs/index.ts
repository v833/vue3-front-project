import { App } from 'vue'
export { confirm } from './confirm'
export { message } from './message'

const data: any = import.meta.glob('./*/index.vue', { eager: true })

export default (app: App) => {
  Object.keys(data).forEach((key) => {
    const componentName = 'm-' + /.\/([\w-]+)\/?/.exec(key)?.[1]
    const component = data[key].default
    app.component(componentName, component)
  })
}

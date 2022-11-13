import { App } from 'vue'

const data: any = import.meta.glob('./modules/*.ts', { eager: true })

export default (app: App) => {
  Object.keys(data).forEach((key) => {
    const componentName: any = /modules\/(.*).ts$/.exec(key)?.[1]
    const component = data[key].default
    app.directive(componentName, component)
  })
}

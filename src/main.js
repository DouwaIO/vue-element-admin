import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters' // 全局filter
import './icons' // icon
import './errorLog'// error log
import './permission' // 权限
import './mock'  // 该项目所有请求使用mockjs模拟

Vue.use(ElementUI)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]) // 注册或获取全局过滤器。
})

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示.

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

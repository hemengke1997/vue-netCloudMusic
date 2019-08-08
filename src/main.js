import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'normalize.css'  // css重置
import 'less/base.less'  // 引入全局less


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

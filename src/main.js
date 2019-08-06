import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './vant'           // 引入vant-ui
import 'less/base.less'   // 引入全局样式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

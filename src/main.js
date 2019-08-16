import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

import 'normalize.css'  // css重置
import 'less/base.less'  // 引入全局less


Vue.use(VueLazyLoad,{
  loading: require('@/assets/img/default.png'),
  error: require('@/assets/img/default.jpg'),
  attempt: 3
})

// Vue.directive('focus',{
//   inserted: function(el) {
//     el.focus()
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

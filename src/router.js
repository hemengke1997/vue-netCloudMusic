import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()=>import('./views/Home.vue')

export default new Router({
  // mode: 'history',   // 需要后端服务
  base: process.env.BASE_URL,
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component:Home,meta:{keepAlive:true},name:'Home'}
  ]
})

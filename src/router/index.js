import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()=>import('../views/home/Home.vue')

export default new Router({
  // mode: 'history',   // 需要服务器支持
  base: process.env.BASE_URL,
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component:Home,meta:{keepAlive:true},name:'Home',title:'首页'},
    // {path: '/user',component:User,name:'User',title:'个人中心'}
  ]
})

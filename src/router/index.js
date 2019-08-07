import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Discover = ()=>import('../views/discover/Discover.vue')

export default new Router({
  // mode: 'history',   // 需要服务器支持
  base: process.env.BASE_URL,
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/discover',component:Discover,meta:{keepAlive:true},name:'Discover',title:'发现'},
    // {path: '/user',component:User,name:'User',title:'个人中心'}
    // {path: '/video',component:Video,meta:{keepAlive:true},name:'Video',title:'视频'},
    // {path: '/my',component:My,meta:{keepAlive:true},name:''}
  ]
})

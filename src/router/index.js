import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = ()=> import('@/views/recommend/Recommend.vue')
const MusicList = ()=> import('@/views/music-list/Musiclist.vue')
const Singer = ()=> import('@/views/singer/Singer.vue')
const Hot = ()=> import('@/views/hot/Hot.vue')

export default new Router({
  // mode: 'history',   // 需要服务器支持

  // base: process.env.BASE_URL,

  routes: [{
      path: '/',
      redirect: '/recommend',
      name: 'recommend'
      // component:Recommend,
      // children: [{
      //   path: '/recommend',
      //   component: Recommend,
      //   meta: {
      //     keepAlive: true
      //   },
      //   name: 'Recommend',
      //   title: '推荐音乐',
      // }]
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: MusicList
        }
      ]
    },
    {
      path:'/hot',
      component:Hot,
      name: 'hot'
    },
    {
      path: '/singer',
      component: Singer,
      name: 'singer'
    }
  ]
})
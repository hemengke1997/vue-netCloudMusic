import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = () => import('@/views/recommend/Recommend.vue')
const MusicList = () => import('@/views/music-list/Musiclist.vue')
const Singer = () => import('@/views/singer/Singer.vue')

export default new Router({
  // mode: 'history',   // 需要服务器支持

  base: process.env.BASE_URL,

  routes: [{
      path: '/',
      redirect: '/recommend',
      // component:Recommend,
      children: [{
        path: '/recommend',
        component: Recommend,
        meta: {
          keepAlive: true
        },
        name: 'Recommend',
        title: '推荐音乐',
      }]
    },
    {
      path:'/hot',
      component:MusicList,
      name: 'hot'
    },
    {
      path: '/singer',
      component: Singer,
      name: 'singer'
    }
    // {
    //   path: '/recommend',
    //   component: Recommend,
    //   meta: {
    //     keepAlive: true
    //   },
    //   name: 'Recommend',
    //   title: '推荐音乐',
    //   // children: [{
    //   //   path: ':id',
    //   //   component: MusicList
    //   // }]
    // },
  ]
})
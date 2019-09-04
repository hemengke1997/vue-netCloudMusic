import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = ()=> import('@/views/recommend/Recommend.vue')
const Hot = ()=> import('@/views/hot/Hot.vue')
const Index = ()=> import('@/views/index.vue')
const Search = ()=> import('@/views/search/index.vue')
const SheetDetails = ()=> import('@/views/sheetdetails/SheetDetails')
const User = ()=> import('@/views/user/User')
const Download = () => import('@/views/download/Download')
const PlaySong = () => import('@/views/playsong/Playsong')
const Singer = () => import('@/views/singer/index')
const Album = () => import('@/views/album/index')
const Mv = () => import('@/views/MV/index')

export default new Router({
  mode: 'history',   // 需要服务器支持

  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/recommend',
      name:'index',
      children: [
        {
          path: '/recommend',
          component: Recommend,
          name:'recommend',
          meta: {
            title:'推荐'
          }
        }
      ]
    },
    {
      path: '/hot',
      component: Index,
      children:[
        {
          path:'/hot',
          name: 'hot',
          component: Hot,
          meta:{
            title: '热歌榜'
          }
        }
      ]
    },
    // 搜索
    {
      path: '/search',
      component:Index,
      children: [
        {
          path:'/search',
          name:'search',
          component: Search,
          meta:{
            title:'搜索'
          }
        }
      ]
    },
    // 歌单详情
    {
      path:'/playlist/detail',
      component: SheetDetails,
      name: 'sheetDetails'
    },
    // 用户主页
    {
      path: '/user/playlist',
      component: User,
      name: 'user'
    },
    // 下载界面
    {
      path: '/download',
      component: Download,
      name: 'download'
    },
    // 听歌界面
    {
      path: '/song',
      component: PlaySong,
      name: 'playsong'
    },
    // 歌手主页
    {
      path: '/singer',
      component: Singer,
      name: 'singer'
    },
    // 专辑页
    {
      path: '/album',
      component: Album,
      name: 'album'
    },
    // MV页
    {
      path: '/mv',
      component: Mv,
      name: 'mv'
    },
    // 视频页
    {
      path: '/video',
      component: Mv,
      name: 'video'
    }
  ]
})
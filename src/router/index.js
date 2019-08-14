import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = ()=> import('@/views/recommend/Recommend.vue')
const MusicList = ()=> import('@/views/music-list/Musiclist.vue')
const Singer = ()=> import('@/views/singer/Singer.vue')
const Hot = ()=> import('@/views/hot/Hot.vue')
const Index = ()=> import('@/views/index.vue')
const Search = ()=> import('@/views/search/Search.vue')
const SheetDetails = ()=> import('@/views/sheetdetails/SheetDetails')

export default new Router({
  // mode: 'history',   // 需要服务器支持

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
    {
      path:'/playlist/detail/:id',
      component: SheetDetails,
    }
  ]
})
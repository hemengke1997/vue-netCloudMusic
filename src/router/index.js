import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = ()=> import('@/views/recommend/Recommend.vue')
const Hot = ()=> import('@/views/hot/Hot.vue')
const Index = ()=> import('@/views/index.vue')
const Search = ()=> import('@/views/search/Search.vue')
const SheetDetails = ()=> import('@/views/sheetdetails/SheetDetails')
const User = ()=> import('@/views/user/User')

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
    }
  ]
})
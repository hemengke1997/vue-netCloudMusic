const Discover = ()=> import('@/views/discover')
const MusicList = () => import('@/views/musicList')

const recommendRouter = {
    path: '/discover',
    component: Discover,
    name:'Discover',
    meta: {
        title:'发现',
        keepAlive: true
    },
    children: [
        {
            path: ':id',
            component: MusicList,
            meta: {
                keepAlive: false
            }
        }
    ]
}
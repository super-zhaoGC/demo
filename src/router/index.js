import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由模块
import centerRouter from '@/router/routers/center'
import cinemaRouter from '@/router/routers/cinema'
import filmRouter from '@/router/routers/film'


Vue.use(VueRouter)

const routes = [
  centerRouter,
  cinemaRouter,
  filmRouter,
  {
    path:"/",
    redirect: '/film',
  }


  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

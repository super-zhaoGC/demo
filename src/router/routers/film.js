export default {
  path: '/film',
  component: () => import('@/views/Film/Film'),
  children: [{
    path: 'nowplaying',
    component: () => import('@/views/Film/NowPlaying.vue')
  },
  { path: '/film/comingsoon', component: () => import('@/views/Film/ComingSoon') }
  ]
}
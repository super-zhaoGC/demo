export default {
  path: '/film',
  component: () => import('@/views/Film/Film'),
  children: [{
    path: 'nowplaying',
    component: () => import('@/views/Film/ComingSoon')
  },
  { path: '/film/comingsoon', component: () => import('@/views/Film/ComingSoon') }
  ]
}
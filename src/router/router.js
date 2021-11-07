import Home from '@/page/views/home/index.vue'

export default [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/about',
    props: true,
    name: 'About',
    
    component: () => import('@/page/views/about/index.vue')
  }
  ]
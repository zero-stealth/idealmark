import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/ideal',
      name: 'About-ideal',
      component: () => import('@/views/AboutIdealView.vue')
    },
    {
      path: '/service',
      name: 'Service',
      component: () => import('@/views/ServiceView.vue')
    },
    {
      path: '/testimony',
      name: 'Testimony',
      component: () => import('@/views/TestimonyView.vue')
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: () => import('@/views/FeedbackView.vue')
    },
    {
      path: '/footer',
      name: 'Footer',
      component: () => import('@/views/FooterView.vue')
    },
  ]
})

export default router

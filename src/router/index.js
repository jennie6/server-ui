import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home'),
      children: [
        {
          path: 'hz-button',
          name: 'hz-button',
          component: () => import('@/views/home/hz-button/index')
        },
        {
          path: 'hz-icon',
          name: 'hz-icon',
          component: () => import('@/views/home/hz-icon/index')
        },
        {
          path: 'hz-card',
          name: 'hz-card',
          component: () => import('@/views/home/hz-card/index')
        },
        {
          path: 'hz-alert',
          name: 'hz-alert',
          component: () => import('@/views/home/hz-alert')
        },
        {
          path: 'hz-collapse',
          name: 'hz-collapse',
          component: () => import('@/views/home/hz-collapse')
        },

      ]
    },





  ]
})

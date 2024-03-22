import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../views/AppView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: AppView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: defineAsyncComponent(() => import('../views/DataSourceView.vue'))
        },
        {
          path: 'layout',
          name: 'layout',
          component: defineAsyncComponent(() => import('../views/LayoutView.vue'))
        },
        {
          path: 'actions',
          name: 'actions',
          component: defineAsyncComponent(() => import('../views/ActionsView.vue'))
        }
      ]
    },
    {
      path: '/',
      redirect: '/app/layout'
    }
  ]
})

export default router

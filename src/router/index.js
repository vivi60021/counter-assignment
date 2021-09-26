import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: "", name: "Home", component: () => import('../views/Home.vue') },
      {
        path: 'Setting',
        name: 'Setting',
        component: () => import('../views/Setting.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

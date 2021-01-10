import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/episodes:page?',
    alias : '/',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "episodes" */ '../views/Episodes.vue')
  },
  {
    path: '/characters:page?',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "characters" */ '../views/Characters.vue')
  },
  {
    path: '/locations:page?',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "locations" */ '../views/Locations.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

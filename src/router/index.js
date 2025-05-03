import { createRouter, createWebHistory } from 'vue-router'
import LeaderBoardView from '../views/LeaderBoardView.vue'
import MarketView from '../views/MarketView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'leader-board',
      component: LeaderBoardView,
    },
    {
      path: '/market',
      name: 'market',
      component: MarketView,
    },
  ],
})

export default router

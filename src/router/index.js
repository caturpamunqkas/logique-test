import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../pages/home/index.vue";
import DashboardPage from "../pages/dashboard/index.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router

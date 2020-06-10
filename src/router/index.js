import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import StorageItem from '../views/StorageItem.vue'
import SellersView from '../views/SellersView.vue'
import ClientsView from '../views/ClientsView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component :Dashboard
  },
  {
    path:'/storage',
    name: 'Storage',
    component: StorageItem
  },
  {
    path:'/sellers',
    name: 'Sellers',
    component: SellersView
  },
  {
    path:'/clients',
    name: 'Clients',
    component: ClientsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

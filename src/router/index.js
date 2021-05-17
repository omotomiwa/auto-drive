import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Cart from '../components/Cart.vue'
import Account from '../components/Account.vue'



import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)




Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
 
  {
    path:'/Login',
    name: 'Login',
    component: Login
  },
  {
    path:'/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path:'/Account',
    name: 'Account',
    component:Account
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

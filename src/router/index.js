import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Cart from '../components/Cart.vue'
import Account from '../components/Account.vue'




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

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由组件
import Interlayer from '../pages/Interlayer/Interlayer'
import Home from '../pages/Home/Home'
import Recomment from '../pages/Recomment/Recomment'
import ShopList from '../pages/ShopList/ShopList'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'
import Phone from '../pages/Phone/Phone'
import Login from '../pages/Login/Login'


export default new VueRouter({
  routes: [
    {
      path: '/interlayer',
      component: Interlayer
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/recomment',
      component: Recomment
    },
    {
      path: '/shoplist',
      component: ShopList
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/phone',
      component: Phone
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/interlayer'
    },
  ]
})


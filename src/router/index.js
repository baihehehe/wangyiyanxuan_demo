import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由组件
// import Interlayer from '../pages/Interlayer/Interlayer'
// import Home from '../pages/Home/Home'
// import Recomment from '../pages/Recomment/Recomment'
// import ShopList from '../pages/ShopList/ShopList'
// import ShopCart from '../pages/ShopCart/ShopCart'
// import Personal from '../pages/Personal/Personal'
// import Phone from '../pages/Phone/Phone'
// import Login from '../pages/Login/Login'

//路由懒加载
const Interlayer = () => import('../pages/Interlayer/Interlayer')
const Home = () => import('../pages/Home/Home')
const Recomment = () => import('../pages/Recomment/Recomment')
const ShopList = () => import('../pages/ShopList/ShopList')
const ShopCart = () => import('../pages/ShopCart/ShopCart')
const Personal = () => import('../pages/Personal/Personal')
const Phone = () => import('../pages/Phone/Phone')
const Login = () => import('../pages/Login/Login')


export default new VueRouter({
  routes: [
    {
      path: '/interlayer',
      component: Interlayer
    },
    {
      path: '/home',
      component: Home,
      meta: {
        isShowFooterNav:true
      }
    },
    {
      path: '/recomment',
      component: Recomment,
      meta: {
        isShowFooterNav:true
      }
    },
    {
      path: '/shoplist',
      component: ShopList,
      meta: {
        isShowFooterNav:true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        isShowFooterNav:true
      }
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


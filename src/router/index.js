import Vue from 'vue'
import VueRouter from 'vue-router'
import {getToken} from '../utils/auth'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login',
  },
 {
    path:'/index',
    component:()=>import('../views/manager/Index.vue'),
    beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
      let token = getToken();
      if(token){
        // 查询info
        store.dispatch('user/loginfo',token)
        .then(()=>{
          // 当获取玩用户信息之后才允许跳转
          next();
        })
      } else {
        Toast("token失效")
        // 跳转到登录
        next({path:'/login'})
      }
    },
    children:[
      {
        path:'home',
        component:()=>import('../views/manager/Home.vue'),
      },
      {
        path:'order',
        component:()=>import('../views/manager/order/Order.vue'),
      },
      {
        path:'user',
        component:()=>import('../views/manager/User.vue'),
      },
      {
        path:'address',
        component:()=>import('../views/manager/address/Address.vue')
      },
      {
        path:'addressDetail',
        component:()=>import('../views/manager/address/AddressDetail.vue')
      },
      {
        path:'product',
        component:()=>import('../views/manager/product/Product.vue')
      },
      {
        path:'confirmOrder',
        component:()=>import('../views/manager/order/ConfirmOrder.vue')
      }
    ]
  },
  {
    path:'/login',
    component:()=>import('../views/Login.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router

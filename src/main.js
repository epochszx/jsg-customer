import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'

//全局组件注册
import FullLayout from './components/FullLayout'
import ProductItem from './components/ProductItem'
import OrderItem from './components/OrderItem'
import OrderConfirm from './components/OrderConfirm'

Vue.component('my-fulllayout',FullLayout)
Vue.component('my-productitem',ProductItem)
Vue.component('my-orderitem',OrderItem)
Vue.component('my-orderconfirm',OrderConfirm)
//全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
      return moment(val).format('YYYY-MM-DD HH:mm:ss') 
  }else{
    return val
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

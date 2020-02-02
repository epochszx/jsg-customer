import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import address from './modules/address'
import category from './modules/category'
import product from './modules/product'
import order from './modules/order'
import shopcar from './modules/shopcar'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    address,
    category,
    product,
    order,
    shopcar
  }
})

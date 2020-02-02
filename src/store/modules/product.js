import {get,post} from '../../http/axios'
export default({
    namespaced:true,
    state:{
        products:[],
    },
    getters:{
        productCustomerFilter(state){
            return (categoryId)=>{
                return state.products.filter(item=>item.categoryId===categoryId)
            }
        }
    },
    mutations:{
        refreshProduct(state,products){
            state.products = products;
        },
      
    },
    actions:{
        //首页展示产品
        async queryProduct(context,payload){
            let response = await post('product/query',payload);
            //为每个产品添加一个number属性(添加到购物车的产品数量维护) 
            response.data.list.forEach(item=>{
                item.number = 0;
            })
            context.commit('refreshProduct',response.data.list)
            return response;
        },
    }
    
}
    
)
import {get,post_obj_array} from '../../http/axios'
export default({
    namespaced:true,
    state:{
        orders:[]
    },
    // store仓库的一个计算属性，它的作用主要是用来派生出一些新的状态
    // 把state状态的数据进行一次映射或者筛选，再把这个结果重新计算并提供给组件使用
    getters:{
        //根据订单状态进行过滤
        ordersStatusFilter(state){
            return (status)=>{
                return state.orders.filter(order=>order.status ===status)
            }
        }
        
    },
    mutations:{
        refreshOrder(state,orders){
            state.orders = orders;
        },
       
    },
    actions:{
        //查询订单
        async queryOrder(context){
            let id = context.rootState.user.info.id;
            let response = await get('order/query?customerId='+id);
            context.commit('refreshOrder',response.data)
            return response;
        },
        //保存订单
        async saveOrder(context){
            //参数格式,组合数据
            let data ={
                customerId:context.rootState.user.info.id,
                addressId:context.rootState.address.addresses[0].id,
                orderLines:Array.from(context.rootState.shopcar.orderLines.values()) 
            }
            let response = await post_obj_array('/order/save',data)
            //清空购物车,提交突变,调用shopcar状态机的clearShopcar清空购物车
            //在带命名空间的模块内访问全局内容
            context.commit('shopcar/clearShopcar',null,{root:true})
            return response
        },

        //订单服务确认
        async orderConfirm(context,id){
            let response = get('/order/confirmOrder',{orderId:id})
            context.dispatch('queryOrder')
            return response;
        }
    
}
    
})
import {get,post} from '../../http/axios'
export default({
    namespaced:true,
    state:{
        addresses:[],
    },
    mutations:{
        refreshAddress(state,addresses){
            state.addresses = addresses
        }
    },
    actions:{
        //加载地址列表数据
        async findAddress(context){
            let id = context.rootState.user.info.id;
            let response = await get('/address/findByCustomerId?id='+id);
            context.commit('refreshAddress',response.data);
        },
        //新增地址表单
        async saveOrUpdateAdress(context,payload){
            let customerId = context.rootState.user.info.id;
            let {id,province,city,area,adds:address,telephone} = payload
            let response = await post('/address/saveOrUpdate',{id,province,city,area,address,telephone,customerId})
            return response
        },
        //删除地址
        async deleteAddress(context,id){
            let response = await get('/address/deleteById',{id});
            return response;
            
        }
        
    }
    
}
    
)
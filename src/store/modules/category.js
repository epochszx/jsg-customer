import {get,post} from '../../http/axios'
export default({
    namespaced:true,
    state:{
        categories:[],
    },
    mutations:{
        refreshCategory(state,categories){
            state.categories = categories
        }
    },
    actions:{
        //新增地址表单
        async findAllCategory(context){
           let response = await get('category/findAll');
            context.commit('refreshCategory',response.data)
            return response;
        },
       
    }
    
}
    
)
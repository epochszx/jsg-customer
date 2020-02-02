import {post_json,get, post} from '../../http/axios'
import {getToken,setToken,removeToken} from '../../utils/auth'
export default({
    namespaced:true,
    state:{
        token:getToken(),
        info:{}
    },
    mutations:{
        refreshToken(state,token){
            state.token=token
        },
        refreshInfo(state,info){
            state.info=info;
        }
    },
    actions:{
        //login接口登录
        async login(context,payload){
            let response = await post_json('/user/login',payload);
            let token = response.data.token;
            //将token设置到状态机中
            context.commit('refreshToken',token);
            //1.token缓存到本地
            setToken(token)
            //通过token获取用户基本信息
            await context.dispatch('loginfo',token);
        },

        //通过token换取用户信息
        async loginfo(context,token){
            let response = await get('/user/info',{token});
            context.commit('refreshInfo',response.data);
            return response
        },
        //退出登录按钮
        async logout(context){
            let response = await post('/user/logout');
            //清理本地缓存
            removeToken();
            //清理store
            context.commit('refreshToken','');
            context.commit('refreshInfo',{});
            return response;
        }
    }
})
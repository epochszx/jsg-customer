<template>
    <!-- 后台管理总页面-导航 -->
    <div class="manager">
        <div class="content">
            <!-- 用于接收首页 ,订单 ,我的 -->
            <router-view></router-view>
        </div>
        <!-- 导航 -->
       <nav>
            <!-- <router-link to='/index/home'>首页</router-link>
            <router-link to='/index/order'>订单</router-link>
            <router-link to='/index/user'>我的</router-link> -->
           <van-tabbar route>
                <van-tabbar-item replace  to="/index/home"  icon="home-o" >
                    首页
                </van-tabbar-item>
                <van-tabbar-item  replace  to="/index/order"  icon="todo-list-o" >
                    订单
                </van-tabbar-item>
                <van-tabbar-item  replace  to="/index/user" icon="user-o" >
                    我的
                </van-tabbar-item>
            </van-tabbar>
       </nav>
    </div>
</template>

<script>
import {mapState,mapMutations, mapActions} from 'vuex'
import {getToken,setToken} from '../../utils/auth'
export default {
    data(){
        return{
            active:'home'
        }
    },
   created(){
       let token = getToken();
       if(token){
           this.loginfo(token)
       }else{
           this.$router.push('/login')
       }
   },
   methods:{
       ...mapActions('user',['loginfo'])
   }
}
</script>

<style>

</style>

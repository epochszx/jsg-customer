<template>
    <div class="user">
        <div class="img">   
            <van-image  round width="8rem" height="8rem" src="http://39.105.45.119/images/pcj.gif"/>
        </div>
        <van-cell title="常用地址" icon="location-o" is-link to='/index/address' ></van-cell>
         <van-cell title="退出登录" icon="warning-o"  @click="logoutHandler"></van-cell>
    </div>
</template>

<script>
import {mapState,mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState('user',['info','token']),
    },
    methods:{
        ...mapActions('user',['logout']),
        logoutHandler(){
            this.logout()
            .then(()=>{
                this.$router.push('/login')
            })
        }
    }
}
</script>

<style scoped>
    .user{
        background:url('../../assets/images/loginbg.jpg') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
    .img{
        text-align: center;
        padding: 1em 0;
    }
</style>

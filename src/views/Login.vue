<template>
    <div class="container">
        <div class="header">
            <div class="title">
                <van-image class="title-img"
                    round
                    width="7rem"
                    height="7rem"
                    src="http://39.105.45.119/images/pcj.gif"
                    />
                <div class="title-font">
                     <span>家政服务中心-顾客端</span>
                </div>
            </div>
        </div>
        <div class="content">
            <van-cell-group >
                <van-field
                    v-model="form.username"
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="用户名:customer1"
                />
                <van-field
                    v-model="form.password"
                    type="password"
                    label="密码"
                    placeholder="密码:123321"
                />
            </van-cell-group>
            <div class="btn">
                <van-button class="loginbtn" type="info" plain round @click="loginHandler">登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations, mapActions} from 'vuex'

export default {
    data(){
        return{
            form:{
                type:'customer',
                username:'customer1',
                password:123321
            }
        }
    },
    
    methods:{
        ...mapActions("user",['login']),
        loginHandler(){
            this.login(this.form)
            .then(()=>{
                this.$router.push({
                path:'/index/home'
                })
            })
        }
    },
    
}
</script>
<style scoped>
    .container{
        background:url('../assets/images/loginbg.jpg') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
    .header{
        width: 100%;
        height: 200px;
        /* background-color: teal; */
        /* background-image:url('../assets/images/logoin.png'); */
        /* background-size:100% 100%; */
    }
    .title{
        text-align: center;
        padding: 2em 0;
    }
    .title-font{
        margin-top:.5em;
        color:#fff;
        font-weight: 700
    }
    .van-field{
        border-radius: 5px;
    }
    .btn{
        padding: 1em 2em;
    }
    .loginbtn{
        width: 100%
    }
</style>

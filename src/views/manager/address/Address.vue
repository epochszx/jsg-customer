<template>
    <div class="address">
        <div class="nav-bar">
            <van-nav-bar title="常用地址" left-text="返回"  left-arrow @click-left="onClickLeft" />
        </div>
        <div class="list">
            <van-address-list style="padding-bottom:0" v-model="chosenAddressId"  @add="onAdd" @edit="onEdit"  v-for="item in addresses" :key="item.id" :list='[{
                id:item.id,
                name:item.customerId,
                tel:item.telephone,
                adds:item.address,
                province:item.province,
                city:item.city,
                area:item.area,
                telephone:item.telephone,
                address:item.province +item.city+item.area+item.address,
            }]'/>
           
        </div>
    </div>
</template>

<script>
import {mapState, mapActions } from 'vuex';
export default {
    data(){
        return{
            chosenAddressId: 2228,
        }
    },
    computed:{
        ...mapState('address',['addresses']),
        
    },
    created(){
        this.findAddress()
    },
    methods:{
        ...mapActions('address',['findAddress']),

        
        onClickLeft(){
            this.$router.push('/index/user')
        },
        onAdd() {
                this.$router.push('/index/addressDetail')
            },
        onEdit(item, index) {
            this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    loadingType: 'spinner',
                    duration:400
                    });
            setTimeout(()=>{
                let data = JSON.stringify(item)
                this.$router.push({
                    path:'/index/addressDetail',
                    query:{data}
                })
            },500)
        },
      
    }
}
</script>

<style>

</style>

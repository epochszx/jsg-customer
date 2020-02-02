<template>
    <div class="order">
        <div class="content">
            
            <van-tabs v-model="active" animated >
                <van-tab  title='全部'>
                    <my-orderitem  v-for="order in orders" :key="order.id" :data="order">
                    </my-orderitem>
                </van-tab>
                <van-tab  title='待派单'>
                    <my-orderitem v-for="order in ordersStatusFilter('待派单')" :key="order.id" :data="order">

                    </my-orderitem>
                </van-tab>
                 <van-tab  title='待服务'>
                    <my-orderitem v-for="order in ordersStatusFilter('待服务')" :key="order.id" :data="order">

                    </my-orderitem>
                </van-tab>
                 <van-tab  title='待确认'>
                    <my-orderconfirm v-for="order in ordersStatusFilter('待确认')" :key="order.id" :data="order">
                    </my-orderconfirm>
                </van-tab>
                 <van-tab  title='已完成'>
                    <my-orderitem v-for="order in ordersStatusFilter('已完成')" :key="order.id" :data="order">
                    </my-orderitem>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return{
            active:0
        }
    },
    computed:{
        ...mapState('order',['orders']),
        ...mapGetters('order',['ordersStatusFilter'])
    },
    methods:{
        ...mapActions('order',['queryOrder'])
    },
    created(){
        this.queryOrder();
    }
}
</script>

<style scoped>

</style>

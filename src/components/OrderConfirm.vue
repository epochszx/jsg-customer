<template>
  <div class="order_item">
    <van-row class="header"> 
      <van-col span="12">订单编号：{{data.id}}</van-col>
      <van-col span="12" class="status">
          <van-button @click="orderConfirmHandler(data.id)" type="danger" size="mini">确认服务</van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col :span="6">
          <img v-if='data.customer.photo' :src='data.customer.photo' alt="">
        <img src="../assets/images/orderitem.jpg" alt="">
      </van-col>
      <van-col :span="17" :offset="1">
        <div>顾客姓名：{{data.customer.realname}}</div>
        <div v-show='data.waiter.realname'>员工姓名：{{data.waiter.realname}}</div>
        <div>订单描述：拖地，擦窗户</div>
        <div>服务时间：{{data.orderTime | datefmt}}</div>
        <div v-if='data.address'>服务地址：{{data.address.province}} {{data.address.city}} {{data.address.area}} {{data.address.address}}</div>
        <div  v-if='data.address'>联系方式：{{data.customer.telephone}}</div>
      </van-col>
    </van-row>
    <van-row>
        <van-col :span="6" :offset="18">
          <div class="text-right" >
          合计：￥ <span style="color:#fd621f">{{data.total}}</span>
        </div>
        </van-col>
    </van-row>
   
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:{
    data:{type:Object}
  },
  methods:{
      ...mapActions('order',['orderConfirm','queryOrder']),
      orderConfirmHandler(id){
           this.$toast.loading({
                message: '加载中...',
                forbidClick: true,
                loadingType: 'spinner',
                duration:400
                });
            setTimeout(()=>{
                this.$toast({
                  message:'订单已确认',
                  duration:1000
                })
                this.orderConfirm(id)
            },500)
          
      }
  }

}
</script>
<style scoped>
.order_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
  border:1px solid #ededed;
  font-size:12px;
  color: #333;
}
.order_item .header {
  line-height: 2.5em;
  font-size: 14px;
}
.order_item .header .status {
  text-align: right;
}
.order_item img {
  width: 100%;
  border-radius: 3px;
  
}
</style>
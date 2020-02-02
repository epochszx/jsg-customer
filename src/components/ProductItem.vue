<template>
  <div class="product_item">
    <van-row>
      <van-col :span="8">
        <img v-if="data.photo" :src="data.photo" alt="">
        <img v-else src="../assets//images/logoin.png" alt="">
      </van-col>
      <van-col :offset="1" :span="15">
        <div> <strong>名称：</strong> {{data.name}}</div>
        <div> <strong>价格：</strong> {{data.price}}</div>
        <div> <strong>描述：</strong> {{data.description}}</div>
        <div> <van-stepper @change="numberChanger(data)"  v-model="data.number" :min="0" /> </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props:['data'],
  data(){
    return {
      value:0
    }
  },
  methods:{
    ...mapMutations('shopcar',['addShopcar']),
    numberChanger(val){
      let orderLine ={
        productId:val.id,
        productName:val.name,
        number:val.number,
        price:val.price,
      };
      this.addShopcar(orderLine);
    }
  }
}
</script>
<style scoped>
.product_item {
  font-size: 12px;
  margin:.5em 1em;
  padding: .5em;
  border-radius: 5px;
  height: 80px;
  border: 1px dotted #ccc;
}
.product_item img {
  width: 100%;
  height: 80px;
  border-radius: 3px;
}
</style>
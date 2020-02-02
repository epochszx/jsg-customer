<template>
    <div class="product">
        <my-fulllayout>
          <van-row>
                <!-- 左侧栏目导航 -->
                <van-col :span='4'>
                        <van-sidebar v-model="key">
                            <van-sidebar-item @click="categoryId = c.id" :title="c.name" v-for="c in categories" :key="c.id" />
                        </van-sidebar>
                </van-col>
                <!-- 右侧产品内容 -->
                <van-col :span="20">    
                        <my-productitem v-for="p in productCustomerFilter(categoryId) " :key="p.id" :data="p" >

                        </my-productitem>
                </van-col>
          </van-row>
          <van-row class="car"> 
            <van-col :span="8">
                总计 <strong>￥ {{total}}</strong>
            </van-col>
            <van-col :offset='9' :span='7'>
                <van-button type="danger" size="small" @click="toConfirmOrder" >立即下单</van-button>
            </van-col>
          </van-row>
        </my-fulllayout>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{
            key:0,
        }
    }, 
    created(){
        this.findAllCategory();
        this.queryProduct({page:0,pageSize:200})
        this.categoryId = this.$route.query.id;
        this.key = this.$route.query.key;
        
    },
    computed:{
        ...mapState('category',['categories']),
        ...mapState('product',['products']),
        ...mapGetters('product',['productCustomerFilter']),
        ...mapGetters('shopcar',['total'])

    },
    methods:{
        ...mapActions('category',['findAllCategory']),
        ...mapActions('product',['queryProduct']),
      
        toConfirmOrder(){
             this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    loadingType: 'spinner',
                    duration:400
                    });
            setTimeout(()=>{
                 this.$router.push({
                        path:'/index/confirmOrder'
                    })
            },500)
        }
    }
}
</script>

<style scoped>
.car{
    position: fixed;
    bottom: 0;
    line-height: 3em;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    color: #ffffff;
    text-align: center;
}
</style>

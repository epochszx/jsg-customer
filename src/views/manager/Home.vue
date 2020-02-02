<template>
    <div class="home">
        <header class="header">
           <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="../../assets/images/home3.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../../assets/images/home2.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../../assets/images/home3.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../../assets/images/home4.jpg" alt="">
                </van-swipe-item>
            </van-swipe>
        </header>
        <!-- 栏目 -->
        <div class="category">
            <van-grid :column-num="3">
                <van-grid-item
                    @click="toProductListHandler(item.id,index)"
                    v-for="(item,index) in categories"
                    :key="item.id"
                    :icon="item.icon"
                    :text="item.name"
                />
            </van-grid>
        </div>
        <!-- 产品 -->
        <div class="product">
            <van-grid :column-num="2">
                <van-grid-item
                    v-for="item in products"
                    :key="item.id">
                    <van-image :src="item.photo" />
                    <div>
                        {{item.name}}
                    </div>
                </van-grid-item>          
            </van-grid>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState('category',['categories']),
        ...mapState('product',['products'])
    },
    methods:{
        ...mapActions('category',['findAllCategory']),
        ...mapActions('product',['queryProduct']),

        toProductListHandler(id,key){
            this.$router.push({
                path:'/index/product',
                query:{
                    id,
                    key
                }
            })
        }
    },
    created(){
        this.findAllCategory();
        this.queryProduct({page:0,pageSize:4});
    }
}
</script>
<style scoped>
    .my-swipe .van-swipe-item {
        color: #fff;
        text-align: center;
        overflow: hidden;
    }
    .my-swipe .van-swipe-item img{
        width: 100%;
        height:100%;
    }
</style>


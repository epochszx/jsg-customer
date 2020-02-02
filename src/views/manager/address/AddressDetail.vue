<template>

    <div class="addressDetail">
      <my-fulllayout title="编 辑 地 址">
        <div class="content">
           <van-cell-group >
                    <input type="text" hidden v-model="form.id">
                    <van-field
                    v-model="form.province"
                    clearable
                    label="省份"
                    placeholder="请输入省份"
                    />
                    <van-field
                    v-model="form.city"
                    clearable
                    label="城市"
                    placeholder="请输入城市"
                    />
                    <van-field
                    v-model="form.area"
                    clearable
                    label="地区"
                    placeholder="请输入地区"
                    />
                    <van-field
                    v-model="form.adds"
                    clearable
                    label="详细地址"
                    placeholder="请输入详细地址"
                    />
                    <van-field
                    v-model="form.telephone"
                    clearable
                    label="联系方式"
                    placeholder="请输入联系方式"
                    />
            </van-cell-group>
        </div>
        <div class="btns">
            <div class="savebtn">
                <van-button style="height:40px;line-height:40px"  color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large" @click="saveAddress" >保存</van-button>
            </div>
            <div class="deletebtn">
                <van-button style="height:40px;line-height:40px"  plain  size="large" @click="deleteHandler">删除</van-button>
            </div>
        </div>
      </my-fulllayout>
    </div>
</template>
<script>
import {mapState, mapActions } from 'vuex';
export default {
    data(){
        return{
            form:{
            }
        }
    },
    computed:{
        ...mapState('user',['info']),
    },
    methods:{
        ...mapActions('address',['saveOrUpdateAdress','deleteAddress']),
        onClickLeft(){
            this.$router.go(-1)
        },
        //地址保存
        saveAddress(){
            this.saveOrUpdateAdress(this.form)
            .then(()=>{
                this.$toast.success('保存成功');
                this.$router.go(-1)
            })
        },
        deleteHandler(){
             this.deleteAddress(this.form.id)
            .then(()=>{
                this.$toast.success('删除成功');
                this.$router.go(-1)
            })
        }
    },
    created(){
        if(this.$route.query.data != undefined ){
            this.form =JSON.parse(this.$route.query.data)
        }
    }
}
</script>

<style>
    .btns{
        padding: 0 1em;
    }
    .savebtn{
        margin: 1em 0;
    }

</style>

<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from './../components/Loading';
export default {
    name:"order-alipay",
    data(){
      return{
        orderId:this.$route.query.orderId,
        content:'',
        loading:true
      }
    },
    mounted(){
      this.paySubmit()
    },
    components:{
      Loading
    },
    methods:{
      paySubmit(){
        this.axios.post('/pay',{
          orderId:this.orderId,
          orderName:'爱啥啥商城',
          amount:0.01,//单位元
          payType:1// 1.支付宝  2.微信
        }).then((res)=>{
          this.content=res.content;
          setTimeout(()=>{
            document.forms[0].submit();
          },100)
        })
      }
    }
}
</script>

<style>

</style>
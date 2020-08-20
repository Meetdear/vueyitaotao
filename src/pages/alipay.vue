<template>
    <div class="ali-pay">
      <div class="form" v-html=""></div>  
    </div>
</template>
<script>
export default {
    name:'alipay',
   data(){
       return{
        orderId:this.$route.query.orderNo,
        content:''
       }
     
   },
   mounted(){

   },
   methods:{
       paySubmit(){
           this.axios.post('/pay',{
              orderId:this.orderId,
              orderName:'Vue高仿米易商城', //扫码支付时订单名称
              amount:0.01,//单位元
              payType:1 //1支付宝，2微信

           }).then((res)=>{
               this.content=res.content;
           })
       }
   }
}
</script>
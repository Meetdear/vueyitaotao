<template>
    <div>
       <!-- 这个不能放在父页面 需要放在每个子页面中 -->
         <!-- <order-header :title="title">
           <template v-slot:tip>
               <span>{{tip}}</span>
           </template>
         </order-header> -->
         <router-view></router-view>
          <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
export default {
    name:'order',
   //  data(){
   //      return{
   //         title:'',
   //         tip:''
   //      }
   //  },
   components:{
       OrderHeader,
       ServiceBar,
       NavFooter
   },
   // mounted(){
   //    let path=this.$route.path;
   //    if(path=='/order/confirm'){
   //       this.title='订单确认';
   //       //温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
   //       this.tip='请认真填写收货地址';
   //    }else if(path=='/order/list'){
   //       this.title='订单列表';
   //       this.tip='请谨防钓鱼链接或诈骗电话,了解更多';
   //    }else if(path=='/order/pay'){
   //       this.title='订单支付';
   //       this.tip='请谨防钓鱼链接或诈骗电话,了解更多';
   //    }else{
   //       this.title='订单支付';
   //       this.tip='请谨防钓鱼链接或诈骗电话,了解更多';
   //    }
   // }
}
</script>

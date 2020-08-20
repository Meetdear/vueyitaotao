<template>
   <div class="order-pay">
     <order-header
        title='订单支付'>
        <template v-slot:tip>
            <span>请谨防钓鱼链接和订单支付,了解更多</span>
        </template>
        </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-success"></div>
            <div class="order-info">
              <h2>订单提交成功!去付款咯~</h2>
              <p>请在<span>30分钟</span>内完成支付,超时后将取消订单</p>
              <p>收货信息:{{addressInfo}}</p>
            </div>
            <div class="order-total">
              <p>应付总额: <span></span> 元</p>
              <p>订单详情<em class="icon-down" :class="{'up':showDetail}" @click="showDetail=!showDetail"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号:</div>
              <div class="detail-info theme-color">{{orderNo}}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息: </div>
              <div class="detail-info">{{addressInfo}}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称: </div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item,index) in orderDetail" :key="index">
                    <img v-lazy="item.productImage"/>{{item.productName}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息: </div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>请选择以下方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div class="pay pay-ali" :class="{'checked':payType==1}" @click="paySubmit(1)"></div>
            <div class="pay pay-wechat" :class="{'checked':payType==2}" @click="paySubmit(2)"></div>
          </div>
        </div>
      </div>
    </div>
    <scan-pay-code></scan-pay-code>
    <modal>
      <template>
        <p>
          您确认是否完成支付?
        </p>
      </template>
    </modal>
  </div>
</template>
<script>
export default {
    name:' order-pay',
   data(){
       return{
       orderNo:this.$route.query.orderNo,
        addressInfo:'',//收货人地址
        orderDetail:[],//订单详情 包含商品列表
        showDetail:false, //是否显示订单详情
        payType:'',//支付类型
       }
   },
  mounted(){
   this.getOrderDetail();
  },
  methods:{  
     getOrderDetail(){
        this.axios.get(`/orders/${this.orderNo}`).then((res)=>{
         let item=res.shippingVo;
         this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity}
         ${item.receiverDistrict} ${item.receiverAddress}`
         this.orderDetail=res.orderItemVoList;
      })
  },
  paySubmit(payType){
    if(payType==1){
      window.open('/#/order.alipay?orderId='+this.orderNo,'_blank')
    }
   }
  } 
}
</script>


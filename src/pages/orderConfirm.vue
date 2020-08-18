<template>
   <div class="order-confirm">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div class="order-box">
          <div class="item-address">
              <h2 class="addr-title">收货地址</h2>
              <div class="addr-list  clearfix">
                  <!-- in list商城地址列表 绑定:key缓存组件用提高渲染速度-->
                  <div class="addr-info" v-for="(item,index) in list" :key="index">
                      <h2>{{item.receiverName}}</h2>
                      <div class="phone">{{item.receiverMobile}}</div>
                    <div class="street">{{item.receiverProvince +''+item.receiverCity+''+item.receiverDistrict+''+item.receiverAddress}}</div>
                      <div class="action">
                          <a href="javascript:;" class="fl">
                            <svg class="icon icon-del">
                               <use xlink:href="#icon-del"><use>
                           <svg>
                          </a>
                          <a href="javascript:;" class="fr">
                           <svg class="icon icon-edit">
                               <use xlink:href="#icon-edit"><use>
                           <svg>

                          </a>
                       </div>
                     </div>
                    <div class="addr-add" @click="openAddressModal()">
                       <div class="icon-add"></div>
                       <div>添加新地址</div>
                    </div>
                  </div>
              </div>
              <div class="item-good">
                  <h2>商品</h2>
                  <ul>
                      <li>
                          <div class="good-name">
                              <img v-lazy="item.productMainImage" alt="">
                              <span>{{item.productName+''+item.productSubtitle}}</span>
                          </div>
                          <div class="good-price">{{item.productPrice}}元x{{item.quantity}}</div>
                          <div class="good-total">{{item.productTotalPrice}}</div>
                      </li>
                  </ul>
              </div>
              <div class="item-shipping">
                  <h2>配送方式</h2>
                  <span>包邮</span>
              </div>
              <div>
                  <h2>发票</h2>
                  <a href="javascript:;">电子票</a>
                  <a href="javascript:;">个人</a>
              </div>
              <div class="datail">
                 <div class="item">
                    <span class="item-name"> 商品件数</span>
                    <span class="item-val">1件</span>
                 </div>
                 <div class="item">
                    <span class="item-name"> 商品件数</span>
                    <span class="item-val">1件</span>
                 </div>
                 <div class="item">
                    <span class="item-name"> 商品件数</span>
                    <span class="item-val">1件</span>
                 </div>
                 <div class="item">
                    <span class="item-name"> 商品件数</span>
                    <span class="item-val">1件</span>
                 </div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:' order-confirm',
    data(){
      return {
          list:[],//收货地址
          Cartlist:[],//购物车中需要结算的商品列表
          cartTotalPrice:0,//商品总金额
      }
    },
    //初始化方法这里渲染
    mounted(){
       this.getAddressList,
       this.getCartLis
    },
    //方法
    methods:{
      getAddressList(){
        this.axios.get('/shippings').then((res)=>{
            // this.list=res.data.list,
            this.list=res.list;
        })
      },
      getCartList(){
          this.axios.get('/Carts').then((res)=>{
            let list =res.cartProductVoList;//获取购物车中所有的商品数据
              this.cartTotalPrice=res.cartTotalPrice;//选中的商品总金额
              //filter直接是一个作用和过滤的功能和方法 过滤出已经选中的商品
              this.cartList=list.filter(item=>item.productSeleted);//还有map for循环都可以过滤 
        })
      }
    }
}
</script>
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
      <router-link to="/about"></router-link>
    </div>
    <router-view/>
  </div>
</template>
 <script>
      // import storage from './storage'
      export default{
        name:'app',
        components:{

        },
        data(){
         return {
           
         }
        },
        mounted(){
          if(this.$cookie.get('userId')){
            this.getUser();
            this.getCartCount();
          }
          
          //本地加载请;求静态json文件的形式
          // this.axios.get('/mock/user/login.json').then((res)=>{
          //   this.res=res;
          // })
          //通过easy-mock平台实现数据mock
          //  this.axios.get('/user/login.json').then((res)=>{
          //   this.res=res;
          // })
          //本地集成mockjs实现数据mock
            // this.axios.get('/user/login.json').then((res)=>{
            //   this.res=res;
            // })
          //  storage.clear('a','user');
        },
        methods:{
            //  定义方法
          //获取用户信息
          getUser(){
            this.axios.get('/user').then((res={})=>{
               console.log(res.username)
              this.$store.dispatch('saveUserName',res.username);
              // to-doi 保存到vuex里面
            })
          },
           //获取购物车商品
          getCartCount(){
            this.axios.get('/carts/products/sum').then((res=0)=>{
                  // 最终保存到vuex中去
                  console.log(res)
                this.$store.dispatch('saveCartCount',res);
            })
          }
        }
      }
 </script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';

</style>

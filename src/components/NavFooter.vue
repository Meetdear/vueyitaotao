<template>
    <div class="footer">
        <div class="footer-logo">
               <img src="/imgs/logo-footer.png" alt="">
               <p>小米商城</p>
        </div>
       
         <div class="footer-link">
             <a href="" target="_">风月无边主页</a><span>|</span>
             <a href="">VUE SDFASDF</a><span>|</span>
             <a href="">风ASDFSDF主页</a><span>|</span>
             <a href="">风ASDFASDFASDFFGHFG页</a><span>|</span>
         </div>
          <div class="copyright">   
             Copyrighterstyrewtwwe <span class="domain">we@9ewirqwe</span> r ewqqnew wer
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer',
    
}
</script>
<style lang="scss">
   .footer{
       border-top: 4px solid #f60;
       height:234px;
       background-color: #333;
       color:#999;
       font-size:16px;
       text-align:center;
          .footer-logo{
              margin-top:46px;
              margin-bottom:31px;
              img{
                  width: 53px;
                  height:36px;
                  margin-bottom: 13px ;
              }
          }
          .footer-link{
              a{
                   color:#999;
                   display: inline-block;

              }
              span{
                  margin:0 10px;
              }
              margin-bottom: 13px;
          }
          .copyright{
              .domain{
                  color:#f60;
              }
             
          }
   }
</style>
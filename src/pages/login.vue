<template>
<div class="box">
<div class="bg-img">
    <div class="container">
        <div class="login-form">
            <h3>
                <span class="checked">账号登录</span>
                <span class="sep-line">|</span>
                <span class="userRegister">用户注册</span>
            </h3>
            <div class="input">
                <input type="text" placeholder="请输入账号" v-model="username">
            </div>
            <div class="input">
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="btn-box">
                <a href="javacript:;" class="btn" @click="login"> 登录</a>
            </div>
            <div class="tips">
                <div class="sms" @click="register">手机短信登录/注册</div>
                <div class="reg">立即注册 <span>|</span> 忘记密码</div>
            </div>
        </div>
    </div>
 </div>
 </div>
</template>
<style lang="scss">
    .box{
        .bg-img{
              background:url('/imgs/login-bg.jpg') no-repeat center;
             .container{
                 width:1226px;
                 height:576px;
                 .login-form{
                    display: inline-block;
                     position: absolute;
                    width:410px;
                    height:510px;
                    bottom: 29px;
                    right:0;
                    background-color: #fff;
                    h3{  
                        font-weight: 500;
                        text-align: center;
                        color:#666;
                        font-size:24px;
                        padding:27px 0 24px;
                        .checked{
                           color: #f60;
                        }
                       .sep-line{
                               width: 1px;
                                height: 24px;
                                margin: 0 35px 0 42px;
                       }
                    }
                      .input{
                            display:inline-block;
                              width:348px;
                            height:50px;
                            border:1px solid #E5E5E5;
                                margin-bottom:20px;
                               margin-left:30px;
                          input{
                                width: 100%;
                                height: 100%;
                                border: none;
                                padding: 18px; 
                          }
                      }
                      .btn-box{
                         .btn{
                       width:348px;
                      line-height:50px;
                      margin-top:10px;
                      font-size:16px;
                      height:50px;
                      margin-left:30px;
                       
                      }

                      }
                      .tips{
                          .sms{
                              width:100%;
                             
                              text-align: center;
                              font-size:14px;
                              color:#ff7600;   
                              margin-top:15px 
                          }
                           .reg{
                              width:100%;
                              color:#999;
                              text-align: center;
                              font-size:14px;
                              margin-top:30px 
                          }
                      }
                  
                 }
             }
        }
    }
</style>
<script>
import {mapActions} from 'vuex';
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            userId:'',
            // res:{}
        }
    },
    methods:{
        login(){
            //es6的数组解构
            let {username,password}=this;
            this.axios.post('/user/login',{
                username,
                password
            }).then(res=>{
               this.$cookie.set('userId',res.id,{expires:'Session'});
            //    this.$store.dispatch('saveUserName',res.username);
            this.saveUserName(res.username);
               //to-do
               
                // // this.$router.push('/index');
                // this.$router.push({
                //     path:'index',
                //     query:{//query其实是get传参 params
                //         form:'login'
                //     }
                // });
                this.$router.push({
                   name:'index',
                    params:{//query其实是get传参 params是post传参
                        form:'login'
                    }
                });
            })
        },
        ...mapActions(['saveUserName']),
        register(){
            this.axios.post('/user/register',{
                username:'admin1',
                password:'admin1',
                email:'admin1@163.com'
            }).then(()=>{// res=> 有vuexlink会报错
               this.$message.success('注册成功')
            })
        }
    }

}
</script>
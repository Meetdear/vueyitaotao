<template>
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
                <div class="reg">立即注册 <span>|</span>忘记密码</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            userId:'',
            res:{}
        }
    },
    methods:{
        login(){
            //es6的数组解构
            let {username,password}=this;
            this.axios.post('/user/login',{
                username,
                password
            }).then((res)=>{
               this.$cookie.set('userId',res.id,{expires:'1M'});
               //to-do
                this.$router.push('/index');
            })
        },
        register(){
            this.axios.post('user/register',{
                username:'admin1',
                password:'admin1',
                email:'admin1@163.com'
            }).then((res)=>{// res=> 有vuexlink会报错
                alert('注册成功')
            })
        }
    }

}
</script>
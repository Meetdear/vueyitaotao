import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
//import是预编译加载 不希望永远被拦截所有不要用
// import env from './env'
//mock开关
const mock = false;
if (mock) {
    require('./mock/api');
}
//根据前端的跨域方式做调整 /a/a : /api/a/b => /a/b
// axios.defaults.baseURL = '/api'; //接口代理  
axios.defaults.baseURL = '/api'; //接口代理
axios.defaults.timeout = 8000;
//根据环境变量来获取不同的二请求地址
// axios.defaults.baseURL = env.baseURL; //接口代理

//拦截器 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    if (res.status == 0) {
        return res.data;

    } else if (res.status == 10) {
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
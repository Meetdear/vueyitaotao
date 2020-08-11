import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
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
    //地址栏有#就是hash哈希路由
    let path = location.hash;
    if (res.status == 0) {
        return res.data;

    } else if (res.status == 10) {
        //判断如果是首页就不跳转 是的话就跳转
        if (path != '#/index') {
            window.location.href = '/#/login';
        }

    } else {
        alert(res.msg);
        //reject 抛出异常 报错
        return Promise.reject(res);
    }
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
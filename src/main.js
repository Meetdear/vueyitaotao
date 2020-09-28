import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' 
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import VueCookie from 'vue-cookie'
import env from "./env"
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import是预编译加载 不希望永远被拦截所有不要用
// import env from './env'
//mock开关
const mock = false;
if (mock) {
    // require('./mock/api');
}
//根据前端的跨域方式做调整 /a/a : /api/a/b => /a/b
// axios.defaults.baseURL = '/api'; //接口代理  
axios.defaults.baseURL = '/api'; //接口代理
axios.defaults.timeout = 5000;
//根据环境变量来获取不同的二请求地址
// axios.defaults.baseURL = env.baseURL; //接口代理

//拦截器 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    //地址栏有#就是hash哈希路由
    //let path = location.hash;///////////////////////////
    //获取当前页面的路径名称//
    let path = location.pathname; //
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        //判断如果是首页就不跳转 是的话就跳转
        if (path != '/index') {
            window.location.href = '/login';
        }
        return Promise.reject(res);
    } else {
        //reject 抛出异常 报错
        Message.warning(res.msg)
        return Promise.reject(res);
    }
}, (err) => {
    let res = err.response;
    Message.error(res.data.message);
    return Promise.reject(err);
});
// 加载插件  把插件,加载到vue 实例中去
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
// Vue.use(Message);
// Vue.use(Message); //这里加入原型后,不用再次加入实例了.否则会出现bug 每次进入自动执行message
Vue.use(VueLazyLoad, {
        loading: '/imgs/loading-svg/loading-bars.svg'
    })
    // 加载到原型上 通过原型的方式扩展一个对象
Vue.prototype.$message = Message; //这个没有爆错=>warning未定义
Vue.config.productionTip = false

new Vue({
    // 这部操作相当于  router :router
    router,
    store,
    render: h => h(App)
}).$mount('#app')
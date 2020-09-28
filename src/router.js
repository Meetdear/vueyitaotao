import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import Login from './pages/login.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'
import AliPay from './pages/alipay.vue'

// 加载vue Router
Vue.use(VueRouter)

const routes = [{
            // 设置路由路径
            path: '/',
            //设置路由名称
            name: 'home', 
            // 导入该组件
            component: Home,
            // 重定向
            redirect: "/index",
            children: [{
                    path: "/index",
                    name: "index",
                    component: Index
                },
                {
                    path: "/product/:id",
                    name: "product",
                    component: () =>
                        import ('./pages/product.vue')
                },
                {
                    path: "/detail/:id",
                    name: "detail",
                    component: () =>
                        import ('./pages/detail.vue')
                }
            ]
        },
        {
            path: "/cart",
            name: "cart",
            component: () =>
                import ('./pages/cart.vue')
        },
        {
            path: "/order",
            name: "order",
            component: () =>
                import ('./pages/order.vue'),
            children: [{
                    path: "list",
                    name: "order-list",
                    component: () =>
                        import ('./pages/orderList.vue')
                },
                {
                    path: "confirm",
                    name: "order-confirm",
                    component: () =>
                        import ('./pages/orderConfirm.vue')
                },
                {
                    path: "pay",
                    name: "order-pay",
                    component: () =>
                        import ('./pages/orderPay.vue')
                },
                {
                    path: "alipay",
                    name: "alipay",
                    component: () =>
                        import ('./pages/alipay.vue')
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import ('./pages/login.vue')
        }
    ]
    // 把把自定义的Router对象 放置到vue 实例中去
const router = new VueRouter({
        // 去除#号
        mode: "history",
        routes
    })
    // 导出 常量接收路由组 最后导出去 
export default router
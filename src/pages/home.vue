<template>
    <div>
        <nav-header></nav-header>
         <!-- 路由容器,最终子路由的内容通过router 来渲染出来 -->
        <router-view></router-view>
            <!-- router -->
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
export default {
     // 设置当前组件导出时的名称
    name:'home',
    components:{
         // 要使用的组件引入 
        NavHeader,
        NavFooter
    }
}
</script>
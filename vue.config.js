// // 接口代理 在项目底层创建vue.config.js 当项目启动时,程序自动扫描该文件

module.exports = { //代理跨域才需要用到 最安全他们不知道我们要的是哪个接口
    devServer: { // 必须叫devServer
        // 设置代理
        host: 'localhost',
        port: 8080,
        // 重要参数,porxy 代理 对象形式
        proxy: {
            // "api"是指你要访问的接口,也可称之为拦截,当你访问该接口时,自动拦截,转到代理接口
            '/api': {
                // 代理到哪里去
                target: 'http://mall-pre.springboot.cn',
                //   是否把主机接口替换为目标接口,
                changeOrigin: true,
                //   跳转规则,可有可无,当设置时,请求中的api接口会变为空
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    //关闭eslint校验
    // lintOneSave: false
    //在地址栏中多了/app 项目是否在域名的根目录下不在就加
    //                           ↓
    // publicPath: '/app',
    // // 输出项目目录=>改名
    // outputDir: 'dest',
    // indexpath:'index2.html',
    // lintOnSave:false,
    //可以使用户看不到源码
    productionSourceMap: false,
    // 删除预加载真正按需
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}
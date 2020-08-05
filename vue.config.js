module.exports = { //代理跨域才需要用到 最安全他们不知道我们要的是哪个接口
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'https://www.imooc.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ""
                }
            }
        }
    }
}
module.exports = {
    // 修改的配置
    // 将publicPath: '/api',改为publicPath: '/',
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.56.1:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}
const path = require('path');

module.exports = {
    // vue2.0 需要devServer
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'https://pvp.qq.com/',
    //             rewrite: path => path.replace(/^\/api/, ''),
    //         }
    //     }
    // }
    hostname: 'localhost',
    port: 3000,
    // 反向代理
    proxy: {
        '/api': {
            target: 'https://pvp.qq.com/',
            changeOrigin: true, // 是否运行跨域
            rewrite: path => path.replace(/^\/api/, ''),
        }

    }
}
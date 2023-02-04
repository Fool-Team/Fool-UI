const path = require('path')
module.exports = {
    lintOnSave: false, // 修改成false 就是不检查了
    pages: {
        index: {
            // 修改项目入口文件
            entry: path.resolve(__dirname, 'website/examples/main.js'),
            template: path.resolve(__dirname, 'website/public/index.html'),
            filename: 'index.html'
        }
    },
    // 扩展webpack配置,使webpages加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname, 'packages'))
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}

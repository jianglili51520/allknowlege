//一般创建的项目大都没有vue.config.js配置文件，需要手动添加，但是每个项目内容都差不多一样，只有api地址不同
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : './',
    // baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
    // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 放置生成的静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，如果开启，每当你写好代码保存时不符合书写规范就不停报错，所以设置为false，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译，设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    devServer: {
        proxy: {
            '/api': {
                target: 'http://dev.codenai.com:7777', //这里理解成用'/api'代替target里面的地址,比如我要调用'http://dev.codenai.com:7777/user/add'，直接写'/api/user/add'即可
                ws: true,
                changOrigin: true //如果设置成true：发送请求头中host会设置成target
            },
        },
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },

}
//多项目配置
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'dist', // 构建输出目录
  // assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  // lintOnSave: "default", // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  devServer: {
    proxy: {
      '/api': {
        target: 'http://dev.codenai.com:7777',
        ws: true,
        changOrigin: true
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
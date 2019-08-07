const isProduction = process.env.NODE_ENV === 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const {resolve} = require('path')
// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname,dir)
// }

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: process.env.BASE_URL,
    outputDir: 'dist', // 默认dist
    indexPath: 'index.html', // 默认index.html
    filenameHashing: true, // 默认true 控制缓存
    pages: undefined, // 用于构建多页面，默认undefined
    runtimeCompiler: false, // 是否使用包含运行时编译器的Vue核心的构建
    transpileDependencies: [],  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    productionSourceMap: false,  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    configureWebpack: config => {
        if (isProduction) {
          // 为生产环境修改配置...
          // 使用uglifyjs-webpack-plugin压缩混淆代码
          let optimization = {
            minimizer: [
              new UglifyJsPlugin({
                uglifyOptions: {
                  warnings: false,
                  compress: {
                    drop_console: true,
                    drop_debugger: false,
                    pure_funcs: ['console.log']
                  }
                }
              })
            ]
          }
          Object.assign(config,{optimization})
          // 开启gzip压缩
          const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
          config.plugins.push(
            new CompressionWebpackPlugin({
              filename: '[path].gz[query]',
              algorithm: 'gzip',
              test: productionGzipExtensions,
              threshold: 10240, // Only assets bigger than this size are processed. In bytes.
              minRatio: 0.8,
              deleteOriginalAssets: false, // Whether to delete the original assets or not.
            })
          )
        } else {
          // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
      config.resolve.alias
            .set('@',resolve('src'))
            .set('js',resolve('src/assets/js'))
            .set('less',resolve('src/assets/less'))
            .set('img',resolve('src/assets/img'))
            .set('public',resolve('src/components/public'))
    },
    // css相关配置
    css: {
        // 启用 CSS modules
        modules: true,
        // 是否使用css分离插件
        extract: isProduction ? true : false,
        // 开启 CSS source maps?
        sourceMap: isProduction ? false : true,
        // css预设器配置项
        // loaderOptions: {
        //   postcss: {
        //     plugins: [
        //       require('postcss-px2rem')({
        //         remUnit: 75
        //       })
        //     ]
        //   }
        // },
    },
    pwa: {},  // PWA 插件相关配置
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: []
      }
    },
    parallel: require('os').cpus().length > 1, // 该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
    devServer: { // 所有 webpack-dev-server 的选项都支持
    hot: true, // 热更新
        open: true,
        host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
        // proxy: {}, // 跨域代理
    },

}

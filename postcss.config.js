module.exports = {
  plugins: {
    autoprefixer:{},
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-px-to-viewport": {
      viewportWidth: 375,   // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 5,     // 指定`px`转换为视窗单位值的小数位数
      viewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 10,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false,     // 允许在媒体查询中转换`px`
      propList: ['*', '!font-size','!height','!margin*','!line-height','!top','!bottom','!left','!right','!padding*','!min-*','!background*','!*::*','!border-*','!filter']  // 指定哪些属性被转换成px
    }, 
    "postcss-viewport-units": {},
    "cssnano": {
      preset: 'default'
    }
  }
}

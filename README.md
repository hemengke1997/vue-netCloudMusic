# 使用@vue/cli搭建一个vue移动端项目
### 安装淘宝的NPM镜像
`$ npm install -g cnpm --registry=https://registry.npm.taobao.org`

### 安装node9以上环境
因为vue-cli3是基于webpack搭建的，所以需要用到node，可以在官网下载安装，安装之后可以命令行输入 `node -v` 查看当前版本

### 全局安装vue-cli3
Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 `npm uninstall vue-cli -g`卸载它

## 采坑记录
### 1. 安装  cnpm i -g @vue/cli (3.x版本)
报错 ==EPERM: operation not permitted, mkdir 'C:\Program Files\nodejs\node_modules\@vue'==

原因：权限不足

> 解决方法：找 C:\Windows\System32\cmd.exe，使用管理员方式运行，然后输入 `cnpm i -g @vue/cli`。安装成功之后可以输入 `vue --version`查看当前vue-cli版本，如果显示版本为3.x，那么祝贺你安装成功

![1](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/52FBC9C317B440B2A0A5D9161FB00A33/896)

此时项目中还是空空如也的，下一步开始创建项目


---


### 2.构建项目命令： vue create <项目名> 
- 如果你在 Windows 上通过 minTTY 使用 Git Bash，交互提示符并不工作。你必须通过 `winpty vue.cmd create hello-world` 启动这个命令。

- 有两个选项，第一个是默认选项，适合快速创建一个新项目的原型；第二个选项进入后可以手动设置一些面向生产的项目所需要的配置。

![2](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/51D700FA161049C49CD52BB63DF126BB/920)

- 选择了第二个选项之后，有如下配置，可以按照需求来选择（按空格选择）

![3](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/458CB01B85124A08B0E171E1265B2C8B/905).

- 自定义配置选项截图

![4](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/8964EA5E6EB040EBB99C33BE33ED36A4/944)

> 对上面截图的选项做一些说明：
```
Use history mode for router? (Requires proper server setup for index fallback in production)
路由是否使用history模式？
vue router的mode有两种方式：hash , histroy
hash ——即url中的#。比如http://www.abc.com/#/login，hash的值为#/login。
它的特点是：hash出现在URL中，但不会放在http请求中，不会重新加载页面，对后端完全没有影响
history ——里面HTML5中新增的API pushState()和replaceState()方法 （需要特定的浏览器支持）
这两个方法应用于浏览器的历史记录栈，在当前已有的back、forward、go的基础之上，提供对历史记录进行修改的功能。
虽然改变了URL，但是他们也不会向后端发送请求
```
```
Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
选择默认预处理器类型
这里我选择的less（因为我用less写CSS代码）
```
```
Pick a linter / formatter config: Prettier
选择校验方式和代码风格统一方式
个人开发的话，我根本就不会选ESlint。
团队的话，可以根据团队需求来选择风格统一方式。
```
```
Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?
把Babel, PostCSS, ESLint等配置放在哪里？
可以放在特定的文件中，也可以放在package.json中
vue-cli2把这些配置是单独放的
```



项目构建完成之后的目录结构如下(@vue/cli3)：

![目录结构](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/3075C831696D4FCF8F26BF17618E85E5/1014)

而vue-cli2的项目目录结构是这样子的...

![旧的目录结构](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/E55F38E401CE412FA5CE57085011ED06/1016)

**可以看到新版的项目目录中没有build和config了**！那我们在哪里配置webpack呢？？？问题不大，可以按照[vue-cli官方文档](https://cli.vuejs.org/zh/config/)来配置  
顺道说明一下package-lock.json，简单来说，这个文件是为了团队环境的一致，当其他人拉这个仓库代码时，运行npm i，就可以下载所有需要的依赖且保持一致

---

### 3. 配置vue.config.js

> 插上一句：脚手架搭建出来的环境是基于单页面应用的，什么叫单页面呢，比如说一套后台管理系统。


mm | 多页面MPA | 单页面SPA
---|---|---
应用构成 | 由多个完整页面组成 | 由一个完整页面和多个页面片段组成
跳转方式 | 从一个页面跳转到另外一个页面，有http请求 | 把一个页面片段删除或者隐藏，加载另外一个页面片段并显示出来，没有http请求
跳转后公共资源是否重新加载 | 是 | 否
能否实现转场动画 | 不能 | 可以实现
页面之间传递数据 | 通过URL，cookie或localstorage | 通过组件间通信或vuex
SEO | 可以做到很好 | 需要nuxt.js或者Vue SSR
特别适用范围 | 对SEO要求高的 | 对用户体验要求高的，尤其是移动应用
开发难度 | 低，框架选择容易 | 高一些，需要专门的框架

> vue的SEO问题

解决这个问题之前，需要知道SEO是什么，浏览器是如何解析我们的HTML代码的

1. 搜索引擎的基础爬虫原理是抓取你的URL，然后获取你的HTML源代码并解析。而你的页面通常用了vue等js的数据绑定机制来展示页面数据，爬虫获取到的html是你的模型页面而不是最终数据的渲染页面，所以说用js来渲染数据对seo并不友好。
2. SEO 本质是一个服务器向另一个服务器发起请求，解析请求内容。但一般来说搜索引擎是不会去执行请求到的js的。也就是说，如果一个单页应用，html在服务器端还没有渲染部分数据数据，在浏览器才渲染出数据，而搜索引擎请求到的html是没有渲染数据的。 这样就很不利于内容被搜索引擎搜索到。 所以服务端渲染就是尽量在服务器发送到浏览器前 页面上就是有数据的。
3. 一般的数据逻辑操作是放在后端的。排序这个如果仅仅是几条数据，前后端排序开起来是一样的，如果是有1000条数据，前端要排序就要都请求过来。这样显然是不合理的。

### 4.适配移动端
##### 方案1： 安装`flexible`和`postcss-px2rem`

1. 命令行安装  `cnpm i lib-flexible` ，`cnpn i postcss-px2rem`

这个方案是之前手淘解决移动端适配创造的一个JS库flexibel.js  （已经不维护了）
现在viewport兼容性越来越好的今天，CSS3的新属性 `vh,vw` 对于移动端开发更方便了

2. 引入lib-flexible

在项目入口文件main.js中 `import 'lib-flexible'`
注意：由于flexible会动态给页面的header中添加`<meta name='viewport'>`标签，所以要把public/index.html中的这个标签删除了

3. 配置postcss-px2rem

在vue.config.js中配置，具体配置内容如下：
```javascript
 1 module.exports = {
 2     css: {
 3         loaderOptions: {
 5           postcss: {
 6             plugins: [
 7               require('postcss-px2rem')({
 8                 remUnit: 75  //转换的基数
 9               })
10             ]
11           }
12         }
13     },
14 }
```

4. 重启项目

在about.vue中 我写了个这个，结果是什么呢？
```
.about {
  width: 300px;
  height: 100px;
  background-color: grey;
}
```

在浏览器中，
```
.about {
    width: 4rem;
    ...
}
```

px确实转化成了rem，但是有个问题就是，HTML的font-size最大是54，这个问题我还没解决。看了flexible的源码，里面出现了540，好像是设置了视窗的最大宽度

解决了：

![解决](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/1C424CA19C3E4071ACF3C2AE08525DC9/1264)

可以看到淘宝对分辨率大于540的设备不认为它们是移动端。当分辨率大于540时，一律按照540处理。可以改的，比如我想最大兼容750的（因为设计稿通常是750x1336）
![ok](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/6CE99E514B2844D5B80A25721BE8CA72/1276)


##### 方案2:使用vw,vh移动端适配
> 介绍vh，vw。 他们俩是相对于视窗的长度

![1](https://images2017.cnblogs.com/blog/1210235/201709/1210235-20170918162531150-539160393.jpg)
![2](https://images2017.cnblogs.com/blog/1210235/201709/1210235-20170918162831821-1344168854.jpg)

### 1. 安装依赖 
 
**-D**（开发依赖）
- postcss-import
- postcss-url
- cssnano-preset-advanced

**-S**（开发，运行依赖）
- postcss-aspect-ratio-mini
- postcss-px-to-viewport
- postcss-cssnext
- cssnano
- postcss-viewport-units

### 2. 配置.postcssrc.js

```javascript
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 750,  //视窗的宽度，对应的是我们设计稿的宽度，一般是750
        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        unitPrecision: 3,       // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw',     // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false       // 允许在媒体查询中转换`px`
      },
      "postcss-viewport-units":{},
      "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      },
  }
}
```

解释一下上述的插件：

- [postcss-import](https://github.com/postcss/postcss-import)主要功有是解决@import引入路径问题。使用这个插件，可以让你很轻易的使用本地文件、node_modules或者web_modules的文件。这个插件配合postcss-url让你引入文件变得更轻松。
- postcss-url相关配置可以点击[这里](https://github.com/postcss/postcss-url)。该插件主要用来处理文件，比如图片文件、字体文件等引用路径的处理。
- [autoprefixer](https://github.com/postcss/autoprefixer)插件是用来自动处理浏览器前缀的一个插件。如果你配置了[postcss-cssnext](https://github.com/MoOx/postcss-cssnext)，其中就已具备了autoprefixer的功能。在配置的时候，未显示的配置相关参数的话，表示使用的是[Browserslist](https://github.com/browserslist/browserslist)指定的列表参数，你也可以像这样来指定last 2 versions 或者 > 5%

Vue-cli默认配置了上述三个PostCSS插件，但我们要完成vw的布局兼容方案，或者说让我们能更专心的撸码，还需要配置下面的几个PostCSS插件：
- [postcss-aspect-ratio-mini](https://github.com/yisibl/postcss-aspect-ratio-mini)（用于将元素的尺寸固定为宽高比）
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)（把px转换成视图单位）
- [postcss-write-svg](https://github.com/jonathantneal/postcss-write-svg)（直接在css中使用svg）
- [postcss-preset-env](https://preset-env.cssdb.org/)（使用未来的css语言）
- [cssnano](https://github.com/cssnano/cssnano)（压缩）
- [postcss-viewport-units](https://github.com/springuper/postcss-viewport-units)

使用他们要先进行安装(按照需求，如果不需要就不用安装)
```
cnpm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-preset-env postcss-viewport-units cssnano --S
```

> **特别声明**：由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。对于其他的插件使用，稍后会简单的介绍。

在cssnano的配置中，使用了preset: "advanced"，所以我们需要另外安装：
```
npm i cssnano-preset-advanced --save-dev
```
cssnano集成了一些其他的PostCSS插件，如果你想禁用cssnano中的某个插件的时候，可以像下面这样操作：
```javascript
"cssnano": {
    autoprefixer: false,
    "postcss-zindex": false
}
```
上面的代码把autoprefixer和postcss-zindex禁掉了。前者是有重复调用，后者是一个讨厌的东东。只要启用了这个插件，z-index的值就会重置为1。这是一个天坑，**千万记得将postcss-zindex设置为false。**

目前出视觉设计稿，我们都是使用750px宽度的，那么100vw = 750px，即1vw = 7.5px。那么我们可以根据设计图上的px值直接转换成对应的vw值。在实际撸码过程，不需要进行任何的计算，直接在代码中写px，比如：

```
.about {
  border: .5px solid #000;
  border-bottom-width: 4px;
  font-size: 14px;
  line-height: 20px;
  background-color: pink;
}
```
编译出来的CSS：
```
.about[data-v-039c5b43] {
    border: solid #000;
    border-width: .5px .5px .533vw;
    font-size: 1.867vw;
    line-height: 2.667vw;
    background-color: pink;
    content: "viewport-units-buggyfill; border-bottom-width: 0.533vw; font-size: 1.867vw; line-height: 2.667vw";
}

```
在不想要把px转换为vw的时候，首先在对应的元素（html）中添加配置中指定的类名.ignore或.hairlines(.hairlines一般用于设置border-width:0.5px的元素中)：
```
<template>
  <div class="about ignore">
    <h1>This is an about page</h1>
  </div>
</template>

<style lang="less" scoped>
.about {
  border: .5px solid #000;
  border-bottom-width: 4px;
  font-size: 14px;
  line-height: 20px;
  background-color: pink;
}
.ignore {
  color: red;
  margin: 10px;
}
```
编译出来：

```
.ignore[data-v-039c5b43] {
    color: red;
    margin: 10px;
}

<style>
.about[data-v-039c5b43] {
    border: solid #000;
    border-width: .5px .5px .533vw;
    font-size: 1.867vw;
    line-height: 2.667vw;
    background-color: pink;
    content: "viewport-units-buggyfill; border-bottom-width: 0.533vw; font-size: 1.867vw; line-height: 2.667vw";
}
```

上面解决了px到vw的转换计算。那么在哪些地方可以使用vw来适配我们的页面。根据相关的测试：

- 容器适配，可以使用vw
- 文本的适配，可以使用vw
- 大于1px的边框、圆角、阴影都可以使用vw
- 内距和外距，可以使用vw

postcss-aspect-ratio-mini主要用来处理元素容器宽高比。在实际使用的时候，具有一个默认的结构
```html
<div aspectratio>
    <div aspectratio-content></div>
</div>
```
在实际使用的时候，可以把自定义属性aspectratio和aspectratio-content换成相应的类名，比如：
```html
<div class="aspectratio">
    <div class="aspectratio-content"></div>
</div>
```
不知道这个怎么用...

[postcss-viewport-units](https://github.com/springuper/postcss-viewport-units)插件主要是给CSS的属性添加content的属性，配合[viewport-units-buggyfill](https://github.com/rodneyrehm/viewport-units-buggyfill)库给vw、vh、vmin和vmax做适配的操作。  
这是实现vw布局必不可少的一个插件，因为少了这个插件，这将是一件痛苦的事情。后面你就清楚。

### **3. 兼容性处理** 

**引入JS文件**

viewport-units-buggyfill主要有两个JavaScript文件：viewport-units-buggyfill.js和viewport-units-buggyfill.hacks.js。你只需要在你的HTML文件中引入这两个文件。比如在Vue项目中的index.html引入它们：
```
<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
```

第二步，在HTML文件中调用viewport-units-buggyfill，比如：

```
<script>
    window.onload = function () {
        window.viewportUnitsBuggyfill.init({
            hacks: window.viewportUnitsBuggyfillHacks
        });
    }
</script>
```

为了你Demo的时候能获取对应机型相关的参数，我在示例中添加了一段额外的代码，估计会让你有点烦：
```
<script>
    window.onload = function () {
        window.viewportUnitsBuggyfill.init({
        hacks: window.viewportUnitsBuggyfillHacks
        });

        var winDPI = window.devicePixelRatio;
        var uAgent = window.navigator.userAgent;
        var screenHeight = window.screen.height;
        var screenWidth = window.screen.width;
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;

        alert(
            "Windows DPI:" + winDPI +
            ";\ruAgent:" + uAgent +
            ";\rScreen Width:" + screenWidth +
            ";\rScreen Height:" + screenHeight +
            ";\rWindow Width:" + winWidth +
            ";\rWindow Height:" + winHeight
        )
    }
</script>
```

具体的使用。在你的CSS中，只要使用到了viewport的单位（vw、vh、vmin或vmax ）地方，需要在样式中添加content：
```
.my-viewport-units-using-thingie {
    width: 50vmin;
    height: 50vmax;
    top: calc(50vh - 100px);
    left: calc(50vw - 100px);

    /* hack to engage viewport-units-buggyfill */
    content: 'viewport-units-buggyfill; width: 50vmin; height: 50vmax; top: calc(50vh - 100px); left: calc(50vw - 100px);';
}
```

这可能会令你感到恶心，而且我们不可能每次写vw都去人肉的计算。特别是在我们的这个场景中，咱们使用了postcss-px-to-viewport这个插件来转换vw，更无法让我们人肉的去添加content内容。

这个时候就需要前面提到的postcss-viewport-units插件。这个插件将让你无需关注content的内容，插件会自动帮你处理。比如插件处理后的代码：
![1](https://note.youdao.com/yws/public/resource/202e81f1551b8e4682fd5a1a4b70dfb0/xmlnote/BA23BCA6CCD142F0964119EA40CD2F4A/1443)

Viewport Units Buggyfill还提供了其他的功能。详细的这里不阐述了。但是content也会引起一定的副作用。比如img和伪元素::before(:before)或::after（:after）。在img中content会引起部分浏览器下，图片不会显示。这个时候需要全局添加：
```
img {
    content: normal !important;
}
```

而对于::after之类的，就算是里面使用了vw单位，Viewport Units Buggyfill对其并不会起作用。比如：

```
// 编译前
.after {
    content: 'after content';
    display: block;
    width: 100px;
    height: 20px;
    background: green;
}

// 编译后
.after[data-v-469af010] {
    content: "after content";
    display: block;
    width: 13.333vw;
    height: 2.667vw;
    background: green;
}
```

[原项目下载地址](https://www.w3cplus.com/sites/default/files/blogs/2018/1801/vw-layout.zip)
接着运行npm i，再运行npm run dev，你就可以看到效果了。

---
## vue.config.js
> 首先，要知道全局的cli配置放在一个`.vuer`c的json文件中，可以使用编辑器直接编辑这个文件来更改已经保存的选项，也可以使用`vue config`

> 在`package.json`的同级目录下创建`vue.config.js`,这样的话这个js文件会被`@vue/cli-service`自动加载。

一般通用的vue.config.js的配置如下：

```javascript
const isProduction = process.env.NODE_ENV === 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: process.env.BASE_URL, // .env文件中的
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
    // css相关配置
    css: {
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件
        extract: isProduction ? true : false,
        // 开启 CSS source maps?
        sourceMap: isProduction ? false : true,
        // css预设器配置项
        loaderOptions: {
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 75
              })
            ]
          }
        },
    },
    pwa: {},  // PWA 插件相关配置
    pluginOptions: {  // 第三方插件配置
    // ...
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
```

#### 环境变量和模式

可以在项目的根目录中添加下列文件来指定环境变量
```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

一个环境文件值包含环境变量的键值对，如：
```
NODE_ENV = 'development'
BASE_URL = '/'
VUE_APP_SECRET=secret
```

被载入的变量将会对 `vue-cli-service` 的所有命令、插件和依赖可用。

> **环境加载属性**  
为一个特定模式准备的环境文件的 (例如 `.env.production`) 将会比一般的环境文件 (例如 `.env`) 拥有更高的优先级。  
此外，Vue CLI 启动时已经存在的环境变量拥有最高优先级，并不会被 `.env` 文件覆写

> NODE_ENV  
如果在环境中有默认的 `NODE_ENV`，你应该移除它或在运行 `vue-cli-service` 命令的时候明确地设置 `NODE_ENV`。

你可以通过传递 `--mode`选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量，请在你的 `package.json` 脚本中加入：
```
"dev-build": "vue-cli-service build --mode development",
```

至此，环境已经搭建完毕，不出意外的话，`npm run serve` 是没有问题的

以上参考：

[vueCLI官网](https://cli.vuejs.org/zh/)

[基于vue-cli3.0构建功能完善的移动端架子](https://juejin.im/post/5cbf32bc6fb9a03236393379)

[如何在Vue项目中使用vw实现移动端适配](https://www.cnblogs.com/yikuu/p/9052148.html)

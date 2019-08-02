# 使用@vue/cli搭建一个vue项目
### 安装淘宝的NPM镜像
`$ npm install -g cnpm --registry=https://registry.npm.taobao.org`

### 安装node9以上环境
因为vue-cli3是基于webpack搭建的，所以需要用到node，可以在官网下载安装，安装之后可以命令行输入 `node -v` 查看当前版本

### 全局安装vue-cli3
Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 `npm uninstall vue-cli -g`卸载它

## 采坑记录
### 1. 安装  cnpm i -g @vue/cli (3.x版本)
报错：======Error====: EPERM: operation not permitted, mkdir 'C:\Program Files\nodejs\node_modules\@vue'==

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





> 首先，要知道全局的cli配置放在一个`.vuer`c的json文件中，可以使用编辑器直接编辑这个文件来更改已经保存的选项，也可以使用`vue config`

#### vue.config.js
---
> 在`package.json`的同级目录下创建`vue.config.js`,这样的话这个js文件会被`@vue/cli-service`自动加载。




# vue-first

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


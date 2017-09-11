# node-vue-demo

## 技术栈
vue2.0 + vuex + vue-router + ES6/ES7 + webpack + lass + nodejs + express + MongoDB

## 项目运行
 1. node v6.11.2
 2. npm 3.10.10
 3. vue 2.0

```
克隆，或者直接下载
git clone https://github.com/474782977/node-vue.git

进入文件夹
cd node-vue

安装依赖
npm install
```

### 编译环境
```

开启本地服务器
npm run dev
npm run api 打开一个终端，运行服务
```

## 说明
```
>  如有问题或者遇到坑请直接在 Issues 中提，或者可以加我的QQ 474782977

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  部署详解:http://blog.csdn.net/qq_28027903/article/details/77929618

>  预览地址:http:www.ng-rc.com
```

## 项目布局
```
|-- server								// node源码目录
|   |-- app.js							// 启动文件
|   |-- api.js							// api服务文件
|   |-- db.js							// MongoDB文件
|-- src									// 静态源码目录
|   |-- components						// 组件
|   |-- assets							// 公共静态文件、图片
|   |-- page							//	所有页面
|   |-- lib								// 引用的插件
|       |-- ApiSetting.js				// 接口合集
|       |-- http.js						// http请求封装
|   |-- router							// 路由配置
|       |-- index.js					// 路由集合文件
|   |-- page							// 页面
|       |-- Hello.vue					// 页面文件
|   |-- store							// vuex的状态管理
|       |-- index.js					// 引用vuex，创建store
|   |-- App.vue							// 页面入口文件
|   |-- main.js							// 程序入口文件，加载各种公共组件
|-- .babelrc							// ES6语法编译配置
|-- .editorconfig						// 代码编写规格
|-- .gitignore							// 忽略的文件
|-- index.html							// 入口html文件
|-- package.json						// 项目及工具的依赖配置文件
|-- webpack.config.js					// webpack 配置文件
|-- README.md							// 说明
```
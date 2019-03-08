# About
这是慕课网上[Vue+Webpack打造todo应用](https://www.imooc.com/learn/935)课程的源码

# 使用方法
```
git clone https://github.com/Jokcy/vue-todo-tech.git
```
进入项目目录，运行
```
npm install
```
然后执行

npm run dev
开始开发项目

以下为马圆圆备注

1、build webpack.config.practice.js  基础配置，package.json中通过 practice启动


## webpack包
extract-text-webpack-plugin 已弃用
使用mini-css-extract-plugin替代
功能：提取css样式

## 升级webpack4版本后，package.json包版本依赖旧版本webpack的处理方法

先将旧版本包统一卸载 以下示例
npm uninstall 包名(babel-loader)
npm uninstall babel-loader file-loader html-webpack-plugin extract-text-webpack-plugin

再重新安装包，此时会默认安装最新版本(不再安装 extract-text-webpack-plugin，安装mini-css-extract-plugin)
示例
npm install babel-loader mini-css-extract-plugin file-loader html-webpack-plugin



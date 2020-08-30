// webpack打包图片
// 1. 在js中创建图片来引入
//  file-loader在内部生成一张图片, 到build目录下
//  返回生成图片到名字
// 2. 在css中引入
// 3. 在img标签中引入
import logo from './image1.jpg'
let img = new Image()
// console.log(logo);
img.src = logo
document.body.appendChild(img)

// import $ from 'jquery'
// expose-loader 暴露 全局的loader 内联的loader
// pre 前面执行的loader  normal loader 普通loader 内联loader post-loader 后置loader
// console.log($); // 在每个模块中注入$对象

// console.log("object12");

// require("./a.js")

// require("./index.css");

require("./index.less");

// let fn = () => {
//   console.log("箭头函数");
// };

// fn();

// @log
// class A {
//   a = 1
// }

// let a = new A()
// console.log(a);

// function log(target) {
//   console.log(target);
// }

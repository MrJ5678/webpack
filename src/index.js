// import $ from 'jquery'
// expose-loader 暴露 全局的loader 内联的loader
// pre 前面执行的loader  normal loader 普通loader 内联loader post-loader 后置loader
console.log($); // 在每个模块中注入$对象

// console.log("object12");

// require("./a.js")

// require("./index.css");

// require("./index.less");

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

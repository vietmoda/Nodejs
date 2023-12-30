const path = require('path')
const express = require('express') //import express

const configViewEngine = (app) =>{
    //config template engine
    app.set('views', path.join('./src', 'views')) //khai báo nơi lưu trữ file engine(file đuôi ejs)
    app.set('view engine', 'ejs') //Định nghĩa template engine sử dụng, ở đây là ejs

    //config static file: lưu trữ các file chứa tệp tĩnh trong thư mục public
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;


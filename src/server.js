const express = require('express') //import express
const path = require('path')
require('dotenv').config() //import dotenv

const app = express() // tạo express application
const port = process.env.PORT || 8888 // init port bằng cách lấy biến môi trường ở file .env
const hostname = process.env.HOST_NAME

//config template engine
app.set('views', path.join(__dirname, 'views')) //khai báo nơi lưu trữ file engine(file đuôi ejs)
app.set('view engine', 'ejs') //Định nghĩa template engine sử dụng, ở đây là ejs
//phải khai báo template engine trước khi khai báo routes

//config static file: lưu trữ các file chứa tệp tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, 'public')))

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
app.get('/', (req, res) => {
res.send('Hello Worldd!')
})

app.get('/testEJS', (req, res) => {
    res.render('sample.ejs')//không cần khai báo thêm thư mục ở đâu vì đã config template engine ở view rồi
    })

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
console.log(`Example app listening on port ${port}`)
})
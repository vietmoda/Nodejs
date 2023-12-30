const express = require('express')
const router = express.Router();

//req (request), res(response) là 2 object trong môi trường Node.js
router.get('/', (req, res) => {
    res.send('Hello Worldd!')
    })
    
router.get('/testEJS', (req, res) => {
    res.render('sample.ejs')//không cần khai báo thêm thư mục ở đâu vì đã config template engine ở view rồi
    })

module.exports = router;
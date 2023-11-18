const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('<h1>This is demo page</h1>')
    console.log('this is demo result')
})

router.get('/hello', function (req, res) {
    res.render('demo/hello')
})

router.get('/admin', function (req,res) {
    res.render('demo/admin', {layout: 'admin_layout'})
})

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  //views/home.hbs
  res.render('home')
})

router.get('/login', function (req, res) {
  res.render('login')
})

router.get('/test', (req, res) => {
  var university = "Greenwich Vietnam"
  var address = " So 2 Pham Van Bach - Cay Giay - Ha Noi"
  var subject = "Cloud Computing"
  var country = "Viet Nam"
  res.render('test', {
    university,
    address,
    monhoc: subject,
    year: 2023,
    country: country
  })
})

router.get('/test1', (req, res) => {
  let mobiles = ['iphones', 'samsung', 'apple', 'oppo', 'xiaomi']
  res.render('test1', {mobiles: mobiles})
})

module.exports = router
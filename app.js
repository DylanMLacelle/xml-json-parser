
const express = require('express')
var loader = require('./script')
const app = express()
const port = 3000

app.set('view engine', 'pug')


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.render('index', {homePage: true})
    //res.sendFile('D:\\College\\Emerging Technology\\Assignment1\\index.html')
})

app.get('/json', (req, res) => {
  res.render('index', {jsonList: loader.json_load()})
})

app.get('/xml', (req, res) => {
  res.render('index', {xmlList: loader.xml_load()})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

  //console.log(loader.json_load());
  //console.log(loader.xml_load());
})


const express = require('express')
const path=require('path')

const app = express();
app.set('view engine','hbs');

const public_Dir_path = path.join(__dirname,'../public')
app.use(express.static(public_Dir_path))


app.get('/', function(req, res){
    res.render("index");
  })
  app.get('/product', function(req, res){
    res.render("product")
  })
  app.listen(7000)
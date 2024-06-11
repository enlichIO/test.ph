const express = require('express')
const path=require('path')

const app = express();
const port = process.env.PORT || 3000
const public_Dir_path = path.join(__dirname,'./public')
app.use(express.static(public_Dir_path))


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/index.html"));
  })
  app.get('/product', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/product.html"))
  })
  app.listen(port)

// purpose: create basic server with express

var express = require('express');
var router = require('./router.js');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();  // create server

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client')));  // send client directory
app.use('/', router);  // use router for '/' routes



app.listen(3000, function() {  // listen on port 3000
  console.log('listening on port 3000');
});
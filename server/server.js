// purpose: create basic server with express

var express = require('express');
var router = require('./router.js');
var path = require('path');

var app = express();  // create server


app.use(express.static(path.resolve(__dirname, '../client')));  // send client directory
app.use('/api', router);  // use router for '/api' routes



app.listen(3000, function() {  // listen on port 3000
  console.log('listening on port 3000');
});
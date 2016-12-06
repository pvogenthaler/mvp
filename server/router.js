// purpose: route client requests for '/' routes

var express = require('express');

var app = express();

module.exports = (function() {
  var route = express.Router();

  route.get('/', function (req, res) {
    res.send('/ req');
  });

  return route;
})();
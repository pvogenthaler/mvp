// purpose: route client requests for '/' routes

var express = require('express');

var app = express();

module.exports = (function() {
  var api = express.Router();

  api.get('/api', function (req, res) {
    res.send('/api req');
  });

  return api;
})();
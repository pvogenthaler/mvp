// purpose: route client requests for '/' routes

var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Favorite = require('./config.js');


module.exports = (function() {
  var route = express.Router();

  route.post('/', function (req, res) {
    var newFav = new Favorite({
      article: req.body.data
    });

    newFav.save().then(function() {
      console.log('saved fav in db!');
    });
  });

  route.get('/', function (req, res) {
    Favorite.find({}, function (err, articles) {
      if (err) {
        console.log(err);
      }
      console.log(articles);
      res.send(articles);
    });
  });

  return route;
})();


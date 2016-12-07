// purpose: route client requests for '/' routes

var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Favorite = require('./config.js');


module.exports = (function() {
  var route = express.Router();

  route.post('/', function (req, res) {
    // console.log("THIS IS REQ", req.body.data.title); // this works!!!

    var newFav = new Favorite({
      article: req.body.data
    });

    // console.log('newfav', newFav);
    newFav.save();

  });

  route.get('/', function (req, res) {
    Favorite.find({}, function (err, articles) {
      if (err) {
        console.log(err);
      }
      res.send(articles);
    });
  });

  return route;
})();


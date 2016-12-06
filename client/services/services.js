// purpose: routes templates

var services = angular.module('newsly.services', []);

services.factory('Services', function($http) {

  // api get request
  var getFeed = function () {
    return $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/worldnews/new.json?sort=hot&limit=75'
    }).then(function(res) {
      return res.data;
    });
  };


  // requests to server
  var getFavs = function () {
    return $http({
      method: 'GET',
      url: '/'
    }).then(function(res) {
      // do somthing here
    });
  };

  var addFav = function (fav) {
    return $http({
      method: 'POST',
      url: '/',
      data: fav
    }).then(function(res) {
      // do something here
    });
  };

  var removeFav = function (fav) {
    return $http({ // optional
      method: 'DELETE',     
      url: '',
      data: fav
    }).then(function(res) {
      // do somthing here
    });
  };

  return {
    getFeed: getFeed,
    getFav: getFavs,
    addFav: addFav,
    removeFav: removeFav
  };
  
});
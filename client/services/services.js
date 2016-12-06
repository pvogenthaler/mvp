// purpose: routes templates

var services = angular.module('newsly.services', []);

services.factory('Services', function($http) {

  var getFeed = function () {
    return $http({
      method: 'GET',
      url: '/api/feed'
    }).then(function(res) {
      // do somthing here
    });
  };

  var getFavs = function () {
    return $http({
      method: 'GET',
      url: '/api/favorites'
    }).then(function(res) {
      // do somthing here
    });
  };

  var addFav = function (fav) {
    return $http({
      method: 'POST',
      url: '/api/favorites',
      data: fav
    }).then(function(res) {
      // do something here
    });
  };

  var removeFav = function (fav) {
    return $http({ // optional
      method: 'DELETE',     
      url: 'api/favorites',
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
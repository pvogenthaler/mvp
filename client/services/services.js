// purpose: routes templates

var services = angular.module('newsly.services', []);

services.factory('Services', function($http) {

  // api get request
  var getFeed = function () {
    return $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/worldnews/new.json?sort=hot&limit=100'
    });
  };


  // requests to server
  var getFavs = function () {
    return $http({
      method: 'GET',
      url: '/'
    });
  };

  var addFav = function (fav) {
    return $http({
      method: 'POST',
      url: '/',
      data: fav
    });
  };

  var removeFav = function (fav) {
    return $http({ // optional
      method: 'DELETE',     
      url: '',
      data: fav
    });
  };

  return {
    getFeed: getFeed,
    getFavs: getFavs,
    addFav: addFav,
    removeFav: removeFav
  };
  
});
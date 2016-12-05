var services = angular.module('newsly.services', []);

services.factory('Services', function($http) {

  var getFeed = $http({
    method: 'GET',
    url: '/api/feed'
  }).then(function(res) {
    // do somthing here
  });

  var getFavs = $http({
    method: 'GET',
    url: '/api/favorites'
  }).then(function(res) {
    // do somthing here
  });

  var addFav = $http({
    method: 'POST',
    url: '/api/favorites'
  }).then(function(res) {
    // do something here
  });

  var removeFav = $http({ // optional
    method: 'DELETE',     
    url: 'api/favorites'
  }).then(function(res) {
    // do somthing here
  });

  return {
    'getFeed': getFeed,
    'getFav': getFavs,
    'addFav': addFav,
    'removeFav': removeFav
  };
});
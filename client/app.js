var newsly = angular.module('newsly', [
  'ngRoute',
  'ngResource',
  'newsly.feed',
  'newsly.favorites',
  'newsly.services'
]);

newsly.config(function($routeProvider) {
  $routeProvider                          // todo if time permits: add '/login' route
    .when('/', {
      templateUrl: 'feed/feed.html',
      controller: ''
    })
    .when('/favorites', {
      tempalteUrl: 'favorites/favorites.html',
      controller: ''
    })
    .otherwise({
      redirectTo: '/'
    });
});
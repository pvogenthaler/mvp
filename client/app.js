// purpose: create newsly module & setup template routing

var app = angular.module('newsly', [
  'ngRoute',
  'ngResource',
  'newsly.feed',
  'newsly.favorites',
  'newsly.services'
]);

app.config(function($routeProvider) {  // todo: if time permits, add '/login' route
  $routeProvider                          
    .when('/', {
      templateUrl: 'feed/feed.html',
      controller: 'FeedCtrl'
    })
    .when('/favorites', {
      tempalteUrl: 'favorites/favorites.html',
      controller: 'FavCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
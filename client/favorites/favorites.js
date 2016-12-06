// purpose: create favorites controller

var fav = angular.module('newsly.favorites', []);

fav.controller('FavCtrl', function($scope, $location) {

  $scope.go = function(view) {
    $location.path(view);
  };

});
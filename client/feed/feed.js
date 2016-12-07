// purpose: create feed controller

var feed = angular.module('newsly.feed', []);

feed.controller('FeedCtrl', function($scope, $location, Services) {

  // reddit api get request
  Services.getFeed()
  .then(function(res) {
    console.log(res.data.data.children);
    $scope.articles = res.data.data.children;
  })
  .catch(function(err) {
    console.log('error on reddit api req:', err);
  });


  /*// updates every 30 seconds:
  setInterval(function() {
    Services.getFeed()
    .then(function(res) {
      console.log('reddit api result: ', res.data.children);
      $scope.articles = res.data.children;
    })
    .catch(function(error) {
      console.log(error);
    });
  }, 30000);
  */


  // add article to favorites
  $scope.addFav = function(fav) {
    // console.log('fav to add', fav);
    Services.addFav(fav)
    .then(function(res) {
      console.log('fav post req: ', res);
    }).catch(function(err) {
      console.log('error on fav post req:', err);
    });
  };

  // navigate between feed and favorites
  $scope.go = function(view) {
    $location.path(view);
  };

});
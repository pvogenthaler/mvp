// purpose: create feed controller

var feed = angular.module('newsly.feed', []);

feed.controller('FeedCtrl', function($scope, $location, Services) {

  // reddit api get request
  Services.getFeed()
  .then(function(res) {
    console.log('reddit api result: ', res.data.children);
    $scope.articles = res.data.children;
  })
  .catch(function(error) {
    console.log(error);
  });

  // updates every 30 seconds:

  // setInterval(function() {
  //   Services.getFeed()
  //   .then(function(res) {
  //     console.log('reddit api result: ', res.data.children);
  //     $scope.articles = res.data.children;
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  // }, 30000);

  // navigate between feed and favorites
  $scope.go = function(view) {
    $location.path(view);
  };

});
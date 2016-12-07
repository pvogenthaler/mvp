// purpose: create favorites controller

var fav = angular.module('newsly.favorites', []);

fav.controller('FavCtrl', function($scope, $location, Services) {

  // hard coded favorites data
  $scope.articles = [
    {
      data: {
        domain: 'bbc.co.uk',
        title: 'BBC News: Outrage as \'lock her up\' chant hits Canada',
        url: 'http://www.bbc.co.uk/news/world-us-canada-38228008',
      }
    },
    {
      data: {
        domain: 'btheguardian.com',
        title: 'UN fears Chinese human rights lawyer has been \'disappeared\' by authorities',
        url: 'https://www.theguardian.com/world/2016/dec/06/un-human-rights-china-missing-lawyer-jiang-tianyong',
      }
    },
    {
      data: {
        domain: 'nytimes.com',
        title: 'Saudis Bankroll Taliban, Even as King Officially Supports Afghan Government',
        url: 'http://www.nytimes.com/2016/12/06/world/asia/saudi-arabia-afghanistan.html?hp&amp;action=click&amp;pgtype=Homepage&amp;clickSource=story-heading&amp;module=second-column-region&amp;region=top-news&amp;WT.nav=top-news',
      }
    },    

  ];

  Services.getFavs()
  .then(function(res) {
    console.log('fav get res: ', res);
    // $scope.articles = res.data.data.children;
  }).catch(function(err) {
    console.log('error on fav get req: ', err);
  });

  $scope.go = function(view) {
    $location.path(view);
  };

  $scope.hideFav = function(article) {
    article.hide = true;
  };

});
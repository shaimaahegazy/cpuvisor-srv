'use strict';

/* App Module */

var cpuVisorApp = angular.module('cpuVisorApp', [
  'ngRoute',
  'btford.socket-io',

  'cpuVisorControllers',
  'cpuVisorServices',
  'cpuVisorDirectives'
]);

cpuVisorApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/landing.html',
        controller: 'LandingCtrl'
      }).
      when('/results/:queryId/:queryText', {
        templateUrl: 'partials/ranking.html',
        controller: 'RankingCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

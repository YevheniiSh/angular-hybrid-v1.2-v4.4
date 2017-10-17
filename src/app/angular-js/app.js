'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // 'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ui.router',
  'ui.router.upgrade'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  // $routeProvider.when('/downgraded', {
  //   template: '<app-downgraded></app-downgraded>'
  // })
}]);

var app = angular.module('Mirrodin',[]);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: "templates/home.html",
      controller: "HomeCtrl"
    });

  $locationProvider.html5Mode(true);
});
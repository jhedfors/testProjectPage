var myApp = angular.module('myApp',['ngRoute','ngMessages'])
myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'partials/main.html'
    })
    // .when('/google',{
    //   redirectTo: function() {
    //         window.location = 'http://google.com';
    // })
    .otherwise({
      redirectTo:'/'
    })
})

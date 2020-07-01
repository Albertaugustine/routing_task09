
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/",{
        templateUrl:"templates/post.html"

    })
    .when("/land", {
        templateUrl : "templates/view.html"
    })
    ;
});

var myApp = angular.module('myApp', ['ngRoute']);
//routes for partials
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/partials/dashboard.html',
            controller: "dashboardcontroller"
        })
        .when('/products', {
            templateUrl: '/static/partials/products.html',
            controller: "productscontroller"
        })
        .when('/orders', {
            templateUrl: '/static/partials/orders.html',
            controller: "orderscontroller"
        })
        .when('/customers', {
            templateUrl: '/static/partials/customers.html',
            controller: "customerscontroller"
        })
        .otherwise({
            redirectTo: '/'
        });
});

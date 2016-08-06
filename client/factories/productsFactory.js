//Products factory
myApp.factory('productsfactory', function($http) {
    var factory = {};

    //gets all products for display
    factory.getproducts = function(callback) {
        $http.get('/products').success(function(output) {
            products = output;
            callback(products);
        })
    }

    //creates a new product
    factory.create = function(info, callback) {
        $http.post('/createProduct', info).success(function(output) {
            callback(products);
        })
    }

    factory.deleteProduct = function(product, callback) {
        $http.post('/deleteProduct/', product).success(function(output) {
            callback(product);
        })
    }

    return factory;
})

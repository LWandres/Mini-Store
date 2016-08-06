//Customer factory
myApp.factory('customerfactory', function($http) {
    var factory = {};

    //gets all customers for display
    factory.index = function(callback) {
        $http.get('/customers').success(function(output) {
            customers = output;
            callback(customers);
        })
    }

    //creates a new customer
    factory.create = function(info, callback) {
        $http.post('/createCustomer', info).success(function(output) {
            callback(customers);
        })
    }

    //deletes a customer
    factory.deleteCustomer = function(customer, callback) {
        $http.post('/deleteCustomer/', customer).success(function(output) {
            callback(customer);
        })
    }
    return factory;
})

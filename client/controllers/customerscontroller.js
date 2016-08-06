//Controller for the customers view
myApp.controller('customerscontroller', function($scope, customerfactory) {
    $scope.customers = {};
    //Gets all Customers for display
    customerfactory.index(function(data) {
        $scope.customers = data;
    });

//Function Calls
    //Add new customer
    $scope.addCustomer = function() {
        if ($scope.isDuplicate()) {
            $scope.errors = "Please pick a name that is not already in the database";
        } else {
            $scope.new_customer.createdAt = new Date();
            customerfactory.create($scope.new_customer, function() {
                customerfactory.index(function(data) {
                    $scope.customers = data;
                    $scope.new_customer = {};
                });
            })
        }
    }

    //Delete a Customer from the DB
    $scope.deleteCustomer = function(customer) {
        customerfactory.deleteCustomer(customer, function() {
            customerfactory.index(function(data) {
                $scope.customers = data;
            });
        })
    }

    //Checks if the customer is a duplicate
    $scope.isDuplicate = function() {
        for (var i = 0; i < $scope.customers.length; i++) {
            if ($scope.new_customer !== undefined) {
                if ($scope.new_customer.name == $scope.customers[i].name) {
                    $scope.errors = "Please pick a unique name"
                    return true;
                }
            }
        }
        return false;
    }
})

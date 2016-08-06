//Controller for the Products View
myApp.controller('productscontroller', function($scope, ProductFactory) {
    $scope.quantities = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
                        26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    $scope.products_displayNum = 5;

    //Gets all Products for display
    ProductFactory.getproducts(function(data) {
        $scope.products = data;
        $scope.products_length = $scope.products.length;
    });

    //Function Calls

    //Shows more products when link is clicked on Products Page
    $scope.addProduct = function() {
        ProductFactory.create($scope.new_product, function() {
            ProductFactory.getproducts(function(data) {
                $scope.products = data;
                $scope.new_product = {};
            });
        })
    }

    //Shows more products when link is clicked on Products Page
    $scope.more_products = function() {
        var addmore = $scope.products_length - $scope.products_displayNum
        $scope.products_displayNum += addmore;
    }


    //Delete a Customer from the DB
    $scope.deleteProduct = function(product) {
        ProductFactory.deleteProduct(product, function() {
            ProductFactory.getproducts(function(data) {
                $scope.products = data;
                $scope.new_product = {};
            });
        })
    }

})

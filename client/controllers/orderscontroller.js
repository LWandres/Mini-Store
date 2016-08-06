//Controller for the Orders View
myApp.controller('orderscontroller', function($scope,orderfactory, customerfactory, productsfactory) {
    $scope.quantities = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
                        26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

    //Get all orders for display
    orderfactory.index(function(data) {
        $scope.orders = data;
    })

    //Get all Customers for display
    customerfactory.index(function(customers) {
        $scope.customers = customers;
    });

    //Get All Products for display
    productsfactory.getproducts(function(products) {
        $scope.products = products;
    });


//Function Calls
    $scope.addOrder = function() {
        $scope.newOrder.createdAt = new Date();
        orderfactory.create($scope.newOrder, function() {
            //Get all orders for view
            orderfactory.index(function(data) {
                $scope.orders = data;
                $scope.newOrder = {};
            })
            productsfactory.getproducts(function(data) {
                $scope.products = data;
            });
        });
    },

    $scope.getQuantity = function (info){
        var quantity = '';
        for(var i = 0;i<products.length;i++){
            if (products[i].name == info){
                var quantity = products[i].quantity;
            }
        }
        $scope.prodquantity = quantity;
    }

})

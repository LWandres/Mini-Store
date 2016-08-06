//Controller for the Dashboard View
myApp.controller('dashboardcontroller', function($scope, customerfactory, productsfactory, orderfactory) {
  //Sets initial display variables - will be modified with show more links.
  $scope.products_displayNum = 5;
  $scope.customer_displayNum = 3;
  $scope.orders_displayNum = 3;

  //Populate all customer information
  customerfactory.index(function(data) {
    $scope.customers = data;
    $scope.customers_length = $scope.customers.length;
  });

  //Populate all product information
  productsfactory.getproducts(function(data) {
    $scope.products= data;
    $scope.products_length = $scope.products.length;
  });

  //Populate all orders information
  orderfactory.index(function(data) {
    $scope.quantities = [1,2,3,4,5,6,7,8,9,10];
    $scope.orders= data;
    $scope.orders_length = $scope.orders.length;
  })

//Function Calls
  //Modifies the displayNum variables set earlier when Show More links are clicked.
  $scope.more_products = function (){
    var addmore = $scope.products_length - $scope.products_displayNum
    $scope.products_displayNum += addmore;
  }

  //Displays more customers when show more link is clicked on dashboard.
  $scope.more_customers = function (){
     var addcustomers = $scope.customers_length - $scope.customer_displayNum
     $scope.customer_displayNum += addcustomers;
  }

  //Displays more orders when show more link is clicked on dashboard.
  $scope.more_orders = function (){
     var addorders= $scope.orders_length - $scope.orders_displayNum
     $scope.orders_displayNum += addorders;
  }

})

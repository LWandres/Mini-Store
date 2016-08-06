//Orders factory
myApp.factory('orderfactory', function($http) {
  var factory = {};


  //gets all orders for display
  factory.index = function(callback) {
    $http.get('/orders').success(function(output) {
      orders = output;
      callback(orders);
    })
  }

  //creates a new order
  factory.create = function(info, callback) {
    $http.post('/createOrder',info).success(function(output) {
      callback(orders);
    })
  }
  return factory;
})

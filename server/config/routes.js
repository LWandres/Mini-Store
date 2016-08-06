var customers = require('../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('../controllers/products.js');

module.exports = function(app) {

    //customers model routes
    app.get('/customers', function(req, res) {
        customers.showall(req, res);
    })
    app.post('/createCustomer', function(req, res) {
        customers.addnew(req, res);
    })
    app.post('/deleteCustomer/', function(req, res) {
        customers.delete(req, res);
    })

    //orders model routes
    app.get('/orders', function(req, res) {
        orders.showall(req, res);
    })
    app.post('/createOrder', function(req, res) {
        orders.addnew(req, res);
    })

    //products model routes
    app.get('/products', function(req, res) {
        products.showall(req, res);
    })
    app.post('/createProduct', function(req, res) {
        products.addnewproduct(req, res);
    })
    app.post('/deleteProduct/', function(req,res){
        products.delete(req, res);
    })

};

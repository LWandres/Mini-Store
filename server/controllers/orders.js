var mongoose = require('mongoose');
var Orders = mongoose.model('orders');
var Products = mongoose.model('products');

module.exports = (function() {
    return {

        //show all orders
        showall: function(req, res) {
            Orders.find({}, function(err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            });
        },

        //find product info then add new order
        addnew: function(req, res) {
            console.log("made it to controller back end");
            console.log(req.body.product);

            Products.findOne({
                name: req.body.product
            }, function(err, results) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    var product_info = results;
                    var old_quantity = product_info.quantity;
                    console.log("old quantity",old_quantity);
                    console.log("subtracting",req.body.quantity);
                    var new_quantity = (old_quantity - req.body.quantity);
                    console.log("new",new_quantity);

                    //only run this if not out of products.
                    Orders.create(req.body, function(err, results) {
                        // if there is an error console.log that something went wrong!
                        if (err) {
                            console.log('something went wrong');
                            for (var x in err.errors) {
                                errors_array.push(err.errors[x].message);
                            }
                        } else {
                            console.log('successfully added an order!');

                            Products.update({
                                name: req.body.product,
                                quantity: old_quantity
                            }, {
                                quantity: new_quantity
                            }, function(err, results) {
                                if (err) {
                                    console.log("error updating");
                                } else {
                                    console.log("succesfully updated!");
                                }
                            })

                            //get all orders for display
                            Orders.find({}, function(err, results) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    res.json(results);
                                }
                            })
                        }
                    })
                }
            })
        }
    }
})();

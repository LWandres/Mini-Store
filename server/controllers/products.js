var mongoose = require('mongoose');
var Products = mongoose.model('products');

module.exports = (function() {
    return {
        //show all products
        showall: function(req, res) {
            Products.find({}, function(err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            });
        },
        //add a new product
        addnewproduct: function(req, res) {
            var errors_array = [];
            Products.create(req.body, function(err, results) {
                if (err) {
                    console.log('something went wrong');
                    for (var x in err.errors) {
                        errors_array.push(err.errors[x].message);
                    }
                    res.json(errors_array);
                } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a product!');
                    Products.find({}, function(err, results) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(results);
                        }
                    })
                }//ends else statement
            }) //ends create function
        },//end products add function

        //delete a product
        delete: function(req, res) {
            Products.remove({
                _id: req.body._id
            }, function(err, results) {
                if (err) {
                    console.log('something went wrong');
                    for (var x in err.errors) {
                        errors_array.push(err.errors[x].message);
                    }
                } else {
                    Products.find({}, function(err, results) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(results);
                        }
                    })
                }
            })
        }
    } //Closes the return
})();

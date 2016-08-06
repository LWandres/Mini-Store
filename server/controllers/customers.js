var mongoose = require('mongoose');
var Customers = mongoose.model('customers');

module.exports = (function() {
    return {
        //show all customers
        showall: function(req, res) {
            Customers.find({}, function(err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            });
        },
        //delete a customer
        delete: function(req, res) {
            Customers.remove({
                _id: req.body._id
            }, function(err, results) {
                if (err) {
                    console.log('something went wrong');
                    for (var x in err.errors) {
                        errors_array.push(err.errors[x].message);
                    }

                } else {
                    Customers.find({}, function(err, results) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(results);
                        }
                    })
                }
            })
        },
        //add a new customer
        addnew: function(req, res) {
            var errors_array = [];
            Customers.create(req.body, function(err, results) {
                // if there is an error console.log that something went wrong!
                if (err) {
                    console.log('something went wrong');
                    for (var x in err.errors) {
                        errors_array.push(err.errors[x].message);
                    }
                    res.json(errors_array);
                } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a customer!');
                    Customers.find({}, function(err, results) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(results);
                        }
                    })
                }
            })
        }
    }
})();

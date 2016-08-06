var mongoose = require('mongoose');

var CustomersSchema = new mongoose.Schema({
    name: String,
    createdAt: Date
});

mongoose.model('customers', CustomersSchema);

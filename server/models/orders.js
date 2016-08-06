var mongoose = require('mongoose');

var OrdersSchema = new mongoose.Schema({
    customer: String,
    quantity: Number,
    product: String,
    createdAt: Date
});

mongoose.model('Orders', OrdersSchema);

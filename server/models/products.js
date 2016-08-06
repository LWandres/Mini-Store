var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String,
    quantity: Number
},{timestamps: true}
);

mongoose.model('products', ProductsSchema);

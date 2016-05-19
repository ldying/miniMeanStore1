var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    product_name: {type: String, unique: true},
    image: {type: String, default: "/assets/th.jpg"},
    description: String,
    quantity: {type: Number, min: 1},
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Productdb', ProductSchema);
// Validations
ProductSchema.path('product_name').required(true, 'Product cannot be blank');
ProductSchema.path('quantity').required(true, 'Quantity cannot be blank');

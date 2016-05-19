var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    customer_name: String,
    product_name: String,
    quantity: {type: Number, min: 1},
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Orderdb', OrderSchema);
// Validations
OrderSchema.path('customer_name').required(true, 'Customer cannot be blank');
OrderSchema.path('product_name').required(true, 'Product cannot be blank');
OrderSchema.path('quantity').required(true, 'Quantity cannot be blank');

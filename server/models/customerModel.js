var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    customer_name: {type: String, unique: true},
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Customerdb', CustomerSchema);
// Validations
CustomerSchema.path('customer_name').required(true, 'Customer Name cannot be blank');
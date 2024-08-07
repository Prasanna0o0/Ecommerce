const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    user_id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String }
}, {
    timestamps: true,
});

const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;

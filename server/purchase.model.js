const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    user_id: { type: String, required: true },
    product: { type: String, required: true },
    product_sku: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    tax: { type: Number },
    discount: { type: Number },
    purchase_date: { type: Date, default: Date.now },
    invoice_id: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true }  // This field is added for demonstration; adjust as per your actual schema
});

const Purchase = mongoose.model('purchase', purchaseSchema);

module.exports = Purchase;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    price: { type: Number, required: true },
    // Add other fields as needed
}, {
    timestamps: true,
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;

const router = require('express').Router();
const Product = require('./product.model');

// Get all products
router.route('/getproduct').get(async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

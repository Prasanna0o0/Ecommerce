const router = require('express').Router();
const Purchase = require('./purchase.model');

// Get all purchases
router.route('/getpurchase').get(async (req, res) => {
    try {
        const purchases = await Purchase.find();
        res.json(purchases);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Create a new purchase
router.route('/createpurchase').post(async (req, res) => {
    try {
        const { user_id, product, product_sku, price, description, tax, discount, purchase_date, invoice_id, email, username, address, password } = req.body;
        const newPurchase = new Purchase({ user_id, product, product_sku, price, description, tax, discount, purchase_date, invoice_id, email, username, address, password });
        await newPurchase.save();
        res.json("Purchase added!");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

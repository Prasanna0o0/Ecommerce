const router = require('express').Router();
const cors = require('cors');
const Customer = require('./customer.model');
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

// Middleware to handle CORS for specific routes
const generateRandomUserId = () => {
    return Math.floor(10000 + Math.random() * 90000);
};

// Get all customers
router.route('/getcustomer').get(async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// // Create a new customer
// router.route('/createcustomer').post(async (req, res) => {
//     try {
//         const { user_id, name, email, password, address, phoneNumber } = req.body;
//         const newCustomer = new Customer({ user_id, name, email, password, address, phoneNumber });
//         await newCustomer.save();
//         res.json("Customer added!");
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });


router.route('/createcustomer').post(async (req, res) => {
    try {
        const { name, email, password, address, phoneNumber } = req.body;
        const user_id = generateRandomUserId();
        const newCustomer = new Customer({ user_id, name, email, password, address, phoneNumber });
        await newCustomer.save();
        res.json("Customer added!");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Process payment
router.post('/payment', async (req, res) => {
    let { amount, id } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Spatula company',
            payment_method: id,
            confirm: true,
            return_url: process.env.RETURN_URL // Set the return URL
        });
        console.log('Payment', paymentIntent);
        res.json({
            message: 'Payment successful',
            success: true
        });
    } catch (error) {
        console.log('Error', error);
        res.status(500).json({
            message: 'Payment failed',
            success: false,
            error: error.message
        });
    }
});

module.exports = router;

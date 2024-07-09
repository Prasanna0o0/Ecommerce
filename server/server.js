require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
mongoose.connect(process.env.DATA_BASE_URL_ALIVE).then(() => {
    console.log("MongoDB database connection established successfully");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Routes
const customersRouter = require('./customer.routes');
const purchasesRouter = require('./purchase.routes');
const productsRouter = require('./product.routes');

app.use('/api/customers', customersRouter);
app.use('/api/purchases', purchasesRouter);
app.use('/api/products', productsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

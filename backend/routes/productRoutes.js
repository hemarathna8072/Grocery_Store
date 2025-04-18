const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Add a Product (no image upload)
router.post('/add', productController.addProduct);

// Get all Products
router.get('/', productController.getAllProducts);

// Get a single product by ID
router.get('/:id', productController.getProductById);

module.exports = router;

const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.addToCart = async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Find the cart for the logged-in user
        let cart = await Cart.findOne({ user: req.userId });

        if (!cart) {
            // If no cart, create a new one
            cart = new Cart({ user: req.userId, products: [] });
        }

        // Check if product already exists in the cart
        const existingProduct = cart.products.find(
            p => p.product.toString() === productId
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.products.push({ product: productId, quantity: 1 });
        }

        await cart.save();

        // Optional: populate product info for response
        const populatedCart = await Cart.findById(cart._id).populate('products.product');

        res.status(200).json(populatedCart);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.userId }).populate('products.product');

        if (!cart || cart.products.length === 0) {
            return res.status(404).json({ message: 'Cart is empty' });
        }

        res.status(200).json(cart);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

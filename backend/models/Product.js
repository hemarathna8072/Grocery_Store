const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // Now treat it as a URL or base64 string
    offer: { type: String },
    quantities: { type: [String] }
});

module.exports = mongoose.model('Product', ProductSchema);

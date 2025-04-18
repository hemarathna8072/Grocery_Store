const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // assuming you have a db connection function
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes'); // uncommented

const app = express();

const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:4000', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors());

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes); // now included

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

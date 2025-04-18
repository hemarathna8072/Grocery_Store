const mongoose = require('mongoose');
require('dotenv').config();  // Ensure this line is present

const connectDB = async () => {
    console.log("MongoDB URI:", process.env.MONGO_URI);  // Debugging line

    if (!process.env.MONGO_URI) {
        console.error("❌ MONGO_URI is undefined. Check your .env file.");
        process.exit(1);
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;

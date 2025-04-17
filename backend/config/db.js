require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = () => {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
};

module.exports = connectDb;

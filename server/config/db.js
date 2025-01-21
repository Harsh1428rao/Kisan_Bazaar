const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' }); // Load .env file

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log('Connecting to MongoDB with URI:', mongoURI); // Debug
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

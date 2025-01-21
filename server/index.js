const express = require('express');
require('dotenv').config({ path: './config/.env' }); // Adjust path to match your structure
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes'); // Import postRoutes
const cors = require('cors');

// Load environment variables


// Rest of your code here
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes); // Add route for posts
console.log('Loaded Mongo URI:', process.env.MONGO_URI);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

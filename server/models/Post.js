const mongoose = require('mongoose');

// Define the Post schema
const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User schema
    required: true,
  },
  farmerName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String, // Or use Number if you prefer
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  plants: {
    type: [String], // Array of strings to hold plant names or types
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true, // Default value is true
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

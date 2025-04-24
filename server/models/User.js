const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['farmer', 'contractor'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);
module.exports = User;

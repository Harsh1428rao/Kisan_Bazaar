const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');
const upload = require('../middleware/upload'); // Multer middleware

// ✅ Register route with photo & esign upload
router.post(
  '/register',authController.register);

// ✅ Login route
router.post('/login', authController.login);

// ✅ Protected route to update user
router.put('/update', protect, authController.updateUser);

// ✅ Protected route to get user profile
router.get('/profile', protect, authController.getUser);

module.exports = router;

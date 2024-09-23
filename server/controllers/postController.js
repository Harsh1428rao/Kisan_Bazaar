const Post = require('../models/Post');
const User = require('../models/User');

// Assuming itemImages is defined somewhere accessible
const itemImages = {
  vegetables: 'assets/image/Vegetables.png',
  rice: 'assets/image/Rice1.png',
  fruits: 'assets/image/Fruits.png',
  pulses: 'assets/image/Pulses.png',
};

// Create a new post
exports.createPost = async (req, res) => {
  const { itemType, description, plants, amount, quantity, mobileNumber } = req.body;
  const userId = req.user.userId; // Extract userId from the request object

  try {
    // Fetch the user to get the farmer's name
    const user = await User.findById(userId).select('name');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Ensure the itemType is valid
    if (!itemImages[itemType]) {
      return res.status(400).json({ message: 'Invalid item type' });
    }

    // Create a new post
    const newPost = new Post({
      imagePath: itemImages[itemType], // Use the correct image path based on itemType
      userId,
      farmerName: user.name, // Set the farmer's name from the User schema
      mobileNumber, // Use the mobile number provided in the request body
      description,
      plants,
      amount,
      quantity,
    });

    await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    // Fetch all posts with populated user details
    const posts = await Post.find().populate('userId');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a post by ID
exports.getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the post by ID and populate user details
    const post = await Post.findById(id).populate('userId');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a post
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { description, plants, amount, quantity, isActive } = req.body;

  try {
    // Find the post by ID and update it
    const post = await Post.findByIdAndUpdate(
      id,
      { description, plants, amount, quantity, isActive },
      { new: true } // Return the updated document
    );

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated successfully', post });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the post by ID and delete it
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

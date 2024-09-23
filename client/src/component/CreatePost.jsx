import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FarmerSell from './FarmerSell';
import farmer3 from '../assets/image/farmer3.jpg'

import Vegetables from '../assets/image/Vegetables.png';
import Pulses from '../assets/image/Pulses.png';
import Rice1 from '../assets/image/Rice1.png';
import Fruits from '../assets/image/Fruits.png';

const itemImages = {
  vegetables: Vegetables,
  rice: Rice1,
  fruits: Fruits,
  pulses: Pulses,
};

const CreatePost = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    description: '',
    plants: [],
    amount: '',
    quantity: '',
    isActive: false,
    itemType: 'vegetables',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [posts, setPosts] = useState([]);
  
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/posts/${editingPostId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Post updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/posts/', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Posted successfully!');
      }
      setIsModalOpen(false);
      resetForm();
      fetchPosts(); // Refresh the posts after submit
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setFormData({
      mobileNumber: '',
      description: '',
      plants: [],
      amount: '',
      quantity: '',
      isActive: false,
      itemType: 'vegetables',
    });
    setIsEditing(false);
    setEditingPostId(null);
  };

  const handleUpdate = (post) => {
    setFormData({
      mobileNumber: post.mobileNumber,
      description: post.description,
      plants: post.plants,
      amount: post.amount,
      quantity: post.quantity,
      isActive: post.isActive,
      itemType: post.itemType,
    });
    setIsEditing(true);
    setEditingPostId(post._id);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts((prevPosts) => prevPosts.filter(post => post._id !== postId));
      alert('Post deleted successfully!');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [token]);

  return (
    <div className="p-4 lg:p-8">
      <FarmerSell />
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            
          <div className="relative bg-slate-50 text-white text-center py-4">
  <img
    src={farmer3}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-100" // Adjust opacity as needed
  />
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
  <h2 className="text-white text-2xl font-bold relative z-10">
    {isEditing ? 'Update Post' : 'Create New Post'}
  </h2>
  <p className="text-white text-sm relative z-10">
    Add or update your produce details here
  </p>
</div>


            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label htmlFor="itemType" className="block text-sm font-medium text-gray-900">Select Item Type</label>
                  <select
                    id="itemType"
                    name="itemType"
                    value={formData.itemType}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                    required
                  >
                    <option value="vegetables">Vegetables</option>
                    <option value="rice">Rice</option>
                    <option value="fruits">Fruits</option>
                    <option value="pulses">Pulses</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-900">Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="plants" className="block text-sm font-medium text-gray-900">Plants (comma-separated)</label>
                <input
                  type="text"
                  id="plants"
                  name="plants"
                  value={formData.plants}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                  placeholder="e.g., Tomato, Potato"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-900">Amount (₹/Kg)</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-900">Quantity (Kg)</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Active
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-800 text-white px-4 py-2 rounded-md"
              >
                {isEditing ? 'Update Post' : 'Create Post'}
              </button>
            </form>
          </div>
        </div>
        <FarmerPosts token={token} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>

      {/* Modal for confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold">Confirmation</h2>
            <p>{isEditing ? 'Are you sure you want to update this post?' : 'Are you sure you want to create this post?'}</p>
            <div className="flex justify-end mt-4">
              <button onClick={handleConfirm} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
                Yes
              </button>
              <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded-md">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FarmerPosts = ({ token, onDelete, onUpdate }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="w-full lg:w-1/2 lg:pl-4">
      <h3 className="text-xl font-semibold mb-4">Your Previous Posts</h3>
      <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 ">
        {posts.map((post) => {
          const imageSrc = Vegetables  // Default image path
          return (
            <div key={post._id} className="bg-soft-beige-gradient  rounded-xl p-4 flex">
              <img src={imageSrc} alt={post.itemType} className="w-16 h-16 mr-4 rounded-md" />
              <div>
                <p><strong>Description:</strong> {post.description}</p>
                <p><strong>Plants:</strong> {post.plants.join(', ')}</p>
                <p><strong>Amount:</strong> ₹{post.amount}/Kg</p>
                <p><strong>Quantity:</strong> {post.quantity} Kg</p>
                <p><strong>Status:</strong> {post.isActive ? 'Active' : 'Inactive'}</p>
                <div className="mt-2">
                  <button
                    onClick={() => onDelete(post._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onUpdate(post)}
                    className="bg-[#0ca712] text-white px-3 py-1 rounded-md"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreatePost;

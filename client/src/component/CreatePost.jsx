import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerPosts = ({ token, onDelete, onUpdate }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Debugging network errors, check backend status
      if (error.response) {
        console.error('Response error:', error.response.status);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      onDelete(postId);
      fetchPosts(); // Refresh the posts after deletion
      alert('Post deleted successfully!');

    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="w-full lg:w-1/2 lg:pl-4">
      <h3 className="text-xl font-semibold mb-4">Your Previous Posts</h3>
      <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-4">
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Plants:</strong> {post.plants.join(', ')}</p>
            <p><strong>Amount:</strong> ₹{post.amount}/Kg</p>
            <p><strong>Quantity:</strong> {post.quantity} Kg</p>
            <p><strong>Status:</strong> {post.isActive ? 'Active' : 'Inactive'}</p>
            <div className="mt-2">
              <button
                onClick={() => handleDelete(post._id)}
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
        ))}
      </div>
    </div>
  );
};

const CreatePost = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    description: '',
    plants: [],
    amount: '',
    quantity: '',
    isActive: false
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);

  // Assuming token is stored in localStorage
  const token = localStorage.getItem('token'); // Replace with your method of getting the token

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
            Authorization: `Bearer ${token}`
          }
        });
        alert('Post updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/posts/', formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        alert('Posted successfully!');
      }
      setIsModalOpen(false);
      resetForm();
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
      isActive: false
    });
    setIsEditing(false);
    setEditingPostId(null);
  };

  const handleDelete = (postId) => {
    console.log('Post deleted:', postId);
    // You might want to update the UI or refetch posts here
  };

  const handleUpdate = (post) => {
    setFormData({
      mobileNumber: post.mobileNumber,
      description: post.description,
      plants: post.plants,
      amount: post.amount,
      quantity: post.quantity,
      isActive: post.isActive
    });
    setIsEditing(true);
    setEditingPostId(post._id);
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white text-center py-4">
              <h2 className="text-2xl font-bold">{isEditing ? 'Update Post' : 'Create New Post'}</h2>
              <p className="text-sm">Add or update your produce details here</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6">
              <div className="flex flex-wrap gap-4">
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
                    placeholder="123-456-7890"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-900">Amount(₹/Kg)</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                    placeholder="Amount"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-900">Quantity(Kg)</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                    placeholder="Quantity"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-900">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                    placeholder="Describe the post"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="plants" className="block text-sm font-medium text-gray-900">Plants</label>
                  <input
                    type="text"
                    id="plants"
                    name="plants"
                    value={formData.plants.join(', ')}
                    onChange={(e) => setFormData({ ...formData, plants: e.target.value.split(',') })}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0ca712] focus:ring-[#0ca712] sm:text-sm"
                    placeholder="List of plants (comma separated)"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label htmlFor="isActive" className="block text-sm font-medium text-gray-900">Status:</label>
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="h-5 w-5 text-green-600 focus:ring-[#0ca712] border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="text-sm text-gray-900">Active</label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#0ca712] text-white px-4 py-2 rounded-md"
                >
                  {isEditing ? 'Update Post' : 'Submit Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
        <FarmerPosts token={token} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p className="text-gray-600 mb-6">Please confirm the information before submitting.</p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirm}
                className="bg-[#0ca712] text-white px-4 py-2 rounded-md mr-2"
              >
                Confirm
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;

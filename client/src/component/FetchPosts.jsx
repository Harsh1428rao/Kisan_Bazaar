import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [bidAmount, setBidAmount] = useState('');

  const token = localStorage.getItem('token');

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Add random dates and durations to each post
      const postsWithDates = response.data.map(post => ({
        ...post,
        createdAt: generateRandomDate(new Date(2024, 0, 1), new Date()),
        dealDuration: Math.floor(Math.random() * 6) + 1 // Random duration between 1 and 6 months
      }));
      setPosts(postsWithDates);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  const openModal = (post) => {
    setCurrentPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBidAmount('');
  };

  const submitBid = async () => {
    if (!currentPost) return;

    try {
      await axios.post('http://localhost:5000/api/bids/', 
        { postId: currentPost._id, bidAmount },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Bid sent successfully!');
    } catch (error) {
      console.error('Error sending bid:', error);
      alert('Error sending bid. Please try again.');
    } finally {
      closeModal();
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [posts]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const calculateEndDate = (startDate, durationMonths) => {
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + durationMonths);
    return formatDate(endDate);
  };

  return (
    <div className="mt-8 px-4 lg:px-8">
      <style jsx>{`
        .hidden-card {
          opacity: 0;
          filter: blur(5px);
          transform: translateX(-100%);
          transition: all 1s;
        }
        .show {
          opacity: 1;
          filter: blur(0);
          transform: translateX(0);
        }
        @media(prefers-reduced-motion) {
          .hidden-card {
            transition: none;
          }
        }
      `}</style>

      <div className="container mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-green-700">Active Deals</h1>
        <p className="text-center text-gray-600 mt-2">Scroll to discover available produce from farmers</p>
      </div>

      {loading ? (
        <div className="text-center">
          <p className="text-xl">Loading active deals...</p>
        </div>
      ) : (
        <div className="container mx-auto space-y-12">
          {posts.map((post, index) => (
            <div key={post._id} className={`hidden-card bg-white shadow-lg rounded-lg flex flex-col p-6 relative hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'lg:ml-24' : 'lg:mr-24'}`} style={{transitionDelay: `${index * 200}ms`}}>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-green-700">{post.plants.join(', ')}</h3>
                <p className="text-md text-gray-700 mt-3"><span className="font-medium">Description:</span> {post.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <p className="text-sm text-gray-700"><span className="font-medium">Amount:</span> ₹{post.amount}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Quantity:</span> {post.quantity} Kg</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Mobile:</span> {post.mobileNumber}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Status:</span> {post.isActive ? 'Active' : 'Inactive'}</p>
                </div>
                <p className="text-sm text-gray-700 mt-4"><span className="font-medium">Farmer:</span> {post.farmerName}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Posted on:</span> {formatDate(post.createdAt)}</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Deal Duration:</span> {post.dealDuration} months</p>
                <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Deal Ends on:</span> {calculateEndDate(post.createdAt, post.dealDuration)}</p>
              </div>
              <button 
                className="mt-6 w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 text-lg font-semibold" 
                onClick={() => openModal(post)}
              >
                Place Your Bid
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-3xl font-semibold mb-6 text-green-700">Bid on {currentPost?.plants.join(', ')}</h2>
            <p className="mb-3 text-lg"><span className="font-medium">Crop:</span> {currentPost?.description}</p>
            <p className="mb-3 text-lg"><span className="font-medium">Farmer's Ask:</span> ₹{currentPost?.amount}</p>
            <p className="mb-3 text-lg"><span className="font-medium">Posted on:</span> {formatDate(currentPost?.createdAt)}</p>
            <p className="mb-6 text-lg"><span className="font-medium">Deal Ends on:</span> {calculateEndDate(currentPost?.createdAt, currentPost?.dealDuration)}</p>
            <div className="mb-6">
              <label htmlFor="bidAmount" className="block text-lg font-medium text-gray-700 mb-2">Your Offer</label>
              <input
                type="number"
                id="bidAmount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
                placeholder="Enter your bid amount"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button 
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-300 text-lg font-medium" 
                onClick={closeModal}
              >
                Cancel
              </button>
              <button 
                className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 text-lg font-medium" 
                onClick={submitBid}
              >
                Submit Bid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchPosts;
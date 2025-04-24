import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    age: '',
    address: '',
    aadhar: '',
    role: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? 'https://kisan-bazaar-5.onrender.com/api/auth/login'
        : 'https://kisan-bazaar-5.onrender.com/api/auth/register';

      const { data } = await axios.post(url, formData);

      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      setIsAuthenticated?.(true);

      // Navigate based on role
      if (data.role === 'farmer') {
        navigate('/farmer-dashboard');
      } else if (data.role === 'contractor') {
        navigate('/contractor-dashboard');
      } else {
        navigate('/');
      }

      setFormData({
        name: '',
        username: '',
        age: '',
        address: '',
        aadhar: '',
        role: '',
        email: '',
        password: '',
      });

    } catch (error) {
      console.error('Error during submission:', error);
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          {isLogin ? 'Login to Your Account' : 'Create Your Account'}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {!isLogin && (
            <>
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Name</label>
                <input type="text" name="name" className="input input-bordered w-full" onChange={handleChange} value={formData.name} required />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Username</label>
                <input type="text" name="username" className="input input-bordered w-full" onChange={handleChange} value={formData.username} required />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Age</label>
                <input type="number" name="age" className="input input-bordered w-full" onChange={handleChange} value={formData.age} required />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Address</label>
                <input type="text" name="address" className="input input-bordered w-full" onChange={handleChange} value={formData.address} required />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Aadhar Number</label>
                <input type="text" name="aadhar" className="input input-bordered w-full" onChange={handleChange} value={formData.aadhar} required />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Role</label>
                <select name="role" className="select select-bordered w-full" value={formData.role} onChange={handleChange} required>
                  <option value="">Select role</option>
                  <option value="farmer">Farmer</option>
                  <option value="contractor">Contractor</option>
                </select>
              </div>
            </>
          )}

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <input type="email" name="email" className="input input-bordered w-full" onChange={handleChange} value={formData.email} required />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Password</label>
            <input type="password" name="password" className="input input-bordered w-full" onChange={handleChange} value={formData.password} required />
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm md:col-span-2 text-center">
              {errorMessage}
            </div>
          )}

          <div className="mt-8 flex justify-center md:col-span-2">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already registered?"}{' '}
            <span
              className="text-green-700 font-semibold cursor-pointer underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginAndSignup = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register';

      const { data } = await axios.post(url, formData);

      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role); // Ensure the role is set correctly
      setIsAuthenticated(true);
      navigate('/');  // Navigate to home page
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setErrorMessage(error.response ? error.response.data.message : 'Something went wrong!');
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {!isLogin && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  name="role"
                  className="select select-bordered"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select role</option>
                  <option value="farmer">Farmer</option>
                  <option value="contractor">Contractor</option>
                </select>
              </div>
            )}
            {errorMessage && (
              <div className="text-red-500 text-center my-2">
                {errorMessage}
              </div>
            )}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: '#0ca712', borderColor: '#0ca712' }}
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </form>
          <div className="form-control mt-4 text-center">
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button className="btn-link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignup;

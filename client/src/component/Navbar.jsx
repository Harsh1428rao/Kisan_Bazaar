import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      console.log('Logging out...');
      await handleLogout(); // Ensure handleLogout is async if needed
      console.log('Redirecting to home...');
      navigate('/'); // Redirect to home after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" to="/">
          KisaanBazaar
        </Link>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <ul className="menu menu-horizontal px-1 hidden lg:flex space-x-4">
          <li>
            <Link
              to="/"
              className="hover:text-[#0ca712] focus:outline-none no-underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="hover:text-[#0ca712] focus:outline-none no-underline"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#0ca712] focus:outline-none no-underline"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <Link className="btn" to="/profile">
              Profile
            </Link>
            {/* <button className="btn btn-error" onClick={logout}>
              Logout
            </button> */}
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link className="btn" to="/login">
              Login
            </Link>
            {/* <Link className="btn" to="/signup">
              Sign Up
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import FarmerDash from './FarmerDash';
import ContractorDash from './ContractorDash';

const Profile = ({ handleLogout }) => {
  const [role, setRole] = useState(''); // Role of the user, e.g., 'farmer' or 'contractor'

  useEffect(() => {
    // Fetch the user's role from localStorage, API, or some global state
    const userRole = localStorage.getItem('role'); // Assuming role is stored in localStorage
    setRole(userRole);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      {role === 'farmer' ? (
        <FarmerDash handleLogout={handleLogout} />
      ) : role === 'contractor' ? (
        <ContractorDash handleLogout={handleLogout} />
      ) : (
        <p>Loading...</p> // Or redirect if role is invalid
      )}
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from 'react';
import Hero from '../component/Hero'; // Adjust path if necessary
import Farmer from '../component/Farmer'; // Adjust path if necessary
import Contractor from '../component/Contractor'; // Adjust path if necessary
import axios from 'axios'; // Import axios for making API requests
import Testimonials from '../component/Testimonials'; // Adjust path if necessary
import Footer from '../component/Footer';

const Home = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Make an API request to verify the token and get the user role
          const response = await axios.get('http://localhost:5000/api/auth/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const role = response.data.role; // Assume role is in the response
          localStorage.setItem('role', role); // Ensure role is stored in localStorage
          setUserRole(role);
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        // Optionally, clear token and role from localStorage if there's an error
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      } finally {
        setLoading(false); // Set loading to false after the check is complete
      }
    };

    checkUserRole();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while checking the role
  }

  if (userRole === 'farmer') {
    return <Farmer />;
  } else if (userRole === 'contractor') {
    return <Contractor />;
  } else {
    return (
      <div>
        <Hero />
        <div className="mt-10"> {/* Add margin or any other styling if needed */}
          <Testimonials />
          <Footer/>
        </div>
      </div>
    );
  }
};

export default Home;

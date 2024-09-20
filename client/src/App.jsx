import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar"; // Ensure correct path
import LoginAndSignup from "./pages/LoginandSignup"; // Ensure correct path
import Home from "./pages/Home"; // Ensure correct path
import FAQ from "./pages/FAQ"; // Ensure correct path
import Contact from "./pages/Contact"; // Ensure correct path
import Profile from "./pages/Profile"; // Ensure correct path
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token in localStorage to maintain login state
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact/>} />
        <Route
          path="/login"
          element={<LoginAndSignup setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/signup"
          element={<LoginAndSignup setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile handleLogout={handleLogout} /> : <Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;

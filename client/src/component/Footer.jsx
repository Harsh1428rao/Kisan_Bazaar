// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/image/logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-blue-100 p-11 text-black">
      <aside>
      <img 
        src={logo} 
        // alt="Kisaan Bazaar" 
        width="70" 
        height="70" 
         className="fill-current"
      />

        <p>
          <b>Kisaan Bazaar</b>
          <br />
          <b>Providing reliable Solution to Contracting</b>
        </p>
      </aside>
      <nav >
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;

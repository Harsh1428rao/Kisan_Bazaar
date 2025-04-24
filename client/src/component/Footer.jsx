import React from "react";
import logo from "../assets/image/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#83d6a4] text-black py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Kisaan Bazaar" width="60" height="60" />
          <h2 className="font-bold text-lg mt-2">Kisaan Bazaar</h2>
          <p className="text-gray-600">Providing reliable solutions to Contracting</p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            <li><a href="#" className="hover:text-blue-500">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-500">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Legal</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#" className="hover:text-blue-500">Terms of Use</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-gray-700">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><FaFacebookF className="text-gray-600 hover:text-blue-700 text-xl" /></a>
            <a href="#"><FaTwitter className="text-gray-600 hover:text-sky-500 text-xl" /></a>
            <a href="#"><FaInstagram className="text-gray-600 hover:text-pink-500 text-xl" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} Kisaan Bazaar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

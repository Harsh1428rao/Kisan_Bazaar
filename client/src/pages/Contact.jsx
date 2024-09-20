import React from 'react';
import { FaMobileAlt, FaEnvelopeOpen, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Contact from '../assets/image/Contact.jpg'

const ContactUs = () => {
  return (
    <div className="bg-whitesmoke min-h-screen">
      <section className="flex flex-col lg:flex-row max-w-6xl mx-auto py-16 px-4 gap-8">
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-3xl font-bold mb-4">Get in Touch with Us</h3>
          <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
          <div className="border-t border-gray-300 mb-4">
            <div className="flex justify-center space-x-2 py-2">
              <div className="w-12 h-1 bg-[#0ca712]"></div>
              <div className="w-12 h-1 bg-[#0ca712]"></div>
              <div className="w-12 h-1 bg-[#0ca712]"></div>
            </div>
          </div>
          <p className="text-gray-700 mb-8">We're here to assist you. Reach out to us for any inquiries or assistance you may need.</p>
          
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex items-center space-x-4">
              <FaMobileAlt className="text-[#0ca712] text-2xl" />
              <div>
                <span className="block font-bold">Phone No.</span>
                <span className="text-gray-700">+91-964-768-5675</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelopeOpen className="text-[#0ca712] text-2xl" />
              <div>
                <span className="block font-bold">E-mail</span>
                <span className="text-gray-700">kisaanBazaarofficial@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#0ca712] text-2xl" />
              <div>
                <span className="block font-bold">Address</span>
                <span className="text-gray-700">Tejashwi Nagar Jalandhar Cantt, Jalandhar, Pin Code:- 144005.</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-[#0ca712] text-2xl" />
              <div>
                <span className="block font-bold">Opening Hours</span>
                <span className="text-gray-700">Monday - Friday (9:00 AM to 5:00 PM)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <form className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" className="p-3 border rounded" placeholder="First Name" />
              <input type="text" className="p-3 border rounded" placeholder="Last Name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" className="p-3 border rounded" placeholder="E-mail" />
              <input type="text" className="p-3 border rounded" placeholder="Phone" />
            </div>
            <textarea rows="5" className="p-3 border rounded" placeholder="Message"></textarea>
            <button type="submit" className="bg-[#0ca712] text-white py-2 px-4 rounded hover:bg-[#0b9610] transition-colors">Send Message</button>
          </form>
          {/* <div className="mt-8">
            <img src={Contact} alt="Contact" className="w-full h-auto rounded-lg" />
          </div> */}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.911005285574!2d75.6909327144019!3d31.253255681433364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9089cd71f61f%3A0x3d684c9690d14a5!2sLovely%20Professional%20University%2C%20Jalandhar%2C%20Punjab%20144401%2C%20India!5e0!3m2!1sen!2sus!4v1649982737577!5m2!1sen!2sin"
            height="450"
            width="100%"
            style={{ border: 0, maxWidth: '800px' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
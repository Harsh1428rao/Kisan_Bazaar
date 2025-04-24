import React from 'react';
import fam1 from '../assets/image/fam1.jpg';
import fam2 from '../assets/image/fam2.jpg';
import fam3 from '../assets/image/fam3.jpg';
import { FaCheckCircle, FaMapMarkerAlt, FaRupeeSign, FaPlay } from 'react-icons/fa';

const DashboardExtra = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10 space-y-20 bg-[#f9fefb]">
      {/* 1. Farmer Success Stories */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">🌾 Farmer Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Ram Singh', story: 'Increased income by 70% through direct deals on Kisaan Bazaar.', img: fam2 },
            { name: 'Sita Devi', story: 'Sold her organic produce at premium rates.', img: fam3 },
            { name: 'Mohit Patel', story: 'Found reliable buyers every season.', img: fam1 }
          ].map((farmer, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
              <img src={farmer.img} alt={farmer.name} className="h-32 w-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-200" />
              <h3 className="text-xl font-semibold text-green-800">{farmer.name}</h3>
              <p className="text-gray-600 mt-2">{farmer.story}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Platform Impact Stats */}
      <div className="bg-green-100 rounded-3xl py-10 px-6 shadow-inner">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">🚀 Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Farmers Registered', count: 1250 },
            { label: 'Contractors Onboarded', count: 340 },
            { label: 'Deals Completed', count: 875 },
            { label: 'Crops Traded', count: 5000 }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-5xl font-extrabold text-green-700">{stat.count}+</h3>
              <p className="text-gray-700 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. How It Works */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">🔍 How Kisaan Bazaar Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {['Create Post', 'Receive Offers', 'Finalize Deal', 'Secure Payment'].map((step, index) => (
            <div key={index} className="bg-white border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="text-green-600 text-2xl font-semibold mb-2">Step {index + 1}</div>
              <p className="text-gray-700 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FAQ Section */}
      {/* <div>
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { q: 'How do I register as a farmer?', a: 'Click on Signup, choose "Farmer", and fill out the form.' },
            { q: 'Is there any fee for using the platform?', a: 'No, it is completely free for farmers.' },
            { q: 'How are deals finalized?', a: 'Farmers choose the best offer they receive and confirm.' }
          ].map((faq, i) => (
            <details key={i} className="bg-white rounded-md px-6 py-4 border shadow-sm">
              <summary className="cursor-pointer font-semibold text-green-600">{faq.q}</summary>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div> */}

      {/* 5. Explainer Video */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4 flex justify-center items-center gap-2"><FaPlay /> Watch How It Works</h2>
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.youtube.com/embed/VideolinkHere"
            title="How Kisaan Bazaar Works"
            allowFullScreen
          />
        </div>
      </div>

      {/* 6. Live Crop Listings */}
      <div>
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">🌿 Live Crop Listings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { crop: 'Wheat', qty: '100kg', location: 'Punjab', price: '₹25/kg' },
            { crop: 'Sugarcane', qty: '500kg', location: 'UP', price: '₹20/kg' },
            { crop: 'Cotton', qty: '200kg', location: 'Haryana', price: '₹60/kg' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow hover:shadow-md border space-y-1">
              <h3 className="text-xl font-bold text-green-800">{item.crop}</h3>
              <p className="text-gray-600">Quantity: {item.qty}</p>
              <p className="text-gray-600 flex items-center gap-1"><FaMapMarkerAlt className="text-green-500" /> {item.location}</p>
              <p className="text-green-600 font-semibold flex items-center gap-1"><FaRupeeSign /> {item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Quote / Tip of the Day */}
      <div className="bg-green-50 py-8 px-6 rounded-xl text-center shadow-sm">
        <blockquote className="italic text-lg text-green-800">“The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways.”</blockquote>
        <p className="mt-2 text-gray-600 font-medium">– John F. Kennedy</p>
      </div>
    </section>
  );
};

export default DashboardExtra;

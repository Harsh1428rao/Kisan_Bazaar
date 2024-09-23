import React from 'react';
import Vegetables from '../assets/image/Vegetables.png';
import Pulses from '../assets/image/Pulses.png';
import Rice1 from '../assets/image/Rice1.png';
import Fruits from "../assets/image/Fruits.png";

function FarmerSell() {
  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">What You Want to Sell?</h2>
        <p className="text-gray-600">Choose from the fresh produce below:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={Vegetables} alt="Vegetables" className="w-full h-36 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">Vegetables</h3>
            <p className="text-gray-600">Fresh vegetables available for sale.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={Pulses} alt="Pulses" className="w-full h-36 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">Pulses</h3>
            <p className="text-gray-600">High-quality pulses harvested fresh.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={Rice1} alt="Rice" className="w-full h-36 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">Rice</h3>
            <p className="text-gray-600">Rice available for sale.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={Fruits} alt="Fresh Fruits" className="w-full h-36 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">Fresh Fruits</h3>
            <p className="text-gray-600">Fresh fruits available for sale.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FarmerSell;

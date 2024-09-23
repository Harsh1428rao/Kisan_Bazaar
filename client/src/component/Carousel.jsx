// Carousel.js
import React from 'react';
import slide1 from '../assets/image/farmer3.jpg'; // Adjust the path if needed

const Carousel = () => {
    const slides = [slide1]; // Only one image
    const progress = 100; // No need for dynamic progress since there's only one slide

    return (
        <div className="relative overflow-hidden" aria-label="Image carousel">
            <div className="flex transition-transform duration-1000 ease-in-out">
                {slides.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-40 flex items-center justify-center relative">
                        <img 
                            src={src} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-full object-cover shadow-lg" // Apply shadow to the entire image
                        />
                        {/* Text Overlay */}
                        <div className="hero-overlay bg-opacity-60 bg-black absolute top-0 left-0 w-full h-full  inset-0 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold  bg-opacity-50 p-2">
                                KisaanBazaar
                            </h1>
                        </div>
                    </div>
                ))}   
            </div>
            {/* Optional bottom progress bar if needed */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                <div className="h-full bg-blue-500" style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
};

export default Carousel;

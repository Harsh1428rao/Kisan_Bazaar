// Carousel.js
import React, { useEffect, useState } from 'react';
import slide1 from '../assets/image/farmer2.jpg'; // Adjust the path if needed
import slide2 from '../assets/image/farmer3.jpg';
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        slide1, slide2,slide1
    ];
    const slideCount = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
        }, 6000); // Slide duration

        return () => clearInterval(interval);
    }, [slideCount]);

    const progress = ((currentIndex + 1) / slideCount) * 100;

    return (
        <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-64 flex items-center justify-center">
                        <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                <div className="h-full bg-blue-500" style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
};

export default Carousel;

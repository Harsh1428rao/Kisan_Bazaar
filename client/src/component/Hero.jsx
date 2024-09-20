import React from "react";
import Testimonials from "./Testimonials";

const Hero = () => {
  return (
    <div className="hero min-h-screen relative">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://agristack.gov.in/assets/videos/home_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay bg-opacity-60 bg-black absolute top-0 left-0 w-full h-full"></div>

      {/* Hero Content */}
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Kisaan Bazaar</h1>
          <p className="mb-5">
            Removing the Middleman and Enabling Farmers to Sell Their Crops at the Best Price
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
      
    </div>
    
  );
};

export default Hero;

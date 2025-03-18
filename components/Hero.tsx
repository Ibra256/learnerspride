"use client";

import React, { useState, useEffect, forwardRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const HeroSection = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const images = ["/test8.png", "/test9.png", "/test10.png", "/2024-06-08.jpg"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480, // For smaller screens
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section
      ref={ref}
      className="relative w-full mt-[100px] min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] rounded-b-lg shadow-xl overflow-hidden"
    >
      <Slider {...settings} className="w-full h-full">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay with Text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4 py-3 sm:px-6 sm:py-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Welcome to Learners Pride Junior School!
        </h1>
        <p className="text-xs sm:text-sm md:text-lg mt-2">
          Nurturing Young Minds to Grow and Excel
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
          Join Us Today!
        </button>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection"; // Fix for Next.js warning

export default HeroSection;

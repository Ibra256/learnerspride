"use client"
import React, { useState, useEffect, forwardRef } from 'react';

const Gallery= forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the logic runs only on the client-side
    setIsClient(true);
  }, []);

  const images = [
    '/test8.png',
    '/test9.png',
    '/test10.png',
    
  ];

  if (!isClient) return null; // Render nothing on SSR

  return (
    <div ref={ref} className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">Gallery</h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Gallery;

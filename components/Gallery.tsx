"use client";
import React, { useState, useEffect, forwardRef } from "react";
import Image from "next/image"; // Import the Image component

const Gallery = forwardRef<HTMLDivElement, Record<string, never>>((_, ref) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = ["/test8.png", "/test9.png", "/test10.png"];

  if (!isClient) return null; // Avoid SSR issues

  return (
    <div ref={ref} className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">
          Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Use the next/image component */}
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                width={500} // Set a default width for the image
                height={500} // Set a default height for the image
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

// Assign display name to fix the missing name warning
Gallery.displayName = "Gallery";

export default Gallery;


"use client"
import React, { useState, useEffect } from 'react';
const Footer: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        // This ensures the logic runs only on the client-side
        setIsClient(true);
      }, []);
    
      
    
      if (!isClient) return null; // Render nothing on SSR
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="text-gray-400">Email: <a href="mailto:contact@example.com" className="hover:text-blue-500">learnerspride@gmail.com</a></li>
              <li className="text-gray-400">Phone: <a href="tel:+256 757 734304" className="hover:text-blue-500">+256 757 734304</a></li>
            </ul>
          </div>

          {/* Developer Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developer</h3>
            <ul>
              <li className="text-gray-400">ibra ug</li>
              <li className="text-gray-400">Email: <a href="mailto:developer@example.com" className="hover:text-blue-500">ibraug614@gmail.com</a></li>
              <li className="text-gray-400">Phone: <a href="tel:0777072163" className="hover:text-blue-500">0704710862</a></li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-6">
              <li><a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-gray-400 hover:text-blue-500">Twitter</a></li>
              <li><a href="https://linkedin.com" className="text-gray-400 hover:text-blue-500">LinkedIn</a></li>
            </ul>
            <p className="mt-4 text-gray-400 text-sm">&copy; 2025 learners Pride Junior school. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

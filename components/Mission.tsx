"use client"; // Ensure it's a Client Component

import React, { useState, useEffect, forwardRef } from 'react';
import { FaBookOpen, FaEye, FaLightbulb } from "react-icons/fa";

const MissionVision= forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <section ref={ref} className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Mission, Vision & Motto</h2>
        <p className="text-gray-600 mt-2 text-lg">Guiding principles that shape our learners' future.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Mission */}
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaBookOpen className="text-blue-600 text-5xl mb-4" aria-hidden="true" focusable="false" />
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            To provide a nurturing environment where young minds grow, excel, and become future leaders.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaEye className="text-blue-600 text-5xl mb-4" aria-hidden="true" focusable="false" />
          <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To be a leading institution that fosters holistic education, creativity, and innovation.
          </p>
        </div>

        {/* Motto */}
        <div className="bg-blue-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaLightbulb className="text-blue-600 text-5xl mb-4" aria-hidden="true" focusable="false" />
          <h3 className="text-2xl font-semibold text-gray-800">Our Motto</h3>
          <p className="text-gray-600 mt-2">
            "Inspiring Excellence, Building Character, Shaping the Future."
          </p>
        </div>
      </div>
    </section>
  );
});

export default MissionVision;

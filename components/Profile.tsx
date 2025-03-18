"use client"; // Ensures it runs in the client

import { useEffect, useState, forwardRef } from "react";
import Image from "next/image";

const profiles = [
  {
    name: "Mr. John Doe",
    title: "School Director",
    image: "/test4.png",
    description:
      "With over 20 years in education, Mr. John Doe is committed to academic excellence and innovation. His leadership has transformed the school into a beacon of learning.",
  },
  {
    name: "Mrs. Jane Smith",
    title: "Headteacher",
    image: "/test5.png",
    description:
      "A passionate educator with a vision for student success. Mrs. Jane Smith ensures the school maintains high academic standards and fosters a nurturing environment.",
  },
  {
    name: "Mr. Robert Brown",
    title: "Director of Studies (DOS)",
    image: "/test0.jpg",
    description:
      "Dedicated to curriculum development and student growth, Mr. Robert Brown plays a crucial role in shaping the academic progress of the institution.",
  },
];

const Profiles = forwardRef<HTMLDivElement, { [key: string]: unknown }>((_, ref) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Ensures this only runs on the client
  }, []);

  if (!isClient) return null;  // Avoid rendering the profiles on the server

  return (
    <section ref={ref} className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">Meet Our Leadership</h2>
        <p className="text-gray-600 mt-2 text-lg">Guiding our school towards excellence.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={profile.image}
              alt={profile.name}
              width={150}
              height={150}
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">{profile.name}</h3>
            <p className="text-blue-600 font-medium">{profile.title}</p>
            <p className="text-gray-600 mt-2">{profile.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

// Set display name for the component
Profiles.displayName = "Profiles";

export default Profiles;

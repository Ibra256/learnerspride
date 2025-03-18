import React, { forwardRef } from "react";

const Curriculum = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className="bg-gray-50 py-12">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12 tracking-wide">
          Our Curriculum
        </h1>

        {/* Nursery Curriculum Section */}
        <section className="mb-16 bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Nursery Curriculum</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our nursery curriculum is designed to stimulate and support the early stages of learning through a variety of play-based activities. We focus on:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>Early Childhood Development (Physical, Cognitive, Social)</li>
            <li>Language and Communication Skills</li>
            <li>Basic Mathematics (Numbers, Shapes, and Patterns)</li>
            <li>Creative Arts (Drawing, Music, Dance)</li>
            <li>Outdoor Play and Exploration</li>
          </ul>
        </section>

        {/* Primary Curriculum Section */}
        <section className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Primary Curriculum</h2>
          <p className="text-lg text-gray-700 mb-6">
            The primary school curriculum is structured to provide a well-rounded education across all core subjects:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>Mathematics (Arithmetic, Algebra, Geometry)</li>
            <li>English Language and Literature (Reading, Writing, Speaking)</li>
            <li>Science (Basic Biology, Physics, Chemistry)</li>
            <li>Social Studies (Geography, History, Civics)</li>
            <li>Physical Education (Fitness, Sports, Teamwork)</li>
            <li>Music and Arts (Creative Expression, Instruments, Dance)</li>
          </ul>
        </section>
      </div>
    </div>
  );
});

export default Curriculum;

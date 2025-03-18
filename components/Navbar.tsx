"use client";

import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";

interface NavbarProps {
  heroRef: React.RefObject<HTMLDivElement>;
  missionRef: React.RefObject<HTMLDivElement>;
  profilesRef: React.RefObject<HTMLDivElement>;
  curriculumRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  galleryRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  heroRef,
  missionRef,
  profilesRef,
  curriculumRef,
  contactRef,
  galleryRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure theme is correctly detected
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Navigation links with refs
  const navLinks = [
    { name: "Home", ref: heroRef },
    { name: "Mission & Vision", ref: missionRef },
    { name: "Profiles", ref: profilesRef },
    { name: "Curriculum", ref: curriculumRef },
    { name: "Contact", ref: contactRef },
    { name: "Gallery", ref: galleryRef },
  ];

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/logss.png"
            alt="Logo"
            width={40}
            height={40}
            priority
            className="border-none"
          />
          <span className="text-xl font-bold">Learners Pride Junior School</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => scrollToSection(link.ref)}
              className="cursor-pointer px-3 py-1 rounded-md hover:text-gray-300"
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Icons (Dark Mode & Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="text-xl p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200"
            >
              {currentTheme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-blue-500 dark:bg-gray-800 text-center space-y-4 p-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => scrollToSection(link.ref)}
              className="cursor-pointer px-3 py-1 rounded-md hover:text-gray-300"
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useRef } from "react";
import ContactUs from "@/components/contactus";
import Curriculum from "@/components/curiculum";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/Hero";
import MissionVision from "@/components/Mission";
import Profiles from "@/components/Profile";
import Navbar from "@/components/Navbar"; // Ensure this is imported

const Home = () => {
  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null!);
const missionRef = useRef<HTMLDivElement>(null!);
const profilesRef = useRef<HTMLDivElement>(null!);
const curriculumRef = useRef<HTMLDivElement>(null!);
const contactRef = useRef<HTMLDivElement>(null!);
const galleryRef = useRef<HTMLDivElement>(null!);


  return (
    <div>
      {/* Pass refs to Navbar */}
      <Navbar
        heroRef={heroRef}
        missionRef={missionRef}
        profilesRef={profilesRef}
        curriculumRef={curriculumRef}
        contactRef={contactRef}
        galleryRef={galleryRef}
      />

      {/* Wrap each section inside a div with ref */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={missionRef}>
        <MissionVision />
      </div>
      <div ref={profilesRef}>
        <Profiles />
      </div>
      <div ref={curriculumRef}>
        <Curriculum />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

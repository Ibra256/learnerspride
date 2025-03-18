"use client"; // ✅ This allows useRef

import { useRef } from "react";
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // ✅ useRef is allowed here
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const profilesRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <>
     <Navbar
                 heroRef={heroRef as React.RefObject<HTMLDivElement>}
                 missionRef={missionRef as React.RefObject<HTMLDivElement>}
                 profilesRef={profilesRef as React.RefObject<HTMLDivElement>}
                 curriculumRef={curriculumRef as React.RefObject<HTMLDivElement>}
                 contactRef={contactRef as React.RefObject<HTMLDivElement>}
                 galleryRef={galleryRef as React.RefObject<HTMLDivElement>}
               />
      {children}
    </>
  );
}

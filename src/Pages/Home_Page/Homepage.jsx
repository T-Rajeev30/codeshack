"use client";

import { useRef } from "react";
// Local components for the Home_Page layout
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import BackgroundCards from "./BackgroundCards.jsx";
import SplashCursor from "./SplashCursor.jsx";

// Import the entire AboutPage module
import AboutPage from "../About_Page/AboutPage";
import EventPage from "../Event_Page/EventPage.jsx";
import ContactPage from "../Contact_Page/ContactPage.jsx";
export default function Homepage() {
  const backgroundCardsRef = useRef(null);
  const navbarRef = useRef(null);
  const heroSectionRef = useRef(null);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <SplashCursor />

      {/* Background Animated Cards */}
      <BackgroundCards ref={backgroundCardsRef} />

      {/* Navbar (Fixed/Sticky element) */}
      <div ref={navbarRef}>
        <Navbar />
      </div>

      {/* Hero Section (Primary view content) */}
      <div ref={heroSectionRef} className="relative z-10">
        <HeroSection />
      </div>

      {/* --- ABOUT PAGE INTEGRATION ---
        This renders the entire module (Introduction, Profiles, History) 
        and starts the long scrollable content immediately after the hero section.
      */}
      <div className="relative z-10">
        <AboutPage />
      </div>
      <div className="relative z-10">
        <EventPage />
      </div>
      <div className="relative z-10">
        <ContactPage />
      </div>
    </div>
  );
}

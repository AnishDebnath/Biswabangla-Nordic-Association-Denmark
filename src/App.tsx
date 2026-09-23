import React, { useState, useEffect } from 'react';
import { OpeningExperience } from './components/OpeningExperience';
import { Hero } from './components/Hero';
import { InvitationMessage } from './components/InvitationMessage';
import { PujaInfo } from './components/PujaInfo';
import { FestivalSchedule } from './components/FestivalSchedule';
import { PushpanjaliSection } from './components/PushpanjaliSection';
import { CulturalProgramme } from './components/CulturalProgramme';
import { VenueMap } from './components/VenueMap';
import { RsvpSection } from './components/RsvpSection';
import { SocialSharing } from './components/SocialSharing';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AudioPlayerButton } from './components/AudioPlayerButton';

export default function App() {
  const [showOpening, setShowOpening] = useState<boolean>(true);

  // Check if user already skipped opening in current session
  useEffect(() => {
    try {
      const seen = sessionStorage.getItem('biswabangla_seen_intro');
      if (seen === 'true') {
        setShowOpening(false);
      }
    } catch {
      // Ignored
    }
  }, []);

  const handleEnterInvitation = () => {
    setShowOpening(false);
    try {
      sessionStorage.setItem('biswabangla_seen_intro', 'true');
    } catch {
      // Ignored
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById('invitation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#171313] font-sans selection:bg-[#8E2424] selection:text-[#FFF9EF]">
      {/* Optional Opening Experience with Gold Alpona and "শুভ শারদীয়া" */}
      <OpeningExperience
        isOpen={showOpening}
        onEnter={handleEnterInvitation}
      />

      {/* Main Single-Page Scroll Experience (No Navbar menu, pure scroll storytelling) */}
      <main className="w-full">
        {/* Fullscreen Digital Invitation Cover */}
        <Hero onExploreClick={scrollToExplore} />

        {/* Warm Bengali Invitation Letter (with integrated absolute Countdown) */}
        <InvitationMessage />

        {/* Essential Puja Information Cards */}
        <PujaInfo />

        {/* 5-Day Festival Timeline & Interactive Daily Cards */}
        <FestivalSchedule />

        {/* Dedicated Pushpanjali Anjali Highlight & Mantras */}
        {/* <PushpanjaliSection /> */}

        {/* Cultural Performances, Dhak & Bhog Programme */}
        <CulturalProgramme />

        {/* Venue Location, Directions & Interactive Map */}
        <VenueMap />

        {/* RSVP Form & Confirmation Digital Pass */}
        <RsvpSection />

        {/* Social Sharing Hub (WhatsApp, FB, Messenger, Copy Link) */}
        <SocialSharing />

        {/* Contact Helpline & Quick Inquiry */}
        <ContactSection />
      </main>

      {/* Elegant Footer */}
      <Footer />

      {/* Floating Audio Controller for Mute / Unmute */}
      <AudioPlayerButton />
    </div>
  );
}


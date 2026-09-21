import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Volume2, VolumeX, Share2, Calendar, MapPin } from 'lucide-react';
import { festiveAudio } from '../utils/ambientSound';

interface NavbarProps {
  onOpenRsvp: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRsvp, onOpenShare }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = festiveAudio.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Invitation', href: '#invitation' },
    { label: 'The Puja', href: '#puja-info' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Pushpanjali', href: '#pushpanjali' },
    { label: 'Culture', href: '#cultural' },
    { label: 'Venue', href: '#venue' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  return (
    <motion.header
      id="main-navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-[#FFF9EF]/90 backdrop-blur-md border-b border-[#D4AF62]/30 shadow-sm py-3 text-[#171313]'
        : 'bg-gradient-to-b from-[#171313]/80 via-[#171313]/40 to-transparent py-4 text-[#FFF9EF]'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isScrolled ? 'border-[#B8863B] text-[#8E2424] bg-[#F7F0E4]' : 'border-[#D4AF62] text-[#D4AF62] bg-[#171313]/50'
            }`}>
            <span className="font-['Noto_Serif_Bengali'] font-bold text-sm">মা</span>
          </div>
          <div>
            <div className={`text-xs uppercase tracking-[0.2em] font-semibold leading-none ${isScrolled ? 'text-[#8E2424]' : 'text-[#D4AF62]'
              }`}>
              Biswabangla Nordic
            </div>
            <div className={`text-[10px] tracking-wider opacity-80 leading-tight ${isScrolled ? 'text-[#171313]' : 'text-[#FFF9EF]'
              }`}>
              Durga Puja 2026 • Denmark
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-medium tracking-wide uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors py-1 relative hover:text-[#B8863B] ${isScrolled ? 'text-[#171313]/85' : 'text-[#FFF9EF]/90'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Sound Toggle */}
          <button
            id="ambient-sound-toggle-btn"
            onClick={toggleSound}
            title={isPlayingAudio ? 'Mute ambient festive melody' : 'Play peaceful festive melody'}
            className={`p-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 text-xs ${isPlayingAudio
              ? 'bg-[#8E2424] text-[#FFF9EF] border-[#B8863B] animate-pulse'
              : isScrolled
                ? 'border-[#D4AF62]/40 text-[#641A1A] hover:bg-[#F7F0E4]'
                : 'border-[#FFF9EF]/30 text-[#FFF9EF] hover:bg-white/10'
              }`}
            aria-label="Toggle ambient festive sound"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px] font-sans">Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px] font-sans">Music</span>
              </>
            )}
          </button>

          {/* Social Share Trigger */}
          <button
            id="nav-share-btn"
            onClick={onOpenShare}
            className={`p-2 rounded-full border transition-all cursor-pointer ${isScrolled
              ? 'border-[#D4AF62]/40 text-[#641A1A] hover:bg-[#F7F0E4]'
              : 'border-[#FFF9EF]/30 text-[#FFF9EF] hover:bg-white/10'
              }`}
            aria-label="Share festival invitation"
            title="Share invitation"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Quick RSVP CTA */}
          <a
            id="nav-rsvp-btn"
            href="#rsvp"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] text-xs font-semibold uppercase tracking-wider rounded-full transition-all border border-[#D4AF62]/40 shadow-sm cursor-pointer"
          >
            RSVP Now
          </a>

          {/* Mobile menu trigger */}
          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-[#171313]' : 'text-[#FFF9EF]'
              }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9EF] border-b border-[#D4AF62]/40 shadow-xl px-6 py-6 text-[#171313] animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#D4AF62]/30">
              <span className="font-['Noto_Serif_Bengali'] font-bold text-lg text-[#8E2424] py-1 leading-[1.1]">
                শুভ শারদীয়া ২০২৬
              </span>
              <span className="text-xs uppercase tracking-wider text-[#B8863B] font-semibold">
                Denmark
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium tracking-wide text-[#171313] hover:text-[#8E2424] py-1 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#D4AF62] text-xs">→</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#8E2424] text-[#FFF9EF] text-center text-sm font-semibold uppercase tracking-wider rounded-lg shadow cursor-pointer"
              >
                Confirm Your RSVP
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShare();
                }}
                className="w-full py-2.5 bg-[#F7F0E4] border border-[#D4AF62]/50 text-[#641A1A] text-center text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Festival Invitation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};

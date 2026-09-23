import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlponaDivider } from './DecorativeAlpona';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { festiveAudio } from '../utils/ambientSound';
import patternBg from '../assets/images/festive_bengali_pattern_1789856534168.jpg';
import logoImg from '../assets/images/logo.png';

interface OpeningExperienceProps {
  onEnter: () => void;
  isOpen: boolean;
}

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({ onEnter, isOpen }) => {
  const [hasStartedAudio, setHasStartedAudio] = useState(false);

  const handleEnterWithSound = (withSound: boolean) => {
    if (withSound) {
      festiveAudio.play();
    }
    onEnter();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
        if (isOpen) {
          onEnter();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onEnter]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="opening-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF9EF] text-[#171313] px-6 overflow-hidden select-none"
      >
        {/* Subtle decorative background texture & ambient radial glow */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-multiply select-none pointer-events-none animate-pattern-drift"
          style={{
            backgroundImage: `url(${patternBg})`,
            backgroundSize: '300px auto',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute w-[600px] h-[600px] bg-[#D4AF62]/10 rounded-full blur-3xl pointer-events-none animate-breathe" />

        {/* Skip button at top right */}
        <button
          id="skip-opening-btn"
          onClick={() => onEnter()}
          className="absolute top-6 right-6 text-xs uppercase tracking-widest text-[#8E2424]/70 hover:text-[#641A1A] transition-colors py-2 px-4 rounded-full border border-[#D4AF62]/30 hover:border-[#B8863B] flex items-center gap-1.5 backdrop-blur-sm cursor-pointer"
          aria-label="Skip introduction"
        >
          <span>Skip Intro</span>
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Main invitation envelope card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative max-w-lg w-full bg-[#F7F0E4]/90 border border-[#D4AF62]/50 p-6 sm:p-8 md:p-12 text-center rounded-2xl md:rounded-3xl shadow-2xl backdrop-blur-md"
        >
          {/* Top ornamental crown */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <motion.div
              initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="relative"
            >
              <img
                src={logoImg}
                alt="Biswabangla Nordic Association logo"
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain select-none"
                draggable={false}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8E2424] font-semibold mb-1 sm:mb-2">
              Biswabangla Nordic Association • Denmark
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#641A1A] font-medium tracking-tight mb-1 sm:mb-2">
              5th Annual Durga Puja
            </h1>

            <p className="text-xs sm:text-sm font-serif italic text-[#B8863B] mb-3 sm:mb-5 tracking-widest">
              — 2026 —
            </p>

            <AlponaDivider className="my-3 sm:my-4 max-w-xs" />

            <div className="my-4 sm:my-6">
              <span className="inline-block text-3xl sm:text-4xl md:text-5xl font-['Noto_Serif_Bengali'] font-bold text-[#8E2424] drop-shadow-sm tracking-wide py-1.5 leading-[1.1]">
                শুভ শারদীয়া
              </span>
              <p className="text-xs md:text-sm font-['Noto_Serif_Bengali'] text-[#641A1A]/80 mt-1.5 sm:mt-2 font-medium">
                আনন্দের এই শারদোৎসবে আপনি ও আপনার পরিবার সাদরে আমন্ত্রিত
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#171313]/80 leading-relaxed font-sans mb-6 sm:mb-8">
              A celebration of faith, culture, rhythm, and togetherness in Scandinavia.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="enter-invitation-btn"
                onClick={() => handleEnterWithSound(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] rounded-full text-xs font-semibold tracking-widest uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer border border-[#D4AF62]/40"
              >
                <span>Enter Invitation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <p className="text-[10px] sm:text-[11px] text-[#171313]/50 mt-3 sm:mt-4 tracking-wider">
              16 – 20 October 2026 • Denmark
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

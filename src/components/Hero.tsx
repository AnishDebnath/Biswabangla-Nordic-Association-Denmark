import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider, ShiuliFlower, AlponaMandala } from './DecorativeAlpona';
import heroImg from '../assets/images/maa-durga.jpg';
import patternBg from '../assets/images/festive_bengali_pattern_1789856534168.jpg';
import logoImg from '../assets/images/logo.png';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#171313] pt-16 md:pt-24 lg:pt-28 xl:pt-32 pb-15 md:pb-20 lg:pb-26 xl:pb-45 px-4 md:px-8 lg:px-12 xl:px-20 w-full"
    >
      {/* Background Image with Cinematic Vignette Overlay */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={heroImg}
          alt="Maa Durga Cinematic Celebration"
          className="w-full h-full object-cover object-center scale-105 opacity-45 mix-blend-luminosity brightness-95"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient masks for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171313] via-[#641A1A]/40 to-[#171313]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,98,0.18)_0%,rgba(23,19,19,0.85)_80%)]" />
        {/* Festive Bengali pattern texture overlay with automatic drift */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay animate-pattern-drift select-none"
          style={{
            backgroundImage: `url(${patternBg})`,
            backgroundSize: '300px auto',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Floating subtle celebratory particles / Shiuli blossoms & Rotating Central Mandala */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/4 left-4 sm:left-10 md:left-16 lg:left-24 opacity-35 animate-float-petal">
          <ShiuliFlower className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
        <div className="absolute bottom-1/3 right-4 sm:right-12 md:right-20 lg:right-28 opacity-40 animate-float-petal" style={{ animationDelay: '2s', animationDuration: '7s' }}>
          <ShiuliFlower className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </div>
        <div className="absolute top-16 right-1/4 opacity-30 animate-float-petal" style={{ animationDelay: '3.5s', animationDuration: '8s' }}>
          <ShiuliFlower className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </div>
        <div className="absolute bottom-20 left-1/5 opacity-25 animate-float-petal" style={{ animationDelay: '1s', animationDuration: '6.5s' }}>
          <ShiuliFlower className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        {/* Automatic rotating & breathing sacred golden mandala */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.11] pointer-events-none animate-breathe z-[1]">
          <div className="animate-spin-slow">
            <AlponaMandala className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] text-[#D4AF62]" />
          </div>
        </div>
      </div>

      {/* Hero Content Container - Mobile to Desktop Responsive */}
      <div className="relative z-20 max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center justify-center w-full">
        {/* Association Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#171313]/80 border border-[#D4AF62]/50 backdrop-blur-md shadow-md">
            <img
              src={logoImg}
              alt=""
              aria-hidden="true"
              className="w-3 h-3 md:w-3.5 md:h-3.5 object-contain animate-pulse select-none"
              draggable={false}
            />
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#D4AF62]">
              {eventConfig.hero.subtitle}
            </span>
          </div>
        </motion.div>

        {/* Large Premium Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#FFF9EF] tracking-tight leading-tight md:leading-snug mb-1.5 sm:mb-2 max-w-3xl xl:max-w-4xl"
        >
          {eventConfig.hero.mainTitle}
        </motion.h1>

        {/* Year */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#D4AF62] font-semibold tracking-widest mb-3 sm:mb-4 md:mb-5"
        >
          — {eventConfig.hero.year} —
        </motion.div>

        {/* Bengali Calligraphic Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="my-3 sm:my-4 md:my-6"
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-['Noto_Serif_Bengali'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF9EF] via-[#D4AF62] to-[#FFF9EF] drop-shadow-md py-2 sm:py-3 leading-[1.1]">
            {eventConfig.hero.bengaliGreeting}
          </span>
          <p className="text-xs sm:text-sm md:text-base font-['Hind_Siliguri'] text-[#D4AF62]/90 mt-1 md:mt-2 tracking-wider">
            বিশ্ববাংলা নর্ডিক অ্যাসোসিয়েশন • ডেনমার্ক
          </p>
        </motion.div>

        <AlponaDivider className="my-2.5 sm:my-4 md:my-6 max-w-xs sm:max-w-sm md:max-w-md text-[#D4AF62]/70 mx-auto w-full" />

        {/* Invitation Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="max-w-prose md:max-w-2xl lg:max-w-3xl text-sm md:text-base lg:text-lg xl:text-xl text-[#FFF9EF]/85 font-sans leading-relaxed md:leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2 font-light"
        >
          {eventConfig.hero.invitationLine}
        </motion.p>

        {/* Quick Date & Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-[#FFF9EF]/85 mb-8 sm:mb-10 md:mb-12 px-2 mx-auto"
        >
          <div className="w-fit inline-flex items-center justify-center gap-1.5 md:gap-2 bg-[#641A1A]/60 border border-[#D4AF62]/40 px-3.5 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full backdrop-blur-sm shadow-sm whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62] shrink-0" />
            <span className="text-xs md:text-sm font-medium">16 – 20 October 2026</span>
          </div>
          <div className="w-fit inline-flex items-center justify-center gap-1.5 md:gap-2 bg-[#641A1A]/60 border border-[#D4AF62]/40 px-3.5 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full backdrop-blur-sm shadow-sm whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62] shrink-0" />
            <span className="text-xs md:text-sm font-medium">Copenhagen, Denmark</span>
          </div>
        </motion.div>

        {/* Premium Scroll CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="w-full sm:w-auto"
        >
          <button
            id="explore-puja-cta"
            onClick={onExploreClick}
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs md:px-8 md:py-3.5 md:text-sm lg:px-10 lg:py-4 lg:text-base rounded-full bg-gradient-to-r from-[#8E2424] to-[#641A1A] hover:from-[#B8863B] hover:to-[#8E2424] text-[#FFF9EF] font-semibold tracking-[0.18em] uppercase border border-[#D4AF62]/60 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer active:scale-95"
          >
            <span>Explore Invitation</span>
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF62] group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};


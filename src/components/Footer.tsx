import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Instagram, Facebook, Mail, Heart, Sparkles } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaMandala, AlponaDivider } from './DecorativeAlpona';
import patternBg from '../assets/images/festive_bengali_pattern_1789856534168.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171313] text-[#FFF9EF] relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 px-4 md:px-8 lg:px-12 xl:px-20 border-t border-[#D4AF62]/40">
      {/* Background Subtle Drifting Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none select-none animate-pattern-drift"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: '300px auto',
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Background Rotating Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.10] pointer-events-none animate-breathe z-[1]" aria-hidden="true">
        <div className="animate-spin-slow">
          <AlponaMandala className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] text-[#D4AF62]" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl xl:max-w-5xl mx-auto text-center flex flex-col items-center justify-center relative z-10 w-full"
      >
        {/* Top Auspicious Calligraphy */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="block text-4xl sm:text-5xl md:text-6xl font-['Noto_Serif_Bengali'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF9EF] via-[#D4AF62] to-[#FFF9EF] mb-2 md:mb-3 py-2 sm:py-3 leading-[1.1]"
        >
          শুভ শারদীয়া
        </motion.span>

        {/* Association Branding */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-[#D4AF62] mb-1 md:mb-1.5"
        >
          {eventConfig.organization.name}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-[#FFF9EF]/90 font-medium mb-1 md:mb-1.5"
        >
          5th Annual Durga Puja Celebration • 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs md:text-sm font-serif italic text-[#D4AF62]/80 mb-4 sm:mb-6"
        >
          Denmark
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AlponaDivider className="my-3 sm:my-4 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62]/60 mx-auto w-full" />
        </motion.div>

        {/* Motto */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xs sm:text-sm md:text-base font-sans text-[#FFF9EF]/75 font-light tracking-wide max-w-prose md:max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10"
        >
          {eventConfig.organization.tagline}
        </motion.p>

        {/* Quick Links & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-6 text-xs md:text-sm uppercase tracking-wider font-medium text-[#FFF9EF]/80 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto"
        >
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            href={eventConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#FFF9EF]/5 hover:bg-[#FFF9EF]/15 border border-[#D4AF62]/30 hover:border-[#D4AF62] text-[#FFF9EF]/90 hover:text-[#D4AF62] transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62] shrink-0" />
            <span>Instagram</span>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            href={eventConfig.contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#FFF9EF]/5 hover:bg-[#FFF9EF]/15 border border-[#D4AF62]/30 hover:border-[#D4AF62] text-[#FFF9EF]/90 hover:text-[#D4AF62] transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62] shrink-0" />
            <span>Facebook</span>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            href={`mailto:${eventConfig.contact.email}`}
            className="px-3.5 py-1.5 rounded-full bg-[#FFF9EF]/5 hover:bg-[#FFF9EF]/15 border border-[#D4AF62]/30 hover:border-[#D4AF62] text-[#FFF9EF]/90 hover:text-[#D4AF62] transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62] shrink-0" />
            <span>Contact</span>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            href="#rsvp"
            className="px-3.5 py-1.5 rounded-full bg-[#8E2424]/60 hover:bg-[#8E2424] border border-[#D4AF62]/50 text-[#FFF9EF] hover:text-[#FFF9EF] transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#D4AF62] text-[#D4AF62] shrink-0" />
            <span>RSVP</span>
          </motion.a>
        </motion.div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-6 sm:mb-8"
        >
          <button
            onClick={scrollToTop}
            className="p-3 md:p-3.5 rounded-full bg-[#641A1A] hover:bg-[#8E2424] text-[#D4AF62] border border-[#D4AF62]/40 transition-all hover:scale-105 shadow cursor-pointer inline-flex items-center gap-1 text-xs md:text-sm"
            aria-label="Back to top of invitation"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="pt-5 sm:pt-6 border-t border-[#FFF9EF]/10 text-[11px] sm:text-xs text-[#FFF9EF]/50 font-sans"
        >
          <p>© 2026 Biswabangla Nordic Association. All rights reserved.</p>
          <p className="mt-1 text-[10px] sm:text-[11px] md:text-xs text-[#D4AF62]/50 font-['Noto_Serif_Bengali']">
            মা দুর্গার আশীর্বাদে সবার জীবন আলো ও আনন্দে ভরে উঠুক।
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

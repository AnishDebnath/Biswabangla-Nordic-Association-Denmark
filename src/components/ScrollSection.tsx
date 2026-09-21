import React from 'react';
import { motion } from 'motion/react';
import { AlponaCorner, AlponaMandala, ShiuliFlower } from './DecorativeAlpona';
import patternBg from '../assets/images/festive_bengali_pattern_1789856534168.jpg';

interface ScrollSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'maroon' | 'warm';
  showCorners?: boolean;
  showMandala?: boolean;
  overflowVisible?: boolean;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  id,
  children,
  className = '',
  variant = 'light',
  showCorners = true,
  showMandala = true,
  overflowVisible = false,
}) => {
  const isMaroon = variant === 'maroon';

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${overflowVisible ? 'overflow-visible' : 'overflow-hidden'} py-14 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 md:px-8 lg:px-12 xl:px-20 w-full ${
        isMaroon
          ? 'bg-[#641A1A] text-[#FFF9EF]'
          : 'bg-[#FFF9EF] text-[#171313]'
      } border-t border-b border-[#D4AF62]/35 ${className}`}
    >
      {/* Background Seamless Pattern Layer with Automatic Infinite Drift Animation */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isMaroon ? 'opacity-[0.09] mix-blend-overlay' : 'opacity-[0.06] mix-blend-multiply'
        } select-none animate-pattern-drift`}
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: '360px auto',
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Floating Ambient Shiuli Blossoms in Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 left-8 opacity-25 animate-float-petal">
          <ShiuliFlower className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </div>
        <div className="absolute bottom-16 right-10 opacity-30 animate-float-petal" style={{ animationDelay: '2.5s', animationDuration: '7s' }}>
          <ShiuliFlower className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
        <div className="absolute top-1/2 right-6 opacity-20 animate-float-petal" style={{ animationDelay: '4s', animationDuration: '8s' }}>
          <ShiuliFlower className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </div>
      </div>

      {/* Subtle Alpona Watermark Accents with Automatic Slow Rotation & Breathing */}
      {showMandala && (
        <>
          <div
            className={`absolute -left-20 sm:-left-24 md:-left-20 lg:-left-16 top-1/2 -translate-y-1/2 pointer-events-none select-none z-[1] ${
              isMaroon ? 'opacity-[0.12] text-[#D4AF62]' : 'opacity-[0.09] text-[#B8863B]'
            } animate-breathe`}
            aria-hidden="true"
          >
            <div className="animate-spin-slow drop-shadow-xs">
              <AlponaMandala className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]" />
            </div>
          </div>
          <div
            className={`absolute -right-20 sm:-right-24 md:-right-20 lg:-right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none z-[1] ${
              isMaroon ? 'opacity-[0.12] text-[#D4AF62]' : 'opacity-[0.09] text-[#B8863B]'
            } animate-breathe`}
            aria-hidden="true"
          >
            <div className="animate-spin-slow-reverse drop-shadow-xs">
              <AlponaMandala className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]" />
            </div>
          </div>
        </>
      )}

      {/* Section Decorative Outer Frame Accents with Subtle Golden Shimmer */}
      {showCorners && (
        <div className="absolute inset-x-2 sm:inset-x-6 md:inset-x-8 lg:inset-x-12 inset-y-2 sm:inset-y-4 md:inset-y-6 pointer-events-none border border-[#D4AF62]/20 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem]">
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 animate-shimmer-gold">
            <AlponaCorner className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${isMaroon ? 'text-[#D4AF62]/50' : 'text-[#B8863B]/50'}`} />
          </div>
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 rotate-90 animate-shimmer-gold" style={{ animationDelay: '1s' }}>
            <AlponaCorner className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${isMaroon ? 'text-[#D4AF62]/50' : 'text-[#B8863B]/50'}`} />
          </div>
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 -rotate-90 animate-shimmer-gold" style={{ animationDelay: '2s' }}>
            <AlponaCorner className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${isMaroon ? 'text-[#D4AF62]/50' : 'text-[#B8863B]/50'}`} />
          </div>
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 rotate-180 animate-shimmer-gold" style={{ animationDelay: '3s' }}>
            <AlponaCorner className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${isMaroon ? 'text-[#D4AF62]/50' : 'text-[#B8863B]/50'}`} />
          </div>
        </div>
      )}

      {/* Main Responsive Content Max Width */}
      <div className="max-w-screen-xl mx-auto relative z-10 w-full">
        {children}
      </div>
    </motion.section>
  );
};

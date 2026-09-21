import React from 'react';
import { motion } from 'motion/react';
import { eventConfig } from '../data/eventConfig';
import { AlponaCorner, AlponaDivider, ShiuliFlower } from './DecorativeAlpona';
import { Heart, Sparkles } from 'lucide-react';
import { ScrollSection } from './ScrollSection';
import { Countdown } from './Countdown';
import patternBg from '../assets/images/festive_bengali_pattern_1789856534168.jpg';

export const InvitationMessage: React.FC = () => {
  return (
    <ScrollSection
      id="invitation"
      variant="warm"
      showCorners={false}
      showMandala={true}
      overflowVisible={true}
      className="pt-28 sm:pt-36 md:pt-44 lg:pt-52"
    >
      {/* Absolute Floating Countdown Timer over Hero & Invitation Seam */}
      <div className="absolute -top-58 md:-top-95 lg:-top-120 left-0 right-0 z-30 px-4 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl mx-auto pointer-events-auto">
        <Countdown />
      </div>

      <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative z-10 w-full mt-20 md:mt-30 lg:mt-60">
        {/* Invitation Card Outer Frame with Scandinavian & Bengali Elegance */}
        <div className="relative bg-[#FFF9EF]/90 border-2 border-[#D4AF62]/70 rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-5 sm:p-8 md:p-12 lg:p-16 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Subtle Background Pattern Texture in Card with automatic drift */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply select-none animate-pattern-drift"
            style={{
              backgroundImage: `url(${patternBg})`,
              backgroundSize: '240px auto',
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Four Corner Alpona Accents with gold shimmer */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 pointer-events-none animate-shimmer-gold">
            <AlponaCorner className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#B8863B]/60" />
          </div>
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 pointer-events-none rotate-90 animate-shimmer-gold" style={{ animationDelay: '1s' }}>
            <AlponaCorner className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#B8863B]/60" />
          </div>
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 pointer-events-none -rotate-90 animate-shimmer-gold" style={{ animationDelay: '2s' }}>
            <AlponaCorner className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#B8863B]/60" />
          </div>
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 pointer-events-none rotate-180 animate-shimmer-gold" style={{ animationDelay: '3s' }}>
            <AlponaCorner className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#B8863B]/60" />
          </div>

          {/* Center Card Content */}
          <div className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto relative z-10 w-full">
            <div className="inline-flex items-center justify-center p-2.5 md:p-3 rounded-full bg-[#8E2424]/10 text-[#8E2424] mb-3 md:mb-4 border border-[#8E2424]/20">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-[#8E2424]" />
            </div>

            <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-[#8E2424] mb-1.5 md:mb-2">
              {eventConfig.invitation.headingEn}
            </p>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-['Noto_Serif_Bengali'] font-bold text-[#641A1A] mb-2 sm:mb-3 md:mb-4 tracking-wide leading-tight">
              {eventConfig.invitation.headingBn}
            </h2>

            <AlponaDivider className="my-3 sm:my-4 md:my-6 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />

            <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-[#641A1A] font-medium leading-relaxed mb-4 sm:mb-6 md:mb-8 text-center">
              {eventConfig.invitation.welcomeText}
            </p>

            {/* Paragraphs - Formatted for easy mobile reading */}
            <div className="space-y-3.5 md:space-y-5 text-sm md:text-base lg:text-lg text-[#171313]/85 leading-relaxed font-sans text-left sm:text-center max-w-prose md:max-w-2xl lg:max-w-3xl mx-auto font-light">
              {eventConfig.invitation.paragraphs.map((para, i) => (
                <p key={i} className="leading-relaxed">{para}</p>
              ))}
            </div>

            {/* Core Theme Motto */}
            <div className="mt-6 sm:mt-8 md:mt-10 pt-5 md:pt-6 border-t border-[#D4AF62]/40">
              <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl italic font-semibold text-[#8E2424] tracking-wide">
                “{eventConfig.invitation.themeMotto}”
              </p>
              <p className="text-xs md:text-sm font-['Hind_Siliguri'] text-[#B8863B] font-semibold mt-1 md:mt-2">
                একসাথে পুজো • একসাথে প্রার্থনা • একসাথে আনন্দ
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};


import React from 'react';
import { Music, Sparkles, Award, Palette, Drama, Mic2, PhoneCall } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';
import { SectionHeader, AnimatedGrid, AnimatedCard } from './AnimationUtils';

export const CulturalProgramme: React.FC = () => {
  return (
    <ScrollSection
      id="cultural"
      variant="warm"
      showCorners={true}
      showMandala={true}
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <SectionHeader delay={0.1} className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 w-full">
          <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8E2424] font-semibold mb-1 md:mb-2">
            <Music className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
            <span>Art, Music, Dance & Drama</span>
          </div>

          {/* English Main Title (Bigger) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#641A1A] font-bold tracking-tight">
            {eventConfig.cultural.headingEn}
          </h2>

          {/* Bengali Subheading (A bit smaller) */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Noto_Serif_Bengali'] text-[#8E2424] font-bold mt-1 md:mt-1.5">
            {eventConfig.cultural.headingBn}
          </p>

          <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />

          <p className="text-xs sm:text-sm md:text-base text-[#171313]/80 font-normal max-w-prose md:max-w-2xl mx-auto px-2 text-center">
            {eventConfig.cultural.subtitle}
          </p>

          {/* Committee Note Banner */}
          {/* <div className="mt-3.5 px-4 py-1.5 rounded-full bg-[#8E2424]/10 border border-[#8E2424]/20 text-[11px] sm:text-xs md:text-sm font-semibold text-[#8E2424]">
            {eventConfig.cultural.committeeSign}
          </div> */}
        </SectionHeader>

        {/* 3 Major Cultural Day Cards Grid */}
        <AnimatedGrid staggerDelay={0.15} delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-6 lg:gap-8 items-stretch">
          {eventConfig.cultural.items.map((item, index) => {
            const isDrama = item.category === 'Drama';
            const isChildren = item.category === 'Children';

            return (
              <AnimatedCard
                key={index}
                index={index}
                variant="fadeUp"
                className={`bg-[#FFF9EF]/95 border rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${isDrama
                  ? 'border-2 border-[#D4AF62] bg-gradient-to-b from-[#FFF9EF] to-[#F7F0E4]'
                  : 'border-[#D4AF62]/50 hover:border-[#B8863B]'
                  }`}
              >
                <div>
                  {/* Top Category Badge & Time */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#8E2424]/10 text-[#8E2424] border border-[#8E2424]/20 inline-flex items-center gap-1">
                      {isChildren ? <Palette className="w-3.5 h-3.5" /> : isDrama ? <Drama className="w-3.5 h-3.5" /> : <Mic2 className="w-3.5 h-3.5" />}
                      <span>{item.category} Event</span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#171313]/60 font-mono">
                      Day {index + 2}
                    </span>
                  </div>

                  {/* Timing Pill */}
                  <div className="text-[11px] sm:text-xs font-bold text-[#8E2424] mb-2 font-sans">
                    ⏰ {item.time}
                  </div>

                  {/* English Event Title (Bigger) */}
                  <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#641A1A] mb-1 leading-snug">
                    {item.title}
                  </h3>

                  {/* Bengali Title (A bit smaller) */}
                  {item.bengaliTitle && (
                    <p className="font-['Noto_Serif_Bengali'] text-xs sm:text-sm font-semibold text-[#8E2424] mb-3">
                      {item.bengaliTitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#171313]/80 leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>

                  {/* Sub-events list */}
                  {item.subEvents && (
                    <div className="space-y-1.5 pt-3 border-t border-[#D4AF62]/30 mb-4">
                      <span className="text-[10px] sm:text-xs uppercase font-bold text-[#8E2424] block">
                        Features & Activities:
                      </span>
                      <ul className="text-xs text-[#171313]/85 space-y-1">
                        {item.subEvents.map((sub, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Sparkles className="w-3 h-3 text-[#B8863B] shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Footer / Registration Note */}
                <div className="mt-4 pt-3 border-t border-[#D4AF62]/30">
                  <span className="text-[10px] sm:text-[11px] text-[#8E2424] font-medium block italic">
                    ℹ️ {item.registrationNote}
                  </span>
                </div>
              </AnimatedCard>
            );
          })}
        </AnimatedGrid>

        {/* Call to Action for Artists & Participants */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center bg-[#FFF9EF]/90 border border-[#D4AF62]/60 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 max-w-3xl mx-auto shadow-md">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8E2424] mb-2">
            <Award className="w-4 h-4 text-[#B8863B]" />
            <span>Interested in Performing?</span>
          </div>
          <h4 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#641A1A] mb-2">
            Showcase Your Talent at Biswabangla Durga Puja 2026
          </h4>
          <p className="text-xs sm:text-sm text-[#171313]/80 max-w-prose mx-auto mb-4 sm:mb-5">
            Whether singing, dancing, playing instruments, or recitations, we welcome you and your children to be part of our vibrant stage in Copenhagen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-95 inline-flex items-center gap-2"
            >
              <span>Register Performance Details</span>
              <PhoneCall className="w-4 h-4 text-[#D4AF62]" />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#FFF9EF] hover:bg-[#F7F0E4] text-[#641A1A] border border-[#D4AF62]/60 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              Contact Helplines (60 63 70 78)
            </a>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

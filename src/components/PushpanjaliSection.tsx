import React, { useState } from 'react';
import { Clock, Flower2, BookOpen } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider, ConchIcon } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';
import { SectionHeader, AnimatedGrid, AnimatedCard } from './AnimationUtils';
import { MantraModal } from './MantraModal';

export const PushpanjaliSection: React.FC = () => {
  const [isMantraModalOpen, setIsMantraModalOpen] = useState(false);

  return (
    <ScrollSection
      id="pushpanjali"
      variant="maroon"
      showCorners={true}
      showMandala={true}
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <SectionHeader delay={0.1} className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 w-full">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3.5 py-1.5 rounded-full bg-[#8E2424] border border-[#D4AF62]/50 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-[#D4AF62] font-semibold mb-2 md:mb-3">
            <Flower2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62]" />
            <span>Sacred Floral Devotion</span>
          </div>

          {/* English Heading (Bigger) */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFF9EF] tracking-tight">
            {eventConfig.pushpanjali.headingEn}
          </h2>

          {/* Bengali Subheading (A bit smaller) */}
          <p className="font-['Noto_Serif_Bengali'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D4AF62] font-bold tracking-wide mt-1">
            {eventConfig.pushpanjali.headingBn}
          </p>

          <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62]/70 mx-auto w-full" />

          <p className="text-xs sm:text-sm md:text-base text-[#FFF9EF]/85 max-w-prose md:max-w-xl mx-auto font-light leading-relaxed px-2 text-center">
            {eventConfig.pushpanjali.tagline}
          </p>

          {/* View Pushpanjali Mantras Guide Button */}
          <button
            onClick={() => setIsMantraModalOpen(true)}
            className="mt-4 sm:mt-5 inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#D4AF62] hover:bg-[#B8863B] text-[#171313] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-95"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Pushpanjali Mantras (পুষ্পাঞ্জলি মন্ত্র)</span>
          </button>
        </SectionHeader>

        {/* 5 Daily Pushpanjali Timings Cards Grid */}
        <AnimatedGrid staggerDelay={0.1} delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-3.5 lg:gap-4 xl:gap-5">
          {eventConfig.pushpanjali.slots.map((slot, index) => (
            <AnimatedCard
              key={slot.day}
              index={index}
              variant="fadeUp"
              className={`relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-4 lg:p-5 xl:p-6 transition-all duration-300 backdrop-blur-md flex flex-col justify-between ${
                slot.isSpecial
                  ? 'bg-gradient-to-b from-[#8E2424]/90 to-[#641A1A]/95 border-2 border-[#D4AF62] shadow-2xl'
                  : 'bg-[#171313]/70 border border-[#D4AF62]/40 shadow-lg hover:border-[#D4AF62]'
              }`}
            >
              {slot.isSpecial && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF62] text-[#171313] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  Most Auspicious
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1.5 md:mb-2">
                  <ConchIcon className="w-4 h-4 md:w-4 lg:w-5 text-[#D4AF62]/80 shrink-0" />
                  <span className="text-[10px] md:text-xs text-[#FFF9EF]/70 font-sans">
                    {slot.date.split(',')[0]}
                  </span>
                </div>

                {/* English Day Title (Bigger) */}
                <h3 className="text-sm sm:text-base md:text-base lg:text-lg font-serif font-bold text-[#FFF9EF] mb-0.5">
                  {slot.day}
                </h3>

                {/* Bengali Day Subtitle (A bit smaller) */}
                <p className="font-['Noto_Serif_Bengali'] text-xs sm:text-sm lg:text-base font-bold text-[#D4AF62] mb-3">
                  {slot.bengaliDay}
                </p>

                {/* Timings List */}
                <div className="space-y-1.5 md:space-y-2 mb-3">
                  {slot.timings.map((time, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#171313]/50 border border-[#D4AF62]/25 text-[11px] sm:text-xs font-medium text-[#FFF9EF] whitespace-normal"
                    >
                      <Clock className="w-3 h-3 text-[#D4AF62] shrink-0" />
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note / Context */}
              {slot.notes && (
                <p className="text-[10px] sm:text-[11px] text-[#FFF9EF]/75 italic pt-2 border-t border-[#D4AF62]/20 font-sans">
                  {slot.notes}
                </p>
              )}
            </AnimatedCard>
          ))}
        </AnimatedGrid>

        {/* Guidelines / Important Note banner */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl bg-[#171313]/80 border border-[#D4AF62]/40 backdrop-blur-md text-xs sm:text-sm text-[#FFF9EF]/85">
          <h4 className="font-serif text-sm sm:text-base font-bold text-[#D4AF62] mb-2 uppercase tracking-wider">
            Important Information for Devotees
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {eventConfig.pushpanjali.guidelines.map((g, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#D4AF62] font-bold">•</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pushpanjali Mantra Modal */}
      <MantraModal
        isOpen={isMantraModalOpen}
        onClose={() => setIsMantraModalOpen(false)}
      />
    </ScrollSection>
  );
};

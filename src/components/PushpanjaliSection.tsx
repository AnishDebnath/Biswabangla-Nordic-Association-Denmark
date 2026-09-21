import React from 'react';
import { Clock, Flower2 } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider, ConchIcon } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';

export const PushpanjaliSection: React.FC = () => {
  return (
    <ScrollSection
      id="pushpanjali"
      variant="maroon"
      showCorners={true}
      showMandala={true}
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 w-full">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3.5 py-1.5 rounded-full bg-[#8E2424] border border-[#D4AF62]/50 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-[#D4AF62] font-semibold mb-2 md:mb-3">
            <Flower2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62]" />
            <span>Sacred Floral Devotion</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Noto_Serif_Bengali'] font-bold text-[#FFF9EF] tracking-wide mt-1">
            {eventConfig.pushpanjali.headingBn}
          </h2>
          
          <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D4AF62] font-semibold tracking-wider mt-0.5 md:mt-1">
            {eventConfig.pushpanjali.headingEn}
          </p>

          <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62]/70 mx-auto w-full" />

          <p className="text-xs sm:text-sm md:text-base text-[#FFF9EF]/85 max-w-prose md:max-w-xl mx-auto font-light leading-relaxed px-2 text-center">
            {eventConfig.pushpanjali.tagline}
          </p>
        </div>

        {/* 3 Dedicated Anjali Slot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-3.5 lg:gap-6 xl:gap-8">
          {eventConfig.pushpanjali.slots.map((slot) => (
            <div
              key={slot.day}
              className={`relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-4 lg:p-6 xl:p-8 transition-all duration-300 backdrop-blur-md flex flex-col justify-between ${
                slot.isSpecial
                  ? 'bg-gradient-to-b from-[#8E2424]/90 to-[#641A1A]/95 border-2 border-[#D4AF62] shadow-2xl'
                  : 'bg-[#171313]/70 border border-[#D4AF62]/40 shadow-lg hover:border-[#D4AF62]'
              }`}
            >
              {slot.isSpecial && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF62] text-[#171313] text-[9px] sm:text-[10px] md:text-[10px] lg:text-xs font-bold uppercase tracking-wider md:tracking-widest px-2.5 py-0.5 md:px-3 md:py-0.5 lg:px-4 lg:py-1 rounded-full shadow-md whitespace-nowrap">
                  Most Auspicious
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1.5 md:mb-2 lg:mb-3">
                  <span className="font-['Noto_Serif_Bengali'] text-base sm:text-lg md:text-lg lg:text-2xl font-bold text-[#D4AF62]">
                    {slot.bengaliDay}
                  </span>
                  <ConchIcon className="w-4 h-4 md:w-4 lg:w-5 text-[#D4AF62]/80 shrink-0" />
                </div>

                <h3 className="text-sm sm:text-base md:text-base lg:text-xl font-serif font-bold text-[#FFF9EF] mb-0.5">
                  {slot.day}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm text-[#FFF9EF]/70 mb-2.5 md:mb-3 font-sans">
                  {slot.date}
                </p>

                {/* Batch Timings */}
                <div className="space-y-1.5 md:space-y-2 mb-2.5 md:mb-3 lg:mb-4">
                  {slot.timings.map((time, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-2.5 md:py-1.5 lg:px-3.5 lg:py-2 rounded-lg md:rounded-xl bg-[#171313]/50 border border-[#D4AF62]/25 text-[11px] sm:text-xs md:text-xs lg:text-sm font-medium text-[#FFF9EF] whitespace-nowrap"
                    >
                      <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-[#D4AF62] shrink-0" />
                      <span className="whitespace-nowrap">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note / Context */}
              {slot.notes && (
                <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm text-[#FFF9EF]/70 italic pt-2 md:pt-2.5 lg:pt-3 border-t border-[#D4AF62]/20">
                  {slot.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};


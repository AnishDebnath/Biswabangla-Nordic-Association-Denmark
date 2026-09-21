import React from 'react';
import { Sparkles, Music, Theater, Drum, Users, UtensilsCrossed, Clock } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';
import { SectionHeader, AnimatedGrid, AnimatedCard } from './AnimationUtils';

export const CulturalProgramme: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Music':
        return <Music className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E2424]" />;
      case 'Dance':
        return <Theater className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E2424]" />;
      case 'Dhak':
        return <Drum className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E2424]" />;
      case 'Children':
        return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E2424]" />;
      case 'Bhog':
        return <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E2424]" />;
      default:
        return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#8E2424]" />;
    }
  };

  return (
    <ScrollSection
      id="cultural"
      variant="warm"
      showCorners={true}
      showMandala={true}
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <SectionHeader delay={0.1} className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 w-full">
          <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8E2424] font-semibold mb-1 md:mb-2">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
            <span>Community Festivities</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Noto_Serif_Bengali'] font-bold text-[#641A1A]">
            {eventConfig.cultural.headingBn}
          </h2>

          <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#171313] font-bold mt-0.5 md:mt-1">
            {eventConfig.cultural.headingEn}
          </p>

          <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />

          <p className="text-xs sm:text-sm md:text-base text-[#171313]/75 font-normal max-w-prose md:max-w-xl mx-auto px-2 text-center">
            {eventConfig.cultural.subtitle}
          </p>
        </SectionHeader>

        {/* 6 Event Cards Grid */}
        <AnimatedGrid staggerDelay={0.1} delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
          {eventConfig.cultural.items.map((item, index) => (
            <AnimatedCard key={index} index={index} variant="fadeUp" className="bg-[#FFF9EF]/95 border border-[#D4AF62]/50 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-sm hover:shadow-md hover:border-[#B8863B] transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Header Tag and Icon */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
                  <div className="p-2.5 md:p-3 rounded-xl bg-[#F7F0E4] border border-[#D4AF62]/30 group-hover:bg-[#8E2424]/10 transition-colors">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-[#8E2424]/10 text-[#8E2424] border border-[#8E2424]/20">
                    {item.category}
                  </span>
                </div>

                {/* Timing Badge */}
                <div className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#8E2424] mb-1.5 md:mb-2">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
                  <span>{item.time}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#171313] group-hover:text-[#641A1A] transition-colors mb-1.5 md:mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-[#171313]/75 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 md:mt-4 pt-2.5 md:pt-3 border-t border-[#D4AF62]/20 text-xs md:text-sm text-[#B8863B] font-serif italic">
                Open to all devotees & community guests
              </div>
            </AnimatedCard>
          ))}
        </AnimatedGrid>
      </div>
    </ScrollSection>
  );
};


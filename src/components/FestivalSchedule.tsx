import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { eventConfig } from '../data/eventConfig';
import { Calendar, Clock, ChevronDown, ChevronUp, Sparkles, Star } from 'lucide-react';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';
import { SectionHeader, AnimatedGrid, AnimatedCard } from './AnimationUtils';

export const FestivalSchedule: React.FC = () => {
  const [selectedDayKey, setSelectedDayKey] = useState<string>('ashtami');
  const [expandedMobileDays, setExpandedMobileDays] = useState<Record<string, boolean>>({
    ashtami: true,
  });

  const toggleMobileDay = (key: string) => {
    setExpandedMobileDays((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const selectedDay = eventConfig.schedule.find((d) => d.dayKey === selectedDayKey) || eventConfig.schedule[2];

  return (
    <ScrollSection
      id="schedule"
      variant="light"
      showCorners={true}
      showMandala={false}
    >
      {/* Section Header */}
      <SectionHeader delay={0.1} className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 w-full">
        <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8E2424] font-semibold mb-1 md:mb-2">
          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
          <span>5-Day Comprehensive Timeline</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Noto_Serif_Bengali'] font-bold text-[#641A1A] tracking-wide">
          পুজোর সময়সূচি
        </h2>

        <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#171313] font-bold mt-0.5 md:mt-1">
          THE FESTIVAL SCHEDULE
        </p>

        <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />

        <p className="text-xs sm:text-sm md:text-base text-[#171313]/70 font-normal px-2 max-w-prose md:max-w-2xl mx-auto text-center">
          Daily ritual timings, Pushpanjali batches, community Bhog, and evening cultural celebrations.
        </p>
      </SectionHeader>

      {/* DESKTOP & TABLET VIEW: Day Selector Tabs */}
      <AnimatedGrid staggerDelay={0.08} delay={0.2} className="hidden md:grid grid-cols-5 gap-2 md:gap-2.5 lg:gap-4 xl:gap-5 mb-6 md:mb-8 lg:mb-10">
        {eventConfig.schedule.map((day, index) => {
          const isSelected = day.dayKey === selectedDayKey;
          const isAshtami = day.dayKey === 'ashtami';

          return (
            <AnimatedCard
              key={day.dayKey}
              index={index}
              variant="scale"
              className={`relative text-left p-2.5 md:p-3 lg:p-4 xl:p-5 rounded-xl md:rounded-2xl lg:rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[135px] md:min-h-[150px] lg:min-h-[170px] ${isSelected
                  ? 'bg-[#8E2424] text-[#FFF9EF] border-[#D4AF62] shadow-lg scale-[1.02] lg:scale-[1.03]'
                  : isAshtami
                    ? 'bg-[#F7F0E4] border-[#B8863B] text-[#641A1A] hover:bg-[#8E2424]/10'
                    : 'bg-[#FFF9EF] border-[#D4AF62]/40 text-[#171313] hover:border-[#B8863B]'
                }`}
              onClick={() => setSelectedDayKey(day.dayKey)}
            >
              {day.badge ? (
                <span className={`text-[8px] md:text-[8px] lg:text-[9px] xl:text-[10px] font-bold uppercase tracking-wider px-1.5 md:px-2 py-0.5 rounded-full mb-1.5 inline-block max-w-full truncate whitespace-nowrap ${isSelected ? 'bg-[#D4AF62] text-[#171313]' : 'bg-[#8E2424] text-[#FFF9EF]'
                  }`}>
                  {day.badge}
                </span>
              ) : (
                <div className="h-4 md:h-5" />
              )}

              <div>
                <span className={`text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-widest block ${isSelected ? 'text-[#D4AF62]' : 'text-[#8E2424]'
                  }`}>
                  {day.dayNumber}
                </span>

                <h3 className="font-serif text-xs md:text-sm lg:text-base xl:text-lg font-bold leading-snug mt-0.5">
                  {day.dayName}
                </h3>

                <p className={`text-[10px] md:text-xs lg:text-sm font-['Noto_Serif_Bengali'] mt-0.5 font-medium truncate ${isSelected ? 'text-[#FFF9EF]/90' : 'text-[#641A1A]'
                  }`}>
                  {day.bengaliName.split('—')[0]}
                </p>
              </div>

              <div className={`text-[10px] md:text-[11px] lg:text-xs mt-2 pt-1.5 border-t font-sans whitespace-nowrap ${isSelected ? 'border-[#FFF9EF]/20 text-[#FFF9EF]/80' : 'border-[#D4AF62]/30 text-[#171313]/60'
                }`}>
                {day.dateStr}
              </div>
            </AnimatedCard>
          );
        })}
      </AnimatedGrid>

      {/* DESKTOP VIEW: Selected Day Detailed Content Card */}
      <div className="hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay.dayKey}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 border ${selectedDay.dayKey === 'ashtami'
              ? 'bg-[#FFF9EF] border-2 border-[#D4AF62] shadow-xl'
              : 'bg-[#FFF9EF]/95 border-[#D4AF62]/50 shadow-md'
              }`}
          >
            {/* Day Header Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 md:pb-8 md:mb-8 border-b border-[#D4AF62]/40">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#8E2424]">
                    {selectedDay.dayNumber} • {selectedDay.dateSubtitle}
                  </span>
                  {selectedDay.badge && (
                    <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-bold uppercase px-2 py-0.5 rounded-full bg-[#8E2424] text-[#FFF9EF]">
                      <Star className="w-3 h-3 text-[#D4AF62]" />
                      <span>Special Highlight</span>
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#641A1A] mt-1 md:mt-2">
                  {selectedDay.dayName}
                </h3>
                <p className="font-['Noto_Serif_Bengali'] text-xl md:text-2xl text-[#8E2424] font-semibold mt-0.5 md:mt-1">
                  {selectedDay.bengaliName}
                </p>
              </div>

              {/* Quick Highlights tags */}
              <div className="flex flex-wrap gap-2 max-w-md">
                {selectedDay.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm font-medium px-3 py-1 rounded-full bg-[#FFF9EF] text-[#641A1A] border border-[#D4AF62]/40 shadow-xs"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Events Vertical Timeline */}
            <div className="space-y-3.5 md:space-y-4">
              {selectedDay.events.map((event, idx) => (
                <div
                  key={idx}
                  className={`p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${event.isHighlight
                    ? 'bg-[#8E2424]/10 border-[#8E2424]/40 shadow-sm'
                    : 'bg-[#FFF9EF] border-[#D4AF62]/30'
                    }`}
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    {/* Time Tag */}
                    <div className="px-3.5 sm:px-4 py-2 md:py-2.5 rounded-xl bg-[#8E2424] text-[#FFF9EF] text-xs md:text-sm font-semibold tracking-wider flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62] shrink-0" />
                      <span className="whitespace-nowrap">{event.time}</span>
                    </div>

                    {/* Event Details */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#171313]">
                          {event.title}
                        </h4>
                        {event.isHighlight && (
                          <span className="text-[10px] md:text-xs uppercase font-bold text-[#8E2424] px-2 py-0.5 bg-[#8E2424]/15 rounded">
                            Highlight
                          </span>
                        )}
                      </div>
                      {event.bengaliTitle && (
                        <p className="text-xs md:text-sm font-['Noto_Serif_Bengali'] text-[#8E2424] font-semibold mt-0.5">
                          {event.bengaliTitle}
                        </p>
                      )}
                      {event.description && (
                        <p className="text-xs md:text-sm text-[#171313]/70 mt-1 font-sans">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MOBILE VIEW: Interactive Accordion Cards */}
      <div className="md:hidden space-y-3">
        {eventConfig.schedule.map((day) => {
          const isExpanded = !!expandedMobileDays[day.dayKey];
          const isAshtami = day.dayKey === 'ashtami';

          return (
            <div
              key={day.dayKey}
              className={`rounded-2xl border overflow-hidden transition-all ${isAshtami
                ? 'border-2 border-[#D4AF62] bg-[#FFF9EF] shadow-md'
                : 'border-[#D4AF62]/50 bg-[#FFF9EF]/95'
                }`}
            >
              {/* Accordion Toggle Header */}
              <button
                onClick={() => toggleMobileDay(day.dayKey)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer active:bg-[#D4AF62]/10"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E2424]">
                      {day.dayNumber}
                    </span>
                    {day.badge && (
                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#8E2424] text-[#FFF9EF]">
                        {day.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#641A1A] mt-0.5">
                    {day.dayName}
                  </h3>
                  <p className="font-['Noto_Serif_Bengali'] text-xs font-semibold text-[#8E2424]">
                    {day.bengaliName}
                  </p>
                  <p className="text-[10px] text-[#171313]/60 mt-0.5 font-sans">
                    {day.dateStr}
                  </p>
                </div>

                <div className="p-2 rounded-full bg-[#FFF9EF] text-[#8E2424] border border-[#D4AF62]/40 shrink-0">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Expanded Details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-4 pb-4 pt-2 border-t border-[#D4AF62]/30 space-y-2.5"
                  >
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {day.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFF9EF] text-[#641A1A] border border-[#D4AF62]/30"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>

                    {/* Event Items */}
                    <div className="space-y-2">
                      {day.events.map((event, idx) => (
                        <div
                          key={idx}
                          className={`p-2.5 rounded-xl border ${event.isHighlight
                            ? 'bg-[#8E2424]/10 border-[#8E2424]/40'
                            : 'bg-[#FFF9EF] border-[#D4AF62]/30'
                            }`}
                        >
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap sm:flex-nowrap">
                            <span className="px-2 py-0.5 rounded bg-[#8E2424] text-[#FFF9EF] text-[10px] font-bold whitespace-nowrap shrink-0">
                              {event.time}
                            </span>
                            <h4 className="font-serif text-xs font-bold text-[#171313]">
                              {event.title}
                            </h4>
                          </div>
                          {event.bengaliTitle && (
                            <p className="text-[10px] font-['Noto_Serif_Bengali'] text-[#8E2424] font-medium">
                              {event.bengaliTitle}
                            </p>
                          )}
                          {event.description && (
                            <p className="text-[10px] text-[#171313]/70 mt-0.5 leading-relaxed">
                              {event.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </ScrollSection>
  );
};


import React from 'react';
import { Calendar, MapPin, Building2, Landmark, Sparkles, CreditCard, HeartHandshake } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';
import { SectionHeader, AnimatedGrid, AnimatedCard } from './AnimationUtils';

export const PujaInfo: React.FC = () => {
  const infoCards = [
    {
      id: 'card-date',
      icon: <Calendar className="w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-[#8E2424]" />,
      label: 'DATE & DURATION',
      bengaliLabel: 'তারিখ ও সময়কাল',
      primaryText: eventConfig.pujaInfo.dates,
      secondaryText: eventConfig.pujaInfo.bengaliDates,
      tag: '5 Sacred Days',
    },
    {
      id: 'card-venue',
      icon: <Landmark className="w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-[#8E2424]" />,
      label: 'PUJA VENUE',
      bengaliLabel: 'পূজামণ্ডপের ঠিকানা',
      primaryText: eventConfig.venue.address,
      secondaryText: `${eventConfig.venue.city}, Denmark`,
      tag: 'Vanløse 2720',
    },
    {
      id: 'card-contribution',
      icon: <CreditCard className="w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-[#8E2424]" />,
      label: 'CONTRIBUTION & MOBILEPAY',
      bengaliLabel: 'আর্থিক অনুদান',
      primaryText: `Family: ${eventConfig.donation.familyContribution} • Single: ${eventConfig.donation.singleContribution}`,
      secondaryText: `MobilePay: ${eventConfig.donation.mobilePay} • Reg: ${eventConfig.donation.regNo} A/C: ${eventConfig.donation.accountNo}`,
      tag: 'Community Support',
    },
    {
      id: 'card-organizer',
      icon: <Building2 className="w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-[#8E2424]" />,
      label: 'ORGANIZED BY',
      bengaliLabel: 'আয়োজক পর্ষদ',
      primaryText: eventConfig.organization.name,
      secondaryText: `${eventConfig.organization.edition} (${eventConfig.organization.bengaliEdition})`,
      tag: '5th Year Milestone',
    },
  ];

  return (
    <ScrollSection
      id="puja-info"
      variant="warm"
      showCorners={true}
      showMandala={true}
    >
      {/* Section Header */}
      <SectionHeader delay={0.1} className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 w-full">
        <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8E2424] font-semibold mb-1 md:mb-2">
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
          <span>Essential Details</span>
        </div>
        
        {/* English Header (Bigger) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#641A1A] font-bold tracking-tight">
          PUJA ESSENTIALS & LOCATION
        </h2>
        
        {/* Bengali Subheading (A bit smaller) */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-['Noto_Serif_Bengali'] text-[#8E2424] font-semibold tracking-wider mt-1 md:mt-1.5">
          উৎসবের গুরুত্বপূর্ণ তথ্যাবলী ও স্থান
        </p>

        <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />
      </SectionHeader>

      {/* 4 Information Cards Grid */}
      <AnimatedGrid staggerDelay={0.1} delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5 lg:gap-3.5 xl:gap-6">
        {infoCards.map((card, index) => (
          <AnimatedCard key={card.id} index={index} variant="fadeUp" className="bg-[#FFF9EF]/95 border border-[#D4AF62]/50 rounded-2xl md:rounded-3xl p-4 sm:p-5 lg:p-4 xl:p-6 shadow-md hover:shadow-lg hover:border-[#B8863B] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Top icon and tag */}
              <div className="flex items-center justify-between gap-1.5 mb-2.5 sm:mb-3 lg:mb-2.5 xl:mb-4">
                <div className="p-2 sm:p-2.5 lg:p-2 xl:p-2.5 rounded-xl bg-[#F7F0E4] border border-[#D4AF62]/30 group-hover:bg-[#8E2424]/10 transition-colors shrink-0">
                  {card.icon}
                </div>
                <span className="text-[9px] sm:text-[10px] lg:text-[9px] xl:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#8E2424]/10 text-[#8E2424] border border-[#8E2424]/20 whitespace-nowrap shrink-0">
                  {card.tag}
                </span>
              </div>

              {/* Card Label: English (Bigger) & Bengali (A bit smaller) */}
              <div className="mb-1.5 lg:mb-2">
                <span className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-[#8E2424] block">
                  {card.label}
                </span>
                <span className="text-[11px] sm:text-xs font-['Noto_Serif_Bengali'] text-[#B8863B] font-semibold">
                  {card.bengaliLabel}
                </span>
              </div>

              {/* Primary Text (English / Main, Bigger) */}
              <h3 className="font-serif text-sm sm:text-base md:text-base lg:text-sm xl:text-lg 2xl:text-xl font-bold text-[#171313] leading-snug mb-0.5 lg:mb-1">
                {card.primaryText}
              </h3>
            </div>

            {/* Secondary Text (Bengali / Supporting, slightly smaller) */}
            <div className="mt-2.5 md:mt-3 lg:mt-2.5 xl:mt-4 pt-2 md:pt-2.5 lg:pt-2 xl:pt-3 border-t border-[#D4AF62]/25 text-[11px] sm:text-xs lg:text-[11px] xl:text-sm text-[#171313]/75 font-sans leading-relaxed">
              {card.secondaryText}
            </div>
          </AnimatedCard>
        ))}
      </AnimatedGrid>
    </ScrollSection>
  );
};

import React from 'react';
import { MapPin, Navigation, Compass, Train } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';

export const VenueMap: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${eventConfig.venue.name}, ${eventConfig.venue.address}, ${eventConfig.venue.city}, ${eventConfig.venue.country}`
  )}`;

  return (
    <ScrollSection
      id="venue"
      variant="light"
      showCorners={true}
      showMandala={true}
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 w-full">
          <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8E2424] font-semibold mb-1 md:mb-2">
            <Compass className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
            <span>Venue & Location</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Noto_Serif_Bengali'] font-bold text-[#641A1A]">
            আমাদের পূজামণ্ডপ
          </h2>

          <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#171313] font-bold mt-0.5 md:mt-1">
            JOIN US AT THE PUJA
          </p>

          <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />

          <p className="text-xs sm:text-sm md:text-base text-[#171313]/75 font-normal max-w-prose md:max-w-xl mx-auto px-2 text-center">
            Conveniently situated in greater Copenhagen with seamless metro, bus, and vehicle accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Venue Info & Directions Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFF9EF]/95 border border-[#D4AF62]/50 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-md">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E2424]/10 text-[#8E2424] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 md:mb-5">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Pandal Address</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#641A1A] mb-1.5 leading-tight">
                {eventConfig.venue.name}
              </h3>

              <p className="text-xs sm:text-sm md:text-base font-semibold text-[#171313] mb-0.5">
                {eventConfig.venue.address}
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-[#171313]/80 font-sans mb-3 sm:mb-4 md:mb-5">
                {eventConfig.venue.postalCode} {eventConfig.venue.city}, {eventConfig.venue.country}
              </p>

              <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#FFF9EF] border border-[#D4AF62]/40 text-xs md:text-sm text-[#171313]/80 mb-4 sm:mb-6 shadow-sm">
                <strong className="text-[#641A1A]">Landmark:</strong> {eventConfig.venue.landmark}
              </div>

              {/* Transit Details */}
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#8E2424] flex items-center gap-1.5">
                  <Train className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
                  <span>How to Reach</span>
                </h4>
                <ul className="text-xs md:text-sm text-[#171313]/80 space-y-1.5 font-sans">
                  {eventConfig.venue.transportTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#8E2424] font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Get Directions CTA Button */}
            <a
              id="get-directions-btn"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 md:py-3.5 px-6 rounded-full bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] font-bold text-xs md:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 border border-[#D4AF62]/40 group cursor-pointer active:scale-95"
            >
              <span>Get Directions</span>
              <Navigation className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF62] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: Embedded Responsive Interactive Map (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFF9EF]/95 border border-[#D4AF62]/50 rounded-2xl md:rounded-3xl p-2 md:p-3 shadow-md flex flex-col overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[480px]">
            <div className="relative w-full h-full min-h-[290px] md:min-h-[390px] lg:min-h-[460px] rounded-xl md:rounded-2xl overflow-hidden bg-[#F7F0E4]">
              <iframe
                title="Biswabangla Nordic Durga Puja Venue Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${eventConfig.venue.address}, ${eventConfig.venue.city}, Denmark`
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[290px] md:min-h-[390px] lg:min-h-[460px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
              
              {/* Floating map chip */}
              <div className="absolute top-2.5 left-2.5 md:top-4 md:left-4 bg-[#FFF9EF]/95 backdrop-blur-md border border-[#D4AF62]/50 px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#641A1A] pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Pandal Location • Denmark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};


import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { eventConfig } from '../data/eventConfig';
import { Sparkles, Clock } from 'lucide-react';
import { AlponaCorner } from './DecorativeAlpona';
import patternBg from '../assets/images/festive_bengali_pattern_1789856534168.jpg';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
}

export const Countdown: React.FC = () => {
  const targetDate = new Date(eventConfig.hero.targetCountdownDate).getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isStarted: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', bnLabel: 'দিন', value: timeLeft.days },
    { label: 'Hours', bnLabel: 'ঘণ্টা', value: timeLeft.hours },
    { label: 'Minutes', bnLabel: 'মিনিট', value: timeLeft.minutes },
    { label: 'Seconds', bnLabel: 'সেকেন্ড', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      id="countdown"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 w-full"
    >
      <div className="relative bg-[#FFF9EF]/95 border-2 border-[#D4AF62]/70 rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-4 sm:p-7 md:p-9 lg:p-11 shadow-2xl backdrop-blur-md text-[#171313] overflow-hidden max-w-4xl mx-auto">
        {/* Background Texture Overlay with Drift */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply select-none animate-pattern-drift"
          style={{
            backgroundImage: `url(${patternBg})`,
            backgroundSize: '240px auto',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Corner Accents */}
        <div className="absolute top-2 left-2 md:top-4 md:left-4 pointer-events-none">
          <AlponaCorner className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#B8863B]/50" />
        </div>
        <div className="absolute top-2 right-2 md:top-4 md:right-4 pointer-events-none rotate-90">
          <AlponaCorner className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#B8863B]/50" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-5 md:mb-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-[#8E2424] font-bold mb-1 md:mb-2">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
            <span>The Countdown Begins</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-['Noto_Serif_Bengali'] font-bold text-[#641A1A]">
            {timeLeft.isStarted ? 'পুজোর মহোৎসব শুরু হয়েছে' : 'পুজোর আর মাত্র...'}
          </h2>
        </div>

        {/* Live Countdown Grid */}
        {timeLeft.isStarted ? (
          <div className="py-4 md:py-8 text-center relative z-10">
            <div className="inline-block p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#8E2424]/10 border border-[#8E2424]/30">
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#8E2424]">
                THE PUJA HAS BEGUN
              </p>
              <p className="text-xs sm:text-sm md:text-base font-['Hind_Siliguri'] text-[#641A1A] mt-1 md:mt-2">
                Biswabangla Nordic 5th Annual Durga Puja 2026 is currently underway!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-center max-w-2xl mx-auto relative z-10">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="relative flex flex-col items-center justify-center py-2.5 sm:py-4 md:py-6 px-1 sm:px-3 md:px-4 rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#FFF9EF]/90 border border-[#D4AF62]/50 shadow-sm group hover:border-[#B8863B] transition-colors"
              >
                {/* Number */}
                <div className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8E2424] tracking-tight leading-none">
                  {String(unit.value).padStart(2, '0')}
                </div>
                
                {/* Latin Label */}
                <div className="text-[9px] sm:text-[11px] md:text-xs uppercase tracking-wider font-semibold text-[#171313]/70 mt-1 md:mt-2">
                  {unit.label}
                </div>

                {/* Bengali Sub-label */}
                <div className="text-[10px] sm:text-xs md:text-sm font-['Hind_Siliguri'] text-[#B8863B] font-medium leading-none mt-0.5">
                  {unit.bnLabel}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};


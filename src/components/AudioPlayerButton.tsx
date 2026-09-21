import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { festiveAudio } from '../utils/ambientSound';

export const AudioPlayerButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(festiveAudio.getStatus());
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = festiveAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    festiveAudio.toggle();
  };

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2 select-none"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Floating State Hint Bubble (Desktop) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex flex-col items-end px-3 py-1.5 rounded-xl bg-[#171313]/90 text-[#FFF9EF] border border-[#D4AF62]/40 shadow-xl backdrop-blur-md text-right pointer-events-none"
          >
            <span className="text-[11px] font-semibold text-[#D4AF62] flex items-center gap-1">
              <Music className="w-3 h-3" />
              <span>{isPlaying ? 'Mute Background Music' : 'Play Background Music'}</span>
            </span>
            <span className="text-[10px] font-['Hind_Siliguri'] text-[#FFF9EF]/75">
              {isPlaying ? 'আবহ সঙ্গীত বন্ধ করুন' : 'আবহ সঙ্গীত চালু করুন'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Mute/Unmute Action Button */}
      <motion.button
        id="audio-toggle-btn"
        onClick={handleToggle}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isPlaying ? 'Mute background festive music' : 'Unmute background festive music'}
        className={`relative p-3 sm:p-3.5 rounded-full border-2 transition-all duration-300 shadow-2xl flex items-center justify-center cursor-pointer group ${
          isPlaying
            ? 'bg-[#8E2424] text-[#FFF9EF] border-[#D4AF62] shadow-[#8E2424]/40 ring-4 ring-[#D4AF62]/25'
            : 'bg-[#FFF9EF] text-[#641A1A] border-[#D4AF62]/70 hover:border-[#8E2424] shadow-lg'
        }`}
      >
        {/* Animated Sound Wave Rings when Active */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#D4AF62]"
            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          />
        )}

        {/* Icon & Audio Equalizer Indicator */}
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-center gap-1">
              <Volume2 className="w-5 h-5 text-[#D4AF62]" />
              {/* 3 Animated Equalizer Bars */}
              <div className="flex items-end gap-0.5 h-3.5 pr-0.5">
                <motion.span
                  className="w-0.5 bg-[#D4AF62] rounded-full"
                  animate={{ height: ['3px', '12px', '4px', '10px'] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                />
                <motion.span
                  className="w-0.5 bg-[#D4AF62] rounded-full"
                  animate={{ height: ['8px', '4px', '13px', '6px'] }}
                  transition={{ repeat: Infinity, duration: 0.7, delay: 0.15, ease: 'easeInOut' }}
                />
                <motion.span
                  className="w-0.5 bg-[#D4AF62] rounded-full"
                  animate={{ height: ['4px', '10px', '5px', '12px'] }}
                  transition={{ repeat: Infinity, duration: 0.9, delay: 0.3, ease: 'easeInOut' }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <VolumeX className="w-5 h-5 text-[#8E2424] group-hover:text-[#641A1A]" />
            </div>
          )}
        </div>
      </motion.button>
    </div>
  );
};

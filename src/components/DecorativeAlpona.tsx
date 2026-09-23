import React from 'react';
import alponaDividerImg from '../assets/images/alpona-divider.png';
import alponaImg from '../assets/images/alpona.png';

interface AlponaProps {
  className?: string;
  size?: number;
  color?: string;
}

export const AlponaMandala: React.FC<AlponaProps> = ({
  className = "w-48 h-48 text-[#D4AF62]/40"
}) => {
  return (
    <img
      src={alponaImg}
      alt=""
      aria-hidden="true"
      className={`object-contain select-none brightness-[0.72] saturate-[1.2] drop-shadow-[0_1px_2px_rgba(100,26,26,0.35)] ${className}`}
      draggable={false}
    />
  );
};

export const AlponaCorner: React.FC<AlponaProps> = ({
  className = "w-24 h-24 text-[#D4AF62]/50",
  color = "currentColor"
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4 L96 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 4 L4 96" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 12 L80 12" stroke={color} strokeWidth="0.75" strokeDasharray="3 3" />
      <path d="M12 12 L12 80" stroke={color} strokeWidth="0.75" strokeDasharray="3 3" />

      {/* Paisley / Kolka curve */}
      <path
        d="M20 20 C25 45 45 60 70 50 C55 35 45 25 20 20 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
      />
      <circle cx="42" cy="42" r="3" fill={color} opacity="0.8" />
      <circle cx="20" cy="20" r="2.5" fill={color} />
      <circle cx="6" cy="6" r="3.5" fill={color} />
      <path d="M28 28 Q45 32 52 48" stroke={color} strokeWidth="0.8" />
    </svg>
  );
};

export const AlponaDivider: React.FC<{ className?: string; color?: string }> = ({
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center space-x-3 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto my-2.5 sm:my-3 md:my-5 ${className}`}>
      <img
        src={alponaDividerImg}
        alt=""
        aria-hidden="true"
        className="h-6 sm:h-7 md:h-8 w-auto max-w-full select-none"
        draggable={false}
      />
    </div>
  );
};

export const ShiuliFlower: React.FC<{ className?: string }> = ({
  className = "w-6 h-6 text-orange-500"
}) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      {/* 5 White Petals with Orange Center stalk */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 20 20)`}>
          <path
            d="M20 6 C17 12 18 17 20 18 C22 17 23 12 20 6 Z"
            fill="#FFFFFF"
            stroke="#F7F0E4"
            strokeWidth="0.75"
          />
        </g>
      ))}
      <circle cx="20" cy="20" r="3.5" fill="#EA580C" />
      <circle cx="20" cy="20" r="1.5" fill="#C2410C" />
    </svg>
  );
};

export const ConchIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5 text-[#D4AF62]"
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" opacity="0.3" fill="currentColor" />
      <path d="M12 4c2.5 2.5 4.5 5.5 5 9" />
      <path d="M12 4C9.5 6.5 7.5 9.5 7 13" />
      <path d="M8 17a4 4 0 0 0 8 0" />
    </svg>
  );
};

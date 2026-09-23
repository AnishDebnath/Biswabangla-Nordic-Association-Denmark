import React from 'react';
import alponaDividerImg from '../assets/images/alpona-divider.png';

interface AlponaProps {
  className?: string;
  size?: number;
  color?: string;
}

export const AlponaMandala: React.FC<AlponaProps> = ({
  className = "w-48 h-48 text-[#D4AF62]/40",
  color = "currentColor"
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="82" stroke={color} strokeWidth="0.75" />
      
      {/* 8 Outer Lotus Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 12 C90 35 75 55 100 78 C125 55 110 35 100 12 Z"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M100 24 C95 40 85 52 100 68 C115 52 105 40 100 24 Z"
            fill="none"
            stroke={color}
            strokeWidth="0.8"
            opacity="0.7"
          />
          <circle cx="100" cy="45" r="2.5" fill={color} opacity="0.9" />
          <circle cx="100" cy="88" r="1.5" fill={color} />
        </g>
      ))}

      {/* Inner Petal Ring */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
        <g key={`inner-${i}`} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 38 C94 52 88 64 100 76 C112 64 106 52 100 38 Z"
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
          <circle cx="100" cy="20" r="2" fill={color} />
        </g>
      ))}

      {/* Central Sacred Core */}
      <circle cx="100" cy="100" r="24" stroke={color} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="18" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="100" cy="100" r="8" fill={color} opacity="0.85" />
      
      {/* 8 Inner Seed Points */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <circle
          key={`dot-${i}`}
          cx={100 + 13 * Math.cos((angle * Math.PI) / 180)}
          cy={100 + 13 * Math.sin((angle * Math.PI) / 180)}
          r="1.5"
          fill={color}
        />
      ))}
    </svg>
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

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface DropdownOption {
  value: string | number;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

interface CustomDropdownProps {
  id?: string;
  label?: string;
  icon?: React.ReactNode;
  options: DropdownOption[];
  value: string | number;
  onChange: (value: any) => void;
  placeholder?: string;
  className?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  id,
  label,
  icon,
  options,
  value,
  onChange,
  placeholder = 'Select option',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313] mb-1 md:mb-1.5 flex items-center gap-1.5"
        >
          {icon}
          <span>{label}</span>
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-[#FFF9EF] border transition-all text-left flex items-center justify-between gap-2 cursor-pointer shadow-2xs ${
          isOpen
            ? 'border-[#8E2424] ring-2 ring-[#8E2424]/20 shadow-md'
            : 'border-[#D4AF62]/50 hover:border-[#B8863B]'
        }`}
      >
        <span className="text-sm md:text-base text-[#171313] font-medium truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#8E2424] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Custom Options Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute z-50 left-0 right-0 mt-1.5 bg-[#FFF9EF] border-2 border-[#D4AF62] rounded-2xl shadow-xl overflow-hidden py-1 max-h-60 overflow-y-auto backdrop-blur-md custom-dropdown-scrollbar"
            role="listbox"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  type="button"
                  key={String(option.value)}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-xs sm:text-sm font-medium flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#8E2424] text-[#FFF9EF]'
                      : 'text-[#171313] hover:bg-[#8E2424]/10 hover:text-[#641A1A]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={isSelected ? 'font-bold' : ''}>{option.label}</span>
                    {option.sublabel && (
                      <span
                        className={`text-[10px] ${
                          isSelected ? 'text-[#FFF9EF]/80' : 'text-[#171313]/60'
                        }`}
                      >
                        {option.sublabel}
                      </span>
                    )}
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#D4AF62] shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

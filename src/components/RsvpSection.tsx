import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, CheckCircle2, Heart, Calendar, Users, Utensils, Mail, Phone, User, MessageSquare, Download, RefreshCw } from 'lucide-react';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';
import { CustomDropdown } from './CustomDropdown';
import { SectionHeader, StaggerContainer, StaggerItem } from './AnimationUtils';

interface RsvpData {
  fullName: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  days: string[];
  dietary: string;
  message: string;
  wantsUpdates: boolean;
  submittedAt?: string;
}

const STORAGE_KEY = 'biswabangla_durga_puja_2026_rsvp';

export const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState<RsvpData>({
    fullName: '',
    email: '',
    phone: '',
    adults: 2,
    children: 0,
    days: ['saptami', 'ashtami', 'nabami'],
    dietary: 'traditional_bhog',
    message: '',
    wantsUpdates: true,
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<RsvpData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSubmittedData(parsed);
        setIsSubmitted(true);
      }
    } catch {
      // Ignored
    }
  }, []);

  const handleDayToggle = (dayKey: string) => {
    setFormData((prev) => {
      const exists = prev.days.includes(dayKey);
      const updated = exists ? prev.days.filter((d) => d !== dayKey) : [...prev.days, dayKey];
      return { ...prev, days: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const finalRecord: RsvpData = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(finalRecord));
      } catch {
        // Ignored
      }
      setSubmittedData(finalRecord);
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 500);
  };

  const handleEditRsvp = () => {
    if (submittedData) {
      setFormData(submittedData);
    }
    setIsSubmitted(false);
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Biswabangla Nordic//Durga Puja 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Biswabangla Nordic Durga Puja 2026',
      'DESCRIPTION:5th Annual Durga Puja Celebration in Denmark. Pushpanjali, Bhog, Cultural Events.',
      'LOCATION:Biswabangla Nordic Pandal, Kulturvej 10, Frederiksberg, Copenhagen, Denmark',
      'DTSTART:20261016T070000Z',
      'DTEND:20261020T200000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Biswabangla_Durga_Puja_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const availableDays = [
    { key: 'shashthi', label: 'Shashthi', bnLabel: 'ষষ্ঠী', date: '16 Oct' },
    { key: 'saptami', label: 'Saptami', bnLabel: 'সপ্তমী', date: '17 Oct' },
    { key: 'ashtami', label: 'Ashtami', bnLabel: 'অষ্টমী', date: '18 Oct', isHighlight: true },
    { key: 'nabami', label: 'Nabami', bnLabel: 'নবমী', date: '19 Oct' },
    { key: 'dashami', label: 'Dashami', bnLabel: 'দশমী', date: '20 Oct' },
  ];

  return (
    <ScrollSection
      id="rsvp"
      variant="warm"
      showCorners={true}
      showMandala={true}
    >
      <div className="max-w-4xl xl:max-w-5xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <SectionHeader delay={0.1} className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 w-full">
          <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8E2424] font-semibold mb-1 md:mb-2">
            <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
            <span>Join Our Celebration</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Noto_Serif_Bengali'] font-bold text-[#641A1A] leading-tight">
            আপনাদের উপস্থিতিই উৎসবের আনন্দ
          </h2>

          <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#171313] font-bold mt-1 md:mt-2">
            CONFIRM YOUR CELEBRATION RSVP
          </p>

          <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />

          <p className="text-xs sm:text-sm md:text-base text-[#171313]/75 font-normal max-w-prose md:max-w-xl mx-auto px-2 text-center">
            Please kindly confirm your attendance to help our hospitality and Bhog planning team welcome you seamlessly.
          </p>
        </SectionHeader>

        {/* Dynamic Form / Confirmation Card */}
        <StaggerContainer staggerDelay={0.08} delay={0.2} className="bg-[#FFF9EF]/95 border border-[#D4AF62]/60 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-12 shadow-xl backdrop-blur-md">
          <AnimatePresence mode="wait">
            {isSubmitted && submittedData ? (
              <motion.div
                key="confirmation-view"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="text-center py-2 sm:py-4"
              >
                {/* Success Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#8E2424] text-[#FFF9EF] flex items-center justify-center mx-auto mb-3.5 md:mb-5 shadow-lg border-2 border-[#D4AF62]">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#D4AF62]" />
                </div>

                <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8E2424] font-bold block mb-1 md:mb-2">
                  RSVP Confirmed
                </span>

                <h3 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-[#641A1A] mb-1.5 md:mb-2">
                  Thank you, {submittedData.fullName}!
                </h3>

                <p className="font-['Noto_Serif_Bengali'] text-base sm:text-lg md:text-xl text-[#8E2424] font-semibold mb-3 md:mb-4">
                  আমরা সাদরে আপনাদের আগমন প্রতীক্ষা করছি।
                </p>

                <p className="text-xs sm:text-sm md:text-base text-[#171313]/80 max-w-md md:max-w-lg mx-auto mb-6 sm:mb-8 font-light px-2">
                  We look forward to celebrating Durga Puja with you and your family in Denmark.
                </p>

                {/* Digital Pass Summary Ticket */}
                <div className="max-w-md md:max-w-lg mx-auto bg-[#FFF9EF] border-2 border-[#D4AF62] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-left shadow-sm mb-6 sm:mb-8 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#D4AF62]/30 pb-2.5 md:pb-3 mb-3 md:mb-4">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#8E2424]">
                      Biswabangla Nordic Pass
                    </span>
                    <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-[#8E2424]/10 text-[#641A1A] font-semibold">
                      Durga Puja 2026
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 text-xs md:text-sm">
                    <div>
                      <span className="text-[#171313]/60 block text-[9px] sm:text-[10px] md:text-xs uppercase font-bold">Primary Guest</span>
                      <strong className="text-xs sm:text-sm md:text-base font-serif text-[#171313]">{submittedData.fullName}</strong>
                    </div>
                    <div>
                      <span className="text-[#171313]/60 block text-[9px] sm:text-[10px] md:text-xs uppercase font-bold">Total Party</span>
                      <strong className="text-xs sm:text-sm md:text-base text-[#8E2424]">{submittedData.adults} Adults, {submittedData.children} Children</strong>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-[#171313]/60 block text-[9px] sm:text-[10px] md:text-xs uppercase font-bold">Contact</span>
                      <span className="text-xs md:text-sm text-[#171313]/90 truncate block">{submittedData.email}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-[#171313]/60 block text-[9px] sm:text-[10px] md:text-xs uppercase font-bold">Attending Days</span>
                      <span className="text-xs md:text-sm text-[#8E2424] font-semibold uppercase">{submittedData.days.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Post-RSVP Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 max-w-md md:max-w-lg mx-auto">
                  <button
                    onClick={handleDownloadCalendar}
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-[#D4AF62]/40 shadow-sm cursor-pointer active:scale-95"
                  >
                    <Download className="w-4 h-4 text-[#D4AF62]" />
                    <span>Add to Calendar (.ics)</span>
                  </button>
                  <button
                    onClick={handleEditRsvp}
                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-[#FFF9EF] hover:bg-[#F7F0E4] text-[#641A1A] text-xs md:text-sm font-bold uppercase tracking-wider transition-all border border-[#D4AF62]/50 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Update RSVP</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Name, Email & Phone in responsive grid */}
                <StaggerItem variant="fadeUp" className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313] mb-1 md:mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#8E2424]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sourav Mukherjee"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-[#FFF9EF] border border-[#D4AF62]/50 text-sm md:text-base text-[#171313] focus:outline-none focus:ring-2 focus:ring-[#8E2424] focus:border-transparent transition-all placeholder:text-[#171313]/40"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313] mb-1 md:mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#8E2424]" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-[#FFF9EF] border border-[#D4AF62]/50 text-sm md:text-base text-[#171313] focus:outline-none focus:ring-2 focus:ring-[#8E2424] focus:border-transparent transition-all placeholder:text-[#171313]/40"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313] mb-1 md:mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#8E2424]" />
                      <span>WhatsApp / Phone *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+45 00 00 00 00"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-[#FFF9EF] border border-[#D4AF62]/50 text-sm md:text-base text-[#171313] focus:outline-none focus:ring-2 focus:ring-[#8E2424] focus:border-transparent transition-all placeholder:text-[#171313]/40"
                    />
                  </div>
                </StaggerItem>

                {/* Party Size & Dietary Preferences */}
                <StaggerItem variant="fadeUp" className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-6">
                  {/* Number of Adults */}
                  <CustomDropdown
                    id="rsvp-adults-dropdown"
                    label="Number of Adults"
                    icon={<Users className="w-3.5 h-3.5 text-[#8E2424]" />}
                    value={formData.adults}
                    onChange={(val) => setFormData({ ...formData, adults: Number(val) || 1 })}
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
                      value: num,
                      label: `${num} ${num === 1 ? 'Adult' : 'Adults'}`,
                    }))}
                  />

                  {/* Number of Children */}
                  <CustomDropdown
                    id="rsvp-children-dropdown"
                    label="Children (under 12)"
                    icon={<Users className="w-3.5 h-3.5 text-[#B8863B]" />}
                    value={formData.children}
                    onChange={(val) => setFormData({ ...formData, children: Number(val) || 0 })}
                    options={[0, 1, 2, 3, 4, 5, 6].map((num) => ({
                      value: num,
                      label: `${num} ${num === 1 ? 'Child' : 'Children'}`,
                    }))}
                  />

                  {/* Dietary Preference */}
                  <CustomDropdown
                    id="rsvp-dietary-dropdown"
                    label="Bhog Preference"
                    icon={<Utensils className="w-3.5 h-3.5 text-[#8E2424]" />}
                    value={formData.dietary}
                    onChange={(val) => setFormData({ ...formData, dietary: String(val) })}
                    options={[
                      { value: 'traditional_bhog', label: 'Traditional Bengali Bhog', sublabel: 'Pure Vegetarian Prasad' },
                      { value: 'vegan', label: 'Vegan / Lactose-Free', sublabel: 'No Dairy / Plant-based' },
                      { value: 'gluten_free', label: 'Gluten-Free', sublabel: 'Wheat & Gluten Free' },
                      { value: 'jain', label: 'No Onion / No Garlic', sublabel: 'Sattvic Bhog' },
                    ]}
                  />
                </StaggerItem>

                {/* Which Days Will You Attend? */}
                <StaggerItem variant="fadeUp">
                  <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313] mb-1.5 md:mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8E2424]" />
                      <span>Attending Days</span>
                    </span>
                    <span className="text-[11px] sm:text-xs md:text-sm text-[#8E2424] font-normal">
                      {formData.days.length} selected
                    </span>
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 md:gap-4">
                    {availableDays.map((day, idx) => {
                      const isChecked = formData.days.includes(day.key);
                      const isLastItem = idx === availableDays.length - 1;
                      return (
                        <button
                          type="button"
                          key={day.key}
                          onClick={() => handleDayToggle(day.key)}
                          className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${isLastItem ? 'col-span-2 sm:col-span-1' : 'col-span-1'
                            } ${isChecked
                              ? 'bg-[#8E2424] text-[#FFF9EF] border-[#D4AF62] shadow-sm'
                              : 'bg-[#FFF9EF] text-[#171313] border-[#D4AF62]/40 hover:border-[#B8863B]'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm md:text-base font-bold font-serif">{day.label}</span>
                            <div className={`w-4 h-4 rounded flex items-center justify-center ${isChecked ? 'bg-[#D4AF62] text-[#171313]' : 'border border-[#D4AF62]'
                              }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                          <div className="mt-1 flex items-center justify-between text-[11px] sm:text-xs">
                            <span className={`font-['Noto_Serif_Bengali'] font-semibold ${isChecked ? 'text-[#FFF9EF]/90' : 'text-[#8E2424]'}`}>
                              {day.bnLabel}
                            </span>
                            <span className={isChecked ? 'text-[#FFF9EF]/75' : 'text-[#171313]/60'}>
                              {day.date}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </StaggerItem>

                {/* Message / Special Request */}
                <StaggerItem variant="fadeUp">
                  <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313] mb-1 md:mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#8E2424]" />
                    <span>Special Requests / Message</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let us know if you'd like to participate, sponsor, or have requests..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl md:rounded-2xl bg-[#FFF9EF] border border-[#D4AF62]/50 text-sm md:text-base text-[#171313] focus:outline-none focus:ring-2 focus:ring-[#8E2424] focus:border-transparent transition-all placeholder:text-[#171313]/40"
                  />
                </StaggerItem>

                {/* Submit Button */}
                <StaggerItem variant="fadeUp" className="pt-2 md:pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] transition-all shadow-lg border border-[#D4AF62]/40 flex items-center justify-center gap-2 mx-auto disabled:opacity-60 cursor-pointer active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Confirming...</span>
                    ) : (
                      <>
                        <span>Confirm RSVP</span>
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF62]" />
                      </>
                    )}
                  </button>
                </StaggerItem>
              </form>
            )}
          </AnimatePresence>
        </StaggerContainer>
      </div>
    </ScrollSection>
  );
};


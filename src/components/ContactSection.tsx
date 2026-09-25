import React, { useState } from 'react';
import { Phone, Send, CheckCircle2, HeartHandshake, CreditCard, Landmark, Copy, Check, MessageCircle, User, RefreshCw, Mail } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';
import { SectionHeader, StaggerContainer, StaggerItem } from './AnimationUtils';

export const ContactSection: React.FC = () => {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquirySentAt, setInquirySentAt] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const lines = [
      'Durga Puja 2026 Inquiry',
      '',
      `Name: ${nameInput}`,
      `Phone: ${phoneInput}`,
      `Message: ${msgInput}`,
      `Submitted: ${dateStr}, ${timeStr}`,
    ];
    window.open(`${eventConfig.contact.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
    setInquirySentAt(now.toISOString());
    setInquirySent(true);
  };

  const formattedBankDetails = `A/C NAME: ${eventConfig.donation.accountName}\nREG. NO. ${eventConfig.donation.regNo}\nA/C NR. ${eventConfig.donation.accountNo}`;

  return (
    <ScrollSection
      id="contact"
      variant="light"
      showCorners={true}
      showMandala={true}
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <SectionHeader delay={0.1} className="text-center flex flex-col items-center justify-center max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 w-full">
          <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#8E2424] font-semibold mb-1 md:mb-2">
            <HeartHandshake className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
            <span>Contributions & Inquiries</span>
          </div>

          {/* English Main Heading (Bigger) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#641A1A]">
            Generous Contributions
          </h2>

          {/* Bengali Subheading (A bit smaller) */}
          <p className="font-['Noto_Serif_Bengali'] text-base sm:text-lg md:text-xl lg:text-2xl text-[#8E2424] font-semibold mt-1">
            শারদোৎসব ২০২৬ — আর্থিক অনুদান ও যোগাযোগ
          </p>

          <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />

          <p className="text-xs sm:text-sm md:text-base text-[#171313]/75 font-normal max-w-prose md:max-w-xl mx-auto px-2 text-center">
            {eventConfig.donation.appealTextEn}
          </p>
        </SectionHeader>

        {/* Top Feature Card: Donation & Bank Transfer Appeal */}
        <div className="mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-[#FFF9EF] via-[#F7F0E4] to-[#FFF9EF] border-2 border-[#D4AF62] rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-9 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E2424]/10 text-[#8E2424] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Your Donation Is Our Blessing</span>
              </div>
              {/* English Heading (Bigger) */}
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#641A1A]">
                {eventConfig.donation.headingEn}
              </h3>
              {/* Bengali Subtitle (A bit smaller) */}
              <p className="font-['Noto_Serif_Bengali'] text-xs sm:text-sm md:text-base text-[#8E2424] font-semibold">
                {eventConfig.donation.headingBn}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#8E2424] text-[#FFF9EF] text-xs sm:text-sm font-bold shadow-xs">
                  Family Contribution: {eventConfig.donation.familyContribution}
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#FFF9EF] text-[#641A1A] border border-[#D4AF62] text-xs sm:text-sm font-bold shadow-xs">
                  Single Contribution: {eventConfig.donation.singleContribution}
                </span>
              </div>
            </div>

            {/* Bank & MobilePay Details Box */}
            <div className="w-full lg:w-auto bg-[#FFF9EF] border border-[#D4AF62]/60 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 min-w-[290px] sm:min-w-[340px]">
              <div className="flex items-center justify-between border-b border-[#D4AF62]/30 pb-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase text-[#8E2424] flex items-center gap-1">
                  <Landmark className="w-3.5 h-3.5 text-[#B8863B]" />
                  <span>PAYMENT METHODS</span>
                </span>
                <span className="text-[10px] uppercase font-mono text-[#171313]/60">Denmark</span>
              </div>

              {/* MobilePay */}
              <div className="flex items-center justify-between gap-3 bg-[#4285F4]/5 p-2.5 rounded-xl border border-[#4285F4]/25">
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#4285F4] block">MobilePay</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-[#171313]">{eventConfig.donation.mobilePay}</span>
                </div>
                <button
                  onClick={() => handleCopy(eventConfig.donation.mobilePay, 'mobilepay')}
                  className="p-2 rounded-lg bg-[#4285F4]/10 hover:bg-[#4285F4]/20 text-[#4285F4] transition-colors cursor-pointer"
                  title="Copy MobilePay Number"
                >
                  {copiedField === 'mobilepay' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Bank Details */}
              <div className="flex items-start justify-between gap-3 bg-[#8E2424]/5 p-2.5 rounded-xl border border-[#8E2424]/25">
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase font-bold text-[#8E2424] block mb-0.5">BANK DETAILS</span>
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-[#171313]">
                    <span className="text-[#8E2424]">A/C NAME:</span> {eventConfig.donation.accountName}
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-[#171313]">
                    <span className="text-[#8E2424]">REG. NO.</span> {eventConfig.donation.regNo}
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-[#171313]">
                    <span className="text-[#8E2424]">A/C NR.</span> {eventConfig.donation.accountNo}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(formattedBankDetails, 'bank')}
                  className="p-2 rounded-lg bg-[#8E2424]/10 hover:bg-[#8E2424]/20 text-[#8E2424] transition-colors cursor-pointer shrink-0 mt-1"
                  title="Copy Bank Transfer Details"
                >
                  {copiedField === 'bank' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <StaggerContainer staggerDelay={0.15} delay={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Contact Details Card */}
          <StaggerItem variant="fadeRight" className="bg-[#FFF9EF]/95 border border-[#D4AF62]/50 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm space-y-5 sm:space-y-6">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8863B] block mb-1">
                ORGANIZATION & HELPLINES
              </span>
              {/* English Heading (Bigger) */}
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#641A1A]">
                {eventConfig.organization.name}
              </h3>
              {/* Bengali Subheading (A bit smaller) */}
              <p className="font-['Noto_Serif_Bengali'] text-xs md:text-sm text-[#8E2424] font-medium mt-0.5 md:mt-1">
                {eventConfig.organization.bengaliName} • ডেনমার্ক
              </p>
            </div>

            {/* Separate Phone Numbers List */}
            <div className="space-y-3 pt-2 border-t border-[#D4AF62]/20">
              <span className="text-[10px] sm:text-xs uppercase font-bold text-[#8E2424] block tracking-wider">
                Contact Phone Number (১টি হেল্পলাইন নম্বর)
              </span>

              {eventConfig.contact.phoneList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-xl md:rounded-2xl bg-[#F7F0E4]/80 border border-[#D4AF62]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-2.5 rounded-lg md:rounded-xl bg-[#8E2424] text-[#FFF9EF] shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF62]" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] md:text-xs uppercase font-bold text-[#171313]/60 block">
                        {item.label}
                      </span>
                      <span className="text-sm sm:text-base font-bold font-mono text-[#641A1A]">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  {/* Actions: Call & WhatsApp */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <a
                      href={item.telUrl}
                      className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                      title={`Call ${item.number}`}
                    >
                      <Phone className="w-3 h-3 text-[#D4AF62]" />
                      <span>Call</span>
                    </a>
                    <a
                      href={item.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                      title={`WhatsApp ${item.number}`}
                    >
                      <MessageCircle className="w-3 h-3 text-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="pt-2 border-t border-[#D4AF62]/20">
              <span className="text-[10px] sm:text-xs uppercase font-bold text-[#8E2424] block tracking-wider mb-2">
                Email
              </span>
              <a
                href={`mailto:${eventConfig.contact.email}`}
                className="inline-flex items-center gap-2 p-3 sm:p-4 rounded-xl md:rounded-2xl bg-[#F7F0E4]/80 border border-[#D4AF62]/30 hover:border-[#B8863B] transition-colors w-full"
              >
                <div className="p-2 rounded-lg bg-[#8E2424] text-[#FFF9EF] shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF62]" />
                </div>
                <span className="text-sm sm:text-base font-bold font-mono text-[#641A1A] break-all">
                  {eventConfig.contact.email}
                </span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8863B] block mb-2">
                COMMUNITY FACEBOOK GROUP
              </span>
              <a
                href={eventConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl md:rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/40 hover:bg-[#1877F2] hover:text-white text-xs md:text-sm font-bold text-[#1877F2] flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <span>Join BNA Community Facebook Group</span>
              </a>
            </div>
          </StaggerItem>

          {/* Quick Message / Inquiry Form */}
          <StaggerItem variant="fadeLeft" className="bg-[#FFF9EF]/95 border border-[#D4AF62]/50 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm">
            {/* English Heading (Bigger) */}
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#641A1A] mb-1">
              Send Quick Note to Organizers
            </h3>
            {/* Bengali Subtitle (A bit smaller) */}
            <p className="font-['Noto_Serif_Bengali'] text-xs sm:text-sm text-[#8E2424] font-medium mb-3">
              যে কোনো প্রশ্ন বা সহযোগিতার জন্য বার্তা পাঠান
            </p>
            <p className="text-xs md:text-sm text-[#171313]/70 mb-4 sm:mb-6 font-light">
              Have a question about rituals, bhog contributions, or participation? Leave us a quick note.
            </p>

            {inquirySent ? (
              <div className="p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#8E2424]/10 border border-[#8E2424]/30 text-center animate-fadeIn">
                <CheckCircle2 className="w-9 h-9 md:w-12 md:h-12 text-[#8E2424] mx-auto mb-2 md:mb-3" />
                <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#641A1A]">Message Sent!</h4>
                <p className="text-xs md:text-sm text-[#171313]/80 mt-1">
                  Thank you. Our organizing team will get back to you shortly.
                </p>
                <p className="text-[10px] sm:text-xs text-[#171313]/60 mt-2">
                  Submitted:{' '}
                  {(() => {
                    const d = new Date(inquirySentAt ?? Date.now());
                    return `${d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}, ${d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`;
                  })()}
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-4 md:mt-5 w-full sm:w-auto px-6 md:px-8 py-3 rounded-full bg-[#FFF9EF] hover:bg-[#F7F0E4] text-[#641A1A] text-xs md:text-sm font-bold uppercase tracking-wider transition-all border border-[#D4AF62]/50 flex items-center justify-center gap-2 mx-auto cursor-pointer active:scale-95"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Update Details</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-3.5 sm:space-y-4 md:space-y-5">
                <div>
                  <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313]/80 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#8E2424]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="e.g. Sourav Mukherjee"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl md:rounded-2xl bg-[#F7F0E4]/70 border border-[#D4AF62]/40 text-xs md:text-sm text-[#171313] focus:outline-none focus:ring-2 focus:ring-[#8E2424]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313]/80 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8E2424]" />
                    <span>Your Phone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="+45 00 00 00 00"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl md:rounded-2xl bg-[#F7F0E4]/70 border border-[#D4AF62]/40 text-xs md:text-sm text-[#171313] focus:outline-none focus:ring-2 focus:ring-[#8E2424]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313]/80 mb-1">
                    Your Question / Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={msgInput}
                    onChange={(e) => setMsgInput(e.target.value)}
                    placeholder="How can we assist you with Durga Puja 2026?"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl md:rounded-2xl bg-[#F7F0E4]/70 border border-[#D4AF62]/40 text-xs md:text-sm text-[#171313] focus:outline-none focus:ring-2 focus:ring-[#8E2424]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 md:py-3.5 px-6 rounded-full bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] font-bold text-xs md:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-[#D4AF62]/40 shadow-md cursor-pointer active:scale-95"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D4AF62]" />
                </button>
              </form>
            )}
          </StaggerItem>
        </StaggerContainer>
      </div>
    </ScrollSection>
  );
};

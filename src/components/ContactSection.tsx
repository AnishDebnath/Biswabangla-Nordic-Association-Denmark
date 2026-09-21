import React, { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';
import { SectionHeader, StaggerContainer, StaggerItem } from './AnimationUtils';

export const ContactSection: React.FC = () => {
  const [inquirySent, setInquirySent] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [msgInput, setMsgInput] = useState('');

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setEmailInput('');
      setMsgInput('');
    }, 1000);
  };

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
            <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B8863B]" />
            <span>We Are Here To Assist</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#641A1A]">
            HAVE QUESTIONS?
          </h2>

          <p className="font-['Noto_Serif_Bengali'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8E2424] font-semibold mt-0.5 md:mt-1">
            যোগাযোগ ও অনুসন্ধান
          </p>

          <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62] mx-auto w-full" />

          <p className="text-xs sm:text-sm md:text-base text-[#171313]/75 font-normal max-w-prose md:max-w-xl mx-auto px-2 text-center">
            Feel free to connect with the Biswabangla Nordic organizing committee regarding puja rituals, bhog contributions, or cultural participation.
          </p>
        </SectionHeader>

        <StaggerContainer staggerDelay={0.15} delay={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Contact Details Card */}
          <StaggerItem variant="fadeRight" className="bg-[#FFF9EF]/95 border border-[#D4AF62]/50 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm space-y-5 sm:space-y-6 md:space-y-8">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8863B] block mb-1">
                ORGANIZATION
              </span>
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#641A1A]">
                {eventConfig.organization.name}
              </h3>
              <p className="text-xs md:text-sm text-[#171313]/70 font-sans mt-0.5 md:mt-1">
                5th Annual Durga Puja Celebration 2026 • Denmark
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 pt-2 border-t border-[#D4AF62]/20">
              {/* Email */}
              <a
                href={`mailto:${eventConfig.contact.email}`}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#F7F0E4]/80 hover:bg-[#8E2424]/10 border border-[#D4AF62]/30 transition-all text-[#171313] hover:text-[#8E2424] group"
              >
                <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-[#8E2424] text-[#FFF9EF]">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF62]" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] md:text-xs uppercase font-bold text-[#171313]/50 block">Email Us</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium break-all">{eventConfig.contact.email}</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${eventConfig.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#F7F0E4]/80 hover:bg-[#8E2424]/10 border border-[#D4AF62]/30 transition-all text-[#171313] hover:text-[#8E2424] group"
              >
                <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-[#8E2424] text-[#FFF9EF]">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF62]" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] md:text-xs uppercase font-bold text-[#171313]/50 block">Phone / WhatsApp Helpline</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium">{eventConfig.contact.phone}</span>
                </div>
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B8863B] block mb-2 sm:mb-3">
                FOLLOW OUR COMMUNITY
              </span>
              <div className="flex gap-2.5 sm:gap-3 md:gap-4">
                <a
                  href={eventConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 md:px-5 rounded-xl md:rounded-2xl bg-[#FFF9EF] border border-[#D4AF62]/40 hover:border-[#8E2424] hover:bg-[#8E2424]/5 text-xs md:text-sm font-bold text-[#171313] flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-95"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={eventConfig.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 md:px-5 rounded-xl md:rounded-2xl bg-[#FFF9EF] border border-[#D4AF62]/40 hover:border-[#8E2424] hover:bg-[#8E2424]/5 text-xs md:text-sm font-bold text-[#171313] flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-95"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Quick Message / Inquiry Form */}
          <StaggerItem variant="fadeLeft" className="bg-[#FFF9EF]/95 border border-[#D4AF62]/50 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm">
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#641A1A] mb-1">
              Send Quick Note to Organizers
            </h3>
            <p className="text-xs md:text-sm text-[#171313]/70 mb-4 sm:mb-6 font-light">
              Have a question about priest rituals, bhog contributions, or stalls? Leave us a quick note.
            </p>

            {inquirySent ? (
              <div className="p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#8E2424]/10 border border-[#8E2424]/30 text-center animate-fadeIn">
                <CheckCircle2 className="w-9 h-9 md:w-12 md:h-12 text-[#8E2424] mx-auto mb-2 md:mb-3" />
                <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#641A1A]">Message Sent!</h4>
                <p className="text-xs md:text-sm text-[#171313]/80 mt-1">
                  Thank you. Our organizing team will get back to you shortly.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 md:mt-4 text-xs md:text-sm font-bold text-[#8E2424] underline hover:text-[#641A1A] cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-3.5 sm:space-y-4 md:space-y-5">
                <div>
                  <label className="block text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#171313]/80 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="name@example.com"
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


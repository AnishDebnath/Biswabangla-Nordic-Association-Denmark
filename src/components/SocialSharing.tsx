import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Facebook, Send } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { AlponaDivider } from './DecorativeAlpona';
import { ScrollSection } from './ScrollSection';

export const SocialSharing: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const shareTitle = "Biswabangla Nordic Association — Durga Puja 2026";
  const shareText = "Join us for the 5th Annual Durga Puja Celebration in Denmark (16–20 October 2026). Explore schedule, pushpanjali timings, and RSVP:";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : eventConfig.meta.shareUrl;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle}\n\n${shareText}\n${shareUrl}`)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMessengerShare = () => {
    const url = `fb-messenger://share/?link=${encodeURIComponent(shareUrl)}&app_id=123456789`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ScrollSection
      id="share"
      variant="maroon"
      showCorners={true}
      showMandala={true}
    >
      <div className="max-w-4xl xl:max-w-5xl mx-auto text-center flex flex-col items-center justify-center relative z-10 w-full">
        <div className="inline-flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF62] font-semibold mb-1 md:mb-2">
          <Share2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
          <span>Spread The Joy</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#FFF9EF] mb-1 md:mb-2">
          SHARE THE FESTIVAL
        </h2>

        <p className="font-['Noto_Serif_Bengali'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D4AF62] font-semibold mb-0.5 md:mb-1">
          বন্ধুবান্ধব ও আত্মীয়স্বজনকে আমন্ত্রণ জানান
        </p>

        <AlponaDivider className="my-2.5 sm:my-3 md:my-5 max-w-xs md:max-w-sm text-[#D4AF62]/70 mx-auto w-full" />

        <p className="text-xs sm:text-sm md:text-base text-[#FFF9EF]/85 font-light max-w-prose md:max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 text-center">
          Forward this digital invitation to your Bengali friends, families, and community groups across Scandinavia via WhatsApp, Facebook, and Messenger.
        </p>

        {/* Share Buttons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 max-w-2xl md:max-w-3xl mx-auto w-full">
          {/* WhatsApp Button */}
          <button
            id="share-whatsapp-btn"
            onClick={handleWhatsAppShare}
            className="py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#25D366] hover:bg-[#20BA5A] text-white border border-[#25D366] text-xs md:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0" />
            <span>WhatsApp</span>
          </button>

          {/* Facebook Button */}
          <button
            id="share-facebook-btn"
            onClick={handleFacebookShare}
            className="py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#1877F2] hover:bg-[#166FE5] text-white border border-[#1877F2] text-xs md:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95 whitespace-nowrap"
          >
            <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0" />
            <span>Facebook</span>
          </button>

          {/* Messenger Button */}
          <button
            id="share-messenger-btn"
            onClick={handleMessengerShare}
            className="py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#0084FF] hover:bg-[#0074E0] text-white border border-[#0084FF] text-xs md:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95 whitespace-nowrap"
          >
            <Send className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0" />
            <span>Messenger</span>
          </button>

          {/* Copy Link Button */}
          <button
            id="share-copylink-btn"
            onClick={handleCopyLink}
            className="py-3 md:py-3.5 px-3 sm:px-4 md:px-5 rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#D4AF62] hover:bg-[#B8863B] text-[#171313] border border-[#FFF9EF]/40 text-xs md:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95 whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#171313] shrink-0" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 md:w-5 md:h-5 text-[#171313] shrink-0" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Copy Feedback Toast Notification */}
        {copied && (
          <div className="mt-4 md:mt-6 inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#D4AF62] text-[#171313] text-xs md:text-sm font-bold shadow-md">
            <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>Invitation link copied to clipboard!</span>
          </div>
        )}
      </div>
    </ScrollSection>
  );
};


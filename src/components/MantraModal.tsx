import React from 'react';
import { X, Sparkles, BookOpen } from 'lucide-react';
import { AlponaDivider } from './DecorativeAlpona';

interface MantraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MantraModal: React.FC<MantraModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFF9EF] border border-[#D4AF62] rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-[#171313]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#171313]/60 hover:text-[#8E2424] hover:bg-[#F7F0E4] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[#8E2424] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B8863B]" />
            <span>Sacred Invocation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-['Noto_Serif_Bengali'] font-bold text-[#641A1A] mt-1">
            শ্রী শ্রী দুর্গা পুষ্পাঞ্জলি মন্ত্র
          </h3>
          <p className="text-xs font-serif italic text-[#B8863B]">
            Maa Durga Pushpanjali Pranam Mantras
          </p>
          <AlponaDivider className="my-2 max-w-xs" />
        </div>

        {/* Mantra Blocks */}
        <div className="space-y-6 text-left max-h-[65vh] overflow-y-auto pr-2">
          {/* Mantra 1 */}
          <div className="p-4 rounded-2xl bg-[#F7F0E4]/80 border border-[#D4AF62]/30">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#8E2424] mb-2">
              ১. প্রথম প্রণাম মন্ত্র (First Pranam Mantra)
            </h4>
            <p className="font-['Noto_Serif_Bengali'] text-base sm:text-lg text-[#641A1A] font-semibold leading-relaxed mb-2">
              ॐ জয়ন্তী মঙ্গলা কালী ভদ্রকালী কপালিনী।<br />
              দুর্গা শিবা ক্ষমা ধাত্রী স্বাহা স্বধা নমোঽস্তু তে॥
            </p>
            <p className="text-xs font-mono text-[#171313]/70 mb-2 italic">
              "Om Jayanti Mangala Kali Bhadrakali Kapalini,<br />
              Durga Shiva Kshama Dhatri Svaha Svadha Namo'stu Te."
            </p>
            <p className="text-xs text-[#171313]/80 leading-normal">
              <strong>Meaning:</strong> Salutations to the all-victorious, auspicious, eternal mother Goddess who dispels all darkness, who is compassion, forgiveness, and the sustainer of the cosmos.
            </p>
          </div>

          {/* Mantra 2 */}
          <div className="p-4 rounded-2xl bg-[#F7F0E4]/80 border border-[#D4AF62]/30">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#8E2424] mb-2">
              ২. প্রধান পুষ্পাঞ্জলি মন্ত্র (Primary Pushpanjali Mantra)
            </h4>
            <p className="font-['Noto_Serif_Bengali'] text-base sm:text-lg text-[#641A1A] font-semibold leading-relaxed mb-2">
              ॐ সর্বমঙ্গলমঙ্গল্যে শিবে সর্বার্থসাধিকে।<br />
              শরণ্যে ত্র্যম্বকে গৌরি নারায়ণি নমোঽস্তু তে॥
            </p>
            <p className="text-xs font-mono text-[#171313]/70 mb-2 italic">
              "Om Sarva-Mangala-Mangalye Shive Sarvartha-Sadhike,<br />
              Sharanye Tryambake Gauri Narayani Namo'stu Te."
            </p>
            <p className="text-xs text-[#171313]/80 leading-normal">
              <strong>Meaning:</strong> To the most auspicious of all auspiciousness, the auspicious one who fulfills all desires, the refuge of all beings, the three-eyed Goddess Gauri, Narayani, we bow to You.
            </p>
          </div>

          {/* Mantra 3 */}
          <div className="p-4 rounded-2xl bg-[#F7F0E4]/80 border border-[#D4AF62]/30">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#8E2424] mb-2">
              ৩. বর প্রার্থন মন্ত্র (Prayer for Divine Blessings)
            </h4>
            <p className="font-['Noto_Serif_Bengali'] text-base sm:text-lg text-[#641A1A] font-semibold leading-relaxed mb-2">
              রূপং দেহি জয়ং দেহি যশো দেহি দ্বিষো জহি॥<br />
              দেহি সৌভাগ্যমারোগ্যং দেহি মে পরমং সুখম্।
            </p>
            <p className="text-xs font-mono text-[#171313]/70 mb-2 italic">
              "Rupam Dehi Jayam Dehi Yasho Dehi Dvisho Jahi,<br />
              Dehi Saubhāgyam Ārogyam Dehi Me Paramam Sukham."
            </p>
            <p className="text-xs text-[#171313]/80 leading-normal">
              <strong>Meaning:</strong> Grant us noble form, grant us victory, grant us glory, destroy all inner negativities; bestow good fortune, radiant health, and supreme peace upon all.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-[#D4AF62]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#8E2424] hover:bg-[#641A1A] text-[#FFF9EF] text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

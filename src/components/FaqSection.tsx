import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { translations, type Lang } from '@/i18n/translations';

export default function FaqSection({ lang }: { lang: Lang }) {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">{t.title}</h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">{t.subtitle}</p>
        </div>

        <div className="space-y-3">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.07] border-[#00D2FF]/45'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-start"
                >
                  <span className="text-white font-bold text-sm sm:text-base leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00D2FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-gray-300 text-sm leading-relaxed border-t border-white/5">
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

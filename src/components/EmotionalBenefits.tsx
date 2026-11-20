import { Trophy, ShieldCheck, Infinity as InfinityIcon, Headphones } from 'lucide-react';
import { translations, type Lang } from '@/i18n/translations';

const CARD_STYLES = [
  {
    icon: Trophy,
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-400/30',
    glow: 'from-amber-500/15',
  },
  {
    icon: ShieldCheck,
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-400/30',
    glow: 'from-emerald-500/15',
  },
  {
    icon: InfinityIcon,
    accent: 'text-[#00D2FF]',
    bg: 'bg-[#00D2FF]/10 border-[#00D2FF]/30',
    glow: 'from-[#00D2FF]/15',
  },
  {
    icon: Headphones,
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-400/30',
    glow: 'from-blue-500/15',
  },
];

export default function EmotionalBenefits({ lang }: { lang: Lang }) {
  const t = translations[lang].emotional;

  return (
    <section id="benefits" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-extrabold mb-4">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {t.cards.map((card, i) => {
            const style = CARD_STYLES[i];
            const Icon = style.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-5 sm:p-7 bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#00D2FF]/40 transition-all overflow-hidden"
              >
                <div
                  className={`absolute -top-16 -end-16 w-40 h-40 rounded-full bg-gradient-to-br ${style.glow} to-transparent blur-2xl pointer-events-none`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl border ${style.bg} ${style.accent} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold border ${style.bg} ${style.accent}`}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-white font-extrabold text-lg sm:text-xl mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

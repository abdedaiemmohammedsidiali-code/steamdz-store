import { ShieldCheck } from 'lucide-react';
import { config } from '@/config';
import { formatDzd, translations, type Lang } from '@/i18n/translations';

export default function MobileBottomBar({ lang }: { lang: Lang }) {
  const t = translations[lang].mobileBar;

  const scrollToOrder = () =>
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#090D16]/95 backdrop-blur-xl border-t border-white/15 px-4 py-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-[#00D2FF] font-black text-xl leading-none">
              {formatDzd(config.priceDzd, lang)}
            </span>
            <span className="text-gray-500 line-through text-xs font-bold">
              {formatDzd(config.oldPriceDzd, lang)}
            </span>
          </div>
          <p className="text-emerald-400 text-[11px] font-bold flex items-center gap-1 mt-1">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>{t.warranty}</span>
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToOrder}
          className="shrink-0 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#2563EB] text-[#090D16] font-black text-sm shadow-lg shadow-cyan-500/25"
        >
          {t.cta}
        </button>
      </div>
    </div>
  );
}

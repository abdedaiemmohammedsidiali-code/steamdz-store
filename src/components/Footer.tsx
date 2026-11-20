import { Gamepad2 } from 'lucide-react';
import { config } from '@/config';
import { translations, type Lang } from '@/i18n/translations';

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-[#070A12] pb-24 md:pb-10 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-start">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D2FF] to-[#2563EB] flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-[#090D16]" strokeWidth={2.5} />
            </div>
            <span className="text-white font-extrabold text-base">{config.storeName}</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md">{t.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm text-gray-400">
          <button type="button" onClick={() => scrollTo('games-library')} className="hover:text-[#00D2FF] transition-colors">
            {nav.games}
          </button>
          <button type="button" onClick={() => scrollTo('video-guide')} className="hover:text-[#00D2FF] transition-colors">
            {nav.video}
          </button>
          <button type="button" onClick={() => scrollTo('benefits')} className="hover:text-[#00D2FF] transition-colors">
            {nav.benefits}
          </button>
          <button type="button" onClick={() => scrollTo('faq')} className="hover:text-[#00D2FF] transition-colors">
            {nav.faq}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 pt-5 border-t border-white/10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} {config.storeName}. {t.rights}
      </div>
    </footer>
  );
}

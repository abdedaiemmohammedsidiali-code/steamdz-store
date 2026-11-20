import { useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';
import { config } from '@/config';
import { LANGS, translations, type Lang } from '@/i18n/translations';

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

export default function Navbar({ lang, setLang }: Props) {
  const t = translations[lang].nav;
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: 'games-library', label: t.games },
    { id: 'video-guide', label: t.video },
    { id: 'benefits', label: t.benefits },
    { id: 'faq', label: t.faq },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-[36px] sm:top-[38px] z-40 bg-[#090D16]/85 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 shrink-0 min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#00D2FF] to-[#2563EB] flex items-center justify-center shadow-lg shadow-cyan-500/25 shrink-0">
            <Gamepad2 className="w-5 h-5 text-[#090D16]" strokeWidth={2.5} />
          </div>
          <span className="text-white font-extrabold text-sm sm:text-lg tracking-tight truncate">
            {config.storeName}
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="text-sm text-gray-300 hover:text-[#00D2FF] transition-colors font-semibold"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Controls: Language Switcher + CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Sleek AR | FR | EN Switcher */}
          <div
            className="inline-flex items-center p-1 rounded-xl bg-white/5 border border-white/10"
            role="group"
            aria-label="Language Switcher"
          >
            {LANGS.map((l) => {
              const active = lang === l.key;
              return (
                <button
                  key={l.key}
                  type="button"
                  onClick={() => setLang(l.key)}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-extrabold transition-all ${
                    active
                      ? 'bg-[#00D2FF] text-[#090D16] shadow-sm'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {l.short}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollTo('order-section')}
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#2563EB] hover:brightness-110 text-[#090D16] font-extrabold text-sm transition-all shadow-lg shadow-cyan-500/20"
          >
            {t.cta}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-200"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D1322]/95 backdrop-blur-xl border-b border-white/10 animate-fade-up">
          <div className="px-4 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-start py-2.5 px-3 rounded-xl text-gray-200 hover:bg-white/5 hover:text-[#00D2FF] font-semibold text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo('order-section')}
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#2563EB] text-[#090D16] font-extrabold text-sm"
            >
              {t.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

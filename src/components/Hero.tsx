import {
  Zap,
  ShieldCheck,
  PlayCircle,
  CreditCard,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Gamepad2,
} from 'lucide-react';
import { config } from '@/config';
import { formatDzd, translations, type Lang } from '@/i18n/translations';

export default function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const microIcons = [Zap, ShieldCheck, PlayCircle, CreditCard];

  return (
    <section className="relative pt-10 pb-14 sm:pt-16 sm:pb-24 overflow-hidden">
      {/* Ambient Gaming Glows */}
      <div className="absolute inset-0 gaming-grid opacity-55 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[540px] sm:w-[760px] h-[420px] bg-[#00D2FF]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -end-24 w-[320px] h-[320px] bg-[#2563EB]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Copy Column */}
        <div className="lg:col-span-7 animate-fade-up min-w-0">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold mb-5 max-w-full">
            <span className="leading-snug">{t.trustBadge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.22] tracking-tight">
            {t.headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-4 sm:mt-5 text-gray-300 text-sm sm:text-lg leading-relaxed max-w-2xl">
            {t.subheadline}
          </p>

          {/* Price Anchor Box */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md inline-flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-gray-400 line-through text-lg sm:text-xl font-bold">
                {formatDzd(config.oldPriceDzd, lang)}
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#00D2FF]">
                {formatDzd(config.priceDzd, lang)}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold">
                {t.saveBadge}
              </span>
            </div>
            <div className="sm:border-s sm:border-white/15 sm:ps-5">
              <p className="text-emerald-300 text-xs sm:text-sm font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {t.oneTimeNote}
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => scrollTo('order-section')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[54px] rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#2563EB] hover:brightness-110 text-[#090D16] font-black text-sm sm:text-base transition-all glow-cyan"
            >
              <span>{t.primaryCta}</span>
              <Arrow className="w-4 h-4 shrink-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('video-guide')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[54px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00D2FF]/50 text-white font-bold text-sm sm:text-base transition-all"
            >
              <PlayCircle className="w-5 h-5 text-[#00D2FF] shrink-0" />
              <span>{t.secondaryCta}</span>
            </button>
          </div>

          {/* 4 Micro-Trust Indicators */}
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {t.microTrust.map((label, idx) => {
              const Icon = microIcons[idx];
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-200 text-xs font-semibold"
                >
                  <Icon className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span className="leading-tight">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Steam Library Visual Showcase Card */}
        <div className="lg:col-span-5 animate-fade-up min-w-0" style={{ animationDelay: '0.1s' }}>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#00D2FF]/25 via-[#2563EB]/20 to-emerald-500/15 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl bg-[#111827]/90 border border-white/15 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Steam Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090D16]/90 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] text-gray-400 font-semibold truncate ms-2">
                  {t.previewHeader}
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-4">
                {/* Connected Badge */}
                <div className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-emerald-300 text-xs sm:text-sm font-bold truncate">
                      {t.previewStatus}
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#00D2FF] shrink-0" />
                </div>

                {/* Real Cropped Steam Library Preview */}
                <div className="rounded-xl overflow-hidden border border-white/15 bg-[#090D16] relative">
                  <img
                    src="/media/library-1.jpg"
                    alt="Official Steam Library — +300 AAA Games"
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/60 to-transparent px-3 py-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white">
                      <Gamepad2 className="w-3.5 h-3.5 text-[#00D2FF]" />
                      Forza Horizon 6 • Halo • Death Stranding 2
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-[10px] font-extrabold">
                      2026
                    </span>
                  </div>
                </div>

                {/* Stats Strip */}
                <div className="space-y-2.5 p-3.5 rounded-xl bg-[#090D16]/80 border border-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-300 flex items-center gap-1.5 font-semibold">
                      <Download className="w-3.5 h-3.5 text-[#00D2FF]" /> {t.previewSpeed}
                    </span>
                    <span className="text-[#00D2FF] font-extrabold">100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#2563EB] to-[#00D2FF]" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                    <span>{t.previewGamesCount}</span>
                    <span className="text-emerald-400 font-bold">{t.previewWarranty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

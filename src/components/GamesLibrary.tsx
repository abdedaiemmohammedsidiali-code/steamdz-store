import { useState, useMemo } from 'react';
import { Search, Gamepad2, Sparkles, Monitor, X, ZoomIn } from 'lucide-react';
import {
  FLAGSHIP_GAMES,
  LIBRARY_SCREENSHOTS,
  type GameCategory,
} from '@/data/games';
import { translations, type Lang } from '@/i18n/translations';

const CATEGORY_ORDER: GameCategory[] = ['all', '2026', 'action', 'rpg', 'horror'];

export default function GamesLibrary({ lang }: { lang: Lang }) {
  const t = translations[lang].games;
  const [activeCategory, setActiveCategory] = useState<GameCategory>('all');
  const [query, setQuery] = useState('');
  const [lightboxShot, setLightboxShot] = useState<{ src: string; label: string } | null>(null);

  const filteredGames = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FLAGSHIP_GAMES.filter((game) => {
      const matchesCat = activeCategory === 'all' || game.category === activeCategory;
      const matchesQuery = !q || game.title.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="games-library" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-extrabold mb-4">
            <Gamepad2 className="w-3.5 h-3.5" /> {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">{t.title}</h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">{t.subtitle}</p>
        </div>

        {/* Search + Filter Controls */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 start-4 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full ps-12 pe-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 focus:border-[#00D2FF] text-white placeholder-gray-400 text-base sm:text-sm outline-none transition-colors backdrop-blur-md"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORY_ORDER.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                    active
                      ? 'bg-[#00D2FF] text-[#090D16] border-[#00D2FF] shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:border-[#00D2FF]/40 hover:text-white'
                  }`}
                >
                  {t.tabs[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 text-sm sm:text-base">
            {t.noResults}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-white/10 hover:border-[#00D2FF]/50 transition-all hover:-translate-y-1 shadow-lg"
              >
                {/* Cover Art Area (Exact Steam 460x215 header aspect ratio) */}
                <div
                  className={`relative aspect-[460/215] bg-gradient-to-br ${game.gradient} p-2.5 flex flex-col justify-between overflow-hidden`}
                >
                  {game.imageUrl ? (
                    <img
                      src={game.imageUrl}
                      alt={game.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div
                      className="absolute -bottom-8 -end-8 w-28 h-28 rounded-full opacity-25 blur-xl pointer-events-none"
                      style={{ backgroundColor: game.accentColor }}
                    />
                  )}

                  <div className="relative flex items-center justify-between gap-2 z-10">
                    <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm border border-white/15 text-[10px] font-extrabold text-[#00D2FF]">
                      {game.badge}
                    </span>
                    <span className="text-[10px] font-bold text-white/90 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                      Steam PC
                    </span>
                  </div>
                </div>

                {/* Title Footer */}
                <div className="p-3 sm:p-3.5 bg-[#0D1322]">
                  <h3 className="text-white font-bold text-xs sm:text-sm leading-snug line-clamp-1">
                    {game.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-gray-400">
                    <span>{t.tabs[game.category]}</span>
                    <span className="text-emerald-400 font-semibold">{game.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* +270 More Games Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#2563EB]/15 via-[#00D2FF]/10 to-emerald-500/15 border border-[#00D2FF]/30 text-center">
          <p className="text-white font-bold text-sm sm:text-base">{t.moreGamesNote}</p>
        </div>

        {/* Horizontal Real Steam Library Screenshots Gallery Slot */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
            <div>
              <h3 className="text-white font-extrabold text-lg sm:text-xl flex items-center gap-2">
                <Monitor className="w-5 h-5 text-[#00D2FF]" />
                {t.screenshotTitle}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{t.screenshotSubtitle}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-bold">
              <Sparkles className="w-3.5 h-3.5" /> 100% Official Steam UI
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory thin-scrollbar">
            {LIBRARY_SCREENSHOTS.map((shot) => {
              const label =
                lang === 'ar' ? shot.labelAr : lang === 'fr' ? shot.labelFr : shot.labelEn;
              return (
                <button
                  key={shot.id}
                  type="button"
                  onClick={() =>
                    shot.imageUrl && setLightboxShot({ src: shot.imageUrl, label })
                  }
                  className="group text-start snap-start shrink-0 w-[290px] sm:w-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/15 hover:border-[#00D2FF]/60 backdrop-blur-md transition-all"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#0D172A] via-[#111827] to-[#090D16] flex items-center justify-center relative overflow-hidden">
                    {shot.imageUrl ? (
                      <>
                        <img
                          src={shot.imageUrl}
                          alt={label}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 border border-white/20 text-white text-xs font-bold">
                            <ZoomIn className="w-3.5 h-3.5 text-[#00D2FF]" />
                            {lang === 'ar' ? 'تكبير' : lang === 'fr' ? 'Agrandir' : 'Zoom'}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="text-center p-5">
                        <Monitor className="w-9 h-9 text-[#00D2FF]/45 mx-auto mb-2" />
                        <p className="text-gray-300 text-xs font-semibold">{label}</p>
                      </div>
                    )}
                  </div>
                  <div className="px-4 py-2.5 bg-[#090D16]/90 border-t border-white/10">
                    <p className="text-gray-200 text-xs font-semibold truncate">{label}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Screenshot Lightbox */}
      {lightboxShot && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxShot(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0D1322] rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
              <p className="text-white text-xs sm:text-sm font-bold truncate">
                {lightboxShot.label}
              </p>
              <button
                type="button"
                onClick={() => setLightboxShot(null)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <img
              src={lightboxShot.src}
              alt={lightboxShot.label}
              className="w-full h-auto max-h-[82vh] object-contain bg-[#090D16]"
            />
          </div>
        </div>
      )}
    </section>
  );
}

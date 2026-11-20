import { Play, ExternalLink, Video } from 'lucide-react';
import { config, getDriveEmbedUrl } from '@/config';
import { translations, type Lang } from '@/i18n/translations';

export default function VideoGuide({ lang }: { lang: Lang }) {
  const t = translations[lang].video;
  const embedUrl = getDriveEmbedUrl(config.tutorialVideoDriveUrl);

  return (
    <section id="video-guide" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2563EB]/[0.05] to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/40 text-[#00D2FF] text-xs font-extrabold mb-4">
            <Video className="w-3.5 h-3.5" /> {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">{t.title}</h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">{t.subtitle}</p>
        </div>

        {/* 4 Quick Steps Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs sm:text-sm font-bold text-gray-200"
            >
              {step}
            </div>
          ))}
        </div>

        {/* Dark-framed Video Container */}
        <div className="rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl">
          <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#090D16] border border-white/10">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={t.title}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#0D1528] via-[#090D16] to-[#0D1320]">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#00D2FF] to-[#2563EB] flex items-center justify-center text-[#090D16] shadow-2xl glow-cyan mb-4">
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ms-1" />
                </div>
                <p className="text-white font-extrabold text-base sm:text-xl">
                  {t.placeholderTitle}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-md">
                  {t.placeholderDesc}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Fallback Direct Drive Link */}
        <div className="mt-5 text-center">
          <a
            href={config.tutorialVideoDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00D2FF]/50 text-gray-200 hover:text-[#00D2FF] text-xs sm:text-sm font-bold transition-all"
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            <span>{t.fallbackBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

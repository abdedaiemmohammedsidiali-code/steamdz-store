import { useRef } from 'react';
import { ExternalLink, Video, CheckCircle2, Smartphone } from 'lucide-react';
import { config, getDriveEmbedUrl } from '@/config';
import { translations, type Lang } from '@/i18n/translations';

const VIDEO_END_SEC = 58.5; // Stops cleanly before Excluded Games (1:00) and iPhone Control Center (1:05)

export default function VideoGuide({ lang }: { lang: Lang }) {
  const t = translations[lang].video;
  const embedUrl = getDriveEmbedUrl(config.tutorialVideoDriveUrl);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (el && el.currentTime >= VIDEO_END_SEC) {
      el.currentTime = 0;
      el.pause();
    }
  };

  const showcaseTitle =
    lang === 'ar'
      ? 'استعراض حقيقي لمكتبة +300 لعبة من A إلى Z'
      : lang === 'fr'
        ? 'Aperçu réel de la bibliothèque +300 jeux (de A à Z)'
        : 'Real A–Z Walkthrough of the +300 Games Inside';

  const showcaseDesc =
    lang === 'ar'
      ? 'شاهد بنفسك كل الألعاب الأصلية الموجودة داخل حساب Steam قبل الطلب — القائمة كاملة ومحدّثة بأضخم ألعاب 2025 و2026.'
      : lang === 'fr'
        ? 'Découvrez en vidéo les +300 jeux officiels disponibles dans le compte Steam avant de commander, dont les hits 2025 & 2026.'
        : 'Watch a real scroll through all +300 official Steam games included in the account before you order, including 2025 & 2026 releases.';

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

        {embedUrl ? (
          <>
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

            {/* Google Drive Embedded Player */}
            <div className="rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl">
              <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#090D16] border border-white/10">
                <iframe
                  src={embedUrl}
                  title={t.title}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

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
          </>
        ) : (
          /* Built-in Vertical Phone-Frame Showcase Video + 4 Steps */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center rounded-3xl p-5 sm:p-8 bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl">
            {/* Vertical Phone Video Player */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[300px] rounded-[2rem] p-2.5 bg-[#090D16] border-2 border-[#00D2FF]/35 shadow-2xl glow-cyan">
                <div className="rounded-[1.5rem] overflow-hidden bg-black aspect-[9/16] relative">
                  <video
                    ref={videoRef}
                    src="/media/library-showcase.mp4#t=0,58.5"
                    poster="/media/library-1.jpg"
                    controls
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Side Info + 4 Simple Steps */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Steam Library Live Proof • 59s</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                {showcaseTitle}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {showcaseDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {t.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#090D16]/80 border border-white/10 text-gray-200 text-xs sm:text-sm font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

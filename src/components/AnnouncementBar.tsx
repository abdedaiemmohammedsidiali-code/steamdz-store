import { translations, type Lang } from '@/i18n/translations';

export default function AnnouncementBar({ lang }: { lang: Lang }) {
  const text = translations[lang].announcement;
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#2563EB] text-white border-b border-cyan-300/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 text-center text-xs sm:text-sm font-bold leading-snug">
        {text}
      </div>
    </div>
  );
}

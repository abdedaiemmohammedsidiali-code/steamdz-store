import { useState, useEffect } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EmotionalBenefits from '@/components/EmotionalBenefits';
import VideoGuide from '@/components/VideoGuide';
import GamesLibrary from '@/components/GamesLibrary';
import FaqSection from '@/components/FaqSection';
import OrderSection from '@/components/OrderSection';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import { LANGS, type Lang } from '@/i18n/translations';

export default function App() {
  const [lang, setLang] = useState<Lang>('ar');

  useEffect(() => {
    const cfg = LANGS.find((l) => l.key === lang)!;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = cfg.dir;
    html.style.fontFamily = cfg.font;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#090D16] text-gray-100 overflow-x-hidden">
      <AnnouncementBar lang={lang} />
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <EmotionalBenefits lang={lang} />
        <VideoGuide lang={lang} />
        <GamesLibrary lang={lang} />
        <FaqSection lang={lang} />
        <OrderSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <MobileBottomBar lang={lang} />
    </div>
  );
}

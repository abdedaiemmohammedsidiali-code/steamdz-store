import { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  RotateCcw,
  Zap,
} from 'lucide-react';
import { config } from '@/config';
import {
  buildWhatsAppOrderUrl,
  formatDzd,
  translations,
  type Lang,
} from '@/i18n/translations';
import { sendOrderToWebhook, trackOrderLead } from '@/lib/tracking';

export default function OrderSection({ lang }: { lang: Lang }) {
  const t = translations[lang].order;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const redirectedRef = useRef(false);

  const whatsappUrl = buildWhatsAppOrderUrl({
    lang,
    fullName: fullName.trim(),
    phone: phone.trim(),
  });

  // 3-second auto-redirect countdown after order submission
  useEffect(() => {
    if (!submitted) return;
    redirectedRef.current = false;
    setCountdown(3);

    const interval = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          if (!redirectedRef.current) {
            redirectedRef.current = true;
            window.location.href = whatsappUrl;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [submitted, whatsappUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const payload = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      lang,
      product: 'Steam Offline +300 Games',
      priceDzd: config.priceDzd,
      createdAt: new Date().toISOString(),
    };

    void sendOrderToWebhook(payload);
    trackOrderLead(payload);
    setSubmitted(true);
  };

  const whatsappPaymentNote =
    lang === 'ar'
      ? 'بعد تسجيل اسمك ورقمك، يتم تحويلك مباشرة إلى واتساب لاستلام معلومات الدفع (BaridiMob / CCP) وتفعيل حسابك في 5 دقائق.'
      : lang === 'fr'
        ? 'Après validation, vous êtes redirigé directement sur WhatsApp pour recevoir les coordonnées (BaridiMob / CCP) et activer votre compte en 5 min.'
        : 'After submitting your name and phone, you will be redirected straight to WhatsApp to get BaridiMob / CCP payment details and activate your account in 5 minutes.';

  return (
    <section id="order-section" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D2FF]/[0.05] to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-extrabold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">{t.title}</h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Offer Summary Card */}
          <div className="lg:col-span-5 rounded-3xl p-5 sm:p-6 bg-white/5 border border-white/15 backdrop-blur-md space-y-5">
            <div>
              <h3 className="text-white font-extrabold text-base sm:text-lg leading-snug">
                {t.offerName}
              </h3>

              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-gray-400 line-through text-base font-bold">
                  {formatDzd(config.oldPriceDzd, lang)}
                </span>
                <span className="text-3xl font-black text-emerald-400">
                  {formatDzd(config.priceDzd, lang)}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {t.offerFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-emerald-200/95 text-xs leading-relaxed">
                {whatsappPaymentNote}
              </p>
            </div>
          </div>

          {/* Direct WhatsApp Registration Form OR Thank You Screen */}
          <div className="lg:col-span-7 rounded-3xl p-5 sm:p-8 bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl">
            {submitted ? (
              <div className="py-4 sm:py-6 text-center animate-fade-up">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 mb-5 animate-pulse-ring">
                  <CheckCircle2 className="w-11 h-11" />
                </div>

                <h3 className="text-white font-black text-xl sm:text-2xl leading-snug">
                  {t.thankYouTitlePrefix} <span className="text-[#00D2FF]">{fullName.trim()}</span>
                  {t.thankYouTitleSuffix}
                </h3>

                <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  {t.thankYouMsg}
                </p>

                {/* Live 3-second countdown badge */}
                <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/35 text-[#00D2FF] text-xs sm:text-sm font-extrabold">
                  <span>
                    {t.countdownPrefix}{' '}
                    <span className="text-white text-base mx-1">{countdown}</span>
                    {t.countdownSuffix}
                  </span>
                </div>

                {/* Large Glowing Green Manual WhatsApp Button */}
                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[56px] rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-[#090D16] font-black text-sm sm:text-base transition-all glow-emerald"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>{t.whatsappManualBtn}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.editOrderLink}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <h3 className="text-white font-extrabold text-base sm:text-lg">
                    {t.step2Title}
                  </h3>
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                </div>

                <div>
                  <label
                    htmlFor="order-fullname"
                    className="block text-gray-200 text-sm font-bold mb-2"
                  >
                    {t.nameLabel} <span className="text-[#00D2FF]">*</span>
                  </label>
                  <input
                    id="order-fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090D16]/90 border border-white/15 focus:border-[#00D2FF] text-white placeholder-gray-500 text-base sm:text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="order-phone"
                    className="block text-gray-200 text-sm font-bold mb-2"
                  >
                    {t.phoneLabel} <span className="text-[#00D2FF]">*</span>
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    required
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090D16]/90 border border-white/15 focus:border-[#00D2FF] text-white placeholder-gray-500 text-base sm:text-sm outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-5 min-h-[56px] rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:brightness-110 text-[#090D16] font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 glow-emerald"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>{t.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

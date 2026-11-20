import { config } from '@/config';

export type Lang = 'ar' | 'fr' | 'en';

export const LANGS: { key: Lang; short: string; label: string; dir: 'rtl' | 'ltr'; font: string }[] = [
  { key: 'ar', short: 'AR', label: 'العربية', dir: 'rtl', font: "'Cairo', system-ui, sans-serif" },
  { key: 'fr', short: 'FR', label: 'Français', dir: 'ltr', font: "'Plus Jakarta Sans', system-ui, sans-serif" },
  { key: 'en', short: 'EN', label: 'English', dir: 'ltr', font: "'Plus Jakarta Sans', system-ui, sans-serif" },
];

export function formatDzd(amount: number, lang: Lang): string {
  if (lang === 'ar') return `${amount.toLocaleString('en-US')} دج`;
  if (lang === 'fr') return `${amount.toLocaleString('fr-FR')} DA`;
  return `${amount.toLocaleString('en-US')} DZD`;
}

export function buildWhatsAppOrderUrl(params: {
  lang: Lang;
  fullName: string;
  phone: string;
}): string {
  const { lang, fullName, phone } = params;
  const priceText = formatDzd(config.priceDzd, lang);

  let lines: string[];
  if (lang === 'ar') {
    lines = [
      `السلام عليكم، أريد طلب مكتبة الألعاب من ${config.storeName} ⚡`,
      ``,
      `🎮 المنتج: مكتبة Steam Offline (+300 لعبة أصلية)`,
      `💰 السعر: ${priceText}`,
      `👤 الاسم واللقب: ${fullName}`,
      `📱 رقم الهاتف: ${phone}`,
      ``,
      `أرجو إرسال معلومات الدفع (BaridiMob / CCP) لإتمام الطلب واستلام الحساب خلال 5 دقائق.`,
    ];
  } else if (lang === 'fr') {
    lines = [
      `Bonjour, je souhaite commander la bibliothèque sur ${config.storeName} ⚡`,
      ``,
      `🎮 Produit : Bibliothèque Steam Offline (+300 Jeux Officiels)`,
      `💰 Prix : ${priceText}`,
      `👤 Nom et prénom : ${fullName}`,
      `📱 Téléphone : ${phone}`,
      ``,
      `Merci de m'envoyer les coordonnées de paiement (BaridiMob / CCP) pour finaliser ma commande.`,
    ];
  } else {
    lines = [
      `Hello, I would like to order the games library from ${config.storeName} ⚡`,
      ``,
      `🎮 Product: Steam Offline Library (+300 Official Games)`,
      `💰 Price: ${priceText}`,
      `👤 Full Name: ${fullName}`,
      `📱 Phone Number: ${phone}`,
      ``,
      `Please send me the payment details (BaridiMob / CCP) to complete my order and get my account in 5 minutes.`,
    ];
  }

  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export interface TranslationDict {
  announcement: string;
  nav: {
    games: string;
    video: string;
    benefits: string;
    faq: string;
    cta: string;
  };
  hero: {
    trustBadge: string;
    headline: string;
    subheadline: string;
    oneTimeNote: string;
    saveBadge: string;
    primaryCta: string;
    secondaryCta: string;
    microTrust: [string, string, string, string];
    previewHeader: string;
    previewStatus: string;
    previewGamesCount: string;
    previewWarranty: string;
    previewSpeed: string;
  };
  emotional: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      tag: string;
      desc: string;
    }[];
  };
  video: {
    badge: string;
    title: string;
    subtitle: string;
    steps: [string, string, string, string];
    placeholderTitle: string;
    placeholderDesc: string;
    fallbackBtn: string;
  };
  games: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    tabs: {
      all: string;
      '2026': string;
      action: string;
      rpg: string;
      horror: string;
    };
    noResults: string;
    screenshotTitle: string;
    screenshotSubtitle: string;
    moreGamesNote: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  order: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    offerName: string;
    offerFeatures: string[];
    baridiTitle: string;
    ccpTitle: string;
    ccpNumLabel: string;
    ccpKeyLabel: string;
    ccpHolderLabel: string;
    copyBtn: string;
    copiedToast: string;
    step2Title: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    paymentLabel: string;
    submitBtn: string;
    thankYouTitlePrefix: string;
    thankYouTitleSuffix: string;
    thankYouMsg: string;
    countdownPrefix: string;
    countdownSuffix: string;
    whatsappManualBtn: string;
    editOrderLink: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  mobileBar: {
    warranty: string;
    cta: string;
  };
}

export const translations: Record<Lang, TranslationDict> = {
  ar: {
    announcement:
      '🔥 عرض محدود: مكتبة +300 لعبة أصلية محدثة بـ 2,300 دج فقط (دفعة واحدة) — التسليم خلال 5 دقائق ⚡',
    nav: {
      games: 'مكتبة الألعاب',
      video: 'فيديو الشرح',
      benefits: 'الفوائد',
      faq: 'الأسئلة الشائعة',
      cta: 'اطلب الآن',
    },
    hero: {
      trustBadge: '✅ +300 لعبة أصلية من Steam | ضمان 5 سنوات + تحديثات سنوية',
      headline: 'العب أحدث ألعاب 2026 الأصلية على Steam بـ 2,300 دج فقط',
      subheadline:
        'تخلص نهائياً من فيروسات الكراك وأسعار الألعاب الخيالية. امتلك مكتبة تضم +300 لعبة قصة أصلية بتحميل رسمي وسريع من سيرفرات Steam.',
      oneTimeNote: 'دفعة واحدة فقط — بدون اشتراك شهري',
      saveBadge: 'تخفيض الإطلاق -34%',
      primaryCta: 'احجز مكتبتك الآن — التسليم في 5 دقائق',
      secondaryCta: 'شاهد الفيديو التوضيحي',
      microTrust: [
        'تسليم فوري (5 دقائق)',
        'ضمان 5 سنوات',
        'فيديو شرح مبسط',
        'BaridiMob / CCP',
      ],
      previewHeader: 'Steam Official Client • Offline Mode Ready',
      previewStatus: 'متصل بسيرفرات Steam الرسمية',
      previewGamesCount: '+300 لعبة AAA أصلية',
      previewWarranty: 'ضمان 5 سنوات + تحديثات سنوية',
      previewSpeed: 'تحميل بأقصى سرعة (بدون تورنت)',
    },
    emotional: {
      badge: 'لماذا يختارها الجيمرز في الجزائر؟',
      title: 'أكثر من مجرد ألعاب... هذا ما ستشعر به من اليوم الأول',
      subtitle:
        'لا تشتري مجرد حساب، بل تشتري راحة بالك، حماية جهازك، وحرية الاستمتاع بأضخم ألعاب العالم بدون قيود.',
      cards: [
        {
          title: 'شعور الصفقة الأذكى',
          tag: 'توفير +50,000 دج',
          desc: 'توفير أكثر من 50,000 دج (ثمن 3 ألعاب فقط) والحصول على مكتبة بقيمة آلاف الأورو بـ 2,300 دج فقط — تشعر بذكاء قرارك في كل مرة تفتح فيها المكتبة.',
        },
        {
          title: 'راحة البال التامة وحماية جهازك',
          tag: 'أمان 100% بدون كراك',
          desc: 'لا خوف بعد اليوم على حاسوبك الغالي من فيروسات التورنت وملفات الكراك الملغمة أو أخطاء الـ DLL؛ ملفات نظيفة 100% مباشرة من سيرفرات Steam.',
        },
        {
          title: 'حرية الجيمر بلا حدود ولا ملل',
          tag: '+300 عالم وقصة',
          desc: 'وقتما أردت اللعب، أمامك +300 عالم وقصة جاهزة للتحميل بأقصى سرعة إنترنت عندك، مع تحديثات سنوية مجانية لأحدث الألعاب الجديدة.',
        },
        {
          title: 'تركيز كامل واستقلالية في اللعب',
          tag: 'تقدّمك محفوظ عندك',
          desc: 'تقدّمك في اللعب (Save Files) محفوظ على جهازك وحدك بعيداً عن أي إزعاج، تفصل الإنترنت وتعيش تجربة القصة بسلاسة تامة.',
        },
      ],
    },
    video: {
      badge: 'شرح تطبيقي سريع',
      title: 'شاهد كيف يعمل الحساب في أقل من دقيقة',
      subtitle:
        'الطريقة سهلة جداً حتى لو كانت أول مرة تستخدم فيها Steam — 4 خطوات بسيطة وتبدأ اللعب فوراً:',
      steps: [
        '1. تسجّل الدخول في Steam',
        '2. تحمّل لعبتك بأقصى سرعة',
        '3. تفعّل وضع Offline Mode',
        '4. تستمتع باللعب بحرية تامة',
      ],
      placeholderTitle: 'فيديو الشرح العملي جاهز للعرض',
      placeholderDesc:
        'أضف رابط فيديو Google Drive في ملف src/config.ts ليظهر هنا تلقائياً داخل المشغّل.',
      fallbackBtn: 'مشاهدة الفيديو مباشرة على Google Drive',
    },
    games: {
      badge: 'مكتبة ضخمة ومحدّثة باستمرار',
      title: 'تصفح أقوى الألعاب داخل المكتبة (+300 لعبة)',
      subtitle:
        'ابحث عن لعبتك المفضلة أو تصفح الأقسام — كل الألعاب أصلية 100% وجاهزة للتحميل المباشر من Steam.',
      searchPlaceholder: 'ابحث عن لعبة... (مثال: Spider-Man, Elden Ring, Forza)',
      tabs: {
        all: 'الكل',
        '2026': 'إصدارات 2026',
        action: 'أكشن ومغامرات',
        rpg: 'عالم مفتوح وRPG',
        horror: 'رعب وقتال ورياضة',
      },
      noResults: 'لم نجد لعبة بهذا الاسم في القائمة البارزة — لكن المكتبة تضم أكثر من +300 لعبة، اسألنا عنها في واتساب!',
      screenshotTitle: 'لقطات حقيقية من داخل مكتبة Steam',
      screenshotSubtitle:
        'واجهة رسمية 100% وتحميل مباشر من سيرفرات Steam بسرعة خيالية.',
      moreGamesNote:
        '🎮 بالإضافة إلى أكثر من +270 لعبة AAA وقصة أخرى داخل الحساب + تحديثات سنوية مجانية لأحدث الإصدارات!',
    },
    faq: {
      badge: 'كل شيء واضح بكل شفافية',
      title: 'الأسئلة الشائعة',
      subtitle: 'نوضح لك كل التفاصيل بصدق وشفافية قبل الطلب حتى تكون مطمئناً 100%.',
      items: [
        {
          q: 'هل الحساب يدعم اللعب أونلاين أم أوفلاين (طور القصة)؟',
          a: 'الحساب مخصص لطور القصة واللعب الفردي (Offline Mode) فقط. تقوم بتحميل اللعبة وأنت متصل بالإنترنت بأقصى سرعة من Steam، ثم تحوّل Steam إلى وضع Offline Mode وتستمتع باللعبة بدون أي تقطّع أو إزعاج.',
        },
        {
          q: 'هل سأفقد تقدّمي في اللعب (Save Files) بسبب وجود مستخدمين آخرين؟',
          a: 'أبداً! كل ما عليك هو إيقاف خيار Steam Cloud كما نوضح في فيديو الشرح (بضغطة زر واحدة). عندها تبقى جميع ملفات الحفظ (Save Files) مخزّنة محلياً على حاسوبك وحدك ومستقلة تماماً عن أي شخص آخر.',
        },
        {
          q: 'ماذا عن الألعاب الجديدة المحمية بنظام Denuvo؟',
          a: 'بكل شفافية: الألعاب العادية والسابقة تعمل فوراً في أي وقت بدون أي انتظار. أما بعض الألعاب الحديثة جداً المحمية بـ Denuvo، فقد تحتاج أحياناً إلى انتظار يصل إلى 24 ساعة لأول تفعيل فقط (بسبب الحد اليومي لنظام Denuvo)، وبعد التفعيل الأول تعمل معك بسلاسة تامة في وضع Offline.',
        },
        {
          q: 'كم يستغرق استلام الحساب وما هو الضمان؟',
          a: 'التسليم سريع جداً خلال 5 إلى 15 دقيقة فقط بعد إرسال وصل الدفع عبر واتساب. كما تستفيد من ضمان حقيقي لمدة 5 سنوات كاملة مع دعم فني مخصص لتزويدك بأكواد Steam Guard متى احتجتها.',
        },
        {
          q: 'هل السعر 2,300 دج شهري أم دفعة واحدة فقط؟',
          a: 'دفعة واحدة فقط قدرها 2,300 دج بدون أي اشتراكات شهرية أو مصاريف مخفية، وتشمل أيضاً تحديثات سنوية مجانية تضاف تلقائياً إلى المكتبة.',
        },
      ],
    },
    order: {
      badge: 'اطلب في أقل من دقيقة',
      title: 'احجز مكتبتك الآن واستلمها خلال 5 دقائق',
      subtitle: 'اتبع الخطوتين البسيطتين أدناه وسيتكفل فريقنا بتفعيل حسابك فوراً عبر واتساب.',
      step1Title: 'الخطوة 1: معلومات الدفع (BaridiMob أو CCP)',
      offerName: 'حساب Steam Offline (+300 لعبة + ضمان 5 سنوات + تحديثات سنوية)',
      offerFeatures: [
        '+300 لعبة AAA أصلية شاملة إصدارات 2026',
        'تحميل رسمي وسريع من سيرفرات Steam',
        'ضمان 5 سنوات + دعم Steam Guard + فيديو شرح',
      ],
      baridiTitle: 'الدفع عبر BaridiMob (RIP)',
      ccpTitle: 'الدفع عبر البريد (CCP)',
      ccpNumLabel: 'رقم الحساب CCP',
      ccpKeyLabel: 'المفتاح (Clé)',
      ccpHolderLabel: 'الاسم الكامل',
      copyBtn: 'نسخ',
      copiedToast: 'تم النسخ ✓',
      step2Title: 'الخطوة 2: سجّل معلوماتك للتأكيد الفوري',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'مثال: أمين بن علي',
      phoneLabel: 'رقم الهاتف / واتساب',
      phonePlaceholder: 'مثال: 06 XX XX XX XX',
      paymentLabel: 'طريقة الدفع التي ستستخدمها',
      submitBtn: 'تأكيد الطلب والمتابعة إلى واتساب (2,300 دج)',
      thankYouTitlePrefix: 'شكراً لطلبك يا',
      thankYouTitleSuffix: '! 🎉 تم تسجيل طلبك بنجاح',
      thankYouMsg:
        'خطوة أخيرة فقط لاستلام حسابك خلال 5 دقائق: أرسل لنا رسالة التأكيد (أو وصل الدفع) على واتساب الآن.',
      countdownPrefix: 'جاري تحويلك تلقائياً إلى واتساب خلال',
      countdownSuffix: '...',
      whatsappManualBtn: 'افتح واتساب الآن لإتمام الطلب ⚡',
      editOrderLink: 'تعديل معلومات الطلب أو إرسال طلب جديد',
    },
    footer: {
      tagline: 'مكتبة ألعاب Steam الأصلية للاعبين في الجزائر — أمان، سرعة تحميل رسمية، وضمان 5 سنوات.',
      rights: 'جميع الحقوق محفوظة.',
    },
    mobileBar: {
      warranty: 'ضمان 5 سنوات',
      cta: 'اطلب الآن ⚡',
    },
  },

  fr: {
    announcement:
      '🔥 Offre Limitée : Bibliothèque +300 Jeux Steam Officiels à 2 300 DA seulement — Livraison en 5 min ⚡',
    nav: {
      games: 'Bibliothèque',
      video: 'Vidéo Guide',
      benefits: 'Avantages',
      faq: 'FAQ',
      cta: 'Commander',
    },
    hero: {
      trustBadge: '✅ +300 Jeux Officiels Steam | Garantie 5 Ans + Mises à jour annuelles',
      headline: 'Jouez aux derniers jeux AAA 2026 officiels sur Steam pour 2 300 DA seulement',
      subheadline:
        'Dites adieu aux virus des cracks et aux prix exorbitants. Profitez d’une bibliothèque de +300 jeux solo officiels téléchargés à pleine vitesse depuis les serveurs Steam.',
      oneTimeNote: 'Paiement unique — Aucun abonnement mensuel',
      saveBadge: 'Offre Lancement -34%',
      primaryCta: 'Réserver ma bibliothèque — Livraison en 5 min',
      secondaryCta: 'Voir la vidéo explicative',
      microTrust: [
        'Livraison rapide (5 min)',
        'Garantie 5 ans',
        'Vidéo tutoriel',
        'BaridiMob / CCP',
      ],
      previewHeader: 'Client Steam Officiel • Mode Hors-Ligne Prêt',
      previewStatus: 'Connecté aux serveurs officiels Steam',
      previewGamesCount: '+300 Jeux AAA Officiels',
      previewWarranty: 'Garantie 5 ans + Mises à jour annuelles',
      previewSpeed: 'Téléchargement plein débit (sans torrent)',
    },
    emotional: {
      badge: 'Pourquoi les gamers algériens adorent cette offre',
      title: 'Plus que des jeux... ce que vous ressentez dès le premier jour',
      subtitle:
        'Vous n’achetez pas juste un compte, mais votre tranquillité d’esprit, la sécurité de votre PC et une liberté totale de jouer.',
      cards: [
        {
          title: 'La fierté du choix le plus malin',
          tag: '+50 000 DA économisés',
          desc: 'Économisez plus de 50 000 DA (le prix de 3 jeux seulement) et accédez à une bibliothèque valant des milliers d’euros pour 2 300 DA — la satisfaction d’avoir fait la meilleure affaire.',
        },
        {
          title: 'Tranquillité totale & PC 100% protégé',
          tag: 'Zéro crack, zéro virus',
          desc: 'Plus aucune peur pour votre PC gaming face aux virus de torrents, cracks infectés ou erreurs DLL : des fichiers 100% propres téléchargés directement depuis Steam.',
        },
        {
          title: 'Liberté de gamer sans limites ni ennui',
          tag: '+300 mondes & histoires',
          desc: 'Dès que vous avez envie de jouer, +300 jeux solo sont prêts à être téléchargés à la vitesse maximale de votre connexion, avec des ajouts annuels gratuits.',
        },
        {
          title: 'Immersion totale & sauvegardes privées',
          tag: 'Vos sauvegardes en local',
          desc: 'Votre progression (Save Files) reste enregistrée uniquement sur votre PC. Passez en mode Hors-Ligne et profitez de votre histoire en toute fluidité.',
        },
      ],
    },
    video: {
      badge: 'Guide pratique rapide',
      title: 'Découvrez comment ça marche en 1 minute',
      subtitle:
        'C’est ultra simple même si vous débutez sur Steam — 4 étapes rapides et vous jouez :',
      steps: [
        '1. Connectez-vous sur Steam',
        '2. Téléchargez à plein débit',
        '3. Passez en Mode Hors-Ligne',
        '4. Jouez en toute liberté',
      ],
      placeholderTitle: 'Vidéo explicative prête à être affichée',
      placeholderDesc:
        'Collez votre lien Google Drive dans src/config.ts pour afficher automatiquement le lecteur ici.',
      fallbackBtn: 'Regarder la vidéo directement sur Google Drive',
    },
    games: {
      badge: 'Catalogue massif & mis à jour',
      title: 'Explorez les meilleurs jeux de la bibliothèque (+300 jeux)',
      subtitle:
        'Recherchez votre titre favori ou filtrez par genre — tous les jeux sont 100% officiels sur Steam.',
      searchPlaceholder: 'Rechercher un jeu... (ex: Spider-Man, Elden Ring, Forza)',
      tabs: {
        all: 'Tous',
        '2026': 'Sorties 2026',
        action: 'Action & Aventure',
        rpg: 'Monde Ouvert & RPG',
        horror: 'Horreur, Combat & Sport',
      },
      noResults:
        'Aucun jeu trouvé dans cet aperçu — la bibliothèque contient +300 titres, demandez-nous sur WhatsApp !',
      screenshotTitle: 'Captures réelles de la bibliothèque Steam',
      screenshotSubtitle:
        'Interface officielle Steam avec téléchargement direct à pleine vitesse.',
      moreGamesNote:
        '🎮 Plus de +270 autres jeux AAA et histoires inclus dans le compte + mises à jour annuelles gratuites !',
    },
    faq: {
      badge: 'Transparence totale',
      title: 'Questions Fréquentes',
      subtitle: 'Tout est expliqué clairement et honnêtement avant votre commande.',
      items: [
        {
          q: 'Le compte est-il destiné au mode Hors-Ligne (Solo / Histoire) ?',
          a: 'Oui, ce compte est dédié aux jeux solo / mode histoire en Mode Hors-Ligne. Vous téléchargez vos jeux en ligne à pleine vitesse depuis Steam, puis vous passez en Mode Hors-Ligne pour jouer sans interruption.',
        },
        {
          q: 'Mes sauvegardes (Save Files) restent-elles privées sur mon PC ?',
          a: 'Oui ! Il suffit de désactiver Steam Cloud en un clic (comme montré dans la vidéo explicative). Vos sauvegardes restent stockées uniquement sur votre PC, totalement indépendantes.',
        },
        {
          q: 'Comment fonctionnent les nouveautés protégées par Denuvo ?',
          a: 'En toute transparence : les jeux classiques et déjà sortis fonctionnent instantanément à tout moment. Pour les toutes dernières sorties protégées par Denuvo, une attente de 24h peut parfois être nécessaire lors de la toute première activation, puis le jeu fonctionne parfaitement hors-ligne.',
        },
        {
          q: 'Quel est le délai de livraison et comment fonctionne la garantie ?',
          a: 'Livraison rapide en 5 à 15 minutes après l’envoi du reçu de paiement sur WhatsApp. Vous bénéficiez d’une garantie de 5 ans avec support dédié pour les codes Steam Guard.',
        },
        {
          q: 'Le prix de 2 300 DA est-il un paiement unique ?',
          a: 'Oui, 2 300 DA une seule fois sans aucun abonnement mensuel, avec mises à jour annuelles gratuites de nouveaux jeux.',
        },
      ],
    },
    order: {
      badge: 'Commande en moins d’une minute',
      title: 'Commandez votre bibliothèque — Livraison en 5 min',
      subtitle: 'Suivez les 2 étapes simples ci-dessous pour activer votre accès sur WhatsApp.',
      step1Title: 'Étape 1 : Coordonnées de paiement (BaridiMob ou CCP)',
      offerName: 'Compte Steam Offline (+300 Jeux + Garantie 5 Ans + Mises à jour)',
      offerFeatures: [
        '+300 jeux AAA officiels incluant les sorties 2026',
        'Téléchargement officiel plein débit depuis Steam',
        'Garantie 5 ans + support Steam Guard + vidéo guide',
      ],
      baridiTitle: 'Paiement par BaridiMob (RIP)',
      ccpTitle: 'Paiement par CCP',
      ccpNumLabel: 'Numéro CCP',
      ccpKeyLabel: 'Clé',
      ccpHolderLabel: 'Nom du titulaire',
      copyBtn: 'Copier',
      copiedToast: 'Copié ✓',
      step2Title: 'Étape 2 : Enregistrez votre commande',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Ex : Amine Benali',
      phoneLabel: 'Téléphone / WhatsApp',
      phonePlaceholder: 'Ex : 06 XX XX XX XX',
      paymentLabel: 'Mode de paiement choisi',
      submitBtn: 'Confirmer et continuer sur WhatsApp (2 300 DA)',
      thankYouTitlePrefix: 'Merci pour votre commande,',
      thankYouTitleSuffix: ' ! 🎉 Votre commande est enregistrée',
      thankYouMsg:
        'Dernière étape pour recevoir votre compte en 5 minutes : envoyez-nous le message de confirmation (ou votre reçu) sur WhatsApp maintenant.',
      countdownPrefix: 'Redirection automatique vers WhatsApp dans',
      countdownSuffix: '...',
      whatsappManualBtn: 'Ouvrir WhatsApp maintenant ⚡',
      editOrderLink: 'Modifier ou passer une nouvelle commande',
    },
    footer: {
      tagline:
        'Bibliothèque de jeux Steam officiels pour les gamers en Algérie — 100% propre, rapide et garanti 5 ans.',
      rights: 'Tous droits réservés.',
    },
    mobileBar: {
      warranty: 'Garantie 5 ans',
      cta: 'Commander ⚡',
    },
  },

  en: {
    announcement:
      '🔥 Limited Offer: +300 Official Steam Games Library for only 2,300 DZD — 5-Min Delivery ⚡',
    nav: {
      games: 'Games Library',
      video: 'Video Guide',
      benefits: 'Benefits',
      faq: 'FAQ',
      cta: 'Order Now',
    },
    hero: {
      trustBadge: '✅ +300 Official Steam Games | 5-Year Warranty + Yearly Updates',
      headline: 'Play the Latest 2026 Official Steam AAA Games for Only 2,300 DZD',
      subheadline:
        'Say goodbye to cracked-game viruses and crazy game prices. Own a library of +300 official story-mode PC games with fast, official downloads straight from Steam servers.',
      oneTimeNote: 'One-time payment only — No monthly subscription',
      saveBadge: 'Launch Deal -34%',
      primaryCta: 'Claim Your Library Now — 5-Min Delivery',
      secondaryCta: 'Watch Video Guide',
      microTrust: [
        'Instant Delivery (5 min)',
        '5-Year Warranty',
        'Video Tutorial',
        'BaridiMob / CCP',
      ],
      previewHeader: 'Official Steam Client • Offline Mode Ready',
      previewStatus: 'Connected to Official Steam Servers',
      previewGamesCount: '+300 Official AAA Games',
      previewWarranty: '5-Year Warranty + Yearly Updates',
      previewSpeed: 'Max-Speed Official Downloads',
    },
    emotional: {
      badge: 'Why Algerian PC Gamers Love This',
      title: "More Than Just Games... How You'll Feel From Day One",
      subtitle:
        "You're not just buying an account — you're buying peace of mind, a safe PC, and total gaming freedom.",
      cards: [
        {
          title: 'Smart Deal Pride',
          tag: 'Save +50,000 DZD',
          desc: 'Save over 50,000 DZD (the cost of just 3 games) and unlock a library worth thousands of euros for only 2,300 DZD — you feel smart every single time you open Steam.',
        },
        {
          title: 'Total Peace of Mind & PC Safety',
          tag: '100% Clean Official Files',
          desc: 'Never risk your expensive PC again with torrent malware, infected cracks, or missing DLL errors — 100% clean files straight from official Steam servers.',
        },
        {
          title: 'Endless Freedom & Zero Boredom',
          tag: '+300 Worlds Ready to Play',
          desc: 'Whenever you want to play, +300 AAA story worlds are ready to download at your maximum internet speed, plus free annual updates with new releases.',
        },
        {
          title: 'Pure Uninterrupted Immersion',
          tag: 'Private Local Saves',
          desc: 'Your Save Files stay stored locally on your own PC away from any interference — switch to Offline Mode and enjoy every story smoothly.',
        },
      ],
    },
    video: {
      badge: 'Quick Walkthrough',
      title: 'See How It Works in Under 1 Minute',
      subtitle:
        'Super simple even if it is your first time using Steam — just 4 quick steps:',
      steps: [
        '1. Log into Steam',
        '2. Download at full speed',
        '3. Switch to Offline Mode',
        '4. Play without limits',
      ],
      placeholderTitle: 'Tutorial Video Player Ready',
      placeholderDesc:
        'Paste your Google Drive share link in src/config.ts and it will automatically embed right here.',
      fallbackBtn: 'Watch Video Directly on Google Drive',
    },
    games: {
      badge: 'Massive Curated Library',
      title: 'Browse the Top Games Inside (+300 Titles)',
      subtitle:
        'Search any game or filter by category — every title is 100% official and ready to install on Steam.',
      searchPlaceholder: 'Search a game... (e.g. Spider-Man, Elden Ring, Forza)',
      tabs: {
        all: 'All',
        '2026': '2026 Releases',
        action: 'Action & Adventure',
        rpg: 'Open World & RPG',
        horror: 'Horror, Fighting & Sports',
      },
      noResults:
        'No matching title in the featured list — remember the library includes +300 games, ask us on WhatsApp!',
      screenshotTitle: 'Real Steam Library Screenshots',
      screenshotSubtitle: '100% official Steam client with full-speed direct server downloads.',
      moreGamesNote:
        '🎮 Plus +270 more AAA and story-mode games included in the account + free annual game updates!',
    },
    faq: {
      badge: '100% Transparent',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear, honest answers to everything you should know before ordering.',
      items: [
        {
          q: 'Is this account for Offline / Story Mode only?',
          a: 'Yes — the account is designed for single-player Story Mode in Steam Offline Mode. You download your games online at full speed from Steam servers, then switch Steam to Offline Mode and play smoothly.',
        },
        {
          q: 'Will my Save Files stay private and safe on my PC?',
          a: 'Yes! Simply disable Steam Cloud in one click as shown in our short setup video. All your Save Files stay stored locally on your PC, completely independent from other players.',
        },
        {
          q: 'How do brand-new Denuvo-protected games work?',
          a: 'Full transparency: standard and older titles work instantly anytime. For brand-new releases protected by Denuvo, you may occasionally need up to a 24-hour wait for first-time activation due to Denuvo’s daily limit — after that, they play smoothly offline.',
        },
        {
          q: 'How fast is delivery and what does the warranty cover?',
          a: 'Delivery takes 5–15 minutes after sending your payment receipt via WhatsApp. You get a full 5-year warranty plus dedicated WhatsApp support whenever you need a Steam Guard code.',
        },
        {
          q: 'Is 2,300 DZD a one-time payment?',
          a: 'Yes! You pay 2,300 DZD once with zero monthly fees, and you also receive free yearly updates as new games are added.',
        },
      ],
    },
    order: {
      badge: 'Order in Under 1 Minute',
      title: 'Claim Your Library Now — 5-Minute Delivery',
      subtitle: 'Complete the 2 simple steps below and our team will activate your access on WhatsApp.',
      step1Title: 'Step 1: Payment Details (BaridiMob or CCP)',
      offerName: 'Steam Offline Account (+300 Games + 5-Year Warranty + Yearly Updates)',
      offerFeatures: [
        '+300 Official AAA PC games including 2026 releases',
        'Fast, clean downloads directly from Steam servers',
        '5-Year Warranty + Steam Guard support + Video Tutorial',
      ],
      baridiTitle: 'Pay via BaridiMob (RIP)',
      ccpTitle: 'Pay via CCP',
      ccpNumLabel: 'CCP Account Number',
      ccpKeyLabel: 'Key (Clé)',
      ccpHolderLabel: 'Account Holder',
      copyBtn: 'Copy',
      copiedToast: 'Copied ✓',
      step2Title: 'Step 2: Quick Registration Form',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Amine Benali',
      phoneLabel: 'Phone / WhatsApp Number',
      phonePlaceholder: 'e.g. 06 XX XX XX XX',
      paymentLabel: 'Payment Method',
      submitBtn: 'Confirm Order & Continue to WhatsApp (2,300 DZD)',
      thankYouTitlePrefix: 'Thank you for your order,',
      thankYouTitleSuffix: '! 🎉 Order Registered Successfully',
      thankYouMsg:
        'Just one final step to receive your account in 5 minutes: send us your confirmation message (or payment receipt) on WhatsApp now.',
      countdownPrefix: 'Redirecting you automatically to WhatsApp in',
      countdownSuffix: '...',
      whatsappManualBtn: 'Open WhatsApp Now to Complete Order ⚡',
      editOrderLink: 'Edit details or submit another order',
    },
    footer: {
      tagline:
        'Official Steam Offline Games Library for Algerian PC gamers — clean files, full speed, and 5-year warranty.',
      rights: 'All rights reserved.',
    },
    mobileBar: {
      warranty: '5-Year Warranty',
      cta: 'Order Now ⚡',
    },
  },
};

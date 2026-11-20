export type GameCategory = 'all' | '2026' | 'action' | 'rpg' | 'horror';

export interface GameItem {
  id: string;
  title: string;
  category: Exclude<GameCategory, 'all'>;
  year: string;
  badge: string;
  /** CSS gradient fallback cover art if image fails to load */
  gradient: string;
  accentColor: string;
  /** Official Steam Store HD header cover image (460x215) */
  imageUrl?: string;
}

export const FLAGSHIP_GAMES: GameItem[] = [
  // 2026 Releases (8)
  {
    id: 'forza-horizon-6',
    title: 'Forza Horizon 6',
    category: '2026',
    year: '2026',
    badge: '2026',
    gradient: 'from-cyan-500/35 via-blue-700/40 to-[#0D1320]',
    accentColor: '#00D2FF',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2483190/c53fe3362cc3267a5d34aca3e796b90963e0e23f/header_alt_assets_6.jpg',
  },
  {
    id: 'death-stranding-2',
    title: 'Death Stranding 2',
    category: '2026',
    year: '2026',
    badge: '2026',
    gradient: 'from-slate-500/35 via-sky-900/45 to-[#0D1320]',
    accentColor: '#38BDF8',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3280350/6270c77b0729e2df0a17d660286eeddfd9169386/header.jpg',
  },
  {
    id: 'crimson-desert',
    title: 'Crimson Desert',
    category: '2026',
    year: '2026',
    badge: '2026',
    gradient: 'from-rose-600/40 via-amber-900/35 to-[#0D1320]',
    accentColor: '#FB7185',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3321460/header.jpg',
  },
  {
    id: 'phantom-blade-zero',
    title: 'Phantom Blade Zero',
    category: '2026',
    year: '2026',
    badge: '2026',
    gradient: 'from-zinc-500/35 via-red-950/50 to-[#0D1320]',
    accentColor: '#F87171',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4115450/7f882f889630270d3d3fb93825ac6f55b55e7a6c/header.jpg',
  },
  {
    id: 'halo-campaign-evolved',
    title: 'Halo Campaign Evolved',
    category: '2026',
    year: '2026',
    badge: '2026',
    gradient: 'from-emerald-500/35 via-cyan-900/40 to-[#0D1320]',
    accentColor: '#34D399',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2806050/30d8542d35d7919b34e5f5dbe955d04c3f99e6da/header.jpg',
  },
  {
    id: 'control-resonant',
    title: 'Control Resonant',
    category: '2026',
    year: '2026',
    badge: '2026',
    gradient: 'from-red-600/35 via-slate-900/50 to-[#0D1320]',
    accentColor: '#EF4444',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3669870/1e0c76e4253d347bb1304c3f213570251d924edf/header.jpg',
  },
  {
    id: 'subnautica-2',
    title: 'Subnautica 2',
    category: '2026',
    year: '2026',
    badge: '2026',
    gradient: 'from-teal-500/40 via-blue-950/50 to-[#0D1320]',
    accentColor: '#2DD4BF',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1962700/header.jpg',
  },
  {
    id: 'nioh-3',
    title: 'Nioh 3',
    category: '2026',
    year: '2026',
    badge: '2026',
    gradient: 'from-amber-500/35 via-indigo-950/50 to-[#0D1320]',
    accentColor: '#FBBF24',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3681010/a21264e9fd476dcb2901c2432b598107d024c5a8/header.jpg',
  },

  // Action & Adventure (8)
  {
    id: 'spider-man-2',
    title: "Marvel's Spider-Man 2",
    category: 'action',
    year: '2025',
    badge: 'AAA',
    gradient: 'from-red-600/40 via-blue-900/45 to-[#0D1320]',
    accentColor: '#F43F5E',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg',
  },
  {
    id: 'spider-man-remastered',
    title: 'Spider-Man Remastered',
    category: 'action',
    year: 'AAA',
    badge: 'AAA',
    gradient: 'from-rose-500/35 via-indigo-900/45 to-[#0D1320]',
    accentColor: '#FB7185',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg',
  },
  {
    id: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima',
    category: 'action',
    year: 'Director’s Cut',
    badge: 'GOTY',
    gradient: 'from-amber-500/35 via-red-900/40 to-[#0D1320]',
    accentColor: '#F59E0B',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg',
  },
  {
    id: 'the-last-of-us-part-1',
    title: 'The Last of Us Part I',
    category: 'action',
    year: 'Remake',
    badge: 'GOTY',
    gradient: 'from-emerald-600/35 via-stone-900/50 to-[#0D1320]',
    accentColor: '#10B981',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg',
  },
  {
    id: 'uncharted-legacy',
    title: 'Uncharted: Legacy of Thieves',
    category: 'action',
    year: 'Collection',
    badge: 'AAA',
    gradient: 'from-sky-500/35 via-amber-900/35 to-[#0D1320]',
    accentColor: '#38BDF8',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg',
  },
  {
    id: 'mafia-old-country',
    title: 'Mafia: The Old Country',
    category: 'action',
    year: '2025',
    badge: 'NEW',
    gradient: 'from-orange-600/35 via-stone-900/50 to-[#0D1320]',
    accentColor: '#FB923C',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1941540/header.jpg',
  },
  {
    id: 'metal-gear-solid-delta',
    title: 'Metal Gear Solid: Snake Eater',
    category: 'action',
    year: 'Delta',
    badge: 'AAA',
    gradient: 'from-lime-600/30 via-emerald-950/55 to-[#0D1320]',
    accentColor: '#84CC16',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2417610/05c97cbcd0cfc27c8ed6c7fc6d81e0995aa2a7d4/header.jpg',
  },
  {
    id: 'stellar-blade',
    title: 'Stellar Blade',
    category: 'action',
    year: '2025',
    badge: 'AAA',
    gradient: 'from-cyan-400/35 via-purple-900/45 to-[#0D1320]',
    accentColor: '#00D2FF',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3489700/header.jpg',
  },

  // Open World & RPG (6)
  {
    id: 'black-myth-wukong',
    title: 'Black Myth: Wukong',
    category: 'rpg',
    year: 'GOTY',
    badge: 'HIT',
    gradient: 'from-amber-500/40 via-stone-900/50 to-[#0D1320]',
    accentColor: '#F59E0B',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg',
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    category: 'rpg',
    year: '+ DLC',
    badge: 'GOTY',
    gradient: 'from-yellow-500/35 via-amber-950/50 to-[#0D1320]',
    accentColor: '#EAB308',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg',
  },
  {
    id: 'hogwarts-legacy',
    title: 'Hogwarts Legacy',
    category: 'rpg',
    year: 'Deluxe',
    badge: 'AAA',
    gradient: 'from-violet-500/40 via-indigo-950/50 to-[#0D1320]',
    accentColor: '#A78BFA',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg',
  },
  {
    id: 'stalker-2',
    title: 'S.T.A.L.K.E.R. 2',
    category: 'rpg',
    year: 'Chornobyl',
    badge: 'AAA',
    gradient: 'from-emerald-600/35 via-slate-900/55 to-[#0D1320]',
    accentColor: '#34D399',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1643320/header.jpg',
  },
  {
    id: 'monster-hunter-wilds',
    title: 'Monster Hunter Wilds',
    category: 'rpg',
    year: '2025',
    badge: 'NEW',
    gradient: 'from-orange-500/35 via-amber-950/50 to-[#0D1320]',
    accentColor: '#FB923C',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg',
  },
  {
    id: 'days-gone',
    title: 'Days Gone',
    category: 'rpg',
    year: 'PC Edition',
    badge: 'AAA',
    gradient: 'from-sky-600/35 via-slate-900/55 to-[#0D1320]',
    accentColor: '#38BDF8',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1259420/header.jpg',
  },

  // Horror, Fighting & Sports (6)
  {
    id: 'resident-evil-4',
    title: 'Resident Evil 4',
    category: 'horror',
    year: 'Remake',
    badge: 'GOTY',
    gradient: 'from-red-700/40 via-zinc-950/60 to-[#0D1320]',
    accentColor: '#EF4444',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg',
  },
  {
    id: 'silent-hill-2',
    title: 'Silent Hill 2',
    category: 'horror',
    year: 'Remake',
    badge: 'AAA',
    gradient: 'from-slate-500/35 via-emerald-950/50 to-[#0D1320]',
    accentColor: '#94A3B8',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg',
  },
  {
    id: 'tekken-8',
    title: 'Tekken 8',
    category: 'horror',
    year: 'Ultimate',
    badge: 'AAA',
    gradient: 'from-blue-600/40 via-red-900/45 to-[#0D1320]',
    accentColor: '#3B82F6',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg',
  },
  {
    id: 'mortal-kombat-1',
    title: 'Mortal Kombat 1',
    category: 'horror',
    year: 'Khaos',
    badge: 'AAA',
    gradient: 'from-amber-600/35 via-red-950/55 to-[#0D1320]',
    accentColor: '#F59E0B',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg',
  },
  {
    id: 'dragon-ball-sparking-zero',
    title: 'Dragon Ball: Sparking! ZERO',
    category: 'horror',
    year: '2025',
    badge: 'HIT',
    gradient: 'from-cyan-500/40 via-orange-700/40 to-[#0D1320]',
    accentColor: '#00D2FF',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1790600/header.jpg',
  },
  {
    id: 'nba-2k26',
    title: 'NBA 2K26',
    category: 'horror',
    year: '2026',
    badge: '2026',
    gradient: 'from-blue-500/40 via-purple-900/45 to-[#0D1320]',
    accentColor: '#60A5FA',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3472040/f7e126add75c3b09779b44cd349be93d31b0a80b/header.jpg',
  },
];

export interface LibraryScreenshotSlot {
  id: string;
  labelAr: string;
  labelFr: string;
  labelEn: string;
  /** Replace with real cropped Steam Library screenshot URLs (e.g. /screenshots/lib-1.jpg) */
  imageUrl?: string;
}

export const LIBRARY_SCREENSHOTS: LibraryScreenshotSlot[] = [
  {
    id: 'shot-1',
    labelAr: 'إصدارات 2026: Forza Horizon 6 • Halo • Death Stranding 2 • Crimson Desert',
    labelFr: 'Sorties 2026 : Forza Horizon 6 • Halo • Death Stranding 2 • Crimson Desert',
    labelEn: '2026 Releases: Forza Horizon 6 • Halo • Death Stranding 2 • Crimson Desert',
    imageUrl: '/media/library-1.jpg',
  },
  {
    id: 'shot-2',
    labelAr: 'أقوى الإصدارات: Nioh 3 • Mafia • Stellar Blade • NBA 2K26 • Monster Hunter',
    labelFr: 'Hits récents : Nioh 3 • Mafia • Stellar Blade • NBA 2K26 • Monster Hunter',
    labelEn: 'Top Releases: Nioh 3 • Mafia • Stellar Blade • NBA 2K26 • Monster Hunter',
    imageUrl: '/media/library-2.jpg',
  },
  {
    id: 'shot-3',
    labelAr: 'الأكثر طلباً: Spider-Man 2 • Black Myth: Wukong • STALKER 2 • Ghost of Tsushima',
    labelFr: 'Les plus demandés : Spider-Man 2 • Wukong • STALKER 2 • Ghost of Tsushima',
    labelEn: 'Most Popular: Spider-Man 2 • Black Myth: Wukong • STALKER 2 • Ghost of Tsushima',
    imageUrl: '/media/library-3.jpg',
  },
  {
    id: 'shot-4',
    labelAr: 'مكتبة ضخمة: Resident Evil 4 • Elden Ring • Hogwarts Legacy • Uncharted',
    labelFr: 'Catalogue massif : Resident Evil 4 • Elden Ring • Hogwarts Legacy • Uncharted',
    labelEn: 'Massive Catalog: Resident Evil 4 • Elden Ring • Hogwarts Legacy • Uncharted',
    imageUrl: '/media/library-4.jpg',
  },
];

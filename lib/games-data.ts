export interface Game {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  type: "play" | "download";
  url: string;
  description?: string;
  category?: string;
}

export const gamesData: Game[] = [
  {
    id: "1",
    title: "Game Vault",
    thumbnail: "/images/gamevault.png",
    type: "download",
    url: "https://download.gamevault999.com/",
    description:
      "Unlock the Game Vault and discover a treasure trove of casino games.",
    category: "Casino",
    slug: 'gv',
  },
  {
    id: "2",
    title: "Firekirin",
    thumbnail: "/images/firekirin.png",
    type: "play",
    url: "http://start.firekirin.xyz:8580/index.html",
    description: "Experience Firekirin's immersive fish shooting games and slot machines.",
    category: "Casino",
    slug: "fk"
  },
  {
    id: "3",
    title: "Juwa",
    thumbnail: "/images/juwa.png",
    type: "download",
    url: "https://dl.juwa777.com/",
    description:
      "Dive into Juwa's world of fish games and slot machines for endless entertainment.",
    category: "Casino",
    slug: 'ju',
  },
  {
    id: "4",
    title: "Orionstars",
    thumbnail: "/images/orionstars.png",
    type: "play",
    url: "http://start.orionstars.vip:8580/index.html",
    description:
      "Play Orionstars online with a variety of slot games and fish shooting games.",
    category: "Casino",
    slug: 'os',
  },
  {
    id: "5",
    title: "Moolah",
    thumbnail: "/images/moolah.png",
    type: "play",
    url: "https://moolah.vip:8888/",
    description:
      "Win big with Moolah's exciting casino games and progressive jackpots.",
    category: "Casino",
    slug: 'ml',
  },
  {
    id: "6",
    title: "Vblink",
    thumbnail: "/images/vblink.png",
    type: "play",
    url: "https://www.vblink777.club/",
    description:
      "Enjoy Vblink's collection of sweepstakes games and slot machines online.",
    category: "Sweepstakes",
    slug: 'vb',
  },
  {
    id: "7",
    title: "Vegas Sweeps",
    thumbnail: "/images/vegas.png",
    type: "play",
    url: "https://m.lasvegassweeps.com/",
    description:
      "Bring Las Vegas to your device with Vegas Sweeps' authentic casino games.",
    category: "Sweepstakes",
    slug: 'vs',
  },
  {
    id: "8",
    title: "Casino Royale",
    thumbnail: "/images/casinoroyale.png",
    type: "play",
    url: "http://m.casinoroyale07.com/",
    description:
      "Experience royal treatment with Casino Royale's premium gaming collection.",
    category: "Casino",
    slug: 'cr',
  },
  {
    id: "9",
    title: "Milkyway",
    thumbnail: "/images/milkyway.png",
    type: "play",
    url: "https://milkywayapp.xyz/",
    description:
      "Journey through the Milkyway of gaming with exciting slots and fish games.",
    category: "Casino",
    slug: 'mw',
  },
  {
    id: "10",
    title: "Ultra Panda",
    thumbnail: "/images/ultrapanda.png",
    type: "play",
    url: "http://www.ultrapanda.mobi/",
    description:
      "Join Ultra Panda for an ultimate gaming experience with fish shooting and slots.",
    category: "Casino",
    slug: 'up',
  },
  {
    id: "11",
    title: "River Sweeps",
    thumbnail: "/images/riversweeps.png",
    type: "play",
    url: "https://river777.com/",
    description:
      "Flow with River Sweeps and enjoy their collection of sweepstakes casino games.",
    category: "Sweepstakes",
    slug: 'rs',
  },
  {
    id: "11",
    title: "Dragon Dynasty",
    thumbnail: "/images/riversweeps.png",
    type: "play",
    url: "https://river777.com/",
    description:
      "Dive into the Dragon Dynasty and explore a world of mythical gaming adventures.",
    category: "Casino",
    slug: 'rs',
  },
  
];

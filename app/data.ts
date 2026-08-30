export type Video = {
  title: string;
  highlightClip?: string;
  embedUrl?: string;
  fullWorkUrl?: string;
  platform: "YouTube" | "Vimeo" | "TikTok" | "Instagram" | "Douyin" | "RedNote" | "WeChat" | "Bilibili" | "Local";
  accessibilityCaption: string;
};

export type Appearance = Video & {
  client: string;
  year: string;
  role: string;
  format: string;
  description: string;
  thumbnail: string;
  gallery?: string[];
};

export type PlaylistTrack = {
  artist: string;
  songTitle: string;
  language: string;
  genre: string;
  performanceType: string;
  sampleUrl?: string;
  status: "Available" | "By request";
};

export type UpcomingFeature = {
  kind: "Music" | "Video" | "Live" | "Featured Cosplayer";
  title: string;
  timing: string;
  description: string;
  image: string;
};

// Replace these with confirmed title, date, description and artwork before announcing publicly.
export const upcomingFeatures: UpcomingFeature[] = [
  { kind: "Featured Cosplayer", title: "Kawaii Rave", timing: "Aug. 22", description: "Down to have some fun jamming to fav EDM, HyperPop and more!", image: "/images/viper8-kawaii-rave.jpg" },
  { kind: "Live", title: "Live performance", timing: "Dates to be announced", description: "The next chance to see Yuqian live is coming into view.", image: "/images/brand-stage.jpg" },
];

export const appearances: Appearance[] = [
  {
    title: "东方音乐挑战赛 / Oriental Music Challenge",
    client: "东方音乐挑战赛",
    year: "2025",
    role: "Featured performer",
    format: "Music challenge video",
    description: "A featured appearance for 东方音乐挑战赛 / Oriental Music Challenge.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos/oriental-music-challenge.mp4",
    platform: "Local",
    accessibilityCaption: "Yuqian appearing for 东方音乐挑战赛 / Oriental Music Challenge.",
  },
  {
    title: "Hwarang",
    client: "Hwarang, Shanghai",
    year: "2025",
    role: "Campaign talent",
    format: "Restaurant campaign",
    description: "A campaign collaboration for Hwarang, a Korean restaurant in Shanghai.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos/hwarang-shanghai.mp4",
    platform: "Local",
    accessibilityCaption: "Yuqian in the Hwarang Shanghai restaurant campaign.",
  },
  {
    title: "环球超模联赛 / Supermodel League",
    client: "环球超模联赛",
    year: "2025",
    role: "Featured talent",
    format: "Event video",
    description: "A 环球超模联赛 / Supermodel League appearance.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos/supermodel-league.mp4",
    platform: "Local",
    accessibilityCaption: "Yuqian appearing for 环球超模联赛 / Supermodel League.",
  },
  {
    title: "itel S23+",
    client: "itel",
    year: "2025",
    role: "Campaign talent",
    format: "Brand video",
    description: "An itel S23+ brand video collaboration.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos/itel-s23-plus.mp4",
    platform: "Local",
    accessibilityCaption: "Yuqian in an itel S23+ brand video.",
  },
  {
    title: "ANTA",
    client: "ANTA",
    year: "2025",
    role: "Campaign talent",
    format: "Sports campaign",
    description: "A Find Your Games sportswear campaign for ANTA.",
    thumbnail: "/images/anta-cover.jpg",
    gallery: [
      "/images/anta-cover.jpg",
      "/images/anta-run.jpg",
      "/images/anta-pose.jpg",
      "/images/anta-squat.jpg",
      "/images/anta-group.jpg",
    ],
    platform: "Local",
    accessibilityCaption: "Yuqian featured in the ANTA Find Your Games campaign.",
  },
  {
    title: "OnePlus",
    client: "OnePlus",
    year: "2025",
    role: "Campaign talent",
    format: "Brand video",
    description: "A OnePlus brand video collaboration.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos/oneplus.mp4",
    platform: "Local",
    accessibilityCaption: "Yuqian in a OnePlus brand video.",
  },
  {
    title: "NIKE",
    client: "Nike",
    year: "2025",
    role: "Campaign talent",
    format: "Brand campaign",
    description: "Nike campaign imagery and retail feature.",
    thumbnail: "/images/nike-action-portrait.jpg",
    gallery: [
      "/images/nike-action-portrait.jpg",
      "/images/nike-store-display.jpg",
    ],
    platform: "Local",
    accessibilityCaption: "Yuqian featured in a Nike campaign.",
  },
  {
    title: "le coq sportif",
    client: "le coq sportif",
    year: "2025",
    role: "Campaign talent",
    format: "Brand video",
    description: "A le coq sportif campaign video collaboration.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos/le-coq-sportif.mp4",
    platform: "Local",
    accessibilityCaption: "Yuqian in a le coq sportif campaign video.",
  },
  {
    title: "NIKE × MARTINE ROSE",
    client: "Nike × Martine Rose",
    year: "2025",
    role: "Campaign talent",
    format: "Fashion campaign",
    description: "A fashion campaign collaboration for Nike × Martine Rose.",
    thumbnail: "/images/nike-martine-rose-portrait.jpg",
    gallery: [
      "/images/nike-martine-rose-portrait.jpg",
      "/images/nike-martine-rose-group-seated.jpg",
      "/images/nike-martine-rose-group-lineup.jpg",
    ],
    platform: "Local",
    accessibilityCaption: "Yuqian in the Nike × Martine Rose campaign.",
  },
  {
    title: "歪果仁学农! Village Life",
    client: "yChina / 歪果仁研究社会",
    year: "2025",
    role: "Featured appearance",
    format: "WeChat video",
    description: "A featured appearance for yChina's 歪果仁研究社会 series.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos-web/village-life-web.mp4",
    embedUrl: "https://player.bilibili.com/player.html?bvid=BV1dJMgzZE3g&page=1&autoplay=1&danmaku=0",
    fullWorkUrl: "https://www.bilibili.com/video/BV1dJMgzZE3g/?spm_id_from=333.1387.list.card_archive.click",
    platform: "Bilibili",
    accessibilityCaption: "Yuqian's first yChina video appearance.",
  },
  {
    title: "FIFA World Cup Players",
    client: "yChina / 歪果仁研究社会",
    year: "2025",
    role: "Featured appearance",
    format: "Douyin video",
    description: "A featured appearance for yChina's 歪果仁研究社会 series.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos-web/fifa-world-cup-players-web.mp4",
    fullWorkUrl: "https://www.douyin.com/user/MS4wLjABAAAASGY3J2ua1Mydpmh0Y18xDkx7FE_GOaNjIAilClrHBf8?from_tab_name=main&modal_id=7661255736407624994",
    platform: "Douyin",
    accessibilityCaption: "Yuqian's second yChina video appearance.",
  },
  {
    title: "Going to the FIFA World Cup 2026!",
    client: "yChina / 歪果仁研究社会",
    year: "2025",
    role: "Featured appearance",
    format: "Douyin video",
    description: "A featured appearance for yChina's 歪果仁研究社会 series.",
    thumbnail: "/images/blue-stage.jpg",
    highlightClip: "/videos/fifa-world-cup-2026.mp4",
    fullWorkUrl: "https://www.douyin.com/user/MS4wLjABAAAASGY3J2ua1Mydpmh0Y18xDkx7FE_GOaNjIAilClrHBf8?from_tab_name=main&modal_id=7661630344831028495",
    platform: "Douyin",
    accessibilityCaption: "Yuqian's third yChina video appearance.",
  },
  {
    title: "Tencent X Mentos",
    client: "Nanjing, China",
    year: "2025",
    role: "Featured Performer",
    format: "Live Event",
    description: "High-energy live performance in Nanjing, China",
    thumbnail: "/images/tencent-mentos-singing.jpg",
    gallery: [
      "/images/tencent-mentos-performance.jpg",
      "/images/tencent-mentos-stage.jpg",
      "/images/tencent-mentos-audience.jpg",
      "/images/tencent-mentos-crowd.jpg",
      "/images/tencent-mentos-singing.jpg",
      "/images/tencent-mentos-closeup.jpg",
      "/images/tencent-mentos-duo.jpg",
      "/images/tencent-mentos-field.jpg",
    ],
    platform: "YouTube",
    accessibilityCaption: "Yuqian performing at a live event.",
  },
  {
    title: "SINGTAO Daily",
    client: "SINGTAO Daily",
    year: "2025",
    role: "Miss Singtao — September 2025",
    format: "Feature video",
    description: "Featured as Miss Singtao for September 2025.",
    thumbnail: "https://i.ytimg.com/vi/gQLvdESspMw/hqdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/gQLvdESspMw?autoplay=1&mute=1&playsinline=1&rel=0",
    fullWorkUrl: "https://www.youtube.com/watch?v=gQLvdESspMw&t=1s",
    platform: "YouTube",
    accessibilityCaption: "Yuqian featured by SINGTAO Daily as Miss Singtao for September 2025.",
  },
  {
    title: "Xiaohongshu / RedNote",
    client: "Nanjing, China",
    year: "2025",
    role: "Featured performer",
    format: "Live Event",
    description: "Featured performance collaboration for RedNote's Winter campaign in Nanjing, China.",
    thumbnail: "/images/rednote-closeup.jpg",
    gallery: [
      "/images/rednote-closeup.jpg",
      "/images/rednote-portrait.jpg",
      "/images/rednote-cube.jpg",
      "/images/rednote-stage.jpg",
      "/images/rednote-performance.jpg",
      "/images/rednote-rainbow.jpg",
      "/images/rednote-pose.jpg",
    ],
    platform: "RedNote",
    accessibilityCaption: "Yuqian in a colorful fashion-performance setting.",
  },
];

export const brands = [
  { name: "Tencent", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Tencent_logo_2017.svg/500px-Tencent_logo_2017.svg.png" },
  { name: "Mentos", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mentos_logo.svg/500px-Mentos_logo.svg.png" },
  { name: "RedNote", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Xiaohongshu_logo%26slogan.png/500px-Xiaohongshu_logo%26slogan.png" },
  { name: "miHoYo", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/MiHoYo.svg/960px-MiHoYo.svg.png" },
  { name: "NetEase Games", logo: "/images/netease-games-logo.jpg" },
  { name: "adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Adidas_2022_logo.svg/500px-Adidas_2022_logo.svg.png" },
  { name: "ANTA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Anta_logo.svg/500px-Anta_logo.svg.png" },
  { name: "Nike", logo: "/images/nike-logo.png" },
  { name: "le coq sportif", logo: "/images/le-coq-sportif-logo.png" },
  { name: "Arc'teryx", logo: "/images/arcteryx-logo.png" },
  { name: "Temu", logo: "/images/temu-logo.jpg" },
  { name: "Amazon", logo: "/images/amazon-logo.png" },
  { name: "Li-Ning", logo: "/images/li-ning-logo.png" },
  { name: "vivo", logo: "/images/vivo-logo.png" },
  { name: "Xiaomi", logo: "/images/xiaomi-logo.png" },
  { name: "Alipay", logo: "/images/alipay-logo.png" },
  { name: "Stella Artois", logo: "/images/stella-artois-logo.jpg" },
  { name: "Budweiser", logo: "/images/budweiser-logo.jpg" },
  { name: "Martine Rose", logo: "/images/martine-rose-logo.png" },
  { name: "SINGTAO Daily", logo: "/images/singtao-daily-logo.png" },
  { name: "KTSF", logo: "/images/ktsf-logo.png" },
  { name: "United Nations", logo: "/images/united-nations-logo.png" },
  { name: "Smithsonian", logo: "/images/smithsonian-logo.png" },
  { name: "Turkish American Television", logo: "/images/turkish-american-television-logo.jpg" },
  { name: "Arlington Independent Media", logo: "/images/arlington-independent-media-logo.png" },
  { name: "Global Co Lab Network", logo: "/images/global-colab-network-logo.png" },
];

export const actingScenes = [
  { title: "Birds of Prey", type: "Scene work", language: "English", description: "Character-driven screen performance.", image: "/images/acting-red.jpg" },
  { title: "Interrogation Room", type: "Scene work", language: "English / Mandarin", description: "Bilingual dramatic scene performance.", image: "/images/acting-blue.jpg" },
  { title: "Self-Tape Monologue", type: "Monologue", language: "English", description: "A focused, camera-forward acting performance.", image: "/images/acting-pastel.jpg" },
];

export const voiceDemos = [
  { title: "Animation", file: "/audio/voice-animation.mp3" },
  { title: "Chipotle × Tropicana", file: "/audio/voice-chipotle-tropicana.mp3" },
  { title: "Commercial", file: "/audio/voice-commercial.mp3" },
];

export const tracks: PlaylistTrack[] = [
  { artist: "Juan Karlos", songTitle: "Buwan", language: "Tagalog", genre: "Pop / Soul", performanceType: "Live vocal", status: "Available" },
  { artist: "Keith Urban", songTitle: "Blue Ain't Your Color", language: "English", genre: "Country", performanceType: "Live vocal", status: "Available" },
  { artist: "Zhang Qiang 张蔷", songTitle: "别问我什么是迪斯科", language: "Mandarin", genre: "Mandopop", performanceType: "Live vocal", status: "Available" },
  { artist: "Fei Xiang 费翔", songTitle: "恼人的秋风", language: "Mandarin", genre: "Mandopop", performanceType: "Live vocal", status: "Available" },
  { artist: "Sun Yanzi", songTitle: "我怀念的", language: "Mandarin", genre: "Mandopop", performanceType: "Live vocal", status: "Available" },
  { artist: "G.E.M. 邓紫棋", songTitle: "泡沫", language: "Mandarin", genre: "Mandopop", performanceType: "Live vocal", status: "Available" },
  { artist: "Wang Feng 汪峰", songTitle: "怒放的生命", language: "Mandarin", genre: "Mandopop", performanceType: "Live vocal", status: "Available" },
   { artist: "A-Lin", songTitle: "有一种悲伤", language: "Mandarin", genre: "Mandopop", performanceType: "Live vocal", status: "Available" },
  { artist: "小FireStar", songTitle: "Free2Be", language: "English", genre: "Dance-pop", performanceType: "Original music", status: "By request" },
  { artist: "小FireStar", songTitle: "Cyanide", language: "English / Mandarin", genre: "Alt-pop", performanceType: "Original music", status: "By request" },
];

export const technicalProjects = [
  {
    title: "Realtime Audiovisual VJ Set",
    year: "Live performance",
    video: "/videos-web/realtime-audiovisual-vj-web.mp4",
    tools: "MAX/MSP · Ableton Live · VJing · Sound design",
    text: "Created and performed an original soundtrack alongside live VJ visuals for a Realtime Audiovisual Production class project."
  },
  {
    title: "ZHI艺 Digital Exhibition",
    video: "/videos-web/flourishing-fair-goldfoil-web.mp4",
    tools: "ADOBE AFTER EFFECTS · DAVINCI RESOLVE · WEB DESIGN · DIGITAL CURATION",
    text: "For this digital exhibition, I visited the places where the featured cultural items were made; recorded, coordinated and translated on site; edited project media; and helped create interactive elements for the exhibition website.",
    projectUrl: "https://artlab.nju.edu.cn/heritage/",
  },
  { title: "P.A.L. — Punch-Activated Lighter", year: "2021", video: "/videos/pal-punch-activated-lighter.mp4", tools: "Arduino · Accelerometer · Servo · Wearable prototyping", text: "A punch-activated wearable lighter prototype, built with an accelerometer and servo, then iterated through hands-on user testing." },
  {
    title: "保安 · Security Guard",
    year: "Anthropology short excerpt",
    video: "/videos-web/anthropology-security-guard-web.mp4",
    tools: "NANJING UNIVERSITY OF THE ARTS · ANTHROPOLOGY · DOCUMENTARY",
    text: "A short excerpt from an anthropology project documenting the everyday life and work of a security guard (保安)."
  },
  {
    title: "Mariposa — Butterfly Maze",
    video: "/videos/mariposa-maze-demo.mp4",
    tools: "Unity · Blender · C# · C++ · 3D lighting · Level design",
    text: "A 3D butterfly maze game exploring movement, lighting and navigation in a designed world. Built through hands-on experimentation with Unity, Blender, C# and C++.",
    demoUrl: "https://www.youtube.com/watch?v=VzHJn-oZYck"
  },
  {
    title: "Dancing Robot",
    video: "/videos/dancing-robot.mp4",
    tools: "ROBOTICS · MECHANICAL DESIGN · MOVEMENT STUDIES",
    text: "A robotics-class concept project exploring the mechanics, movement language, and design idea behind a dancing robot.",
  },
  {
    title: "Platform Fighter",
    video: "/videos/platform-fighter-demo.mp4",
    tools: "Unity · Character design · Original sound design · Game prototyping",
    text: "A platform-fighting game project created to build hands-on Unity and character-design skills. Developed original character designs and sounds by hand, then brought them together in a playable game prototype."
  },
  {
    title: "Angel Status",
    image: "/images/angel-status.jpg",
    tools: "Board game design · Physical prototyping · Playtesting · Interaction design",
    text: "An original board-game project developed through early rules design, physical prototyping and playtesting. The linked playthrough captures an original first-draft session before the full version.",
    presentationUrl: "https://docs.google.com/presentation/d/16JzkQ82KXvtlbm74y9hKwuWmuGvoDI-jvA73nKcG6Ec/edit?usp=sharing",
    demoUrl: "https://www.youtube.com/watch?v=_b6mrCM2sfw"
  },
  {
    title: "Halloween Avatar Head",
    image: "/images/immersive-game-avatar-head.jpg",
    tools: "Blender · Unity · Immersive game design · VR/AR prototyping",
    text: "Designed and modeled an original 3D Halloween avatar head in Blender for an immersive game design class, then prepared it for Unity as part of a later VR/AR game prototype.",
    presentationUrl: "https://docs.google.com/presentation/d/1zruSNcEtey18RQgM-V1Cqgbi-XXnITdUW4DN0bdfZ-k/edit?usp=sharing"
  },
  {
    title: "Gamer Girl Experience",
    visual: "capstone",
    tools: "INTERACTIVE MEDIA RESEARCH · TWINE · HARLOWE · MIXED METHODS",
    text: "An interactive-media research project investigating how culture, geography, and game servers shape the experiences of women in competitive FPS games. Research across Chinese, Asian, and North American contexts informed this branching interactive narrative."
  },
  {
    title: "Robotics Final Project",
    image: "/images/tech-free-will-science.png",
    tools: "ROBOTICS · FINAL PROJECT · RESEARCH & DESIGN",
    text: "Final-project research from robotics class, focused on the project concept, mechanics, and design process. A project visual will be added soon.",
  },
  {
    title: "Interactive Narrative — DoorDash Chronicles",
    visual: "twine",
    tools: "Twine · Harlowe · SugarCube · Branching narrative design",
    text: "A rebuilt branching horror-comedy interactive story based on the surviving original script and choices. Explore the recovered playable pathways, from a haunted delivery app to several possible endings.",
    prototypeUrl: "/projects/doordash-chronicles.html"
  },
];

export const socialProfiles = [
  { platform: "TikTok", handle: "@elmodrums", followers: "20700", audience: "Audience snapshot", audienceSnapshot: { male: 42, female: 58, countries: ["US", "UK", "Canada", "Australia", "Germany"] }, url: "https://www.tiktok.com/@elmodrums" },
  { platform: "RedNote", handle: "@elmodrums", followers: "8200", audience: "Audience snapshot", audienceSnapshot: { male: 6, female: 94, regionsLabel: "Top cities", regions: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Tianjin", "Chengdu"] }, url: "#" },
  { platform: "Douyin", handle: "@elmodrums", followers: "5800", audience: "Audience snapshot", audienceSnapshot: { male: 56, female: 44, regionsLabel: "Top provinces", regions: ["Guangdong", "Shanghai", "Jiangsu", "Shandong", "Beijing", "Henan"] }, url: "#" },
  { platform: "Instagram", handle: "@elmodrums", followers: "3000", audience: "Audience snapshot", audienceSnapshot: { male: 60.7, female: 39.3, cities: ["Shanghai", "Los Angeles", "New York", "Hong Kong", "Seoul", "Chennai"], countries: ["USA", "China", "South Korea", "India", "Indonesia"] }, url: "https://www.instagram.com/elmodrums/" },
];

export const instagramEmbeds = [
  { title: "Instagram post 1", url: "https://www.instagram.com/p/C8W_LlKuND2/", embedUrl: "https://www.instagram.com/p/C8W_LlKuND2/embed/" },
  { title: "Instagram post 2", url: "https://www.instagram.com/p/CsyhgIiNGEY/", embedUrl: "https://www.instagram.com/p/CsyhgIiNGEY/embed/" },
  { title: "Instagram post 3", url: "https://www.instagram.com/p/DMEM7DXsmVr/", embedUrl: "https://www.instagram.com/p/DMEM7DXsmVr/embed/" },
  { title: "Instagram post 4", url: "https://www.instagram.com/p/DZRhHQuhejM/", embedUrl: "https://www.instagram.com/p/DZRhHQuhejM/embed/" },
  { title: "Instagram post 5", url: "https://www.instagram.com/p/DQk--vqjWp6/", embedUrl: "https://www.instagram.com/p/DQk--vqjWp6/embed/" },
  { title: "Instagram post 6", url: "https://www.instagram.com/p/C-EuOMjs5vg/", embedUrl: "https://www.instagram.com/p/C-EuOMjs5vg/embed/" },
];

export const tiktokEmbeds = [
  { title: "TikTok video 1", url: "https://www.tiktok.com/@elmodrums/video/7128666372317465899", embedUrl: "https://www.tiktok.com/embed/v2/7128666372317465899" },
  { title: "TikTok video 2", url: "https://www.tiktok.com/@elmodrums/video/7112456017878732075", embedUrl: "https://www.tiktok.com/embed/v2/7112456017878732075" },
  { title: "TikTok video 3", url: "https://www.tiktok.com/@elmodrums/video/7123710136463592750", embedUrl: "https://www.tiktok.com/embed/v2/7123710136463592750" },
  { title: "TikTok video 4", url: "https://www.tiktok.com/@elmodrums/video/7081327062211906859", embedUrl: "https://www.tiktok.com/embed/v2/7081327062211906859" },
  { title: "TikTok video 5", url: "https://www.tiktok.com/@elmodrums/video/7077841207925280046", embedUrl: "https://www.tiktok.com/embed/v2/7077841207925280046" },
  { title: "TikTok video 6", url: "https://www.tiktok.com/@elmodrums/video/7100749187507146027", embedUrl: "https://www.tiktok.com/embed/v2/7100749187507146027" },
];

export const gamingProfiles = [
  { platform: "Valorant", handle: "XFireStar.Gaming", url: "#", note: "Controller-main highlights, clips & community." },
  { platform: "Marvel Rivals", handle: "XFireStar.Gaming", url: "#", note: "Tank-main gameplay, clips & highlights." },
];

export const games = [
  { title: "Valorant", role: "Tactical FPS · Controller main", color: "#ff526d" },
  { title: "Marvel Rivals", role: "Hero shooter · Tank main", color: "#d76cff" },
];

export type GameHighlight = {
  title: string;
  note: string;
  video: string;
  map?: string;
  onCamera?: boolean;
};

// Keep new Valorant clips here. On-camera moments lead the vault so visitors meet Yuqian first.
export const valorantHighlights: GameHighlight[] = [
  { title: "Sunset", map: "Sunset", note: "Controller main · highlight", video: "/videos/valorant-sunset-double-ace.mp4", onCamera: true },
  { title: "Sunset", map: "Sunset", note: "Controller main · highlight", video: "/videos/valorant-sunset-double-ace-first.mp4", onCamera: true },
  { title: "Corrode", map: "Corrode", note: "Controller main · highlight", video: "/videos-web/valorant-corridor-ace-web.mp4", onCamera: true },
  { title: "Ascent", map: "Ascent", note: "Valorant gameplay clip", video: "/videos/valorant-tg-2024-04-11.mp4", onCamera: true },
  { title: "Bind", map: "Bind", note: "Valorant gameplay clip", video: "/videos/valorant-tg-2025-02-15.mp4", onCamera: true },
  { title: "Ascent", map: "Ascent", note: "Valorant gameplay clip", video: "/videos/valorant-tg-2024-03-06.mp4", onCamera: true },
  { title: "Ascent", map: "Ascent", note: "Controller main · six-kill highlight", video: "/videos-web/valorant-ascent-6k-web.mp4" },
  { title: "Split", map: "Split", note: "Valorant gameplay clip", video: "/videos/valorant-nov-04-0833.mp4" },
  { title: "Haven", map: "Haven", note: "Valorant gameplay clip", video: "/videos/valorant-nov-04-2152.mp4" },
  { title: "Icebox", map: "Icebox", note: "Valorant gameplay clip", video: "/videos/valorant-nov-05-1920.mp4" },
  { title: "Lotus", map: "Lotus", note: "Valorant gameplay clip", video: "/videos/valorant-nov-02-1752.mp4" },
  { title: "Talking Head", note: "On-camera Valorant commentary", video: "/videos/valorant-nov-02-2054.mp4" },
  { title: "Lotus", map: "Lotus", note: "Valorant gameplay clip", video: "/videos/valorant-share-a3e7.mp4" },
  { title: "Sunset", map: "Sunset", note: "Valorant gameplay clip", video: "/videos/valorant-share-c16c.mp4" },
  { title: "Split", map: "Split", note: "Valorant gameplay clip", video: "/videos/valorant-lv-2024-04-14.mp4" },
  { title: "Sunset", map: "Sunset", note: "Valorant gameplay clip", video: "/videos/valorant-lv-2025-11-03.mp4" },
  { title: "Ascent", map: "Ascent", note: "Valorant gameplay clip", video: "/videos/valorant-9c19.mp4" },
];

export const marvelRivalsHighlights: GameHighlight[] = [
  { title: "Stream Highlight", note: "Tank main · gameplay highlight", video: "/videos/marvel-rivals-may-11.mp4" },
  { title: "Funny Moments", note: "Tank main · gameplay highlight", video: "/videos/marvel-rivals-december-24.mp4" },
];

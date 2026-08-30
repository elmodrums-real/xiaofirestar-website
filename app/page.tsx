"use client";

import { FormEvent, SyntheticEvent, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { actingScenes, appearances, brands, games, gamingProfiles, instagramEmbeds, marvelRivalsHighlights, socialProfiles, technicalProjects, tiktokEmbeds, tracks, upcomingFeatures, valorantHighlights, type Appearance, type GameHighlight, voiceDemos } from "./data";

const roles = ["Model", "Dancer", "Language", "Bridging-Cultures", "Creator", "Technologist"];
const socialGraphics: Record<string, string> = { TikTok: "/images/social-tiktok.png", Douyin: "/images/social-tiktok.png", RedNote: "/images/social-rednote.png", Instagram: "/images/social-instagram.jpg" };

function Star({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`star ${className}`}>✦</span>;
}

function VideoModal({ item, onClose }: { item: Appearance; onClose: () => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
    <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close video">×</button>
      {item.gallery?.length ? <div className="appearance-gallery" aria-label={`${item.title} photo gallery`}>{item.gallery.map((image, index) => <img key={image} src={image} alt={`${item.accessibilityCaption} — photo ${index + 1}`} />)}</div> : item.highlightClip ? <video controls autoPlay poster={item.thumbnail} aria-label={item.accessibilityCaption}><source src={item.highlightClip} type="video/mp4" /></video> : item.embedUrl ? <iframe className="video-embed" src={item.embedUrl} title={`${item.title} video player`} allow="autoplay; fullscreen" allowFullScreen /> : <div className="video-placeholder" style={{ backgroundImage: `linear-gradient(135deg, rgba(21,9,63,.26), rgba(255,62,164,.3)), url(${item.thumbnail})` }}><Star /><p>Highlight clip is being prepared.</p></div>}
      <p className="eyebrow">{item.client}</p>
      <h3 id="modal-title">{item.title}</h3>
      <p>{item.description}</p>
      {item.fullWorkUrl ? <a className="button button-pink" href={item.fullWorkUrl} target="_blank" rel="noreferrer">Watch full collaboration ↗</a> : <span className="button button-muted">Full link coming soon</span>}
    </div>
  </div>;
}

function GameClipModal({ clip, onClose }: { clip: GameHighlight; onClose: () => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
    <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="game-clip-title" onMouseDown={(event) => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close video">×</button>
      <video controls autoPlay playsInline preload="metadata" aria-label={`${clip.title} Valorant highlight`}>
        <source src={clip.video} type="video/mp4" />
        Your browser does not support this video.
      </video>
      <p className="eyebrow">XFireStar.Gaming · Valorant</p>
      <h3 id="game-clip-title">{clip.title}</h3>
      <p>{clip.note}</p>
    </div>
  </div>;
}

function FeedCarousel({ posts, kind }: { posts: { title: string; embedUrl: string }[]; kind: "instagram" | "tiktok" }) {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * track.current.clientWidth, behavior: "smooth" });
  return <div className="embed-carousel"><div className="embed-controls" aria-label={`${kind} feed controls`}><button type="button" onClick={() => move(-1)} aria-label="Previous posts">←</button><span>{posts.length} posts</span><button type="button" onClick={() => move(1)} aria-label="Next posts">→</button></div><div ref={track} className={`${kind}-embed-grid`}>{posts.map((post) => <iframe key={post.embedUrl} src={post.embedUrl} title={post.title} loading="lazy" allow={kind === "tiktok" ? "encrypted-media; fullscreen" : "encrypted-media"} allowFullScreen={kind === "tiktok"} />)}</div></div>;
}

export default function Home() {
  const pathname = usePathname();
  const view = pathname === "/" ? "home" : pathname === "/brands" ? "appearances" : pathname.split("/")[1] || "home";
  const [selectedAppearance, setSelectedAppearance] = useState<Appearance | null>(null);
  const [selectedGameClip, setSelectedGameClip] = useState<GameHighlight | null>(null);
  const [valorantMap, setValorantMap] = useState("All maps");
  const [language, setLanguage] = useState("All");
  const [collaborationFilter, setCollaborationFilter] = useState("All Orbits");
  const cleanLogoBackground = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    if (image.dataset.cleaned || !image.src.includes("/images/")) return;
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d");
    if (!context || !canvas.width || !canvas.height) return;
    context.drawImage(image, 0, 0);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = pixels;
    const visited = new Uint8Array(width * height);
    const queue: number[] = [];
    const enqueue = (x: number, y: number) => { if (x >= 0 && y >= 0 && x < width && y < height) queue.push(y * width + x); };
    for (let x = 0; x < width; x += 1) { enqueue(x, 0); enqueue(x, height - 1); }
    for (let y = 0; y < height; y += 1) { enqueue(0, y); enqueue(width - 1, y); }
    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const pixel = queue[cursor];
      if (visited[pixel]) continue;
      visited[pixel] = 1;
      const offset = pixel * 4;
      const red = data[offset], green = data[offset + 1], blue = data[offset + 2];
      if (red >= 235 && green >= 235 && blue >= 235 && Math.max(red, green, blue) - Math.min(red, green, blue) <= 12) {
        data[offset + 3] = 0;
        const x = pixel % width, y = Math.floor(pixel / width);
        enqueue(x + 1, y); enqueue(x - 1, y); enqueue(x, y + 1); enqueue(x, y - 1);
      }
    }
    context.putImageData(pixels, 0, 0);
    image.dataset.cleaned = "true";
    image.src = canvas.toDataURL("image/png");
  };
  const [genre, setGenre] = useState("All");
  const [sent, setSent] = useState(false);
  const collaborationCategory = (item: Appearance) => {
    const role = item.role.toLowerCase();
    if (role.includes("campaign") || role.includes("featured talent")) return "Campaign Mode";
    if (role.includes("performer")) return "On Stage";
    return "Creator Frequency";
  };
  const filteredCollaborations = appearances.filter((item) => collaborationFilter === "All Orbits" || collaborationCategory(item) === collaborationFilter);
  const visibleTracks = useMemo(() => tracks.filter((track) => (language === "All" || track.language.includes(language)) && (genre === "All" || track.genre.includes(genre))), [language, genre]);
  const valorantMaps = ["All maps", ...Array.from(new Set(valorantHighlights.map((clip) => clip.map).filter((map): map is string => Boolean(map))))];
  const visibleValorantHighlights = valorantHighlights.filter((clip) => valorantMap === "All maps" || clip.map === valorantMap);
  const languages = ["All", "English", "Mandarin", "French", "Spanish"];
  const genres = ["All", "Pop", "Mandopop", "Ballad", "Dance-pop", "Theatrical"];

  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return <main className={`view-${view}`}>
    <nav className="nav"><a className="wordmark" href="/">YUQIAN<span>/ 索煜倩</span></a><div className="nav-links"><a href="/appearances">Collaborations</a><a href="/performer">小FireStar</a><a href="/social">Social</a><a href="/gaming">Gaming</a><a href="/technical">Tech</a><a href="/contact">Contact</a></div></nav>

    <section className="hero" id="top">
      <div className="galaxy galaxy-one" /><div className="galaxy galaxy-two" /><div className="nebula nebula-one" /><div className="nebula nebula-two" />
      <Star className="star-one" /><Star className="star-two" /><Star className="star-three" /><span className="planet planet-one" /><span className="planet planet-two" /><span className="planet planet-three" /><span className="planet planet-four" /><span className="shooting-star shooting-one" /><span className="shooting-star shooting-two" /><span className="shooting-star shooting-three" /><span className="shooting-star shooting-four" /><span className="shooting-star shooting-five" /><span className="shooting-star shooting-six" /><span className="shooting-star shooting-seven" /><span className="twinkle twinkle-one">✦</span><span className="twinkle twinkle-two">✦</span><span className="twinkle twinkle-three">✦</span><span className="twinkle twinkle-four">✦</span>
      <div className="hero-copy"><p className="eyebrow">SPORTS · ARTS · ENTERTAINMENT · TECHNOLOGY</p><h1><span>YUQIAN</span><em>is a star.</em></h1><p className="hero-text">A multilingual artist working across sports, arts, entertainment, and technology—bridging Eastern and Western cultures, together.</p><a className="button button-light" href="/appearances">Explore the universe <span>→</span></a></div>
      <div className="hero-portrait"><div className="portrait-orbit orbit-a">SING · DANCE · ACT · CREATE</div><div className="portrait-orbit orbit-b">✦ SHANGHAI · LA · EVERYWHERE ✦</div><img className="hero-memory memory-one" src="/images/about-hair-canva.jpg" alt="Yuqian in a colorful editorial portrait" /><img className="hero-memory memory-two" src="/images/about-night-canva.png" alt="Yuqian in a neon-lit portrait" /><div className="hero-collage-note">EAST ↔ WEST<br />ONE UNIVERSE</div></div>
      <div className="role-rail" aria-label="Yuqian roles">{roles.map((role, index) => <a key={role} href={index < 4 ? "/performer" : "/technical"}>{role}</a>)}</div>
    </section>

    <section className="intro section"><div className="section-label"><Star /> 01 / THE STORY</div><div><p className="display-copy">Sports. Arts. Entertainment. <i>Together.</i></p><p className="body-copy">An international, multilingual singer, dancer and performance artist working between the Americas and Asia. Yuqian combines elite athletic discipline with performance artistry, connecting global audiences on stage, on screen, and through cross-cultural storytelling.</p></div><div className="intro-media"><img className="intro-image" src="/images/pastel-city.jpg" alt="Yuqian in a colorful outdoor fashion image" /></div></section>
    <section className="upcoming section"><div className="section-heading"><div><p className="eyebrow">COMING INTO ORBIT</p><h2>Up <i>next.</i></h2></div><p>New music, screen moments and live performances—watch this space for official announcements.</p></div><div className="upcoming-grid">{upcomingFeatures.map((feature, index) => <article className="upcoming-card" key={feature.title}><img src={feature.image} alt="" /><div><p className="card-meta">0{index + 1} / {feature.kind}</p><h3>{feature.title}</h3><p>{feature.description}</p><span>{feature.timing} <b>✦</b></span></div></article>)}</div></section>
    <section className="home-explore section"><p className="eyebrow">CHOOSE AN ORBIT</p><h2>This is the all-inclusive <i>Yuqian universe.</i></h2><div>{[{ href:"/appearances",label:"Collaborations"},{href:"/performer",label:"小FireStar"},{href:"/social",label:"Social"},{href:"/gaming",label:"Gaming"},{href:"/technical",label:"Tech"}].map((item,index)=><a href={item.href} key={item.href}><span>0{index+1}</span>{item.label}<b>↗</b></a>)}</div></section>

    <section className="appearances section section-deep" id="appearances"><div className="section-heading"><div><p className="eyebrow">02 / COLLABORATIONS</p><h2>Collaborations +<br />Appearances <Star /></h2></div><p>Open a moment to explore select images or watch a full collaboration.</p></div><div className="collaboration-filters" aria-label="Filter collaborations"><span>FIND YOUR ORBIT</span>{["All Orbits", "On Stage", "Campaign Mode", "Creator Frequency"].map((filter) => <button key={filter} className={collaborationFilter === filter ? "active" : ""} onClick={() => setCollaborationFilter(filter)}>{filter}</button>)}</div><div className="appearance-grid">{filteredCollaborations.map((item) => <article className="appearance-card" key={item.title}><button onClick={() => setSelectedAppearance(item)} className="media-button" aria-label={`Open ${item.title}`}>{item.highlightClip ? <video src={item.highlightClip} muted autoPlay loop playsInline preload="metadata" aria-hidden="true" /> : item.embedUrl ? <iframe src={item.embedUrl} title="" tabIndex={-1} aria-hidden="true" allow="autoplay" /> : <img src={item.thumbnail} alt="" />}<span className="play">{item.gallery?.length ? "▦" : "▶"}</span></button><div className="card-content"><p className="card-meta">{item.client}</p><h3>{item.title}</h3><p>{item.role} · {item.format}</p><button className="text-button" onClick={() => setSelectedAppearance(item)}>{item.gallery?.length ? "View photo gallery" : item.fullWorkUrl ? "Watch full video" : "Watch highlight"} <span>↗</span></button></div></article>)}</div></section>

    <section className="brands section" id="brands"><div className="section-heading"><div><p className="eyebrow">03 / COLLABORATIONS</p><h2>Brands in my orbit.</h2></div><p>A selected constellation of brands, platforms and cultural partners.</p></div><div className="brand-wall" aria-label="Brands Yuqian has collaborated with">{brands.map((brand) => <div key={brand.name} className={`brand-logo-mark brand-logo-${brand.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}><img src={brand.logo} alt={`${brand.name} logo`} onLoad={cleanLogoBackground} onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.add("logo-name-fallback"); }} /><span>{brand.name}</span></div>)}</div></section>

    <section className="acting section section-cobalt" id="acting"><div className="section-heading"><div><p className="eyebrow">04 / ACTING & VOICE</p><h2>In character.</h2></div><p>Screen scenes, bilingual performance and voice work—with a reel available on request.</p></div><div className="acting-grid">{actingScenes.map((scene) => <article className="scene-card" key={scene.title}><img src={scene.image} alt="" /><div><p className="card-meta">{scene.type} · {scene.language}</p><h3>{scene.title}</h3><p>{scene.description}</p><a className="text-button" href="#contact">Request full reel ↗</a></div></article>)}</div><div className="voice-row"><div><p className="eyebrow">VOICE ACTING DEMOS</p><h3>Listen close.</h3></div>{voiceDemos.map((demo, index) => <div className="audio-card" key={demo.title}><span>0{index + 1}</span><strong>{demo.title}</strong><audio controls preload="metadata"><source src={demo.file} type="audio/mpeg" /></audio></div>)}</div></section>

    <section className="performer section" id="performer"><div className="performer-cosmos" aria-hidden="true"><span className="performer-meteor meteor-one" /><span className="performer-meteor meteor-two" /><span className="performer-meteor meteor-three" /><span className="performer-meteor meteor-four" /><span className="performer-meteor meteor-five" /><span className="performer-spark spark-one">✦</span><span className="performer-spark spark-two">✦</span><span className="performer-spark spark-three">✦</span><span className="performer-spark spark-four">✦</span><span className="performer-spark spark-five">✦</span><span className="performer-spark spark-six">✦</span></div><div className="playlist-head"><div><p className="eyebrow">05 / PERFORMER</p><h2>小FireStar&apos;s<br /><i>playlist.</i></h2><p>Live vocal selections, original music, and performance-ready songs.</p></div><div className="reel-stack">{[{title:"English Singing Reel",tag:"VOCAL / ENGLISH",file:"/videos/english-singing-reel.mp4",poster:"/images/blue-stage.jpg"},{title:"Non-English Performance Reel",tag:"MULTILINGUAL / PERFORMANCE",file:"/videos/non-english-performance-reel.mp4",poster:"/images/blue-stage.jpg"},{title:"Dance Reel",tag:"MOVEMENT / DANCE",file:"/videos/dance-reel.mp4",poster:"/images/sport.jpg"}].map((reel,index)=><a className="now-playing" href={reel.file ?? "#contact"} target={reel.file ? "_blank" : undefined} rel={reel.file ? "noreferrer" : undefined} key={reel.title}>{reel.file ? <video src={reel.file} poster={reel.poster} muted autoPlay loop playsInline preload="auto" aria-hidden="true" /> : <img src={index === 2 ? "/images/sport.jpg" : "/images/blue-stage.jpg"} alt="" />}<div><p className="eyebrow">0{index+1} / {reel.tag}</p><strong>{reel.title}</strong><span>{reel.file ? "Watch reel ↗" : "Request full reel ↗"}</span><div className="progress"><i /></div></div></a>)}</div></div>
      <div className="filters"><div><span>FILTER BY LANGUAGE</span>{languages.map((item) => <button key={item} onClick={() => setLanguage(item)} className={language === item ? "active" : ""}>{item}</button>)}</div><div><span>FILTER BY GENRE</span>{genres.map((item) => <button key={item} onClick={() => setGenre(item)} className={genre === item ? "active" : ""}>{item}</button>)}</div></div>
      <div className="track-list">{visibleTracks.length ? visibleTracks.map((track, index) => <div className="track" key={`${track.artist}-${track.songTitle}`}><span className="track-number">{String(index + 1).padStart(2, "0")}</span><div><strong>{track.songTitle}</strong><p>{track.artist}</p></div><span>{track.language}</span><span>{track.genre}</span><span>{track.performanceType}</span><b>{track.status}</b></div>) : <p className="empty">No songs in this constellation yet. Try another filter.</p>}</div>
    </section>

    <section className="social section section-deep" id="social">
      <div className="social-cosmos" aria-hidden="true">
        <span className="social-twinkle social-twinkle-one">✦</span><span className="social-twinkle social-twinkle-two">✦</span><span className="social-twinkle social-twinkle-three">✦</span><span className="social-twinkle social-twinkle-four">✦</span><span className="social-twinkle social-twinkle-five">✦</span>
        <span className="social-galaxy social-galaxy-one" /><span className="social-galaxy social-galaxy-two" />
        <span className="social-meteor social-meteor-one" /><span className="social-meteor social-meteor-two" /><span className="social-meteor social-meteor-three" />
      </div>
      <div className="section-heading"><div><p className="eyebrow">06 / COMMUNITY</p><h2>Across the feed.</h2></div><div className="social-heading-actions"><p>Audience information is available for partnerships and kept current in the media kit.</p><div className="social-resource-menu"><span>Brand resources</span><a className="button button-light social-epk-link" href="/Yuqian-EPK.pdf" target="_blank" rel="noreferrer">EPK · English ↗</a><a className="button button-light social-epk-link" href="https://www.canva.com/d/MiaWStjr51qNCcx" target="_blank" rel="noreferrer">EPK · 中文 ↗</a><small>Media Kit · coming soon</small></div></div></div>
      <div className="social-grid">{socialProfiles.map((profile) => {
        const icon = ({ TikTok: "♪", RedNote: "✿", Douyin: "◉", Instagram: "◎" } as Record<string, string>)[profile.platform] ?? "✦";
        return <a href={profile.url} target={profile.url !== "#" ? "_blank" : undefined} rel="noreferrer" className={`social-card social-card-${profile.platform.toLowerCase()}`} key={profile.platform}>
          <span className="social-icon" aria-hidden>{socialGraphics[profile.platform] ? <img src={socialGraphics[profile.platform]} alt="" /> : icon}</span><h3>{profile.platform}</h3><p>{profile.handle}</p><strong className="follower-count"><span>{profile.followers}</span> {profile.platform === "RedNote" || profile.platform === "Douyin" ? "fans" : "followers"}</strong><small>{profile.audience}</small>
          {profile.audienceSnapshot && <div className="audience-chart" aria-label={`${profile.platform} audience demographics`}>
            <div className="gender-chart"><span className="male" style={{ width: `${profile.audienceSnapshot.male}%` }}>M {profile.audienceSnapshot.male}%</span><span className="female" style={{ width: `${profile.audienceSnapshot.female}%` }}>F {profile.audienceSnapshot.female}%</span></div>
            <div><b>Core ages</b><div className="audience-pills">{profile.audienceSnapshot.ages.map((age) => <span key={age}>{age}</span>)}</div></div>
            {profile.audienceSnapshot.ageByGender && <div><b>{profile.audienceSnapshot.secondaryAgeLabel ?? "Age detail"}</b>{profile.audienceSnapshot.ageByGender.map((detail) => <p key={detail}>{detail}</p>)}</div>}
            {profile.audienceSnapshot.cities && <div><b>Top cities</b><div className="audience-pills">{profile.audienceSnapshot.cities.map((city) => <span key={city}>{city}</span>)}</div></div>}
            {profile.audienceSnapshot.countries && <div><b>Top countries</b><div className="audience-pills">{profile.audienceSnapshot.countries.map((country) => <span key={country}>{country}</span>)}</div></div>}
            {profile.audienceSnapshot.regions && <div><b>{profile.audienceSnapshot.regionsLabel}</b><div className="audience-pills">{profile.audienceSnapshot.regions.map((region) => <span key={region}>{region}</span>)}</div></div>}
          </div>}
          <em>Last updated: August 11, 2026 ↗</em>
        </a>;
      })}</div>
      <section className="overall-audience" aria-label="Cross-platform audience summary"><div><p className="eyebrow">ALL PLATFORMS · ONE GALAXY</p><h3>Your audience travels.</h3><p>A global, youth-forward community across music, culture, fashion and play—with 18–34 as the core audience.</p></div><div className="overall-gender"><div className="audience-donut" aria-label="62 percent female and 38 percent male audience"><strong>62<span>%</span></strong><small>female</small></div><div><b>Cross-platform gender mix</b><p>Approx. 62% female · 38% male, weighted by current follower totals.</p></div></div><div className="overall-locations"><b>Audience hubs</b><p>USA · China · South Korea · India · Indonesia · UK · Canada · Australia · Germany</p><p>Shanghai · Los Angeles · New York · Hong Kong · Seoul · Beijing · Guangzhou · Shenzhen</p></div></section>
      <div className="instagram-feed-preview"><div className="feed-preview-heading"><div><p className="eyebrow">FROM INSTAGRAM</p><h3>In the <i>feed.</i></h3></div><a className="button button-light" href="https://www.instagram.com/elmodrums/" target="_blank" rel="noreferrer">Follow @elmodrums ↗</a></div><FeedCarousel kind="instagram" posts={instagramEmbeds} /></div>
      <div className="tiktok-feed-preview"><div className="feed-preview-heading"><div><p className="eyebrow">FROM TIKTOK</p><h3>Press <i>play.</i></h3></div><a className="button button-light" href="https://www.tiktok.com/@elmodrums" target="_blank" rel="noreferrer">Follow @elmodrums ↗</a></div><FeedCarousel kind="tiktok" posts={tiktokEmbeds} /></div>
    </section>

    <section className="gaming section" id="gaming">
      <div className="section-heading"><div><p className="eyebrow">07 / GAMING UNIVERSE</p><h2>Press <i>play.</i></h2></div><p>Competitive energy, gameplay highlights and a gaming community built around the games I love.</p></div>
      <div className="game-grid">{games.map((game,index)=><article key={game.title} className={`game-card game-card-${index + 1}`} style={{background:game.color}}><span>0{index+1}</span><h3>{game.title}</h3><p>{game.role}</p><b>✦</b></article>)}</div>
      <div className="gaming-accounts">{gamingProfiles.map((profile)=><a href={profile.url} key={profile.platform} target={profile.url !== "#" ? "_blank" : undefined} rel="noreferrer"><span>GAMING / {profile.platform}</span><strong>{profile.handle}</strong><p>{profile.note}</p><b>↗</b></a>)}</div>
      <div className="game-libraries">
        <section className="clip-library valorant-library" aria-labelledby="valorant-vault-heading">
          <div className="clip-library-heading"><div><p className="eyebrow">VALORANT / CONTROLLER MAIN</p><h3 id="valorant-vault-heading">Highlight <i>vault.</i></h3></div><span>{valorantHighlights.length} clips</span></div>
          <p className="clip-library-copy">On-camera moments lead the queue, followed by the rest of the XFireStar.Gaming archive.</p>
          <div className="map-filter" aria-label="Filter Valorant clips by map"><span>MAP SELECT</span>{valorantMaps.map((map) => <button type="button" className={valorantMap === map ? "active" : ""} onClick={() => setValorantMap(map)} key={map}>{map}</button>)}</div>
          <div className="clip-grid">{visibleValorantHighlights.map((clip, index) => <article className={`clip-card${clip.onCamera ? " clip-card-on-camera" : ""}`} key={clip.video}><button type="button" onClick={() => setSelectedGameClip(clip)} aria-label={`Play ${clip.title}`}><video autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={clip.video} type="video/mp4" /></video><span className="clip-play">▶</span>{clip.onCamera && <em>ON CAMERA</em>}</button><p>0{String(index + 1).padStart(2, "0")}</p><h4>{clip.title}</h4><small>{clip.note}</small></article>)}</div>
        </section>
        <section className="clip-library marvel-library" aria-labelledby="marvel-vault-heading">
          <div className="clip-library-heading"><div><p className="eyebrow">MARVEL RIVALS / TANK MAIN</p><h3 id="marvel-vault-heading">Hero <i>vault.</i></h3></div><span>{marvelRivalsHighlights.length} clip{marvelRivalsHighlights.length === 1 ? "" : "s"}</span></div>
          {marvelRivalsHighlights.length ? <div className="clip-grid marvel-clip-grid">{marvelRivalsHighlights.map((clip, index) => <article className="clip-card" key={clip.video}><button type="button" onClick={() => setSelectedGameClip(clip)} aria-label={`Play ${clip.title}`}><video autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={clip.video} type="video/mp4" /></video><span className="clip-play">▶</span></button><p>0{String(index + 1).padStart(2, "0")}</p><h4>{clip.title}</h4><small>{clip.note}</small></article>)}</div> : <div className="empty-clip-vault"><b>✦</b><h4>Marvel Rivals clips are landing soon.</h4><p>This half of the galaxy is reserved for tank-main gameplay, highlights and hero moments.</p></div>}
        </section>
      </div>
      <aside className="gaming-community"><p className="eyebrow">JOIN THE GALAXY</p><h3>Find your squad.</h3><p>Highlights, games, and community quests are on the way. The Discord portal will open with the first XFireStar.Gaming drop.</p><span>Discord server · coming soon</span></aside>
    </section>

    <section className="technical section" id="technical">
      <div className="section-heading"><div><p className="eyebrow">07 / ARTIST × TECHNOLOGY</p><h2>Built for the<br />future <Star /></h2></div><p>Interactive media, game design, robotics, live audiovisual performance, and digital exhibitions—made through research, storytelling, and hands-on experimentation.</p></div>
      <div className="tech-grid">
        {technicalProjects.map((project) => <article key={project.title} className="tech-card">
          {project.visual === "twine" ? <div className="twine-preview" aria-label="Twine story preview"><span>DOORDASH CHRONICLES</span><strong>You receive a call.</strong><div><b>Pick up the phone</b><b>Ignore it</b></div><em>CHOOSE YOUR PATH ↗</em></div>
            : project.visual === "capstone" ? <img src="/images/gamer-girl-experience-presentation.png" alt="Illustrated Gamer Girl Experience presentation cover" />
            : project.video ? <video autoPlay muted loop playsInline controls preload="metadata" aria-label={`${project.title} video`}><source src={project.video} type={project.video.endsWith(".mov") ? "video/quicktime" : "video/mp4"} /></video>
            : <img src={project.image} alt="" />}
          <div><p className="card-meta">{project.tools}</p><h3>{project.title}</h3><p>{project.text}</p>
            {(project.paperUrl || project.logbookUrl || project.prototypeUrl || project.projectUrl || project.presentationUrl || project.demoUrl) && <div className="tech-card-links">
              {project.paperUrl && <a href={project.paperUrl} target="_blank" rel="noreferrer">Read paper ↗</a>}
              {project.logbookUrl && <a className="tech-link-logbook" href={project.logbookUrl} target="_blank" rel="noreferrer">Open logbook ↗</a>}
              {project.prototypeUrl && <a href={project.prototypeUrl} target="_blank" rel="noreferrer">Play prototype ↗</a>}
              {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noreferrer">View digital exhibition ↗</a>}
              {project.presentationUrl && <a href={project.presentationUrl} target="_blank" rel="noreferrer">View class deck ↗</a>}
              {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Watch full demo ↗</a>}
            </div>}
          </div>
        </article>)}
      </div>
      <div className="tech-cta"><Star /><h3>Want the full project story?</h3><p>Interested in a creative-technology collaboration, consultation, or speaking conversation?</p><a href="#contact" className="button button-pink">Let&apos;s talk <span>↗</span></a></div>
    </section>

    <section className="contact section section-pink" id="contact"><Star className="contact-star" /><div><p className="eyebrow">08 / CONTACT</p><h2>Let&apos;s make<br />something <i>stellar.</i></h2><p>For bookings, brand partnerships, casting, creative work, and collaborations.</p><div className="contact-links"><a href="mailto:ftyuqian@gmail.com">ftyuqian@gmail.com</a><a href="https://www.tiktok.com/@elmodrums" target="_blank" rel="noreferrer">TikTok @elmodrums ↗</a><a href="https://www.instagram.com/elmodrums/" target="_blank" rel="noreferrer">Instagram @elmodrums ↗</a></div></div><form onSubmit={submit}>{sent ? <div className="form-success">Thank you — your message is ready to send. Connect this form to your email provider before launch.</div> : <><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@email.com" /></label><label>Tell me more<textarea required name="message" placeholder="What are you dreaming up?" /></label><button className="button button-light" type="submit">Send an inquiry ↗</button></>}</form></section>
    <footer><span>© 2026 Yuqian / 索煜倩</span><span>Made in the constellation ✦</span></footer>
    {selectedAppearance && <VideoModal item={selectedAppearance} onClose={() => setSelectedAppearance(null)} />}
    {selectedGameClip && <GameClipModal clip={selectedGameClip} onClose={() => setSelectedGameClip(null)} />}
  </main>;
}

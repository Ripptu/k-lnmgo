import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Pause, Plus, Minus } from 'lucide-react';

const ChairIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
  >
    <path d="M5 21V7M19 21V7M5 11h14M5 15l14-8M19 15L5 7M4 7h16M7 7V3h10v4" />
  </svg>
);

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-white/90 backdrop-blur-md border-b border-brand-black/5">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <ChairIcon className="w-6 h-6 text-brand-black" />
          <div className="flex flex-col leading-none tracking-widest font-bold text-[10px] uppercase">
            <span>MGO Retro</span>
            <span>Klassiker</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xs font-bold uppercase tracking-widest">
          {currentPage === 'home' ? (
            <>
              <a href="#programm" className="hover:text-brand-red transition-colors">Programm</a>
              <a href="#location" className="hover:text-brand-red transition-colors">Location</a>
              <a href="#ueber-uns" className="hover:text-brand-red transition-colors">Über uns</a>
            </>
          ) : (
            <button onClick={() => onNavigate('home')} className="hover:text-brand-red transition-colors">Zurück zum Kino</button>
          )}
        </div>
        <button className="bg-brand-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
          Tickets
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-6 max-w-[1400px] mx-auto min-h-[90vh] flex flex-col justify-between">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <h1 className="text-[14vw] md:text-[11vw] lg:text-[9vw] font-black tracking-tighter leading-[0.85] uppercase">
          Die größten <br />
          <span className="font-serif italic font-normal text-brand-red lowercase tracking-normal pr-4">Klassiker</span><br />
          der 90er.
        </h1>
        <p className="mt-8 text-xl md:text-3xl font-medium tracking-tight max-w-2xl">
          Zurück auf der Leinwand in Köln.
        </p>
        
        <div className="mt-16 flex items-center gap-6 text-sm font-mono uppercase tracking-widest border-l-2 border-brand-black pl-6">
          <div className="flex flex-col gap-1">
            <span className="text-brand-black/50 text-xs">Nächstes Event in</span>
            <span className="font-bold text-lg">28 Tagen</span>
          </div>
          <div className="w-px h-10 bg-brand-black/20 mx-2"></div>
          <div className="flex flex-col gap-1">
            <span className="text-brand-black/50 text-xs">Datum</span>
            <span className="font-bold text-lg">11.04.2026</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="mt-20 w-full h-[50vh] md:h-[60vh] relative overflow-hidden bg-brand-gray"
      >
        <img 
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" 
          alt="Classic Cinema Hall" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 origin-top"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const programs = [
  {
    id: 1,
    title: "Ghostbuster",
    date: "11.04.2026",
    time: "14:00 BIS 16:00 UHR",
    image: "https://s1.directupload.eu/images/260314/ryvzkjxa.webp",
    videoId: "vntAEVjPBzQ"
  },
  {
    id: 2,
    title: "Jurassic Park",
    date: "11.04.2026",
    time: "16:30 BIS 18:45 UHR",
    image: "https://s1.directupload.eu/images/260314/9degn2ct.webp",
    videoId: "QCG15hLSGj0"
  },
  {
    id: 3,
    title: "Scarface & Heat",
    date: "11.04.2026",
    time: "19:30 BIS 01:00 UHR",
    image: "https://s1.directupload.eu/images/260314/gg8zxaa6.webp",
    videoId: "7pQQHnqBa2E"
  },
  {
    id: 4,
    title: "2 Horror Klassiker",
    date: "11.04.2026",
    time: "21:00 BIS 01:30 UHR",
    image: "https://s1.directupload.eu/images/260314/ap7s6xtp.webp",
    videoId: "dDefZNaE0Mw"
  },
  {
    id: 5,
    title: "Freitag der 13.",
    date: "11.04.2026",
    time: "23:00 BIS 01:00 UHR",
    image: "https://s1.directupload.eu/images/260314/cu4gayqc.webp",
    videoId: "XqEQzP0zX_o"
  }
];

const ProgramCard = ({ prog, idx }: { prog: typeof programs[0], idx: number }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className="w-full aspect-[2/3] overflow-hidden bg-brand-gray mb-6 relative">
        <img 
          src={prog.image} 
          alt={prog.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
          draggable="false"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold uppercase tracking-tight leading-none">{prog.title}</h3>
        <p className="text-xs font-mono uppercase tracking-widest text-brand-black/60 mt-2">
          {prog.date} — {prog.time}
        </p>
        <div className="mt-6 flex items-center text-sm font-bold uppercase tracking-widest group-hover:text-brand-red transition-colors">
          Tickets Kaufen
          <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </div>
  );
};

const Program = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const scroll = () => {
      if (scrollRef.current && !isDragging) {
        scrollRef.current.scrollLeft += 0.4;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const extendedPrograms = [...programs, ...programs, ...programs, ...programs];

  return (
    <section id="programm" className="py-32 overflow-hidden">
      <div className="px-6 max-w-[1400px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-20"
        >
          Aktuelles Programm
        </motion.h2>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-hidden cursor-grab active:cursor-grabbing px-6 w-full pb-10"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {extendedPrograms.map((prog, idx) => (
          <div key={idx} className="w-[280px] md:w-[350px] shrink-0" onDragStart={(e) => e.preventDefault()}>
            <ProgramCard prog={prog} idx={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};

const movies = [
  "Pulp Fiction",
  "Terminator 2",
  "Matrix",
  "Fight Club",
  "Jurassic Park"
];

const Voting = () => {
  const [voted, setVoted] = useState<number | null>(null);

  return (
    <section className="py-32 bg-brand-gray">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-20"
        >
          Was wollt ihr als <br/>
          <span className="font-serif italic font-normal text-brand-red lowercase pr-2">Nächstes</span> sehen?
        </motion.h2>

        <div className="flex flex-col gap-0 border-t border-brand-black/10">
          {movies.map((movie, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => setVoted(idx)}
              className="flex items-center justify-between py-8 border-b border-brand-black/10 cursor-pointer group hover:bg-white/50 transition-colors px-6 -mx-6"
            >
              <span className={`text-3xl md:text-5xl font-bold uppercase tracking-tight transition-colors ${voted === idx ? 'text-brand-red' : 'text-brand-black group-hover:text-brand-black/70'}`}>
                {movie}
              </span>
              <div className="w-10 h-10 flex items-center justify-center shrink-0 ml-4">
                {voted === idx ? (
                  <div className="w-5 h-5 rounded-full bg-brand-red" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-brand-black group-hover:border-brand-red transition-colors" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="ueber-uns" className="py-32 px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col justify-center"
      >
        <h2 id="location" className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">
          Die Location & <br/>Über Uns
        </h2>
        <p className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-tight text-brand-black/90">
          Wir bringen das echte Kino-Feeling der 90er zurück. Keine Kompromisse. Bis zu 800 Plätze, modernste Projektion und der Charme der goldenen Kino-Ära.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        className="flex flex-col justify-end"
      >
        <div className="bg-brand-black text-white p-12 md:p-16 flex flex-col gap-10">
          <h3 className="text-3xl font-bold uppercase tracking-tight">
            Bleib auf dem Laufenden
          </h3>
          <p className="text-sm font-mono uppercase tracking-widest text-white/60 leading-relaxed">
            Erfahre als Erstes von neuen Screenings und exklusiven Tickets.
          </p>
          <form className="flex flex-col sm:flex-row items-start sm:items-end gap-6 mt-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 w-full border-b border-white/30 pb-3">
              <input 
                type="email" 
                placeholder="DEINE E-MAIL ADRESSE" 
                className="w-full bg-transparent text-sm font-mono uppercase tracking-widest outline-none placeholder:text-white/30"
              />
            </div>
            <button type="submit" className="text-sm font-bold uppercase tracking-widest hover:text-brand-red transition-colors pb-3 shrink-0">
              Abonnieren
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="py-16 px-6 border-t border-brand-black/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="flex items-center gap-4">
          <ChairIcon className="w-6 h-6 text-brand-black" />
          <span className="text-xs font-bold uppercase tracking-widest">
            © 2026 MGO Retro Klassiker
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-8 text-xs font-mono uppercase tracking-widest text-brand-black/60">
          <button onClick={() => onNavigate('impressum')} className="hover:text-brand-black transition-colors uppercase">Impressum</button>
          <button onClick={() => onNavigate('datenschutz')} className="hover:text-brand-black transition-colors uppercase">Datenschutz</button>
          <button onClick={() => onNavigate('agb')} className="hover:text-brand-black transition-colors uppercase">AGB</button>
        </div>
      </div>
    </footer>
  );
};

const TechFacts = () => (
  <section className="py-24 px-6 max-w-[1400px] mx-auto text-center border-b border-brand-black/10">
    <p className="text-xs font-bold uppercase tracking-widest text-brand-black/50 mb-6">Für echte Cineasten</p>
    <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug max-w-4xl mx-auto">
      Präsentiert in 4K DCI-Projektion <span className="text-brand-red font-serif italic">/</span> Original 35mm Filmkopie <span className="text-brand-red font-serif italic">/</span> 7.1 Dolby Surround
    </h3>
  </section>
);

const SoundtrackPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.volume = 0.3;
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center border border-brand-black/20 bg-brand-white/80 backdrop-blur-sm text-brand-black hover:text-brand-red hover:border-brand-red transition-colors"
        aria-label="Toggle Soundtrack"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=retro-synthwave-117676.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

const Sponsors = () => {
  const sponsors = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/256px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/256px-Tailwind_CSS_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/256px-Vitejs-logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/256px-Typescript_logo_2020.svg.png"
  ];
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-brand-black/10">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-black/50 mb-12 text-center">Partner & Sponsoren</p>
      <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40">
        {sponsors.map((src, idx) => (
          <img key={idx} src={src} alt="Sponsor" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
        ))}
      </div>
    </section>
  );
};

const faqs = [
  { q: "Gibt es eine Altersfreigabe?", a: "Ja, alle Double-Features sind strikt ab 18 Jahren freigegeben. Bitte bringt einen gültigen Lichtbildausweis mit." },
  { q: "Ist die Location barrierefrei?", a: "Der Kinosaal sowie die sanitären Anlagen im Erdgeschoss sind vollständig rollstuhlgerecht." },
  { q: "Kann ich Tickets stornieren?", a: "Tickets sind grundsätzlich von der Rückgabe ausgeschlossen, können aber an Freunde weitergegeben werden." }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 max-w-[800px] mx-auto">
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">
        Häufige Fragen
      </h2>
      <div className="flex flex-col border-t border-brand-black">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-brand-black">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full py-8 flex items-center justify-between text-left hover:text-brand-red transition-colors"
            >
              <span className="text-xl md:text-2xl font-bold tracking-tight">{faq.q}</span>
              {openIdx === idx ? <Minus className="w-6 h-6 shrink-0" /> : <Plus className="w-6 h-6 shrink-0" />}
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-lg text-brand-black/70 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const Afterparty = () => {
  return (
    <section className="py-32 px-6 bg-brand-black text-brand-white text-center">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-sm font-mono uppercase tracking-widest text-brand-red mb-8">Nach dem Abspann ist nicht Schluss.</p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-12">
          Die offizielle <br/>
          <span className="font-serif italic font-normal text-brand-white lowercase">90s Afterparty</span>
        </h2>
        <div className="inline-block border border-brand-white/20 p-8 md:p-12">
          <p className="text-xl md:text-2xl font-medium tracking-tight mb-6">Foyer & Club Lounge</p>
          <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-red">
            DJ Hell <span className="text-brand-white/30">x</span> Westbam
          </p>
          <p className="mt-8 text-sm font-mono uppercase tracking-widest text-brand-white/50">
            Eintritt frei mit Kinoticket • Ab 01:00 Uhr
          </p>
        </div>
      </div>
    </section>
  );
};

const useKonamiCode = () => {
  const [isRetro, setIsRetro] = useState(false);

  useEffect(() => {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];
    let currentIdx = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === sequence[currentIdx]) {
        currentIdx++;
        if (currentIdx === sequence.length) {
          setIsRetro(r => !r);
          currentIdx = 0;
        }
      } else {
        currentIdx = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return isRetro;
};

const CookieTicket = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTorn, setIsTorn] = useState(false);

  if (!isVisible) return null;

  const handleAccept = () => {
    setIsTorn(true);
    setTimeout(() => setIsVisible(false), 1000);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none flex justify-center w-full px-4">
      <div className="pointer-events-auto relative flex items-center shadow-2xl drop-shadow-2xl">
        {/* Left part of ticket */}
        <motion.div
          animate={isTorn ? { x: -40, y: 60, rotate: -12, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="bg-brand-black text-brand-white p-6 border-r-2 border-dashed border-brand-white/30 flex flex-col justify-between h-32 w-64 md:w-80 relative overflow-hidden"
        >
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-white rounded-full"></div>
          <div className="pl-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-brand-white/50">Eintrittskontrolle</p>
            <p className="text-xl font-black uppercase tracking-tight leading-none mt-1">Cookies & Snacks</p>
            <p className="text-[10px] font-mono uppercase text-brand-white/70 mt-4 leading-relaxed">
              Wir nutzen funktionale Cookies, um deinen Kinobesuch auf dieser Seite zu optimieren.
            </p>
          </div>
        </motion.div>

        {/* Right part of ticket (The stub) */}
        <motion.div
          animate={isTorn ? { x: 40, y: 60, rotate: 12, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="bg-brand-red text-white p-6 flex flex-col justify-center items-center h-32 w-24 md:w-32 cursor-pointer hover:bg-red-700 transition-colors relative overflow-hidden group"
          onClick={handleAccept}
        >
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-white rounded-full"></div>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap group-hover:scale-110 transition-transform">
            Abreißen
          </span>
        </motion.div>
      </div>
    </div>
  );
};

const ContactPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-brand-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-brand-white p-8 md:p-12 max-w-lg w-full border-4 border-brand-black relative shadow-2xl"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-2 border-brand-black hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors font-bold"
        >
          X
        </button>
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
          Gefällt dir die Seite?
        </h3>
        <p className="text-sm font-mono uppercase tracking-widest leading-relaxed text-brand-black/80 mb-8">
          Wenn dir die Website gefällt, schreib mir auf WhatsApp, weil Fiverr zu viele Gebühren verlangt.
        </p>
        <a
          href="https://wa.me/4917624200179"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-brand-black text-white py-4 font-bold uppercase tracking-widest hover:bg-[#25D366] transition-colors"
        >
          WhatsApp: 0176 24200179
        </a>
      </motion.div>
    </div>
  );
};

const LegalPage = ({ title, onBack, children }: { title: string, onBack: () => void, children: React.ReactNode }) => (
  <div className="pt-32 pb-20 px-6 max-w-[800px] mx-auto min-h-[70vh]">
    <button onClick={onBack} className="mb-16 flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-brand-red transition-colors">
      <ArrowRight className="w-5 h-5 rotate-180" /> Zurück zum Kino
    </button>
    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">{title}</h1>
    <div className="flex flex-col gap-8 font-mono text-sm uppercase tracking-widest leading-relaxed text-brand-black/80">
      {children}
    </div>
  </div>
);

export default function App() {
  const isRetro = useKonamiCode();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className={`min-h-screen bg-brand-white text-brand-black selection:bg-brand-red selection:text-white ${isRetro ? 'retro-mode' : ''}`}>
      <div className="film-grain"></div>
      <ContactPopup />
      <SoundtrackPlayer />
      <CookieTicket />
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <TechFacts />
            <Program />
            <Voting />
            <About />
            <FAQ />
            <Sponsors />
            <Afterparty />
          </>
        )}
        
        {currentPage === 'impressum' && (
          <LegalPage title="Impressum" onBack={() => setCurrentPage('home')}>
            <p>MGO Retro Klassiker GmbH<br/>Kinoallee 42<br/>50667 Köln</p>
            <p>Vertreten durch:<br/>Max Mustermann</p>
            <p>Kontakt:<br/>Telefon: 0221 - 123 456 78<br/>E-Mail: info@mgo-retro.de</p>
            <p>Registereintrag:<br/>Eintragung im Handelsregister.<br/>Registergericht: Amtsgericht Köln<br/>Registernummer: HRB 123456</p>
          </LegalPage>
        )}

        {currentPage === 'datenschutz' && (
          <LegalPage title="Datenschutz" onBack={() => setCurrentPage('home')}>
            <p>1. Datenschutz auf einen Blick<br/>Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            <p>2. Datenerfassung auf dieser Website<br/>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            <p>3. Cookies<br/>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.</p>
          </LegalPage>
        )}

        {currentPage === 'agb' && (
          <LegalPage title="AGB" onBack={() => setCurrentPage('home')}>
            <p>§1 Geltungsbereich<br/>Diese Allgemeinen Geschäftsbedingungen gelten für alle Ticketkäufe und Besuche der MGO Retro Klassiker Events.</p>
            <p>§2 Vertragsschluss<br/>Der Vertrag kommt durch den Erwerb einer Eintrittskarte an der Kinokasse oder über unser Online-Ticketsystem zustande.</p>
            <p>§3 Hausordnung<br/>Mit dem Erwerb der Eintrittskarte erkennt der Besucher die Hausordnung des Kinos an. Den Anweisungen des Personals ist Folge zu leisten.</p>
            <p>§4 Rückgabe von Tickets<br/>Gekaufte Tickets sind grundsätzlich von der Rückgabe und dem Umtausch ausgeschlossen. Bei Ausfall einer Vorstellung wird der Kaufpreis erstattet.</p>
          </LegalPage>
        )}
      </main>
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

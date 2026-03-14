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

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-white/90 backdrop-blur-md border-b border-brand-black/5">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChairIcon className="w-6 h-6 text-brand-black" />
          <div className="flex flex-col leading-none tracking-widest font-bold text-[10px] uppercase">
            <span>MGO Retro</span>
            <span>Klassiker</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xs font-bold uppercase tracking-widest">
          <a href="#programm" className="hover:text-brand-red transition-colors">Programm</a>
          <a href="#location" className="hover:text-brand-red transition-colors">Location</a>
          <a href="#ueber-uns" className="hover:text-brand-red transition-colors">Über uns</a>
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
      className="group cursor-pointer flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full aspect-[2/3] overflow-hidden bg-brand-gray mb-6 relative">
        <img 
          src={prog.image} 
          alt={prog.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${isHovered ? 'opacity-0' : 'opacity-100'} grayscale group-hover:grayscale-0`}
          referrerPolicy="no-referrer"
        />
        {isHovered && (
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${prog.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${prog.videoId}&playsinline=1`}
              className="absolute top-1/2 left-1/2 w-[250%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              allow="autoplay"
              frameBorder="0"
            />
          </div>
        )}
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
    </motion.div>
  );
};

const Program = () => {
  return (
    <section id="programm" className="py-32 px-6 max-w-[1400px] mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-20"
      >
        Aktuelles Programm
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10">
        {programs.map((prog, idx) => (
          <ProgramCard key={prog.id} prog={prog} idx={idx} />
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

const Footer = () => {
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
          <a href="#" className="hover:text-brand-black transition-colors">Impressum</a>
          <a href="#" className="hover:text-brand-black transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-brand-black transition-colors">AGB</a>
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

export default function App() {
  const isRetro = useKonamiCode();

  return (
    <div className={`min-h-screen bg-brand-white text-brand-black selection:bg-brand-red selection:text-white ${isRetro ? 'retro-mode' : ''}`}>
      <div className="film-grain"></div>
      <SoundtrackPlayer />
      <Navbar />
      <main>
        <Hero />
        <TechFacts />
        <Program />
        <Voting />
        <About />
        <FAQ />
        <Sponsors />
        <Afterparty />
      </main>
      <Footer />
    </div>
  );
}

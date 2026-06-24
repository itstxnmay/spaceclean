import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { CustomCursor, TouchRippleLayer, MobileMenu, ServiceCard, FeatureCard, Reveal } from './components';

const BRAND = 'SPACE CLEAN';

const SERVICES = [
  { image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop', title: 'Home Deep Clean', subtitle: 'Residential' },
  { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop', title: 'Office & Commercial', subtitle: 'Workspace' },
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1470&auto=format&fit=crop', title: 'New Flat Cleaning', subtitle: 'Move-In' },
];

const EXTRA_SERVICES = [
  { icon: '🛋️', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop', name: 'Sofa & Carpet Cleaning', desc: 'Deep steam extraction for upholstery' },
  { icon: '🚿', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop', name: 'Washroom Cleaning', desc: 'Anti-bacterial deep clean & descaling' },
  { icon: '🍽️', image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=800&auto=format&fit=crop', name: 'Kitchen Deep Clean', desc: 'Grease, chimney & appliance cleaning' },
  { icon: '🪟', image: 'https://i.postimg.cc/BQxkTGyW/nathan-fertig-U8zsjm-KA840-unsplash.jpg', name: 'Window Cleaning', desc: 'Streak-free glass & frame polish' },
  { icon: '🌿', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop', name: 'Garden Cleaning', desc: 'Lawn, plants & outdoor area cleaning' },
  { icon: '🏠', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop', name: 'Terrace Cleaning', desc: 'Full terrace & outdoor space cleaning' },
];

const FEATURES = [
  { icon: '🌿', title: 'Eco-Friendly Products', desc: 'Safe, non-toxic cleaning agents — gentle on your family, pets, and the planet.' },
  { icon: '🎓', title: 'Trained & Verified Staff', desc: 'Every cleaner is background-checked, trained, and uniformed for your peace of mind.' },
  { icon: '🛡️', title: 'Fully Insured Service', desc: 'We carry full liability insurance so your home and belongings are always protected.' },
  { icon: '📅', title: 'Flexible Scheduling', desc: '7 days a week, morning to evening — we work around your calendar, not ours.' },
  { icon: '💸', title: 'Transparent Pricing', desc: 'No hidden charges. Fixed, upfront quotes before we begin any work.' },
  { icon: '✅', title: '100% Satisfaction', desc: 'Not happy? We re-clean for free. Your satisfaction is our guarantee.' },
];

const TESTIMONIALS = [
  {
    name: 'Rikeen Salot',
    initial: 'R',
    color: '#10b981',
    rating: 5,
    time: '8 months ago',
    text: 'Excellent service by the team. I have been calling them for past 5 years and they never disappoint. Entire team is always ready to help, never ignore small things while cleaning. Ram bhai always ensure to give his 100% effort. Keep up the great work!!',
  },
  {
    name: 'Manasvi Narse',
    initial: 'M',
    color: '#f59e0b',
    rating: 5,
    time: '4 months ago',
    text: 'I had taken the washroom service from Space Clean & they were very good at it. Very impressed with the service. Thank you.',
  },
  {
    name: 'Malini Chavali',
    initial: 'M',
    color: '#8b5cf6',
    rating: 5,
    time: '1 year ago',
    text: 'They were very professional and did a great job. Would definitely recommend them for any cleaning services.',
  },
  {
    name: 'Samir Agnihotri',
    initial: 'S',
    color: '#3b82f6',
    rating: 5,
    time: '1 year ago',
    text: 'Did deep clean from Space Clean and they did a fantastic job. Extremely satisfied with their services. Would highly recommend them.',
  },
  {
    name: 'Prasad Shetty',
    initial: 'P',
    color: '#ef4444',
    rating: 5,
    time: '2 years ago',
    text: 'Excellent work. Ram and team did a fantastic job in cleaning our home. Their booking was seamless. They are punctual and came prepared. Extremely hardworking, neat and organised. Great job!',
  },
  {
    name: 'Anand Chauhan',
    initial: 'A',
    color: '#10b981',
    rating: 5,
    time: '10 months ago',
    text: 'The work was done professionally. The people were diligently involved. Service was excellent and cleaning was done very nicely. Worth recommending.',
  },
  {
    name: 'Drishti Bose',
    initial: 'D',
    color: '#f97316',
    rating: 5,
    time: '1 year ago',
    text: 'Great Service! Vinod Yadav, Ayush Singh, and Rahim Hussain did a splendid job of deep cleaning the room, including all the cupboards, mirror, dresser, and every corner of the room! Will definitely book them again.',
  },
  {
    name: 'Lipi Saha',
    initial: 'L',
    color: '#06b6d4',
    rating: 5,
    time: '4 months ago',
    text: 'Very nice work done for extended big window cleaning.',
  },
];



export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050f0a] text-white selection:bg-emerald-500/30 overflow-x-hidden">
      <CustomCursor />
      <TouchRippleLayer />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* BG Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[160px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-[130px] opacity-[0.05] pointer-events-none" />

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 transition-all duration-300 ${scrolled ? 'bg-[#06101a]/80 backdrop-blur-xl' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-2xl">
          <div className="font-display font-bold text-xl sm:text-2xl tracking-widest uppercase text-emerald-400">{BRAND}</div>
          <div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase text-white/60">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#clients" className="hover:text-white transition-colors">Clients</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="hidden md:inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all duration-300 active:scale-95">
            Book Now
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`hamburger-btn md:hidden ${menuOpen ? 'open' : ''}`} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-16 md:pt-48 md:pb-24 px-4 sm:px-6 min-h-hero flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Professional Cleaning in Mumbai
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[2.6rem] leading-[0.9] xs:text-[3rem] sm:text-7xl md:text-8xl lg:text-[110px] font-bold uppercase tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Spotless</span>
              <br />Spaces.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 sm:mt-8 text-sm sm:text-lg text-white/50 max-w-md font-light leading-relaxed">
              Deep clean, office, home & moving cleaning across Andheri, Mumbai. Friendly professional staff, safe products, open 24 hours — always.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
              <a href="#contact" className="w-full sm:w-auto bg-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-3">
                Get Free Estimate →
              </a>
              <a href="#services" className="w-full sm:w-auto bg-white/[0.02] backdrop-blur-xl border border-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 active:scale-95 text-center">
                View Services
              </a>
            </motion.div>
            {/* Stat pills */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-3 mt-8 flex-wrap">
              {[['4.8★','Google Rating'], ['122','Reviews'], ['24 hrs','Open Always']].map(([n, l]) => (
                <div key={l} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <span className="text-emerald-400 font-display font-bold text-sm">{n}</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-wider font-bold">{l}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero image */}
          <div className="relative hidden sm:block">
            <motion.div initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: 0.2 }}
              className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop"
                alt="Professional Cleaning" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" loading="eager" />
            </motion.div>
            {/* Floating badge */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-12 -right-4 md:-right-10 z-20 bg-white/[0.04] backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 text-2xl">🏠</div>
              <div>
                <div className="font-display font-bold text-2xl tracking-tight">1000+</div>
                <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Homes Cleaned</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-24 md:bottom-32 -left-4 md:-left-10 z-20 bg-white/[0.04] backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 text-2xl">⭐</div>
              <div>
                <div className="font-display font-bold text-2xl tracking-tight">4.8</div>
                <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Avg Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="marquee-section w-full overflow-hidden bg-emerald-500/5 backdrop-blur-md border-y border-emerald-500/10 py-3 sm:py-4 md:py-6 relative z-20">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map(copy => (
            <span key={copy} aria-hidden={copy === 1} className="marquee-content font-anton text-4xl sm:text-5xl md:text-6xl text-stroke-heavy uppercase tracking-tight">
              DEEP CLEANING<span className="mx-4 sm:mx-6 text-emerald-400"> • </span>
              OFFICE &amp; WORKPLACE<span className="mx-4 sm:mx-6 text-emerald-400"> • </span>
              SOFA &amp; CARPET<span className="mx-4 sm:mx-6 text-emerald-400"> • </span>
              GARDEN &amp; TERRACE<span className="mx-4 sm:mx-6 text-emerald-400"> • </span>
              OPEN 24 HOURS<span className="mx-4 sm:mx-6 text-emerald-400"> • </span>
              ANDHERI MUMBAI<span className="mx-4 sm:mx-6 text-emerald-400"> • </span>
            </span>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
          <div>
            <Reveal direction="left">
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 md:mb-8">
                Mumbai's Most<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Trusted</span><br />
                Cleaners
              </h2>
            </Reveal>
            <Reveal delay={0.15} direction="left">
              <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed mb-6 md:mb-8">
                Space Clean was founded in Andheri East, Mumbai with one goal — leave every space spotless, fresh, and healthier. We serve Marol, Andheri, and all nearby Mumbai areas. Our trained and friendly team delivers thorough, reliable cleaning — every visit, every time. Open 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.25} direction="left">
              <a href="#contact" className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-500/20 transition-all duration-300 active:scale-95">
                Get a Free Quote
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1} direction="right">
            <div className="hidden lg:grid grid-cols-2 gap-3 sm:gap-4 h-[260px] sm:h-[450px] md:h-[600px]">
              <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] h-full group">
                <img src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1470&auto=format&fit=crop" alt="Clean Kitchen"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="grid grid-rows-2 gap-3 sm:gap-4 h-full">
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] h-full group">
                  <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1470&auto=format&fit=crop" alt="Cleaning Supplies"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
                </div>
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] h-full group">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop" alt="Clean Office"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal direction="left">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Services</span>
                </h2>
                <p className="mt-4 text-white/50 max-w-xl text-base sm:text-lg font-light">
                  From one-time deep cleans to regular maintenance — we cover every corner of your space.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15} direction="right">
              <a href="#contact" className="inline-block bg-white/[0.02] border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 active:scale-95 shrink-0">
                Book Now
              </a>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {SERVICES.map((s, i) => (
              <div key={s.title}>
                <Reveal delay={i * 0.1}>
                  <ServiceCard image={s.image} title={s.title} subtitle={s.subtitle} index={i + 1} />
                </Reveal>
              </div>
            ))}
          </div>

          {/* Additional Services Grid — Image Cards */}
          <Reveal delay={0.3}>
            <div className="mt-12 sm:mt-16">
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.25em] text-center mb-6">Also Available</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {EXTRA_SERVICES.map((s) => (
                  <a key={s.name} href="#contact"
                    className="group relative overflow-hidden rounded-2xl aspect-video border border-white/10 bg-white/5 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] block">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050f0a] via-[#050f0a]/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <div className="text-base sm:text-lg mb-0.5">{s.icon}</div>
                      <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wide text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight">{s.name}</h4>
                      <p className="text-white/40 text-[9px] sm:text-[10px] font-light mt-0.5 hidden sm:block">{s.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>



      {/* ── WHY CHOOSE US ── */}
      <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-16 text-center">
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Space Clean?</span>
              </h2>
              <p className="mt-4 text-white/50 max-w-2xl mx-auto text-base sm:text-lg font-light">
                We don't just clean — we restore freshness and give you your time back.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {FEATURES.map((f, i) => (
              <div key={f.title}>
                <Reveal delay={i * 0.08}>
                  <FeatureCard icon={<span className="text-2xl">{f.icon}</span>} title={f.title} desc={f.desc} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="clients" className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-10 md:mb-16">
          <Reveal>
            <div className="text-center">
              <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-4">Google Reviews</div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Say</span>
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-white font-bold text-lg">4.8</span>
                <span className="text-white/40 text-sm">· 122 Reviews on Google</span>
              </div>
            </div>
          </Reveal>
        </div>

        {[0, 1].map((row) => (
          <div key={row} className={`relative overflow-hidden ${row === 0 ? 'mb-4' : ''}`}>
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-r from-[#050f0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-l from-[#050f0a] to-transparent z-10 pointer-events-none" />
            <div className={row === 0 ? 'testimonial-track' : 'testimonial-track testimonial-track-reverse'}>
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="testimonial-card bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3 hover:border-emerald-500/30 hover:bg-white/[0.05] transition-colors duration-300 cursor-default">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-sm sm:text-base shrink-0"
                      style={{ backgroundColor: t.color + '22', border: `1.5px solid ${t.color}44`, color: t.color }}>
                      {t.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-white text-sm truncate">{t.name}</div>
                      <div className="text-white/30 text-[10px] uppercase tracking-wider">{t.time}</div>
                    </div>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => <span key={si} className="text-yellow-400 text-sm">★</span>)}
                  </div>
                  <p className="text-white/55 text-xs sm:text-sm font-light leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <span className="text-emerald-400 text-[10px]">✓</span>
                    <span className="text-white/25 text-[10px] uppercase tracking-wider font-bold">Verified Google Review</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-10 text-center">
          <Reveal delay={0.3}>
            <a href="https://www.google.com/search?q=space+clean+cleaning+service+mumbai&oq=space+clean&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCECMYJzIHCAMQABiABDIMCAQQABgUGIcCGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIOTg1NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FKaVQ0dEkwLXpVZEE3d0ZMb0JhWWoyd3Frb1RNSnduWm9IMnEwRWJIdllsWjMtSVZOR0VlaWZIdmVHU1pucmM3ekhaRnlwUk5RQXI2SDFzYnBTeEpOZUFvMHhEb2dkcW9feFFxZUpDYmZ5dDNjQ2NueGVqNm44EhdrVEU4YXNMY0x0Q0Q0LUVQOEpUQ3NBdxoiQURzcjlmVC0waXRlNklnT2xYZGpBM21RcVNLQk8yVlBNZxIEODA1MRoBMyoAMAA4AUAAGAAgi5ePnQNKAhAC"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 text-white/60 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:border-emerald-500/40 hover:text-white transition-all duration-300">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              See all 122 reviews on Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Reveal>
            <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Free Estimate — No Obligation
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter mb-6">
              Ready for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Fresh</span> Space?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Get in touch today for a free, no-obligation quote. Serving Andheri, Marol, and all surrounding Mumbai areas — homes, offices, and commercial spaces.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 mb-12">
              <a href="tel:+919987933669" className="bg-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-3">
                📞 Call Us Now
              </a>
              <a href="https://wa.me/919987933669" target="_blank" rel="noopener noreferrer"
                className="bg-white/[0.02] backdrop-blur-xl border border-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3">
                💬 WhatsApp Us
              </a>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto">
            {[
              { icon: '📞', label: '099879 33669', href: 'tel:+919987933669' },
              { icon: '📍', label: 'Marol, Andheri East, Mumbai – 400072', href: 'https://maps.google.com/?q=Marol+Andheri+East+Mumbai' },
            ].map((item, i) => (
              <div key={i}>
              <Reveal delay={0.1 + i * 0.1}>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-300 block">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="text-white/70 text-sm font-light text-center">{item.label}</p>
                </a>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GIANT BRAND FOOTER ── */}
      <footer className="relative overflow-hidden border-t border-white/10">

        {/* === MASSIVE BRAND NAME — bleeds off both sides, fills height === */}
        <div className="relative overflow-hidden" style={{ height: '52vh', minHeight: '220px' }}>

          {/* Sky-blue radial glow at center — like the warm glow in the reference */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 55% 75% at 50% 55%, rgba(16,185,129,0.12) 0%, rgba(20,184,166,0.05) 45%, transparent 75%)'
          }} />

          <div className="absolute inset-0 flex items-center justify-center px-4 overflow-hidden">
            <motion.h2
              className="font-display font-bold uppercase whitespace-nowrap select-none leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 10.5vw, 12rem)',
                letterSpacing: '-0.015em',
                lineHeight: 0.88,
                background: 'linear-gradient(175deg, #ffffff 0%, #6ee7b7 55%, rgba(110,231,183,0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              SPACE CLEAN
            </motion.h2>
          </div>

          {/* Very subtle vignette on left and right edges to soften the crop */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(90deg, #050f0a 0%, transparent 8%, transparent 92%, #050f0a 100%)'
          }} />
        </div>

        {/* Footer info bar */}
        <div className="border-t border-white/[0.07] px-4 sm:px-6 py-5 sm:py-7">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-display font-bold text-sm tracking-[0.2em] uppercase text-emerald-400/80 mb-0.5">{BRAND} · Mumbai</div>
              <p className="text-white/20 text-xs tracking-wide">Professional Cleaning. Trusted Service. Always.</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 text-white/20 text-xs">
              <p>Marol, Andheri East, Mumbai — 400 072</p>
              <p>099879 33669</p>
              <p className="mt-1 text-white/12">© {new Date().getFullYear()} Space Clean. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';

/* ─── Original Inversion Cursor (desktop only) ─── */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const move = (e: MouseEvent) => {
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
      style={{ transform: 'translate3d(-100px,-100px,0)' }}
    >
      <div className="w-full h-full rounded-full bg-white" />
    </div>
  );
}

/* ─── Mobile Touch — same inversion as desktop cursor ─── */
interface Ripple { id: number; x: number; y: number; }
export function TouchRippleLayer() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return;
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      const id = Date.now() + Math.random();
      setRipples(prev => [...prev, { id, x: t.clientX, y: t.clientY }]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 350);
    };
    window.addEventListener('touchstart', onTouch, { passive: true });
    return () => window.removeEventListener('touchstart', onTouch);
  }, []);
  return (
    <>
      {ripples.map(r => (
        <div
          key={r.id}
          className="touch-inversion-dot fixed pointer-events-none z-[9999]"
          style={{ left: r.x - 16, top: r.y - 16 }}
        />
      ))}
    </>
  );
}

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-[#050f0a]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {links.map((item, i) => (
            <motion.a key={item.href} href={item.href} onClick={onClose}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-display text-3xl font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
              {item.label}
            </motion.a>
          ))}
          <motion.a href="#contact" onClick={onClose}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest active:scale-95">
            Book a Clean
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ServiceCard({ image, title, subtitle, index }: { image: string; title: string; subtitle: string; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => { setIsTouch(window.matchMedia('(hover: none)').matches); }, []);

  return (
    <a href="#contact" ref={cardRef}
      className={`magnetic-card block relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] aspect-[4/3] sm:aspect-[3/4] group border border-white/10 bg-white/5 transition-all duration-500 active:scale-[0.98] hover:border-sky-500/30 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] ${isTouch ? 'cursor-pointer' : 'cursor-none'}`}>

      {/* Background Image */}
      <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />

      {/* Strong gradient overlay — dark at bottom, light at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080e0c] via-[#080e0c]/60 to-[#080e0c]/10 pointer-events-none" />

      {/* Sky blue tint on hover */}
      <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-emerald-900/20 transition-all duration-500 pointer-events-none" />

      {/* Top: index number + subtitle tag */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <span className="font-display font-bold text-emerald-400 text-5xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 leading-none">
          {String(index).padStart(2, '0')}
        </span>
        <span className="bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          {subtitle}
        </span>
      </div>

      {/* Bottom: title + CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 pointer-events-none">
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white leading-tight mb-3 drop-shadow-lg">
          {title}
        </h3>
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-emerald-600 group-hover:border-emerald-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-400">
            Book Now
            <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => { setIsTouch(window.matchMedia('(hover: none)').matches); }, []);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -10;
    const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 10;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.04,1.04,1.04)`;
    cardRef.current.style.boxShadow = '0 20px 60px -10px rgba(16,185,129,0.25), 0 0 0 1px rgba(16,185,129,0.3)';
  };
  const onLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    cardRef.current.style.boxShadow = '';
  };
  return (
    <div ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave}
      className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 will-change-transform"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}>
      <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">{icon}</div>
      <div>
        <h4 className="font-display text-sm sm:text-base md:text-xl font-bold uppercase tracking-wider mb-1 sm:mb-2">{title}</h4>
        <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function Reveal({ children, delay = 0, direction = 'up' }: { children: React.ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' }) {
  const y = direction === 'up' ? 40 : 0;
  const x = direction === 'left' ? -40 : direction === 'right' ? 40 : 0;
  return (
    <motion.div initial={{ opacity: 0, y, x }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

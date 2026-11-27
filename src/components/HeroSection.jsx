import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Database, Layers, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import HeroScene3D from './HeroScene3D';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background radial glows & subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-[130px]" />

      {/* Interactive 3D Three.js Scene */}
      <HeroScene3D />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono text-cyan-300 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Software Developer &amp; Data Science Undergraduate</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4.15rem] lg:leading-[1.08]"
          >
            Engineering{' '}
            <span className="text-gradient animate-gradient-x">
              Intelligent
            </span>
            <br />
            Software &amp; Data Systems.
          </motion.h1>

          {/* Animated Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 flex h-9 items-center gap-2.5 text-lg font-medium text-slate-300 sm:text-xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400">
              Role //
            </span>
            <div className="relative h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={PROFILE.roles[roleIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="block font-display font-semibold text-cyan-300"
                >
                  {PROFILE.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-400/40"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <span>Contact Me</span>
              <ArrowDownRight className="h-4 w-4 text-cyan-300 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
          </motion.div>

          {/* Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {PROFILE.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl px-4 py-3 text-left"
              >
                <div className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating 2D Tech Badges (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="pointer-events-none absolute right-10 bottom-12 hidden lg:flex flex-col gap-3"
      >
        <div className="animate-float-slow glass-panel flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs text-slate-200">
          <Layers className="h-4 w-4 text-cyan-400" />
          <span>Full-Stack Architecture</span>
        </div>
        <div
          className="animate-float-slow glass-panel flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs text-slate-200"
          style={{ animationDelay: '1.5s' }}
        >
          <Database className="h-4 w-4 text-indigo-400" />
          <span>Python · ML · Analytics</span>
        </div>
      </motion.div>
    </section>
  );
}

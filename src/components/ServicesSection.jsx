import { motion } from 'framer-motion';
import { BarChart3, BrainCircuit, Code2, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import TiltCard3D from './TiltCard3D';

const ICON_MAP = {
  Code2,
  BarChart3,
  BrainCircuit,
  Sparkles,
};

const ACCENT_STYLES = {
  cyan: {
    iconBox: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300',
    spotlight: 'rgba(34, 211, 238, 0.16)',
    tag: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-200',
  },
  indigo: {
    iconBox: 'bg-indigo-500/15 border-indigo-400/30 text-indigo-300',
    spotlight: 'rgba(129, 140, 248, 0.16)',
    tag: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-200',
  },
  violet: {
    iconBox: 'bg-purple-500/15 border-purple-400/30 text-purple-300',
    spotlight: 'rgba(168, 85, 247, 0.16)',
    tag: 'border-purple-500/20 bg-purple-500/10 text-purple-200',
  },
  emerald: {
    iconBox: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300',
    spotlight: 'rgba(52, 211, 153, 0.16)',
    tag: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-200',
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
            01 // Services &amp; Capabilities
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where Clean Code Meets{' '}
            <span className="text-gradient">Data Intelligence</span>
          </h2>
          <p className="mt-3 text-base text-slate-400">
            From resilient full-stack applications to predictive machine learning pipelines and interactive 3D interfaces.
          </p>
        </motion.div>

        {/* 3D Tilt Service Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Code2;
            const style = ACCENT_STYLES[service.accent] || ACCENT_STYLES.cyan;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard3D
                  spotlightColor={style.spotlight}
                  className="glass-card h-full p-7 hover:border-white/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${style.iconBox}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      {service.subtitle}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium ${style.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

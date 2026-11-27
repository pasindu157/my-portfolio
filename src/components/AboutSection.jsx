import { motion } from 'framer-motion';
import { Award, BookOpen, Cpu, GraduationCap } from 'lucide-react';
import { BIO, SKILLS, TIMELINE } from '../data/portfolioData';
import TiltCard3D from './TiltCard3D';

const BAR_COLORS = {
  cyan: 'from-cyan-400 to-sky-500',
  indigo: 'from-indigo-400 to-purple-500',
  emerald: 'from-emerald-400 to-teal-500',
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
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
            03 // About Me
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Dual-Disciplined Builder:{' '}
            <span className="text-gradient">Code &amp; Data Science</span>
          </h2>
          <p className="mt-3 text-base text-slate-400">
            As a Data Science undergraduate and full-stack software developer, I bridge rigorous statistical thinking with clean, scalable product engineering.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Story & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/15 text-indigo-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    My Journey
                  </h3>
                  <p className="font-mono text-xs text-slate-400">
                    B.Sc. Data Science · Full-Stack Dev
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {BIO}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <Cpu className="h-4 w-4 text-cyan-400" />
                  <div className="mt-2 font-display text-sm font-semibold text-white">
                    Systems First
                  </div>
                  <div className="text-xs text-slate-400">
                    Clean APIs &amp; modular UI
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <BookOpen className="h-4 w-4 text-emerald-400" />
                  <div className="mt-2 font-display text-sm font-semibold text-white">
                    Data Driven
                  </div>
                  <div className="text-xs text-slate-400">
                    EDA, ML &amp; forecasting
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass-card rounded-2xl p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                <Award className="h-4 w-4" />
                <span>Education &amp; Focus</span>
              </div>

              <div className="relative space-y-6 border-l border-white/10 pl-5">
                {TIMELINE.map((item) => (
                  <div key={item.title} className="relative">
                    <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border border-cyan-300 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                    <span className="font-mono text-[11px] text-cyan-300">
                      {item.period}
                    </span>
                    <h4 className="mt-0.5 font-display text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-indigo-300">
                      {item.org}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-6"
          >
            {SKILLS.map((group, gIdx) => (
              <TiltCard3D
                key={group.group}
                className="glass-card p-6 sm:p-7 hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {group.group}
                  </h3>
                  <span className="font-mono text-xs text-slate-400">
                    0{gIdx + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill, sIdx) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: 0.9,
                            delay: 0.1 + sIdx * 0.08,
                            ease: 'easeOut',
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            BAR_COLORS[group.color] || BAR_COLORS.cyan
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard3D>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

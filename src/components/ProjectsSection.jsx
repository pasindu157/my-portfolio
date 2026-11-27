import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BedDouble,
  CheckCircle2,
  Code2,
  Dumbbell,
  ExternalLink,
  Filter,
  UtensilsCrossed,
  X,
} from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import TiltCard3D from './TiltCard3D';

// ── Cards shown per page — change this number freely ──────────
const PAGE_SIZE = 6;

// ─── Preview graphics ─────────────────────────────────────────
function ProjectVisualPreview({ type }) {
  if (type === 'hotel') {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 p-4">
        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-3.5 w-3.5" /> LUXESTAY UI DEMO
          </span>
          <span className="rounded-full bg-cyan-500/15 px-2 py-0.5">Frontend Only</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {['Suite 401', 'Ocean Villa', 'Penthouse'].map((room, i) => (
            <div key={room} className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <div className="text-[10px] text-slate-400">{room}</div>
              <div className="mt-1 font-display text-xs font-semibold text-white">${240 + i * 95}/nt</div>
              <div className="mt-1.5 h-1 w-full rounded-full bg-slate-800">
                <div className="h-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" style={{ width: `${75 + i * 10}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-[11px] text-cyan-200">
          <span>Interactive Booking Flow UI</span>
          <span className="font-mono">Mock Data</span>
        </div>
      </div>
    );
  }

  if (type === 'restaurant') {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 p-4">
        <div className="flex items-center justify-between text-[11px] font-mono text-amber-300">
          <span className="flex items-center gap-1.5">
            <UtensilsCrossed className="h-3.5 w-3.5" /> SAVORIA MENU DEMO
          </span>
          <span className="rounded-full bg-amber-500/15 px-2 py-0.5">Frontend Only</span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { order: '#104 · Table 07', item: 'Truffle Risotto + Mocktail', status: 'In Cart' },
            { order: '#105 · Table 12', item: 'Grilled Salmon Bowl', status: 'Selected' },
          ].map((row) => (
            <div key={row.order} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <div>
                <div className="font-mono text-[10px] text-slate-400">{row.order}</div>
                <div className="text-xs font-medium text-white">{row.item}</div>
              </div>
              <span className={`rounded-md px-2 py-0.5 text-[10px] font-mono ${row.status === 'Selected' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                {row.status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
          <span>Client-Side Cart & Menu UI</span>
          <span className="font-mono text-amber-300">Mock Data</span>
        </div>
      </div>
    );
  }

  if (type === 'gym') {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 p-4">
        <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300">
          <span className="flex items-center gap-1.5">
            <Dumbbell className="h-3.5 w-3.5" /> PULSEFIT UI DEMO
          </span>
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5">
            <Activity className="h-3 w-3" /> Frontend Only
          </span>
        </div>
        <div className="mt-4 flex items-end justify-between gap-2 px-1 h-20">
          {[42, 65, 55, 82, 74, 94, 88].map((val, idx) => (
            <div key={idx} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t-md bg-gradient-to-t from-emerald-500/40 to-cyan-400/90" style={{ height: `${val}%` }} />
              <span className="font-mono text-[9px] text-slate-500">{['M','T','W','T','F','S','S'][idx]}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[11px] text-emerald-200">
          <span>Workout Split & Schedule UI</span>
          <span className="font-mono">Mock Data</span>
        </div>
      </div>
    );
  }

  // Generic fallback for future projects
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl border border-dashed border-white/10 bg-slate-950/60 flex flex-col items-center justify-center gap-3">
      <Code2 className="h-10 w-10 text-indigo-400 opacity-30" />
      <span className="font-mono text-xs text-slate-500">Project Preview</span>
    </div>
  );
}

// ─── Single project card ──────────────────────────────────────
function ProjectCard({ project, onSelect, index }) {
  return (
    <motion.div
      layout
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, delay: index * 0.055, ease: 'easeOut' }}
    >
      <TiltCard3D
        onClick={() => onSelect(project)}
        className={`glass-card flex h-full cursor-pointer flex-col p-6 ${project.borderAccent}`}
      >
        <ProjectVisualPreview type={project.previewType} />

        <div className="mt-5 flex items-center justify-between gap-2">
          <span className={`rounded-full border px-3 py-0.5 text-[11px] font-mono ${project.badgeColor}`}>
            {project.category}
          </span>
          <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white" />
        </div>

        <h3 className="mt-3 font-display text-xl font-bold text-white">{project.title}</h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">{project.shortDesc}</p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-sm font-bold text-white">{m.value}</div>
              <div className="text-[10px] text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-300">{t}</span>
          ))}
        </div>
      </TiltCard3D>
    </motion.div>
  );
}

// ─── Case study modal ─────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
      >
        <button type="button" aria-label="Close" onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10">
          <X className="h-4 w-4" />
        </button>
        <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-mono ${project.badgeColor}`}>{project.category}</span>
        <h3 className="mt-3 pr-8 font-display text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
        <div className="mt-5"><ProjectVisualPreview type={project.previewType} /></div>
        <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">{project.fullDesc}</p>
        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400">Key Features</h4>
          <ul className="mt-3 space-y-2.5">
            {project.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-indigo-400">Technology Stack</h4>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-200">{t}</span>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
          <a href={project.githubUrl} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10">
            <Code2 className="h-4 w-4" /><span>Source Code</span>
          </a>
          <a href={project.liveUrl} onClick={onClose}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-2.5 text-xs font-semibold text-slate-950 transition hover:brightness-110">
            <span>Request Live Demo</span><ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────
export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [page, setPage] = useState(0); // 0-indexed
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  // Build filter tabs dynamically from project filterTag values
  const filterTabs = useMemo(() => {
    const tags = PROJECTS.map((p) => p.filterTag).filter(Boolean);
    return ['All', ...new Set(tags)];
  }, []);

  // Filtered projects for the active tab
  const filtered = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.filterTag === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const currentPage = Math.min(page, Math.max(0, totalPages - 1));
  const pageItems = filtered.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  // Reset to page 0 when filter changes — done inline in handleFilterChange, no useEffect needed
  const goTo = (newPage, dir) => {
    setDirection(dir);
    setPage(newPage);
    // Smooth scroll to section top so user sees the new cards
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFilterChange = (tab) => {
    setActiveFilter(tab);
    setPage(0);
    setDirection(1);
  };

  // Slide animation variants
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
              02 // Featured Projects
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frontend Demo Apps Built with{' '}
              <span className="text-gradient">Clean UI &amp; Motion</span>
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Responsive, interactive React interfaces — with more coming as my full-stack and data science skills grow.
            </p>
          </div>

          {/* Total count + page indicator */}
          <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
            <Filter className="h-4 w-4 text-indigo-400" />
            <span className="font-mono text-sm font-semibold text-white">{filtered.length}</span>
            <span className="font-mono text-xs text-slate-400">
              / {PROJECTS.length} Projects
            </span>
            {totalPages > 1 && (
              <>
                <span className="mx-1 text-slate-600">·</span>
                <span className="font-mono text-xs text-slate-400">
                  Page {currentPage + 1}/{totalPages}
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {filterTabs.map((tab) => {
            const isActive = tab === activeFilter;
            const count = tab === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.filterTag === tab).length;
            return (
              <button
                key={tab}
                onClick={() => handleFilterChange(tab)}
                className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/40 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.12)]'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200'
                }`}
              >
                {tab}
                <span className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-mono ${isActive ? 'bg-cyan-400/20 text-cyan-300' : 'bg-white/10 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Paginated Project Grid — fixed height region ── */}
        <div className="relative min-h-[520px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${activeFilter}-${currentPage}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.32, ease: 'easeInOut' }}
              className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            >
              {pageItems.length === 0 ? (
                <div className="col-span-3 flex h-56 items-center justify-center rounded-2xl border border-dashed border-white/10 text-slate-500">
                  No projects in this category yet.
                </div>
              ) : (
                pageItems.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={idx}
                    onSelect={setSelectedProject}
                  />
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Pagination Controls — only shown when more than 1 page ── */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex items-center justify-center gap-2"
          >
            {/* Prev */}
            <button
              onClick={() => goTo(currentPage - 1, -1)}
              disabled={currentPage === 0}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            {/* Page number buttons */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > currentPage ? 1 : -1)}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-xs font-mono font-semibold transition-all ${
                  i === currentPage
                    ? 'bg-gradient-to-r from-cyan-500/25 to-indigo-500/25 border border-cyan-400/40 text-cyan-200'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => goTo(currentPage + 1, 1)}
              disabled={currentPage === totalPages - 1}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </div>

      {/* ── Case Study Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

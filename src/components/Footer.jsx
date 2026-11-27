import { PROFILE } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-400 sm:flex-row">
        <div className="font-mono">
          <span className="text-cyan-400">{PROFILE.brand}</span> · © {year} · Software Developer &amp; Data Science Undergraduate
        </div>
        <div className="flex items-center gap-5">
          {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-cyan-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

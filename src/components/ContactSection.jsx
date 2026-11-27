import { motion } from 'framer-motion';
import { Check, Copy, Globe, Mail, MapPin, Send, Terminal } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { CONTACT_INFO, PROFILE } from '../data/portfolioData';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in your name, email, and message.');
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you shortly.");
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 650);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-cyan-500/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
            04 // Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {CONTACT_INFO.headline.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{CONTACT_INFO.headline.split(' ').slice(-1)}</span>
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {CONTACT_INFO.subtext}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/15 text-cyan-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Email</div>
                    <div className="text-sm font-semibold text-white">
                      {PROFILE.email}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/15 text-indigo-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Availability</div>
                  <div className="text-sm font-semibold text-white">
                    {PROFILE.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card flex items-center gap-3 rounded-2xl p-4 transition hover:border-cyan-400/40"
              >
                <Terminal className="h-5 w-5 text-slate-200" />
                <div>
                  <div className="text-xs font-semibold text-white">GitHub</div>
                  <div className="text-[11px] text-slate-400">Repositories</div>
                </div>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card flex items-center gap-3 rounded-2xl p-4 transition hover:border-cyan-400/40"
              >
                <Globe className="h-5 w-5 text-cyan-400" />
                <div>
                  <div className="text-xs font-semibold text-white">LinkedIn</div>
                  <div className="text-[11px] text-slate-400">Connect</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="glass-card lg:col-span-7 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs text-slate-400">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-slate-400">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block font-mono text-xs text-slate-400">
                Subject
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Project Inquiry / Internship / Collaboration"
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block font-mono text-xs text-slate-400">
                Message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, timeline, or opportunity..."
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              <span>{sending ? 'Sending...' : 'Send Message'}</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

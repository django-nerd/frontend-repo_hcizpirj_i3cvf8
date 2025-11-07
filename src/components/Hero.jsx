import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Github, Linkedin } from 'lucide-react';

const social = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { icon: Mail, label: 'Email', href: 'mailto:researcher@ai-lab.org' },
];

export default function Hero() {
  return (
    <section className="relative h-[86vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial gradient to match the aura theme */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(137,90,255,0.25)_0%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
          AI Research • Multi‑modal • Foundation Models • Responsible AI
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl">
          Pushing the frontier of intelligent systems
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sm text-white/70 md:text-base">
          I design and evaluate learning systems that understand language, vision, and action. My work focuses on
          scalable model training, alignment, and trustworthy deployment.
        </p>

        <div className="mt-8 flex items-center gap-3">
          {social.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              <Icon size={18} className="opacity-80 group-hover:opacity-100" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Subtle bottom gradient for content separation */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

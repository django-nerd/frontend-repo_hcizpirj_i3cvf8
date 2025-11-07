import React from 'react';

const roles = [
  {
    org: 'OpenAI Research',
    title: 'Research Scientist, Multimodal Systems',
    period: '2023 — Present',
    bullets: [
      'Lead research on long‑context and tool‑augmented LMs.',
      'Co‑authored 5+ papers on alignment and evaluation.',
      'Drove productionization of safety interventions.'
    ],
  },
  {
    org: 'DeepMind',
    title: 'Research Engineer, Representation Learning',
    period: '2021 — 2023',
    bullets: [
      'Built training pipelines for multi‑billion parameter models.',
      'Developed efficient data curation and filtering strategies.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">Experience</h2>
        <p className="mt-1 text-sm text-white/60">Research and engineering roles focused on foundation models.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((r) => (
          <div key={r.org} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium text-white">{r.org}</h3>
              <span className="text-xs text-white/60">{r.period}</span>
            </div>
            <p className="mt-1 text-sm text-white/80">{r.title}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

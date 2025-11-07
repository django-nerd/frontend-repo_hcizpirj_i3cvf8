import React from 'react';

const publications = [
  {
    title: 'Scaling Laws for Multimodal Transformers',
    venue: 'NeurIPS 2024',
    authors: 'Doe J.*, Smith A.*, Chen L., You Y.',
    link: '#',
  },
  {
    title: 'Aligning Vision-Language Models with Preference Data',
    venue: 'ICLR 2024 (Spotlight)',
    authors: 'Doe J., Kumar R., Alvarez M.',
    link: '#',
  },
  {
    title: 'Evaluating Faithfulness in Tool-Using Agents',
    venue: 'ACL 2023',
    authors: 'Doe J., Patel S., Nguyen T.',
    link: '#',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">Selected Publications</h2>
        <p className="mt-1 text-sm text-white/60">A snapshot of recent peer‑reviewed work.</p>
      </div>

      <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
        {publications.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="group block p-6 transition hover:bg-white/[0.07]"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-base font-medium text-white group-hover:text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-white/60">{p.authors}</p>
              </div>
              <span className="text-xs text-white/60 md:ml-6">{p.venue}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

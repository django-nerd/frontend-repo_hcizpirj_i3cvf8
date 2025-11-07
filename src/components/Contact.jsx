import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending…');

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      // In this template, we simply simulate submission.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you soon.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-2xl scroll-mt-20 px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
        <p className="mt-1 text-sm text-white/60">Collaborations, speaking, or just to say hello.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-white/20"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-white/20"
          />
        </div>
        <input
          name="subject"
          placeholder="Subject"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-white/20"
        />
        <textarea
          name="message"
          required
          rows="5"
          placeholder="Message"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-white/20"
        />
        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Send message
          </button>
          <p className="text-sm text-white/60">{status}</p>
        </div>
      </form>
    </section>
  );
}

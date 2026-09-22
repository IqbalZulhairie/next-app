import React from 'react';

const stats = [
  { label: 'Projects launched', value: '120+' },
  { label: 'Happy clients', value: '85%' },
  { label: 'Average growth', value: '3.4x' },
];

const values = [
  {
    title: 'Clarity first',
    description:
      'We turn complex ideas into clear, usable experiences that people understand at a glance.',
  },
  {
    title: 'Built to scale',
    description:
      'Every decision is designed for long-term growth, clean workflows, and sustainable progress.',
  },
  {
    title: 'People-centered',
    description:
      'We prioritize trust, usability, and meaningful outcomes for the teams and communities we serve.',
  },
];

const team = [
  { name: 'Mila Carter', role: 'Creative Director', accent: 'bg-indigo-500' },
  { name: 'Noah Reed', role: 'Lead Product Strategist', accent: 'bg-cyan-500' },
  { name: 'Ava Brooks', role: 'Experience Designer', accent: 'bg-violet-500' },
];

const process = [
  'Discover the real problem and audience need.',
  'Shape a focused strategy and design direction.',
  'Build, refine, and launch with measurable feedback.',
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:py-24">
        <div className="mb-8 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
          About us
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              We build software that makes ambitious ideas <span className="text-indigo-600">real</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Nexora Labs helps businesses plan, design, and build websites, mobile applications,
              cloud systems, and digital products that are ready to grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#story"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Our story
              </a>
              <a
                href="#values"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Our values
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-indigo-200/80 blur-3xl" />
            <div className="absolute -right-8 bottom-6 h-24 w-24 rounded-full bg-cyan-200/80 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Since</p>
                  <p className="text-2xl font-bold text-slate-900">2024</p>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Growing
                </div>
              </div>

              <div className="space-y-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <span className="text-sm text-slate-600">{item.label}</span>
                    <span className="text-lg font-bold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:py-12">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Our story
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Small team. Bold thinking.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            We started with a simple idea: software should solve a real problem and feel effortless
            to use. That philosophy shapes every product we plan, design, build, and improve.
          </p>
        </div>
      </section>

      <section id="values" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Why us</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">What guides our work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-lg font-bold text-indigo-700">
                {value.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Meet the team</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">People who make the work possible</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className={`mb-5 h-16 w-16 rounded-2xl ${member.accent}`} />
              <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-2 text-sm font-medium text-indigo-600">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)] md:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Process</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">How we turn ambition into action</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <p className="text-base leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6 rounded-full border border-slate-200 bg-white px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 shadow-sm">
          <span>Northstar</span>
          <span>Vanta</span>
          <span>Luma</span>
          <span>Horizon</span>
          <span>Verve</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Testimonials</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              We help teams move with confidence.
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6">
            <p className="text-lg leading-8 text-slate-700">
              “Their process brought clarity to an idea we had been circling for months. The end
              result felt sharp, intentional, and immediately useful.”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500" />
              <div>
                <p className="font-semibold text-slate-900">Emma Collins</p>
                <p className="text-sm text-slate-500">Founder, Northstar Studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div className="rounded-[2rem] border border-indigo-100 bg-indigo-50 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Let’s build together</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Ready to create something meaningful?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We partner with businesses and teams that want experience, clarity, and momentum from their next digital move.
          </p>
          <button className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Start a conversation
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
const outcomes = [
  { n: "01", title: "Less waste to landfill", detail: "Recover organic material before it becomes a disposal burden." },
  { n: "02", title: "Healthier soil", detail: "Return useful organic matter to the ground through composting." },
  { n: "03", title: "Smarter operations", detail: "Explore ways to reduce handling, transport and disposal pressure." },
  { n: "04", title: "A circular Kenya", detail: "Build practical habits that keep resources in use for longer." },
];

export function Impact() {
  return (
    <section id="impact" className="bg-[#173f30] py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#c4df91]">The impact</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-.035em] sm:text-5xl">Small changes. A more regenerative future.</h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/65">Food waste is not the end of the story. With the right systems, it can become part of a healthier cycle for businesses, communities and the environment.</p>
            <a href="#contact" className="mt-9 inline-flex rounded-full bg-[#c4df91] px-6 py-3.5 text-sm font-extrabold text-[#183d2d] transition hover:-translate-y-1">Partner with Foodify ↗</a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((o) => (
              <article key={o.n} className="rounded-[1.5rem] border border-white/15 bg-white/[.055] p-7 transition hover:bg-white/[.09]">
                <span className="text-xs font-black tracking-[.18em] text-[#c4df91]">{o.n}</span>
                <h3 className="mt-8 font-display text-xl font-bold">{o.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{o.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
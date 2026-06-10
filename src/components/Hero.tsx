import hero from "@/assets/hero-compost.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-30">
        <img src={hero} alt="" className="h-full w-full object-cover" width={1536} height={1024} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.7 }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Be Green Africa • Kenya
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Turning food waste into <span className="text-primary">fertile ground.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Foodify Simples delivers automatic organic food waste composting machines for businesses,
            institutions and homes — closing the loop from kitchen to soil, one Kenyan kitchen at a time.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Explore Composters
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Talk to our team
            </a>
          </div>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { k: "1000+", v: "Installs targeted Year 1" },
              { k: "111K t", v: "CO₂ saved over 10 yrs" },
              { k: "50%", v: "Faster than manual" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl font-bold text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

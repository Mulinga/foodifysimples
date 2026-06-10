export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</span>
          <h2 className="mt-4 text-4xl font-bold text-secondary sm:text-5xl">
            A Kenya where zero food waste is reality.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Founded in 2022 by environmentalist Charles Kyalo Mulinga, Foodify Simples is moving the
            organic waste sector toward models that are simultaneously environmentally and financially
            sustainable — by turning every kitchen into part of the solution.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our automatic composters take raw food scraps and produce nutrient-rich compost on-site,
            cutting landfill waste, transport costs and greenhouse emissions in a single step.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { t: "People", d: "Local jobs, training programs and stronger communities." },
            { t: "Planet", d: "Less landfill, lower emissions, richer soil." },
            { t: "Profit", d: "PAYGO models that pay for themselves." },
            { t: "Purpose", d: "A portion of every sale funds tree planting." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="font-display text-2xl font-bold text-secondary">{c.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

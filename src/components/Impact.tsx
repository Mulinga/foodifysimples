export function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Triple Bottom Line</span>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Designed for people, planet & profit.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              We measure our success in jobs created, tonnes of waste diverted, and the financial
              freedom our partners gain by turning a cost centre into an asset.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "20%", v: "Reduction in organic landfill waste in 3 years" },
              { k: "48 mo.", v: "To a nationwide distribution network" },
              { k: "$500K", v: "Targeted revenue by end of Year 2" },
              { k: "Year-1", v: "1000 machines deployed across Kenya" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="font-display text-4xl font-bold text-primary">{s.k}</div>
                <div className="mt-2 text-sm text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import composter from "@/assets/composter.jpg";

const tiers = [
  { name: "FDS Home", capacity: "200 tons/year", fit: "Households, small cafés, clinics" },
  { name: "FDS Pro", capacity: "400 tons/year", fit: "Restaurants, schools, lodges" },
  { name: "FDS Commercial", capacity: "800 tons/year", fit: "Hotels, supermarkets, hospitals" },
  { name: "FDS Industrial", capacity: "2000 tons/year", fit: "Municipalities, food processors" },
];

export function Products() {
  return (
    <section id="products" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Composters</span>
          <h2 className="mt-4 text-4xl font-bold text-secondary sm:text-5xl">
            A machine for every kitchen, every site.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four capacity tiers — engineered with our Chinese manufacturing partner, distributed and
            serviced nationwide by Foodify Simples.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-[var(--shadow-elegant)]">
            <img src={composter} alt="Foodify composting machine" className="h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{t.capacity}</div>
                <div className="mt-2 font-display text-xl font-bold text-secondary">{t.name}</div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.fit}</p>
                <a href="#contact" className="mt-4 text-sm font-semibold text-secondary hover:text-primary">
                  Request spec sheet →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { t: "No pre-segregation", d: "Our TMK composters handle mixed organic waste." },
            { t: "PAYGO friendly", d: "Pay-as-you-go financing makes adoption affordable." },
            { t: "50% faster cycles", d: "Convert waste to compost in half the time of manual methods." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-lg font-bold text-secondary">{f.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

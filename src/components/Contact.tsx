const contacts = [
  { name: "General Inquiries", email: "info@foodify.com" },
  { name: "Projects", email: "projects@foodify.com" },
  { name: "Charles Mulinga, Director", email: "cmulinga@foodify.com" },
  { name: "Sagan", email: "sagan@foodify.com" },
  { name: "Finance", email: "finance@foodify.com" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</span>
          <h2 className="mt-4 text-4xl font-bold text-secondary sm:text-5xl">
            Let's compost the future together.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you run a single restaurant or manage waste for an entire county, our team will
            help you size, finance and install the right Foodify composter.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Head Office</div>
            <p className="mt-2 text-secondary">
              Sanlam Building, 4th Floor<br />
              P.O. Box 5230<br />
              Machakos County, Kenya
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
          <div className="font-display text-xl font-bold text-secondary">Direct contacts</div>
          <ul className="mt-6 divide-y divide-border">
            {contacts.map((c) => (
              <li key={c.email} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-muted-foreground">{c.name}</span>
                <a href={`mailto:${c.email}`} className="text-sm font-semibold text-secondary transition-colors hover:text-primary">
                  {c.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

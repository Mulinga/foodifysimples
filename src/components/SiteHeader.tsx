import logo from "@/assets/foodify-logo.jpeg";

const nav = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Solutions" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Foodify Simples logo" className="h-10 w-10 rounded-full" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight text-secondary">FOODIFY</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Simples</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-secondary/80 transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}

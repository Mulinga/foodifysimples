const nav = [
  { href: "#about", label: "Our story" },
  { href: "#products", label: "Solutions" },
  { href: "#impact", label: "Our impact" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e6e8df] bg-[#fbfaf5]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Foodify Simples home" className="flex items-center">
          <img src="/foodify-logo.svg" alt="Foodify Simples" className="h-[58px] w-auto" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-[#42574a] transition-colors hover:text-[#2f8651]">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-full bg-[#174c38] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#174c38]/15 transition-all hover:-translate-y-0.5 hover:bg-[#236447]">
          Get a quote <span className="ml-2" aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
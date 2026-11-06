export function SiteFooter() {
  return (
    <footer className="bg-[#123b2d] text-[#f8f6ed]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/foodify-logo.svg" alt="Foodify Simples" className="h-14 w-auto brightness-0 invert" />
          <p className="max-w-[220px] text-xs leading-relaxed text-white/60">Turning organic waste into value, from kitchen to soil.</p>
        </div>
        <div className="text-xs text-white/50">© {new Date().getFullYear()} Foodify Simples · Kenya</div>
      </div>
    </footer>
  );
}
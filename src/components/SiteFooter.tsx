import logo from "@/assets/foodify-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="" className="h-9 w-9 rounded-full" />
          <div>
            <div className="font-display font-bold">Foodify Simples</div>
            <div className="text-xs text-white/60">Food Waste Composting Veterans</div>
          </div>
        </div>
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Foodify Simples • foodifysimples.com
        </div>
      </div>
    </footer>
  );
}

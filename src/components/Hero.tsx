import hero from "@/assets/hero-compost.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#123b2d]">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="" className="h-full w-full object-cover opacity-35" width={1536} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f25] via-[#153e30]/95 to-[#153e30]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102f25]/70 via-transparent to-[#102f25]/10" />
      </div>
      <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8d58b]/40 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-[#c8e59b]">
            <span className="h-2 w-2 rounded-full bg-[#a6d36e]" /> Be Green Africa · Kenya
          </div>
          <h1 className="mt-8 max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-[-.045em] text-[#fffdf6] sm:text-6xl lg:text-[4.6rem]">
            Waste less.
            <span className="block text-[#b8dc82]">Grow more.</span>
            <span className="block">Make every scrap count.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
            We help homes, businesses and institutions turn everyday food waste into a resource — with practical, on-site composting solutions built for a more circular Kenya.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#products" className="rounded-full bg-[#b8dc82] px-7 py-4 text-sm font-extrabold text-[#183d2d] shadow-xl shadow-black/15 transition hover:-translate-y-1 hover:bg-[#c8e59b]">Explore our solutions ↗</a>
            <a href="#about" className="rounded-full border border-white/35 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/15">Discover Foodify</a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/70">
            <span><strong className="text-white">01</strong> · Reduce organic waste</span>
            <span><strong className="text-white">02</strong> · Recover useful resources</span>
            <span><strong className="text-white">03</strong> · Restore the soil</span>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-5 rounded-[2.5rem] border border-white/15 rotate-3" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
            <img src={hero} alt="Organic food scraps being returned to the soil cycle" className="h-[430px] w-full rounded-[1.5rem] object-cover" />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/25 bg-[#143b2d]/85 p-5 text-white backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c4df91]">The Foodify approach</p>
              <p className="mt-2 text-xl font-semibold">From kitchen scraps to something good.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
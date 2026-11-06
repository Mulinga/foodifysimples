import composter from "@/assets/composter.jpg";

const tiers = [
  { name: "FDS Home", capacity: "Home & small scale", fit: "Households, small cafés and compact kitchens", number: "01" },
  { name: "FDS Pro", capacity: "Professional use", fit: "Restaurants, schools, lodges and busy kitchens", number: "02" },
  { name: "FDS Commercial", capacity: "High volume", fit: "Hotels, supermarkets, hospitals and institutions", number: "03" },
  { name: "FDS Industrial", capacity: "Large operations", fit: "Food processors, municipalities and large facilities", number: "04" },
];

export function Products() {
  return (
    <section id="products" className="bg-[#f0f2e9] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#54804c]">Composting solutions</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-.035em] text-[#183d2d] sm:text-5xl">The right solution for every scale.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#68756a]">From a small kitchen to a large operation, explore options designed to make organic waste recovery part of everyday business.</p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <div className="group relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[#173d2d]">
            <img src={composter} alt="Food waste composting machine" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={1024} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102f25]/90 via-[#102f25]/10 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white sm:p-10">
              <span className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c4df91]">On-site organic waste recovery</span>
              <h3 className="mt-3 max-w-md font-display text-3xl font-bold">Bring the circular economy closer to home.</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/75">Explore equipment options and find a setup that fits your waste volumes, space and operating needs.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {tiers.map((t) => (
              <article key={t.name} className="flex min-h-[210px] flex-col rounded-[1.5rem] border border-[#e0e4d7] bg-[#fbfaf5] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#183d2d]/5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[.18em] text-[#88a66b]">{t.number}</span>
                  <span className="rounded-full bg-[#e9efdf] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#456c43]">{t.capacity}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[#183d2d]">{t.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#6d786e]">{t.fit}</p>
                <a href="#contact" className="mt-4 text-sm font-extrabold text-[#36764d]">Enquire about this model ↗</a>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {[
            { t: "Practical adoption", d: "Guidance to help choose equipment for your site and daily operations." },
            { t: "Flexible pathways", d: "Discuss purchase and financing options that suit your organisation." },
            { t: "Local support", d: "Work with a Kenya-based team from enquiry through implementation." },
          ].map((f) => <div key={f.t} className="rounded-2xl border border-[#e0e4d7] bg-white/70 p-6"><h3 className="font-display text-lg font-bold text-[#183d2d]">{f.t}</h3><p className="mt-2 text-sm leading-6 text-[#6d786e]">{f.d}</p></div>)}
        </div>
      </div>
    </section>
  );
}
const pillars = [
  { n: "01", t: "People", d: "Create local opportunity through practical solutions, skills and stronger communities." },
  { n: "02", t: "Planet", d: "Keep valuable organic material out of landfill and return nutrients to the soil." },
  { n: "03", t: "Progress", d: "Help organisations manage waste more efficiently and unlock value from resources." },
  { n: "04", t: "Purpose", d: "Support a more circular economy, where responsible choices create lasting impact." },
];

export function About() {
  return (
    <section id="about" className="bg-[#fbfaf5] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#54804c]">Why Foodify</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-.035em] text-[#183d2d] sm:text-5xl">A better future starts with what we throw away.</h2>
          <p className="mt-7 text-lg leading-8 text-[#657267]">
            Founded in 2022, Foodify Simples is working to make organic waste recovery practical and accessible in Kenya. We connect kitchens, businesses and institutions to solutions that transform food waste from a disposal problem into a useful resource.
          </p>
          <p className="mt-5 text-base leading-8 text-[#657267]">
            Our focus is simple: make responsible waste management easier to adopt, easier to maintain and more valuable to the communities we serve.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold text-[#2f7650] hover:text-[#174c38]">Talk to our team <span aria-hidden="true">↗</span></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => (
            <article key={p.n} className="rounded-[1.6rem] border border-[#e7e8dc] bg-white p-7 shadow-[0_12px_40px_-32px_rgba(20,55,37,.35)] transition hover:-translate-y-1 hover:border-[#b8d58b]">
              <span className="text-xs font-black tracking-[.16em] text-[#8aaa68]">{p.n}</span>
              <h3 className="mt-8 font-display text-2xl font-bold text-[#183d2d]">{p.t}</h3>
              <p className="mt-3 text-sm leading-7 text-[#69756b]">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
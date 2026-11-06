const contacts = [
  { name: "General enquiries", email: "info@foodifysimples.com" },
  { name: "Projects & partnerships", email: "projects@foodifysimples.com" },
  { name: "Finance", email: "finance@foodifysimples.com" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-[#fbfaf5] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:gap-24">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#54804c]">Start a conversation</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-tight tracking-[-.035em] text-[#183d2d] sm:text-5xl">Let's make better use of what we have.</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#657267]">Tell us about your kitchen, organisation or project. We’ll help you explore a practical composting solution for your needs.</p>
          <div className="mt-10 rounded-[1.5rem] bg-[#eef1e7] p-7">
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#54804c]">Head office</p>
            <p className="mt-3 text-base font-semibold leading-7 text-[#284c38]">Sanlam Building, 4th Floor<br />P.O. Box 5230<br />Machakos County, Kenya</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-[#e5e7dc] bg-white p-7 shadow-[0_24px_70px_-48px_rgba(20,55,37,.35)] sm:p-9">
          <h3 className="font-display text-2xl font-bold text-[#183d2d]">Reach our team</h3>
          <p className="mt-2 text-sm leading-6 text-[#748075]">Choose the right contact and send us a message.</p>
          <ul className="mt-6 divide-y divide-[#edf0e8]">
            {contacts.map((c) => (
              <li key={c.email} className="py-5">
                <p className="text-xs font-semibold text-[#7b877c]">{c.name}</p>
                <a href={`mailto:${c.email}`} className="mt-1 inline-block text-base font-bold text-[#2f7650] transition hover:text-[#174c38]">{c.email} ↗</a>
              </li>
            ))}
          </ul>
          <a href="mailto:info@foodifysimples.com?subject=Foodify%20Simples%20enquiry" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#174c38] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#236447]">Send an enquiry ↗</a>
        </div>
      </div>
    </section>
  );
}
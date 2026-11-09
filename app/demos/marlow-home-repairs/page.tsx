import { Droplets, Hammer, PaintRoller, Plug, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marlow Home Repairs (demonstration site)",
  description: "A demonstration website for a fictional home repair business.",
  alternates: { canonical: "/demos/marlow-home-repairs" },
};

// Sample content for a fictional business.
const services = [
  { icon: Droplets, title: "Plumbing", text: "Leaks, taps, toilets, water heaters and blocked drains." },
  { icon: Plug, title: "Electrical", text: "Sockets, lighting, fans and fault finding." },
  { icon: Hammer, title: "Carpentry", text: "Doors, shelving, decking and general repairs." },
  { icon: PaintRoller, title: "Painting", text: "Interior and exterior, including preparation and patching." },
  { icon: Wrench, title: "Odd jobs", text: "The list of small things you have been meaning to get done." },
];

const steps = [
  ["Tell us the job", "Call or send a short description and a photo if you have one."],
  ["Get a written quote", "A clear price before any work starts."],
  ["We do the work", "On the agreed day, and we tidy up before we leave."],
];

const wrap = "mx-auto max-w-5xl px-6";
const cta = "inline-flex min-h-12 items-center bg-[#f5b301] px-6 text-sm font-bold uppercase tracking-wide text-[#14213d]";

export default function MarlowHomeRepairs() {
  return (
    <div className="flex-1 bg-white text-[#14213d]">
      <header className="border-b border-[#e5e7eb]">
        <div className={`${wrap} flex items-center justify-between py-4`}>
          <p className="text-lg font-extrabold uppercase tracking-tight">
            Marlow <span className="text-[#c58f00]">Home Repairs</span>
          </p>
          <a href="#quote" className={cta}>
            Get a quote
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#14213d] text-white">
          <div className={`${wrap} py-20 md:py-28`}>
            <p className="text-sm font-bold uppercase tracking-widest text-[#f5b301]">Repairs and maintenance</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
              Fixed properly. Priced before we start.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#c9d1e0]">
              Plumbing, electrical, carpentry and painting for homes and small businesses. One call covers the whole
              list.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="#quote" className={cta}>
                Request a quote
              </a>
              <a href="#services" className="text-sm font-bold uppercase tracking-wide underline underline-offset-4">
                What we do
              </a>
            </div>
          </div>
        </section>

        <section id="services" className={`${wrap} py-20`}>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Services</h2>
          <ul className="mt-10 grid gap-px bg-[#e5e7eb] sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-white p-6">
                <Icon className="size-6 text-[#c58f00]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-[#4b5563]">{text}</p>
              </li>
            ))}
            <li className="flex items-center bg-[#fff8e1] p-6 font-bold">Not on the list? Ask. If we can&apos;t do it, we will say so.</li>
          </ul>
        </section>

        <section className="bg-[#f3f4f6] py-20">
          <div className={wrap}>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How it works</h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3">
              {steps.map(([title, text], i) => (
                <li key={title}>
                  <p className="text-5xl font-extrabold text-[#c58f00]">{i + 1}</p>
                  <h3 className="mt-3 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-[#4b5563]">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="quote" className={`${wrap} grid gap-10 py-20 md:grid-cols-2 md:items-center`}>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Request a quote</h2>
            <p className="mt-4 text-[#4b5563]">Monday to Saturday, 7am to 6pm. Serving Sample Town and the surrounding area.</p>
          </div>
          <div className="border-l-4 border-[#f5b301] pl-6 text-lg leading-9">
            <p>
              <span className="font-bold">Call</span> 000-555-0100
            </p>
            <p>
              <span className="font-bold">Email</span> jobs@marlow.example
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#14213d] py-8 text-center text-sm text-[#c9d1e0]">
        Marlow Home Repairs is a fictional business created for demonstration.
      </footer>
    </div>
  );
}

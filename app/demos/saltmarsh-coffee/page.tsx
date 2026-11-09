import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saltmarsh Coffee (demonstration site)",
  description: "A demonstration website for a fictional café and coffee roaster.",
  alternates: { canonical: "/demos/saltmarsh-coffee" },
};

// Sample content for a fictional business.
const menu = [
  {
    group: "Coffee",
    items: [
      ["Espresso", "3.00"],
      ["Flat white", "4.25"],
      ["Pour-over, single origin", "5.00"],
      ["Cold brew", "4.50"],
    ],
  },
  {
    group: "Kitchen",
    items: [
      ["Sourdough toast, salted butter", "4.00"],
      ["Egg and greens roll", "8.50"],
      ["Banana bread", "4.50"],
      ["Granola, yoghurt, fruit", "7.00"],
    ],
  },
  {
    group: "Beans to take home",
    items: [
      ["House blend, 250g", "14.00"],
      ["Single origin, 250g", "17.00"],
      ["Decaf, 250g", "15.00"],
    ],
  },
];

const hours = [
  ["Monday to Friday", "6:30am – 4:00pm"],
  ["Saturday", "7:30am – 3:00pm"],
  ["Sunday", "8:00am – 1:00pm"],
];

const wrap = "mx-auto max-w-5xl px-6";

export default function SaltmarshCoffee() {
  return (
    <div className="flex-1 bg-[#f4ede1] font-serif text-[#2a211a]">
      <header className={`${wrap} flex items-center justify-between py-6`}>
        <p className="text-xl font-bold tracking-tight">Saltmarsh Coffee</p>
        <nav aria-label="Saltmarsh Coffee" className="flex gap-6 font-sans text-sm">
          <a href="#menu" className="hover:underline">
            Menu
          </a>
          <a href="#hours" className="hover:underline">
            Hours
          </a>
          <a href="#visit" className="hover:underline">
            Visit
          </a>
        </nav>
      </header>

      <main>
        <section className={`${wrap} grid gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:items-end md:py-24`}>
          <div>
            <p className="font-sans text-sm uppercase tracking-widest text-[#a4572b]">Roasted on site, every week</p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Good coffee, made slowly.</h1>
            <p className="mt-6 max-w-md font-sans text-lg text-[#5c4f43]">
              A neighbourhood café and small-batch roaster. Come in for a cup, leave with a bag of beans.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm font-medium">
              <a href="#menu" className="rounded-full bg-[#2a211a] px-6 py-3 text-[#f4ede1]">
                See the menu
              </a>
              <a href="#visit" className="rounded-full border border-[#2a211a] px-6 py-3">
                Find us
              </a>
            </div>
          </div>
          {/* Brand mark in place of photography. */}
          <div aria-hidden="true" className="relative aspect-square max-w-sm overflow-hidden rounded-t-full bg-[#a4572b]">
            <div className="absolute inset-x-[18%] bottom-0 h-[55%] rounded-t-full bg-[#2a211a]" />
            <div className="absolute inset-x-[34%] bottom-0 h-[28%] rounded-t-full bg-[#f4ede1]" />
          </div>
        </section>

        <section id="menu" className="bg-[#2a211a] py-20 text-[#f4ede1]">
          <div className={wrap}>
            <h2 className="text-4xl font-bold tracking-tight">Menu</h2>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              {menu.map(({ group, items }) => (
                <div key={group}>
                  <h3 className="font-sans text-sm uppercase tracking-widest text-[#e0a071]">{group}</h3>
                  <dl className="mt-5 space-y-4">
                    {items.map(([name, price]) => (
                      <div key={name} className="flex items-baseline justify-between gap-4 border-b border-[#4a3d32] pb-3">
                        <dt>{name}</dt>
                        <dd className="font-sans text-sm text-[#cdbfae]">{price}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${wrap} grid gap-12 py-20 md:grid-cols-2`}>
          <div id="hours">
            <h2 className="text-4xl font-bold tracking-tight">Hours</h2>
            <dl className="mt-8 font-sans">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between border-b border-[#d9cdb9] py-4">
                  <dt>{day}</dt>
                  <dd className="text-[#5c4f43]">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div id="visit">
            <h2 className="text-4xl font-bold tracking-tight">Visit</h2>
            <address className="mt-8 font-sans not-italic leading-8 text-[#5c4f43]">
              12 Example Street
              <br />
              Sample Town
              <br />
              hello@saltmarsh.example
            </address>
            <p className="mt-6 font-sans text-[#5c4f43]">Street parking out front. Dogs welcome on the patio.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9cdb9] py-8 text-center font-sans text-sm text-[#5c4f43]">
        Saltmarsh Coffee is a fictional business created for demonstration.
      </footer>
    </div>
  );
}

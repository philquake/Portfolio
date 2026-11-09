import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "@/components/sections/HomeSections";
import { PageHeader, Section } from "@/components/ui/Section";
import { site } from "@/data/site";
import { exploring, skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: a software developer who builds complete applications and practical digital solutions.`,
  alternates: { canonical: "/about" },
};

// Edit this copy freely. It deliberately states no employment history,
// qualifications or years of experience.
const blocks = [
  {
    title: "Development interests",
    text: "I am most interested in products that people use day to day: finance tools, learning platforms and the systems small businesses run on. I like work where the data model matters and where getting the details right makes a real difference to the person using it.",
  },
  {
    title: "Technical background",
    text: "My backend work is in Python, with Django for full web applications and FastAPI for APIs, on PostgreSQL and SQLite. On mobile I build with Flutter. On the web I work with JavaScript, TypeScript, React, Next.js and Tailwind CSS.",
  },
  {
    title: "Approach to software development",
    text: "I start from the problem and the data, then build in small, working stages. I write tests for the logic that matters, keep the structure simple and document how things run, so a project can be handed over and maintained.",
  },
  {
    title: "Problem-solving philosophy",
    text: "Understand the problem before choosing the tool. The simplest solution that fully works usually beats the clever one, and the best time to find a flaw is before it reaches the person relying on the software.",
  },
  {
    title: "Career and business goals",
    text: "I am building a freelance practice around websites, custom applications and automation for businesses, and I am open to remote developer roles and technical collaboration. I also write about what I learn while building.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader label="About" title={`I'm ${site.name}, a software developer who builds complete digital products.`} intro={site.bio} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5 text-lg text-muted">
            <p>
              I take projects from the first idea through to deployment: planning the features, designing the database,
              building the backend and API, creating the interface and putting it live.
            </p>
            <p>
              Penny, a personal finance app, pairs a Flutter client with a FastAPI backend and end-to-end encryption.
              CXC Platform is a Django learning site with lessons, quizzes and progress tracking. Each one meant solving
              the whole problem, not one layer of it.
            </p>
          </div>
          <div>
            {site.profileImage && (
              <Image
                src={site.profileImage}
                alt={site.name}
                width={480}
                height={480}
                className="mb-6 aspect-square w-full max-w-xs rounded-md border border-line object-cover"
              />
            )}
            <dl className="space-y-3 border-l border-line pl-5 text-sm">
              <div>
                <dt className="font-mono text-xs text-accent">Status</dt>
                <dd className="mt-1">{site.availability}</dd>
              </div>
              {site.location && (
                <div>
                  <dt className="font-mono text-xs text-accent">Location</dt>
                  <dd className="mt-1">{site.location}</dd>
                </div>
              )}
              <div>
                <dt className="font-mono text-xs text-accent">Core stack</dt>
                <dd className="mt-1 text-muted">{skills.flatMap((g) => g.items.slice(0, 2)).join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section label="How I work" title="Background and approach">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {blocks.map((block) => (
            <div key={block.title}>
              <h3 className="text-lg font-semibold">{block.title}</h3>
              <p className="mt-2 text-muted">{block.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Learning" title="Currently Exploring" intro="The areas I am studying and experimenting with right now.">
        <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {exploring.map((item) => (
            <li key={item.title} className="bg-bg p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <ContactCta />
    </>
  );
}

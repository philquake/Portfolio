import Link from "next/link";
import { site } from "@/data/site";

/** Demo sites carry their own look; this bar makes clear they are demonstrations. */
export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="bg-[#111] px-4 py-2 text-center text-xs text-[#ddd]">
        Demonstration website for a fictional business, built by{" "}
        <Link href="/projects" className="underline">
          {site.name}
        </Link>
        .
      </p>
      {children}
    </>
  );
}

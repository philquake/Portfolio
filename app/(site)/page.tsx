import { Hero } from "@/components/sections/Hero";
import { AboutPreview, ContactCta, FeaturedProjects, ServicesOverview, TechOverview } from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechOverview />
      <FeaturedProjects />
      <ServicesOverview />
      <AboutPreview />
      <ContactCta />
    </>
  );
}

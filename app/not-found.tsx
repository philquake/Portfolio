import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">That page does not exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </main>
  );
}

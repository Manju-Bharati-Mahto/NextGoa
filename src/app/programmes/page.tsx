import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes | Parul University Goa",
  description: "Explore the academic programmes offered at Parul University Goa.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <main className="flex-1 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Academic Programmes
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Discover our wide range of undergraduate and postgraduate programmes designed for the future.
        </p>
        
        <div className="mt-16 flex items-center justify-center rounded-2xl border border-dashed border-black/10 bg-black/5 py-32">
          <p className="text-sm font-medium text-ink/50">Programmes content goes here...</p>
        </div>
      </div>
    </main>
  );
}

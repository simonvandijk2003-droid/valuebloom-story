import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { WaardebloemHub } from "@/components/WaardebloemHub";

export const Route = createFileRoute("/waardebloem/")({
  head: () => ({
    meta: [
      { title: "De Waardebloem — Value Case Strijp-R" },
      { name: "description", content: "Hub-pagina van de Waardebloem: kies tussen het eerste concept en de definitieve versie." },
    ],
  }),
  component: WaardebloemHubPage,
});

function WaardebloemHubPage() {
  return (
    <main className="min-h-screen">
      <div className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-[var(--shadow-soft)] transition hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar presentatie
          </Link>
          <p className="hidden font-mono text-[11px] tracking-widest text-muted-foreground md:block">
            DE WAARDEBLOEM · HUB
          </p>
        </div>
      </div>
      <div className="px-6 py-10 md:py-14">
        <WaardebloemHub standalone />
      </div>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { WaardebloemHub } from "@/components/WaardebloemHub";

export const Route = createFileRoute("/waardebloem")({
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
    <main className="min-h-screen px-6 py-14 md:py-20">
      <WaardebloemHub standalone />
    </main>
  );
}

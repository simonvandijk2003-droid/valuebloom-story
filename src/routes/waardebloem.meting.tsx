import { createFileRoute } from "@tanstack/react-router";
import { SubpageShell } from "@/components/waardebloem/SubpageShell";

export const Route = createFileRoute("/waardebloem/meting")({
  head: () => ({
    meta: [
      { title: "Meting — De Waardebloem | Value Case Strijp-R" },
      { name: "description", content: "Resultaten uit de interviews rond de Waardebloem." },
    ],
  }),
  component: Meting,
});

function Meting() {
  return (
    <SubpageShell
      kicker="Meting"
      title="Resultaten uit de interviews"
      intro="Op deze pagina komen de resultaten uit de interviews. Inhoud (afbeeldingen) wordt nog toegevoegd."
    >
      <div className="rounded-2xl border border-dashed bg-card p-12 text-center text-muted-foreground shadow-[var(--shadow-soft)]">
        Hier komen de afbeeldingen van de meting.
      </div>
    </SubpageShell>
  );
}

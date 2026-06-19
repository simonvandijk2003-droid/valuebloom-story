import { createFileRoute } from "@tanstack/react-router";
import { SubpageShell } from "@/components/waardebloem/SubpageShell";
import bloemAsset from "@/assets/waardebloem-concept.png.asset.json";

export const Route = createFileRoute("/waardebloem/concept-1")({
  head: () => ({
    meta: [
      { title: "Concept 1 — De Waardebloem | Value Case Strijp-R" },
      { name: "description", content: "De eerste schets van de Waardebloem met drie waarden, bijen en verbindingen tussen interventies." },
    ],
  }),
  component: ConceptOne,
});

function ConceptOne() {
  return (
    <SubpageShell
      kicker="Versie 01"
      title="Concept 1 — eerste versie"
      intro="De eerste opzet van de Waardebloem. Hier werd al zichtbaar dat nieuwe materialen voor workshops een ecologisch knelpunt vormen (meer grondstofgebruik), waarop later cascadering als oplossing is toegevoegd."
      footnote={
        <>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Toelichting
          </p>
          <p className="mt-2 text-foreground/85">
            In dit concept ontstaat sociale waarde vooral via workshops, open ateliers en gezamenlijke
            projecten. Economische waarde komt voort uit gedeelde werkruimtes, materialen en betaalbare
            huur. Ecologisch zijn delen en hergebruik belangrijk, maar nieuwe materialen voor workshops
            vormen een knelpunt — dit punt heeft geleid tot het toevoegen van cascadering in de
            definitieve versie.
          </p>
        </>
      }
    >
      <div className="overflow-hidden rounded-2xl border bg-card p-4 shadow-[var(--shadow-soft)]">
        <img
          src={bloemAsset.url}
          alt="Concept Waardebloem met sociaal, economisch en ecologisch en het knelpunt nieuwe materialen"
          className="mx-auto h-auto w-full max-w-5xl object-contain"
        />
      </div>
    </SubpageShell>
  );
}

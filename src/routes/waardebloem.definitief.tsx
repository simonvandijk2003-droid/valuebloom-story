import { createFileRoute } from "@tanstack/react-router";
import { SubpageShell } from "@/components/waardebloem/SubpageShell";
import bloemAsset from "@/assets/waardebloem-definitief.png.asset.json";

export const Route = createFileRoute("/waardebloem/definitief")({
  head: () => ({
    meta: [
      { title: "Definitieve versie — De Waardebloem | Value Case Strijp-R" },
      { name: "description", content: "De aangescherpte Waardebloem na interviews en reflectie: cascadering toegevoegd, verbindingen genummerd en iconen per waarde." },
    ],
  }),
  component: Definitief,
});

function Definitief() {
  return (
    <SubpageShell
      kicker="Versie 02"
      title="Definitieve versie"
      intro="De aangescherpte Waardebloem na interviews en reflectie. Cascadering is toegevoegd, verbindingen zijn benoemd en de drie waarden — sociaal, ecologisch en economisch — versterken elkaar via gedeelde werkruimtes, gedeelde materialen en betaalbare huur."
      footnote={
        <>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Wat is aangescherpt t.o.v. Concept 1
          </p>
          <ul className="mt-3 space-y-2 text-foreground/85">
            <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--ecological)" }} /> <span><strong>Cascadering toegevoegd</strong> — reststromen (hout, metaal, textiel) opnieuw inzetten als grondstof → minder verspilling, sterkere circulaire visie.</span></li>
            <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> Verbindingen <strong>expliciet benoemd</strong> (gedeelde werkruimtes, gedeelde materialen, betaalbare huur).</li>
            <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" /> Bijen behouden als indicator voor de <strong>sterkte van waardecreatie</strong> per interventie.</li>
          </ul>
        </>
      }
    >
      <div className="overflow-hidden rounded-2xl border bg-card p-4 shadow-[var(--shadow-soft)]">
        <img
          src={bloemAsset.url}
          alt="Definitieve Waardebloem met sociaal, ecologisch en economisch, inclusief cascadering"
          className="mx-auto h-auto w-full max-w-5xl object-contain"
        />
      </div>
    </SubpageShell>
  );
}

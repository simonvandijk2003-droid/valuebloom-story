import { createFileRoute } from "@tanstack/react-router";
import { SubpageShell } from "@/components/waardebloem/SubpageShell";
import tabel5 from "@/assets/meting-tabel5.png.asset.json";
import tabel6 from "@/assets/meting-tabel6-v2.png.asset.json";
import grafiek from "@/assets/meting-grafiek-v2.png.asset.json";

export const Route = createFileRoute("/waardebloem/meting")({
  head: () => ({
    meta: [
      { title: "Meting — De Waardebloem | Value Case Strijp-R" },
      { name: "description", content: "Resultaten uit de interviews rond de Waardebloem." },
    ],
  }),
  component: Meting,
});

function Figure({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border bg-card p-5 shadow-[var(--shadow-soft)] md:p-8">
      <figcaption className="mb-4">
        <p className="font-display text-xl md:text-2xl">{title}</p>
      </figcaption>
      <img
        src={src}
        alt={alt}
        className="mx-auto h-auto w-full max-w-5xl object-contain"
      />
      <p className="mt-4 text-xs italic text-muted-foreground">Eigen werk, 2026</p>
    </figure>
  );
}

function Meting() {
  return (
    <SubpageShell
      kicker="Meting"
      title="Resultaten uit de interviews"
      intro="Op basis van de interviews met makers en bewoners (15 juni 2026, Piet Hein Eek, Strijp-R) is per interventie de impact op sociale, economische en ecologische waarde gewogen."
    >
      <div className="space-y-8">
        <Figure
          src={tabel5.url}
          alt="Tabel 5: Meting impact waardebloem met sociale, economische en ecologische waarde per interventie"
          title="Tabel 5 — Meting impact waardebloem"
        />
        <Figure
          src={tabel6.url}
          alt="Tabel 6: Resultaten in sterren per interventie"
          title="Tabel 6 — Resultaten in sterren"
        />
        <Figure
          src={grafiek.url}
          alt="Staafgrafiek impact waardebloem op waardecreatie bij Piet Hein Eek Strijp-R"
          title="Impact waardebloem op waardecreatie"
        />
      </div>
    </SubpageShell>
  );
}

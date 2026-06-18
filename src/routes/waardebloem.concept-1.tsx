import { createFileRoute } from "@tanstack/react-router";
import { SubpageShell, Flower, Bees, ArrowLabel } from "@/components/waardebloem/SubpageShell";

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
        <svg viewBox="0 0 1200 760" className="h-auto w-full">
          {/* Top horizontal connection */}
          <line x1="360" y1="180" x2="840" y2="180" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#arrL1)" markerStart="url(#arrR1)" />
          <ArrowLabel x={600} y={170} text="Gedeelde werkruimtes  +  Gedeelde materialen" />
          <Bees x={600} y={120} count={1} />

          {/* Cascadering loop near ecologisch (kept within frame) */}
          <path d="M 900 210 C 960 150, 1020 140, 1040 115" fill="none" stroke="var(--ecological)" strokeWidth="2" markerEnd="url(#arrEco)" />
          <ArrowLabel x={1010} y={95} text="Cascadering" color="var(--ecological)" italic />
          <Bees x={970} y={140} count={1} />

          {/* Center "Nieuwe materialen" circle */}
          <circle cx="600" cy="370" r="78" fill="oklch(0.98 0.005 80)" stroke="var(--border)" />
          <text x="600" y="362" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", fill: "var(--ink)" }}>
            Nieuwe
          </text>
          <text x="600" y="380" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", fill: "var(--ink)" }}>
            materialen
          </text>
          <text x="600" y="396" textAnchor="middle" style={{ fontSize: 11, fill: "var(--muted-foreground)" }}>
            (voor workshops)
          </text>

          {/* Red arrows from center: right + down */}
          <line x1="678" y1="370" x2="860" y2="370" stroke="#c0392b" strokeWidth="3" markerEnd="url(#arrRed)" />
          <line x1="600" y1="448" x2="600" y2="540" stroke="#c0392b" strokeWidth="3" markerEnd="url(#arrRed)" />
          <Bees x={770} y={335} count={1} />

          {/* Sociaal → Economisch diagonal */}
          <line x1="320" y1="380" x2="520" y2="600" stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#arrL1)" markerStart="url(#arrR1)" />
          <foreignObject x="120" y="430" width="240" height="110">
            <ul style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink)", paddingLeft: 18, margin: 0 }}>
              <li>Workshops</li>
              <li>Open ateliers</li>
              <li>Gezamenlijke projecten</li>
            </ul>
          </foreignObject>
          <Bees x={420} y={500} count={1} />

          {/* Ecologisch → Economisch diagonal "Betaalbare huur" */}
          <line x1="880" y1="380" x2="680" y2="600" stroke="var(--ink)" strokeWidth="1.5" markerEnd="url(#arrL1)" />
          <ArrowLabel x={840} y={500} text="Betaalbare huur" />
          <Bees x={770} y={450} count={1} />

          {/* Flowers */}
          <Flower cx={240} cy={240} r={110} color="oklch(0.78 0.12 25)" label="Sociaal" />
          <Bees x={240} y={365} count={5} />

          <Flower cx={960} cy={240} r={110} color="oklch(0.78 0.10 150)" label="Ecologisch" />
          <Bees x={960} y={365} count={4} />

          <Flower cx={600} cy={620} r={110} color="oklch(0.85 0.13 80)" label="Economisch" />
          <Bees x={600} y={745} count={4} />

          {/* Markers */}
          <defs>
            <marker id="arrL1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="var(--ink)" /></marker>
            <marker id="arrR1" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto"><path d="M9,0 L0,3 L9,6 Z" fill="var(--ink)" /></marker>
            <marker id="arrRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#c0392b" /></marker>
            <marker id="arrEco" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="var(--ecological)" /></marker>
          </defs>
        </svg>
      </div>
    </SubpageShell>
  );
}

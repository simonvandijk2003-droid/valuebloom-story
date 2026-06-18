import { createFileRoute } from "@tanstack/react-router";
import { SubpageShell, Flower, Bees, ArrowLabel } from "@/components/waardebloem/SubpageShell";
import { Users, Leaf, Euro } from "lucide-react";

export const Route = createFileRoute("/waardebloem/definitief")({
  head: () => ({
    meta: [
      { title: "Definitieve versie — De Waardebloem | Value Case Strijp-R" },
      { name: "description", content: "De aangescherpte Waardebloem na interviews en reflectie: cascadering toegevoegd, verbindingen genummerd en iconen per waarde." },
    ],
  }),
  component: Definitief,
});

function NumBadge({ x, y, n, color }: { x: number; y: number; n: number; color: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={14} fill={color} />
      <text x={x} y={y + 4} textAnchor="middle" style={{ fontSize: 13, fontWeight: 700, fill: "white" }}>{n}</text>
    </g>
  );
}

function Definitief() {
  const pink = "oklch(0.82 0.08 20)";
  const green = "oklch(0.80 0.09 150)";
  const yellow = "oklch(0.87 0.12 80)";
  const blue = "oklch(0.82 0.07 240)";

  return (
    <SubpageShell
      kicker="Versie 02"
      title="Definitieve versie"
      intro="De aangescherpte Waardebloem na interviews en reflectie. Cascadering is toegevoegd, verbindingen zijn genummerd en benoemd, en iconen maken de drie waarden direct herkenbaar."
      footnote={
        <>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Wat is aangescherpt t.o.v. Concept 1
          </p>
          <ul className="mt-3 space-y-2 text-foreground/85">
            <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: green }} /> <span><strong>Cascadering toegevoegd</strong> — reststromen (hout, metaal, textiel) opnieuw inzetten als grondstof → minder verspilling, sterkere circulaire visie.</span></li>
            <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> Verbindingen <strong>genummerd en benoemd (1–4)</strong> voor leesbaarheid.</li>
            <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" /> <strong>Iconen</strong> in het hart van elke bloem (mensen / blad / €) en een aparte <strong>Workshops-bloem</strong>.</li>
            <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" /> Bijen behouden als indicator voor de <strong>sterkte van waardecreatie</strong> per interventie.</li>
          </ul>
        </>
      }
    >
      <div className="overflow-hidden rounded-2xl border bg-card p-4 shadow-[var(--shadow-soft)]">
        <svg viewBox="0 0 1280 820" className="h-auto w-full">
          <defs>
            <marker id="d_pink" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#d36b7a" /></marker>
            <marker id="d_pinkR" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto"><path d="M9,0 L0,3 L9,6 Z" fill="#d36b7a" /></marker>
            <marker id="d_green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#3aa66b" /></marker>
            <marker id="d_greenR" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto"><path d="M9,0 L0,3 L9,6 Z" fill="#3aa66b" /></marker>
            <marker id="d_red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#c0392b" /></marker>
          </defs>

          {/* 1. Gedeelde werkruimtes (pink, top) */}
          <line x1="340" y1="180" x2="900" y2="180" stroke="#d36b7a" strokeWidth="2.5" markerEnd="url(#d_pink)" markerStart="url(#d_pinkR)" />
          <NumBadge x={560} y={148} n={1} color="#d36b7a" />
          <ArrowLabel x={680} y={152} text="Gedeelde werkruimtes" />

          {/* Cascadering loop top-right (dotted green) */}
          <path d="M 940 210 C 1010 130, 1090 130, 1110 80" fill="none" stroke="#3aa66b" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#d_green)" />
          <text x={1100} y={62} textAnchor="middle" style={{ fontSize: 12, fill: "#3aa66b", fontWeight: 600 }}>• Cascadering</text>
          <Bees x={1040} y={120} count={1} />

          {/* 2. Gedeelde materialen (green, below #1) */}
          <line x1="340" y1="240" x2="900" y2="240" stroke="#3aa66b" strokeWidth="2.5" markerEnd="url(#d_green)" markerStart="url(#d_greenR)" />
          <NumBadge x={560} y={272} n={2} color="#3aa66b" />
          <ArrowLabel x={680} y={276} text="Gedeelde materialen" />

          {/* Dashed green to cascadering from line 2 */}
          <path d="M 920 250 C 970 200, 1010 180, 1060 120" fill="none" stroke="#3aa66b" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#d_green)" />
          <Bees x={960} y={195} count={1} />

          {/* Workshops blue mini-flower center */}
          <Flower cx={460} cy={430} r={70} color={blue} label="Workshops" />

          {/* Red arrows from Workshops: to Ecologisch and to Economisch */}
          <path d="M 530 420 C 700 340, 850 320, 940 320" fill="none" stroke="#c0392b" strokeWidth="2.5" markerEnd="url(#d_red)" />
          <text x={770} y={355} textAnchor="middle" style={{ fontSize: 12, fill: "#c0392b", fontStyle: "italic", fontWeight: 600 }}>
            Nieuwe materialen
          </text>
          <Bees x={870} y={310} count={1} />

          <path d="M 480 500 C 510 580, 560 640, 620 670" fill="none" stroke="#c0392b" strokeWidth="2.5" markerEnd="url(#d_red)" />
          <text x={390} y={595} textAnchor="middle" style={{ fontSize: 12, fill: "#c0392b", fontStyle: "italic", fontWeight: 600 }}>
            Nieuwe materialen
          </text>

          {/* 3. Sociaal ↔ Economisch (pink diagonal) */}
          <line x1="290" y1="370" x2="620" y2="680" stroke="#d36b7a" strokeWidth="2.5" markerEnd="url(#d_pink)" markerStart="url(#d_pinkR)" />
          <foreignObject x="60" y="450" width="270" height="160">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "9999px", background: "#d36b7a", color: "white", fontSize: 12, fontWeight: 700 }}>3</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>Sociale en economische<br />samenwerking</span>
              </div>
              <ul style={{ marginTop: 8, paddingLeft: 18, fontSize: 12.5, lineHeight: 1.55, color: "var(--ink)" }}>
                <li>Workshops</li>
                <li>Open ateliers</li>
                <li>Gezamenlijke projecten</li>
              </ul>
            </div>
          </foreignObject>

          {/* 4. Ecologisch ↔ Economisch (green diagonal) */}
          <line x1="940" y1="370" x2="700" y2="680" stroke="#3aa66b" strokeWidth="2.5" markerEnd="url(#d_green)" />
          <foreignObject x="960" y="450" width="290" height="140">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "9999px", background: "#3aa66b", color: "white", fontSize: 12, fontWeight: 700 }}>4</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>Ecologische en economische<br />verbinding</span>
              </div>
              <ul style={{ marginTop: 8, paddingLeft: 18, fontSize: 12.5, lineHeight: 1.55, color: "var(--ink)" }}>
                <li>Betaalbare huur</li>
              </ul>
            </div>
          </foreignObject>

          {/* Main flowers */}
          <Flower cx={220} cy={250} r={120} color={pink} label="Sociaal" icon={<Users size={36} strokeWidth={2} />} />
          <Bees x={220} y={385} count={5} />

          <Flower cx={1010} cy={250} r={120} color={green} label="Ecologisch" icon={<Leaf size={36} strokeWidth={2} />} />
          <Bees x={1010} y={385} count={4} />

          <Flower cx={660} cy={710} r={110} color={yellow} label="Economisch" icon={<Euro size={32} strokeWidth={2.5} />} />
          <Bees x={660} y={835 - 10} count={5} />
        </svg>
      </div>
    </SubpageShell>
  );
}

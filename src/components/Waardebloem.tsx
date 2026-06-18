import { useState } from "react";

type Value = "social" | "economic" | "ecological";

interface PetalData {
  id: Value;
  label: string;
  color: string;
  bees: number;
  interventions: { name: string; strength: number }[];
  description: string;
  angle: number;
}

const petals: PetalData[] = [
  {
    id: "social",
    label: "Sociaal",
    color: "var(--social)",
    bees: 5,
    angle: -90,
    interventions: [
      { name: "Gedeelde werkruimtes", strength: 5 },
      { name: "Workshops & open ateliers", strength: 5 },
      { name: "Gedeelde materialen", strength: 3 },
      { name: "Betaalbare huur", strength: 3 },
    ],
    description:
      "Sociale waarde komt het sterkst naar voren: weinig contact tussen bewoners en makers, terwijl daar wel behoefte aan is. Workshops, open ateliers en gedeelde werkruimtes versterken ontmoeting, samenwerking en kennisdeling.",
  },
  {
    id: "economic",
    label: "Economisch",
    color: "var(--economic)",
    bees: 5,
    angle: 30,
    interventions: [
      { name: "Gedeelde werkruimtes", strength: 5 },
      { name: "Gedeelde materialen", strength: 5 },
      { name: "Betaalbare huur", strength: 5 },
      { name: "Workshops & open ateliers", strength: 2 },
    ],
    description:
      "Delen van ruimtes, machines en materialen verlaagt kosten. Meer betrokkenheid van bewoners leidt tot economische activiteit: aankopen, opdrachten en samenwerking tussen makers.",
  },
  {
    id: "ecological",
    label: "Ecologisch",
    color: "var(--ecological)",
    bees: 5,
    angle: 150,
    interventions: [
      { name: "Gedeelde werkruimtes", strength: 5 },
      { name: "Gedeelde materialen", strength: 5 },
      { name: "Cascadering reststromen", strength: 5 },
      { name: "Workshops & open ateliers", strength: 2 },
    ],
    description:
      "Ecologische waarde ontstaat door het delen van ruimtes en materialen. Cascadering — reststromen als hout, metaal en textiel opnieuw inzetten — voorkomt verspilling en versterkt de circulaire visie van Strijp-R.",
  },
];

function Bees({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} van 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "opacity-100" : "opacity-25"}>🐝</span>
      ))}
    </span>
  );
}

export function Waardebloem() {
  const [active, setActive] = useState<Value>("social");
  const current = petals.find((p) => p.id === active)!;

  const cx = 200, cy = 200, petalRy = 115, petalRx = 70, petalOffset = 95;

  return (
    <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[480px]">
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-label="Waardebloem">
          <defs>
            <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.98 0.01 80)" />
              <stop offset="100%" stopColor="oklch(0.86 0.04 70)" />
            </radialGradient>
          </defs>
          <circle cx={cx} cy={cy} r={172} fill="none" stroke="var(--border)" strokeDasharray="2 6" />
          {petals.map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const tx = cx + Math.cos(rad) * petalOffset;
            const ty = cy + Math.sin(rad) * petalOffset;
            const isActive = active === p.id;
            return (
              <g
                key={p.id}
                transform={`translate(${tx} ${ty}) rotate(${p.angle + 90}) scale(${isActive ? 1.08 : 1})`}
                onMouseEnter={() => setActive(p.id)}
                onClick={() => setActive(p.id)}
                tabIndex={0}
                role="button"
                aria-label={p.label}
                className="cursor-pointer outline-none"
                style={{ transition: "transform 500ms cubic-bezier(.2,.7,.2,1)" }}
              >
                <ellipse
                  cx={0} cy={0} rx={petalRx} ry={petalRy}
                  fill={p.color}
                  opacity={isActive ? 0.95 : 0.7}
                  stroke="oklch(0.24 0.012 50 / 0.18)"
                />
                <text
                  x={0} y={-petalRy + 30} textAnchor="middle"
                  transform={`rotate(${-(p.angle + 90)})`}
                  style={{ fontSize: 14, fontFamily: "var(--font-sans)", fill: "var(--ink)", fontWeight: 600, letterSpacing: "0.02em" }}
                >
                  {p.label}
                </text>
              </g>
            );
          })}
          <circle cx={cx} cy={cy} r={54} fill="url(#centerGrad)" stroke="var(--border)" />
          <text x={cx} y={cy - 2} textAnchor="middle"
            style={{ fontFamily: "var(--font-display)", fontSize: 17, fill: "var(--ink)" }}>
            Strijp-R
          </text>
          <text x={cx} y={cy + 14} textAnchor="middle"
            style={{ fontFamily: "var(--font-sans)", fontSize: 9, fill: "var(--muted-foreground)", letterSpacing: "0.18em" }}>
            WAARDEBLOEM
          </text>
        </svg>
      </div>

      <div>
        <div className="mb-4 flex gap-2">
          {petals.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                active === p.id ? "shadow-sm" : "bg-card hover:bg-muted"
              }`}
              style={
                active === p.id
                  ? { backgroundColor: p.color, borderColor: "transparent", color: "var(--ink)" }
                  : undefined
              }
            >
              {p.label}
            </button>
          ))}
        </div>

        <div key={current.id} className="rounded-2xl border bg-card p-7 shadow-[var(--shadow-soft)] duration-500 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 rounded-full" style={{ backgroundColor: current.color }} />
            <h3 className="text-2xl">{current.label}e waarde</h3>
          </div>
          <p className="mt-3 leading-relaxed text-foreground/80">{current.description}</p>
          <div className="mt-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bijdrage interventies</p>
            {current.interventions.map((i) => (
              <div key={i.name} className="flex items-center justify-between gap-3 border-b border-border/60 py-1.5 text-sm">
                <span>{i.name}</span>
                <Bees count={i.strength} />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Hover of klik een bloemblad. 🐝 = sterkte van de bijdrage. Concept: Leclercq &amp; Smit (2026).
        </p>
      </div>
    </div>
  );
}

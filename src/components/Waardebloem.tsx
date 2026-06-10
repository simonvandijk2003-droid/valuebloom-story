import { useState } from "react";

type Value = "social" | "economic" | "ecological";

interface PetalData {
  id: Value;
  label: string;
  short: string;
  keywords: string[];
  description: string;
  angle: number; // degrees, 0 = top
}

const petals: PetalData[] = [
  {
    id: "social",
    label: "Sociale waarde",
    short: "Ontmoeting, community & cohesie",
    keywords: ["Community-gevoel", "Ontmoeting", "Open ateliers", "Ambachtsworkshops", "Kennisdeling"],
    description:
      "Bewoners, makers en het maakbedrijf van Piet Hein Eek komen elkaar structureel tegen via open ateliers, ambachtsworkshops en gezamenlijke maakprojecten. Zo groeit het community-gevoel dat nu nog ontbreekt op Strijp-R.",
    angle: -90,
  },
  {
    id: "economic",
    label: "Economische waarde",
    short: "Verbondenheid leidt tot activiteit",
    keywords: ["Workshops", "Winkel Piet Hein Eek", "Samenwerking", "Betaalbare werkruimte", "Bewonerspas"],
    description:
      "Een sterker gemeenschapsgevoel vertaalt zich naar economische activiteit: aankopen in de winkel, deelname aan betaalde workshops en gezamenlijke opdrachten tussen makers. Het maakbedrijf wordt minder kwetsbaar en de huur blijft betaalbaar.",
    angle: 30,
  },
  {
    id: "ecological",
    label: "Ecologische waarde",
    short: "Delen, hergebruik & circulariteit",
    keywords: ["Gedeelde werkruimtes", "Gedeelde materialen", "Hergebruik", "Circulaire werkwijze", "Industrieel erfgoed"],
    description:
      "Door werkruimtes en materialen onderling te delen, worden ruimtes efficiënter benut en wordt er minder weggegooid. Dit sluit aan op de circulaire werkwijze die Piet Hein Eek al decennialang toepast.",
    angle: 150,
  },
];

export function Waardebloem() {
  const [active, setActive] = useState<Value>("social");
  const current = petals.find((p) => p.id === active)!;

  // Geometry
  const cx = 200;
  const cy = 200;
  const petalRy = 110;
  const petalRx = 64;
  const petalOffset = 92; // distance from center to petal center

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[460px]">
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-label="Interactieve Waardebloem">
          <defs>
            <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.98 0.01 80)" />
              <stop offset="100%" stopColor="oklch(0.88 0.02 70)" />
            </radialGradient>
          </defs>

          {/* Subtle background ring */}
          <circle cx={cx} cy={cy} r={170} fill="none" stroke="var(--border)" strokeDasharray="2 6" />

          {petals.map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const tx = cx + Math.cos(rad) * petalOffset;
            const ty = cy + Math.sin(rad) * petalOffset;
            const isActive = active === p.id;
            return (
              <g
                key={p.id}
                transform={`translate(${tx} ${ty}) rotate(${p.angle + 90})`}
                onMouseEnter={() => setActive(p.id)}
                onFocus={() => setActive(p.id)}
                onClick={() => setActive(p.id)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={p.label}
                className="cursor-pointer outline-none transition-transform duration-500 ease-out focus-visible:[&>ellipse]:stroke-foreground"
                style={{
                  transformOrigin: `${tx}px ${ty}px`,
                  transform: `translate(${tx}px, ${ty}px) rotate(${p.angle + 90}deg) scale(${isActive ? 1.06 : 1})`,
                }}
              >
                <ellipse
                  cx={0}
                  cy={0}
                  rx={petalRx}
                  ry={petalRy}
                  className={`petal-${p.id}`}
                  opacity={isActive ? 0.95 : 0.78}
                  stroke="oklch(0.2 0.02 60 / 0.18)"
                  strokeWidth={1}
                  style={{ transition: "opacity 300ms ease, transform 500ms ease" }}
                />
                <text
                  x={0}
                  y={-petalRy + 28}
                  textAnchor="middle"
                  transform={`rotate(${-(p.angle + 90)})`}
                  className="fill-white font-medium"
                  style={{
                    fontSize: 13,
                    fontFamily: "var(--font-sans)",
                    fill: p.id === "economic" ? "oklch(0.2 0.02 60)" : "white",
                    letterSpacing: "0.02em",
                  }}
                >
                  {p.label.split(" ")[0]}
                </text>
              </g>
            );
          })}

          {/* Center */}
          <circle cx={cx} cy={cy} r={52} fill="url(#centerGrad)" stroke="var(--border)" />
          <text
            x={cx}
            y={cy - 4}
            textAnchor="middle"
            style={{ fontFamily: "var(--font-display)", fontSize: 16, fill: "var(--foreground)" }}
          >
            Strijp-R
          </text>
          <text
            x={cx}
            y={cy + 14}
            textAnchor="middle"
            style={{ fontFamily: "var(--font-sans)", fontSize: 10, fill: "var(--muted-foreground)", letterSpacing: "0.12em" }}
          >
            WAARDEBLOEM
          </text>
        </svg>
      </div>

      <div className="relative">
        <div className="flex gap-2 pb-4">
          {petals.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                active === p.id
                  ? "text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
              style={
                active === p.id
                  ? { backgroundColor: `var(--${p.id})`, color: p.id === "economic" ? "var(--foreground)" : "white" }
                  : undefined
              }
            >
              {p.label}
            </button>
          ))}
        </div>

        <div
          key={current.id}
          className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] duration-500 animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: `var(--${current.id})` }}
            />
            <h3 className="text-2xl">{current.label}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current.short}</p>
          <p className="mt-4 leading-relaxed">{current.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {current.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full border bg-background px-3 py-1 text-xs text-foreground/80"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Tip: hover of klik op een bloemblad om de bijbehorende waarde te bekijken.
        </p>
      </div>
    </div>
  );
}

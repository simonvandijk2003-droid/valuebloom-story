import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

export function SubpageShell({
  kicker,
  title,
  intro,
  children,
  footnote,
}: {
  kicker: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
  footnote?: ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link
            to="/waardebloem"
            className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-[var(--shadow-soft)] transition hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar Value Case
          </Link>
          <p className="hidden font-mono text-[11px] tracking-widest text-muted-foreground md:block">
            DE WAARDEBLOEM · SUBPAGINA
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{kicker}</p>
        <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-foreground/80 md:text-lg">{intro}</p>

        <div className="mt-10">{children}</div>

        {footnote && (
          <div className="mt-10 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
            {footnote}
          </div>
        )}
      </section>
    </main>
  );
}

/* ─────────── Flower building blocks (schematic, in style) ─────────── */

export function Flower({
  cx, cy, r, color, label, icon, sub, className,
}: {
  cx: number; cy: number; r: number;
  color: string;
  label: string;
  icon?: ReactNode;
  sub?: string;
  className?: string;
}) {
  const petals = 10;
  return (
    <g className={className}>
      {Array.from({ length: petals }).map((_, i) => {
        const a = (i / petals) * Math.PI * 2;
        const px = cx + Math.cos(a) * r * 0.55;
        const py = cy + Math.sin(a) * r * 0.55;
        return (
          <ellipse
            key={i}
            cx={px}
            cy={py}
            rx={r * 0.42}
            ry={r * 0.7}
            fill={color}
            opacity={0.75}
            transform={`rotate(${(a * 180) / Math.PI + 90} ${px} ${py})`}
            stroke="oklch(0.24 0.012 50 / 0.12)"
          />
        );
      })}
      <circle cx={cx} cy={cy} r={r * 0.55} fill="oklch(0.98 0.01 80)" stroke={color} strokeWidth={2} />
      {icon && (
        <foreignObject x={cx - r * 0.45} y={cy - r * 0.45} width={r * 0.9} height={r * 0.55}>
          <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center", color }}>
            {icon}
          </div>
        </foreignObject>
      )}
      <text
        x={cx}
        y={cy + (icon ? r * 0.28 : 5)}
        textAnchor="middle"
        style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, fill: "var(--ink)", letterSpacing: "0.04em" }}
      >
        {label.toUpperCase()}
      </text>
      {sub && (
        <text x={cx} y={cy + r + 4} textAnchor="middle" style={{ fontSize: 11, fill: "var(--muted-foreground)" }}>
          {sub}
        </text>
      )}
    </g>
  );
}

export function Bees({ x, y, count }: { x: number; y: number; count: number }) {
  const spacing = 16;
  return (
    <foreignObject x={x - (count * spacing) / 2} y={y} width={count * spacing + 8} height={22}>
      <div style={{ display: "flex", gap: 2, justifyContent: "center", fontSize: 14 }}>
        {Array.from({ length: count }).map((_, i) => (
          <span key={i}>🐝</span>
        ))}
      </div>
    </foreignObject>
  );
}

export function ArrowLabel({
  x, y, text, color = "var(--ink)", italic = false,
}: { x: number; y: number; text: string; color?: string; italic?: boolean }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        fill: color,
        fontStyle: italic ? "italic" : "normal",
      }}
    >
      {text}
    </text>
  );
}

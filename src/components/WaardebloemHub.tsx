import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function WaardebloemHub({ standalone = false }: { standalone?: boolean }) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      {!standalone && (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          06 · De Waardebloem
        </p>
      )}
      <h2 className="text-4xl leading-tight md:text-5xl">De Waardebloem</h2>
      <p className="mt-4 max-w-3xl text-foreground/80 md:text-lg">
        De Waardebloem visualiseert hoe interventies bijdragen aan sociale, economische en
        ecologische waarde. Het model is ontwikkeld in fasen — van eerste concept naar
        definitieve versie.
      </p>

      <div className="mt-9 grid gap-5 md:grid-cols-2">
        <HubCard
          to="/waardebloem/concept-1"
          number="01"
          color="var(--social)"
          title="Concept 1"
          subtitle="Eerste versie"
          label="De eerste schets van het model"
        />
        <HubCard
          to="/waardebloem/definitief"
          number="02"
          color="var(--ecological)"
          title="Definitieve versie"
          subtitle="Aangescherpt"
          label="Aangescherpt na interviews & reflectie"
        />
      </div>

      <p className="mt-7 max-w-3xl text-sm text-muted-foreground">
        Uit de interviews (15 juni 2026, maakbedrijf Piet Hein Eek) bleek sociale waarde het
        belangrijkst; er is draagvlak voor ontmoeting, samenwerking en kennisuitwisseling.
        Conceptmodel gebaseerd op Leclercq en Smit (2026).
      </p>

      {standalone && (
        <div className="mt-8">
          <Link
            to="/"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Terug naar presentatie
          </Link>
        </div>
      )}
    </div>
  );
}

function HubCard({
  to,
  number,
  color,
  title,
  subtitle,
  label,
}: {
  to: string;
  number: string;
  color: string;
  title: string;
  subtitle: string;
  label: string;
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-2xl border bg-card p-8 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-lg"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
            VERSIE {number}
          </span>
          <h3 className="mt-2 font-display text-3xl">{title}</h3>
          <p className="text-sm font-medium" style={{ color }}>{subtitle}</p>
        </div>
        <span
          className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background transition group-hover:translate-x-1"
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-6 text-foreground/80">{label}</p>
    </Link>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { WaardebloemHub } from "@/components/WaardebloemHub";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Deck,
});

const SLIDES = [
  { id: "titel", label: "Opening" },
  { id: "context", label: "Context" },
  { id: "perspectieven", label: "Perspectieven" },
  { id: "bmt", label: "BMT-model" },
  { id: "thirdplace", label: "Third Place" },
  { id: "operationalisering", label: "Operationalisering" },
  { id: "samenhang", label: "Samenhang" },
  { id: "waardebloem", label: "Waardebloem" },
  { id: "gebruik", label: "Gebruik model" },
  { id: "reflectie", label: "Reflectie" },
  { id: "conclusie", label: "Conclusie" },
  { id: "bronnen", label: "Bronnen" },
];

function Deck() {
  const deckRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const goTo = useCallback((i: number) => {
    const el = deckRef.current;
    if (!el) return;
    const target = Math.max(0, Math.min(SLIDES.length - 1, i));
    el.scrollTo({ top: target * el.clientHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollTop / el.clientHeight);
      setIdx(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        goTo(idx + 1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goTo(idx - 1);
      } else if (e.key === "Home") goTo(0);
      else if (e.key === "End") goTo(SLIDES.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, goTo]);

  return (
    <div className="relative">
      <div ref={deckRef} className="deck">
        <SlideTitel onStart={() => goTo(1)} />
        <SlideContext />
        <SlidePerspectieven />
        <SlideBMT />
        <SlideThirdPlace />
        <SlideOperationalisering />
        <SlideSamenhang />
        <SlideWaardebloem />
        <SlideGebruik />
        <SlideReflectie />
        <SlideConclusie />
        <SlideBronnen />
      </div>

      {/* Progress */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-[3px] bg-transparent">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${((idx + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Slide-nummer */}
      <div className="fixed left-6 top-5 z-40 select-none font-mono text-xs tracking-widest text-muted-foreground">
        {String(idx + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        <span className="ml-3 hidden text-foreground/70 md:inline">— {SLIDES[idx]?.label}</span>
      </div>

      {/* Dots */}
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Ga naar ${s.label}`}
            className={`h-2.5 w-2.5 rounded-full border transition ${
              i === idx ? "scale-125 border-primary bg-primary" : "border-foreground/30 bg-transparent hover:bg-foreground/20"
            }`}
          />
        ))}
      </div>

      {/* Prev / next */}
      <div className="fixed bottom-5 right-6 z-40 flex gap-2">
        <button
          onClick={() => goTo(idx - 1)}
          disabled={idx === 0}
          aria-label="Vorige"
          className="rounded-full border bg-card/80 p-2.5 shadow-[var(--shadow-soft)] backdrop-blur transition hover:bg-card disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => goTo(idx + 1)}
          disabled={idx === SLIDES.length - 1}
          aria-label="Volgende"
          className="rounded-full border bg-card/80 p-2.5 shadow-[var(--shadow-soft)] backdrop-blur transition hover:bg-card disabled:opacity-40"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ───────────────────── slides ───────────────────── */

function SlideShell({ children, kicker, className = "" }: { children: React.ReactNode; kicker?: string; className?: string }) {
  return (
    <section className={`slide ${className}`}>
      <div className="mx-auto w-full max-w-6xl animate-in fade-in slide-in-from-bottom-3 duration-700">
        {kicker && (
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{kicker}</p>
        )}
        {children}
      </div>
    </section>
  );
}

function SlideTitel({ onStart }: { onStart: () => void }) {
  return (
    <section className="slide" style={{ background: "linear-gradient(135deg, oklch(0.96 0.012 75) 0%, oklch(0.88 0.04 70) 100%)" }}>
      <div className="mx-auto w-full max-w-5xl text-center animate-in fade-in zoom-in-95 duration-1000">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-primary">Value Case · Strijp-R · 2026</p>
        <h1 className="text-balance text-6xl leading-[1.02] md:text-8xl">
          Value Case <span className="italic text-primary">Strijp-R</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-xl text-foreground/75 md:text-2xl">
          Meervoudige waardecreatie rondom Piet Hein Eek
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
          Een voormalig Philips-industrieterrein in Eindhoven, getransformeerd tot creatieve broedplaats
          en makerslandschap.
        </p>
        <button
          onClick={onStart}
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:scale-[1.02]"
        >
          Start presentatie <ChevronDown className="h-4 w-4" />
        </button>
        <p className="mt-6 text-[11px] uppercase tracking-widest text-muted-foreground">
          ← → navigeren · spatie volgende
        </p>
      </div>
    </section>
  );
}

function SlideContext() {
  const items = [
    "Voormalig Philips-industrieterrein: radio's en beeldbuizen.",
    "Piet Hein Eek bouwde hier een maakbedrijf: meubelmakerij, ontwerpstudio's, fabriek, showroom, galerie, horeca en hotel.",
    "Behoefte aan toegankelijkheid, verbinding en interactie tussen bewoners, makers en ondernemers — Piet Hein Eek mist het communitygevoel.",
    "Daarom onderzoeken we via de Value Case de wederzijdse versterking tussen bewoners en het maakbedrijf.",
  ];
  return (
    <SlideShell kicker="01 · Context">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h2 className="text-5xl leading-tight md:text-6xl">Waarom een Value Case voor Strijp-R?</h2>
          <ul className="mt-7 space-y-3">
            {items.map((t, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-7 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Van business naar value
          </p>
          <div className="relative mt-5 aspect-square w-full">
            <svg viewBox="0 0 300 300" className="h-full w-full">
              <line x1="40" y1="260" x2="280" y2="260" stroke="var(--ink)" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="260" stroke="var(--ink)" strokeWidth="1.5" />
              <text x="285" y="275" fontSize="10" fill="var(--muted-foreground)">value →</text>
              <text x="10" y="18" fontSize="10" fill="var(--muted-foreground)">business ↑</text>
              <line x1="40" y1="140" x2="280" y2="140" stroke="var(--border)" strokeDasharray="2 4" />
              <circle cx="220" cy="195" r="34" fill="var(--social)" opacity="0.85" />
              <text x="220" y="198" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--ink)">
                broedplaatsen
              </text>
              <text x="220" y="210" textAnchor="middle" fontSize="9" fill="var(--ink)">&amp; makers</text>
            </svg>
          </div>
          <p className="mt-3 text-sm text-foreground/75">
            Broedplaatsen staan financieel onder druk, maar scoren hoog op maatschappelijke (brede) waarde.
          </p>
        </div>
      </div>
      <SourceFootnote sources={["I. van der Valk, 26 mei 2026", "Brightspace.hr, 2026"]} />
    </SlideShell>
  );
}

const ROLES = [
  { role: "Belegger", text: "Stuurt op meervoudige waardecreatie, niet alleen financieel rendement. Sociale cohesie → stabielere bezetting, langere huurrelaties en hogere vastgoedwaarde.", src: "Gool, 2026" },
  { role: "Taxateur", text: "Kijkt verder dan markt- en huurwaarde; een sterker communitygevoel en creatieve identiteit verhogen de omgevingswaarde, ook al scoort het maakbedrijf financieel laag.", src: "VastgoedNed, 2024" },
  { role: "Projectontwikkelaar", text: "Toekomstbestendige gebiedsontwikkeling door functies te combineren en ruimte te maken voor een sterke gemeenschap.", src: "Platform31, 2023" },
  { role: "Huisvestingsadviseur", text: "Beoordeelt de bijdrage van het gebouw aan welzijn, sociale verbinding, duurzaamheid en toegankelijkheid; weegt indirecte economische voordelen mee.", src: "" },
  { role: "Propertymanager", text: "Bewaakt de balans tussen sociale, economische en maatschappelijke waarden; aandacht voor betaalbare huur en duurzame exploitatie.", src: "Hoendervanger, Voordt & Wijnja, 2022" },
  { role: "Locatiemanager", text: "Versterkt de community via ontmoeting en samenwerking; zet in op circulair gebruik van ruimtes en materialen.", src: "Hoendervanger, Voordt & Wijnja, 2022" },
];

function SlidePerspectieven() {
  const [active, setActive] = useState(0);
  const cur = ROLES[active];
  return (
    <SlideShell kicker="02 · Perspectieven op waarde">
      <h2 className="text-4xl leading-tight md:text-5xl">Zes beroepsrollen, één rode draad</h2>
      <p className="mt-3 max-w-2xl text-foreground/70">
        Klik op een rol om te zien hoe deze naar waarde kijkt.
      </p>
      <div className="mt-7 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {ROLES.map((r, i) => (
          <button
            key={r.role}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`rounded-xl border p-4 text-left text-sm transition ${
              i === active
                ? "border-primary bg-primary/10 shadow-[var(--shadow-soft)]"
                : "bg-card hover:bg-muted"
            }`}
          >
            <span className="block font-mono text-[10px] tracking-widest text-muted-foreground">
              0{i + 1}
            </span>
            <span className="mt-1 block font-medium">{r.role}</span>
          </button>
        ))}
      </div>
      <div key={cur.role} className="mt-6 rounded-2xl border bg-card p-7 shadow-[var(--shadow-soft)] duration-400 animate-in fade-in slide-in-from-bottom-2">
        <h3 className="text-2xl">{cur.role}</h3>
        <p className="mt-3 leading-relaxed text-foreground/85">{cur.text}</p>
        {cur.src && <p className="mt-3 text-xs text-muted-foreground">Bron: {cur.src}</p>}
      </div>
      <p className="mt-6 max-w-3xl text-lg italic text-foreground/80">
        "Waarde is meer dan geld — het gaat om mensen, plek en toekomst, en die drie versterken elkaar."
      </p>
    </SlideShell>
  );
}

function SlideBMT() {
  const phases = [
    {
      title: "Definitiefase",
      sub: "Aanleiding & context",
      items: [
        "Ontbrekend communitygevoel tussen bewoners, makers en ondernemers (belangrijkste).",
        "Betaalbare werkruimtes onder druk.",
        "Verduurzaming en technische staat van het pand.",
      ],
    },
    {
      title: "Ontwerpfase",
      sub: "Strategie: ABCD",
      items: [
        "Asset Based Community Development: versterken van bestaande kwaliteiten, talenten en netwerken.",
        "Open atelierdagen en ambachtsworkshops voor kinderen.",
        "Gezamenlijke maakprojecten en gedeelde werkruimtes.",
      ],
    },
    {
      title: "Resultaatfase",
      sub: "Impact & waardecreatie",
      items: [
        "Sociaal: meer ontmoeting, samenwerking, sterker communitygevoel.",
        "Economisch: nieuwe opdrachten, gezamenlijke projecten, aankopen door bewoners.",
        "Ecologisch: delen van ruimtes en materialen, hergebruik, minder verspilling.",
      ],
    },
  ];
  return (
    <SlideShell kicker="03 · BMT-model">
      <h2 className="text-4xl leading-tight md:text-5xl">Van spanningsveld naar propositie</h2>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {phases.map((p, i) => (
          <div
            key={p.title}
            className={`relative rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] ${
              i === 2 ? "ring-2 ring-primary/40" : ""
            }`}
          >
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">FASE 0{i + 1}</span>
            <h3 className="mt-1 text-2xl">{p.title}</h3>
            <p className="text-sm text-primary">{p.sub}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {p.items.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border-l-4 border-primary bg-card p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Droom 2040–2045</p>
          <p className="mt-2 text-sm leading-relaxed">
            Wonen, maken en ontmoeten zijn verbonden. Bewoners, makers en ondernemers kennen elkaar en
            werken samen. Werkruimtes blijven betaalbaar; circulariteit staat centraal.
          </p>
        </div>
        <div className="rounded-2xl border-l-4 bg-card p-5" style={{ borderColor: "var(--ecological)" }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Propositie</p>
          <p className="mt-2 text-sm leading-relaxed">
            Wederzijdse versterking tussen bewoners, makers en het maakbedrijf via gedeelde ruimtes,
            ontmoetingsplekken en betaalbare werkruimtes.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

function SlideThirdPlace() {
  const pillars = ["Mensen", "Plek", "Beleving", "Product", "Toekomst"];
  return (
    <SlideShell kicker="03b · Third Place">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl">De plek waar samenkomen centraal staat</h2>
          <p className="mt-5 leading-relaxed text-foreground/85">
            Een <em>third place</em> is een plek weg van huis, maar voelt als thuis. Sterke gemeenschappen
            ontstaan als mensen elkaar laagdrempelig en regelmatig ontmoeten buiten de <em>first place</em> (thuis)
            en <em>second place</em> (werk of school).
          </p>
          <p className="mt-3 leading-relaxed text-foreground/85">
            Vijf pijlers vormen de basis voor een vitale openbare ruimte — en voor het communitygevoel dat
            Strijp-R nu mist.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <span key={p} className="rounded-full border bg-card px-3.5 py-1.5 text-sm">{p}</span>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Bron: Ray Oldenburg, 1989.</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { t: "Thuis", s: "First place", c: "var(--sand)" },
            { t: "Werk / school", s: "Second place", c: "var(--economic)" },
            { t: "Ontmoetings­plek", s: "Third place", c: "var(--social)" },
          ].map((c, i) => (
            <div
              key={c.t}
              className="rounded-2xl border bg-card p-5 text-center shadow-[var(--shadow-soft)]"
              style={{ borderTop: `4px solid ${c.c}` }}
            >
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">0{i + 1}</span>
              <p className="mt-2 font-medium">{c.t}</p>
              <p className="text-xs text-muted-foreground">{c.s}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function SlideOperationalisering() {
  const rows = [
    {
      kpi: "Communitygevoel",
      color: "var(--social)",
      indicator: "Aantal ontmoetingen per week tussen bewoners en makers op gedeelde plekken.",
      method: "Wekelijks bijgehouden door community-observator + 2× per jaar enquête.",
      target: "≥ 70% van de dagdelen kent één ontmoeting. Na 3 jaar bij 40% een inhoudelijk gesprek of samenwerking.",
    },
    {
      kpi: "Economische stabiliteit",
      color: "var(--economic)",
      indicator: "Economische activiteit tussen bewoners ↔ makers en makers onderling.",
      method: "Bewonerspas + digitaal formulier voor samenwerkingen.",
      target: "25% van de bewoners gebruikt per kwartaal het aanbod. Binnen 2 jaar werkt 30% van de makers samen.",
    },
    {
      kpi: "Hergebruik",
      color: "var(--ecological)",
      indicator: "Ruimte- en materiaalverbruik per maker.",
      method: "Per kwartaal bijgehouden.",
      target: "Jaarlijkse daling van 10% door gedeeld gebruik.",
    },
  ];
  return (
    <SlideShell kicker="04 · Operationalisering">
      <h2 className="text-4xl leading-tight md:text-5xl">Brede welvaart, systemisch meetbaar</h2>
      <div className="mt-6 overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-soft)]">
        <div className="grid grid-cols-[1.1fr_1.4fr_1.2fr_1.4fr] gap-px bg-border text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {["Kernbegrip", "Indicator", "Meetmethode", "KPI"].map((h) => (
            <div key={h} className="bg-muted px-5 py-3">{h}</div>
          ))}
        </div>
        {rows.map((r) => (
          <div key={r.kpi} className="grid grid-cols-[1.1fr_1.4fr_1.2fr_1.4fr] gap-px bg-border text-sm">
            <div className="bg-card px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: r.color }} />
                <span className="font-medium">{r.kpi}</span>
              </div>
            </div>
            <div className="bg-card px-5 py-4 text-foreground/85">{r.indicator}</div>
            <div className="bg-card px-5 py-4 text-foreground/85">{r.method}</div>
            <div className="bg-card px-5 py-4 text-foreground/85">{r.target}</div>
          </div>
        ))}
      </div>
      <p className="mt-5 max-w-3xl text-foreground/80">
        Niet als losse indicatoren, maar als drie waarden die elkaar versterken. Sluit aan bij ABCD en het
        Third Place-concept.
      </p>
      <SourceFootnote sources={["Wijkwijzer, 2024"]} />
    </SlideShell>
  );
}

function SlideSamenhang() {
  const steps = [
    { t: "Meer ontmoetingen", c: "var(--social)" },
    { t: "Meer samenwerking", c: "var(--social)" },
    { t: "Meer economische activiteit", c: "var(--economic)" },
    { t: "Meer betaalbaarheid", c: "var(--economic)" },
    { t: "Meer hergebruik", c: "var(--ecological)" },
    { t: "Sterkere community", c: "var(--social)" },
  ];
  return (
    <SlideShell kicker="05 · Samenhang">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl">Een positieve cyclus</h2>
          <p className="mt-5 leading-relaxed text-foreground/85">
            Sociale waarde is de basis. Samenwerking leidt tot nieuwe opdrachten (economisch). Gedeelde
            werkruimtes en materialen vragen minder nieuwe grondstoffen, vergroten hergebruik en verkleinen
            afval (ecologisch).
          </p>
          <p className="mt-3 leading-relaxed text-foreground/85">
            Zo blijven makers duurzaam gevestigd en groeit het communitygevoel — sociale, economische en
            ecologische waarde versterken elkaar.
          </p>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
          <svg viewBox="0 0 400 400" className="h-full w-full">
            <circle cx="200" cy="200" r="155" fill="none" stroke="var(--border)" strokeDasharray="2 6" />
            {steps.map((s, i) => {
              const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
              const x = 200 + Math.cos(a) * 155;
              const y = 200 + Math.sin(a) * 155;
              return (
                <g key={s.t}>
                  <circle cx={x} cy={y} r="11" fill={s.c} />
                  <foreignObject x={x - 70} y={y + 14} width="140" height="50">
                    <div style={{ fontSize: 11, textAlign: "center", fontFamily: "var(--font-sans)", color: "var(--ink)" }}>
                      {s.t}
                    </div>
                  </foreignObject>
                </g>
              );
            })}
            <text x="200" y="195" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: 16, fill: "var(--ink)" }}>
              Positieve
            </text>
            <text x="200" y="215" textAnchor="middle" style={{ fontFamily: "var(--font-display)", fontSize: 16, fill: "var(--ink)" }}>
              cyclus
            </text>
          </svg>
        </div>
      </div>
    </SlideShell>
  );
}

function SlideWaardebloem() {
  return (
    <section className="slide">
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
        <WaardebloemHub />
      </div>
    </section>
  );
}

function SlideGebruik() {
  return (
    <SlideShell kicker="07 · Gebruik & onderbouwing">
      <h2 className="text-4xl leading-tight md:text-5xl">Hoe lees je de Waardebloem?</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {[
          {
            c: "var(--social)",
            t: "Sociaal — sterkst aanwezig",
            d: "Weinig contact tussen bewoners en makers, terwijl daar wel behoefte aan is. Workshops, open ateliers en gedeelde werkruimtes versterken ontmoeting, samenwerking en communityvorming.",
          },
          {
            c: "var(--economic)",
            t: "Economisch — lagere drempels",
            d: "Delen van ruimtes, machines en materialen verlaagt kosten. Meer betrokkenheid van bewoners leidt tot meer economische activiteit en betaalbare huur.",
          },
          {
            c: "var(--ecological)",
            t: "Ecologisch — circulair",
            d: "Vooral door delen van ruimtes en materialen. Cascadering — reststromen (hout, metaal, textiel) opnieuw als grondstof — versterkt de circulaire visie van Strijp-R.",
          },
        ].map((b) => (
          <div key={b.t} className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]" style={{ borderTop: `4px solid ${b.c}` }}>
            <h3 className="text-xl">{b.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">{b.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm text-foreground/75">
        Pijlen tonen welke interventie welke waarde voedt; bijen geven de sterkte van de bijdrage weer.
        Belangrijke toevoeging in het definitieve model: <strong>cascadering</strong>.
      </p>
    </SlideShell>
  );
}

function SlideReflectie() {
  return (
    <SlideShell kicker="08 · Kritische reflectie">
      <h2 className="text-4xl leading-tight md:text-5xl">Eerlijk over de moeilijke kanten</h2>
      <div className="mt-7 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Knelpunten</p>
          <ul className="mt-3 space-y-2.5 text-sm text-foreground/85">
            {[
              "Workshops kosten geld.",
              "Nieuwe materialen kunnen extra grondstofgebruik en verspilling veroorzaken.",
              "Betaalbare huur moet financieel haalbaar blijven.",
              "Indicatoren moeten extern getoetst worden.",
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-6" style={{ borderColor: "var(--ecological)" }}>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ecological)" }}>
            Oplossingsrichtingen
          </p>
          <ul className="mt-3 space-y-2.5 text-sm text-foreground/85">
            {[
              "Cascadering en opnieuw inzetten van reststromen.",
              "Workshops aanbieden tegen een tarief.",
              "Externe toets met gemeente, bewoners, Amvest en taxateur/impactadviseur.",
            ].map((t) => (
              <li key={t} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--ecological)" }} />{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-sm italic text-foreground/75">
        De Waardebloem is een visueel hulpmiddel, geen exact meetinstrument, en gebaseerd op een eenmalige
        meting. In de toekomst te versterken met meetbare indicatoren in een iteratief proces van meten en
        bijsturen.
      </p>
    </SlideShell>
  );
}

function SlideConclusie() {
  return (
    <section className="slide" style={{ background: "linear-gradient(160deg, oklch(0.94 0.02 70) 0%, oklch(0.82 0.06 55) 100%)" }}>
      <div className="mx-auto w-full max-w-5xl animate-in fade-in slide-in-from-bottom-3 duration-700">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary">09 · Conclusie</p>
        <h2 className="text-5xl leading-tight md:text-6xl">
          Een plek waar wonen, maken en ontmoeten elkaar versterken.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "De Value Case laat zien dat sociale, economische en ecologische waarde samenhangen.",
            "De Waardebloem maakt zichtbaar hoe meervoudige waardecreatie ontstaat.",
            "Strijp-R kan uitgroeien tot een plek waar gemeenschap, creativiteit en circulariteit elkaar voeden.",
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-foreground/10 bg-background/60 p-5 backdrop-blur">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">0{i + 1}</span>
              <p className="mt-2 text-sm leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-10 border-l-4 border-primary pl-6 font-display text-2xl italic leading-snug text-foreground/90 md:text-3xl">
          "Strijp-R wordt zo niet alleen een plek om te wonen of te werken, maar een plek waar gemeenschap,
          creativiteit en circulariteit samen waarde creëren."
        </blockquote>
      </div>
    </section>
  );
}

const SOURCES = [
  "I. van der Valk, persoonlijke communicatie, 26 mei 2026",
  "Brightspace.hr, 2026",
  "Gool, 2026",
  "VastgoedNed, 2024",
  "Platform31, 2023",
  "Hoendervanger, Voordt & Wijnja, 2022",
  "Ray Oldenburg, 1989",
  "Wijkwijzer, 2024",
  "Leclercq & Smit, 2026",
  "Interviews bewoners & makers, 15 juni 2026, maakbedrijf Piet Hein Eek",
];

function SlideBronnen() {
  return (
    <SlideShell kicker="10 · Bronnen">
      <h2 className="text-4xl leading-tight md:text-5xl">Bronnen & verantwoording</h2>
      <p className="mt-3 max-w-2xl text-foreground/70">
        De Value Case is opgebouwd uit interviews, lesmateriaal en vakliteratuur.
      </p>
      <ol className="mt-7 grid gap-2 sm:grid-cols-2">
        {SOURCES.map((s, i) => (
          <li key={s} className="flex gap-3 rounded-xl border bg-card px-4 py-3 text-sm">
            <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-xs text-muted-foreground">
        Value Case Strijp-R · meervoudige waardecreatie rondom Piet Hein Eek · 2026
      </p>
    </SlideShell>
  );
}

function SourceFootnote({ sources }: { sources: string[] }) {
  return (
    <p className="mt-8 text-xs text-muted-foreground">
      Bron: {sources.join(" · ")}
    </p>
  );
}

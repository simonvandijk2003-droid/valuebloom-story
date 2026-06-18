import { createFileRoute } from "@tanstack/react-router";
import { Waardebloem } from "@/components/Waardebloem";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Value Case Strijp-R — Meervoudige waardecreatie rondom Piet Hein Eek" },
      {
        name: "description",
        content:
          "Hoe Strijp-R sociale, economische en ecologische waarde creëert rondom het maakbedrijf van Piet Hein Eek — gevisualiseerd in de Waardebloem.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#casus", label: "Casus" },
  { href: "#waardebloem", label: "Waardebloem" },
  { href: "#sociaal", label: "Sociaal" },
  { href: "#economisch", label: "Economisch" },
  { href: "#ecologisch", label: "Ecologisch" },
  { href: "#samenhang", label: "Samenhang" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-sm font-semibold tracking-tight">Value Case · Strijp-R</span>
          </a>
          <nav className="hidden gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* SLIDE 1 — HERO */}
      <Slide id="top">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Kicker>01 · Vastgoedkunde · Meervoudige waardecreatie</Kicker>
            <h1 className="mt-5 text-balance text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Value Case <span className="text-primary">Strijp-R</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Meervoudige waardecreatie rondom Piet Hein Eek
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
              Strijp-R is een creatieve broedplaats in het industriële erfgoed van Philips,
              met het maakbedrijf van Piet Hein Eek als kloppend hart. Deze Value Case maakt
              zichtbaar hoe het gebied <em>sociale</em>, <em>economische</em> en{" "}
              <em>ecologische</em> waarde creëert — samengebracht in de Waardebloem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#waardebloem"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Bekijk de Waardebloem
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#casus"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Naar de casus
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat label="Locatie" value="Strijp-R, Eindhoven" />
              <Stat label="Horizon" value="2040 – 2045" />
              <Stat label="Model" value="Waardebloem" />
            </dl>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-2xl border border-border bg-card shadow-[var(--shadow-petal)]" />
              <svg viewBox="0 0 320 320" className="absolute inset-0 h-full w-full p-6">
                {[0, 60, 120, 180, 240, 300].map((a, i) => (
                  <ellipse
                    key={a}
                    cx="160"
                    cy="100"
                    rx="42"
                    ry="78"
                    fill={
                      i % 3 === 0
                        ? "var(--social)"
                        : i % 3 === 1
                          ? "var(--economic)"
                          : "var(--ecological)"
                    }
                    opacity="0.85"
                    transform={`rotate(${a} 160 160)`}
                  />
                ))}
                <circle cx="160" cy="160" r="34" fill="var(--background)" stroke="var(--border)" />
                <text
                  x="160"
                  y="165"
                  textAnchor="middle"
                  style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, fill: "var(--foreground)" }}
                >
                  Strijp-R
                </text>
              </svg>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 2 — CASUS */}
      <Slide id="casus" alt>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading kicker="02 · Introductie" title="De casus: Strijp-R & Piet Hein Eek" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card title="Wat is Strijp-R?">
              Strijp-R is een voormalig Philips-terrein in Eindhoven dat is getransformeerd
              tot een gebied waar wonen, maken en ontmoeten samenkomen. Het industriële
              erfgoed leeft voort als een creatieve broedplaats waarin bewoners, makers en
              ondernemers het gebied delen.
            </Card>
            <Card title="De rol van Piet Hein Eek">
              Het maakbedrijf van Piet Hein Eek vormt het hart van de broedplaats.
              Hergebruik van materialen staat al decennialang centraal in zijn werkwijze.
              Zelf geeft hij aan dat het community-gevoel binnen Strijp-R en Strijp-S nog
              mist en dat de komende tien tot twintig jaar gericht moeten zijn op een
              sterkere cohesie.
            </Card>
            <Card title="Waarom hier?">
              Drie spanningsvelden maken de noodzaak tot verandering tastbaar: het
              ontbrekende community-gevoel, de verdringing van makers door toenemende
              vastgoeddruk, en de technische beperkingen van het industriële pand
              tegenover de ambitie om verder te verduurzamen.
            </Card>
            <Card title="Wat staat centraal?">
              De transformatie richt zich op het bouwen van wederzijdse afhankelijkheid
              tussen bewoners, makers en het maakbedrijf — via betaalbare werkruimtes,
              gedeelde faciliteiten en laagdrempelige ontmoetingsplekken. Geen partijen
              náást elkaar, maar mét elkaar.
            </Card>
          </div>
        </div>
      </Slide>

      {/* SLIDE 3 — WAARDEBLOEM */}
      <Slide id="waardebloem">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            kicker="03 · Centraal model"
            title="De Waardebloem"
            intro="Het model Waardevolle Wijken laat zien dat waarde meerdimensionaal en contextafhankelijk is. Voor Strijp-R staan drie waarden centraal: sociaal, economisch en ecologisch. Hover of klik op een bloemblad."
          />
          <div className="mt-12">
            <Waardebloem />
          </div>
        </div>
      </Slide>

      {/* SLIDE 4 — SOCIAAL */}
      <ValueSection
        id="sociaal"
        kicker="04 · Sociale waarde"
        title="Ontmoeting, community & kennisdeling"
        color="social"
        lead="Strijp-R draagt bij aan sociale waarde door bewoners en makers structureel met elkaar te verbinden. Open ateliers, ambachtsworkshops voor kinderen en gezamenlijke maakprojecten in de openbare ruimte zorgen voor structurele contactmomenten."
        cards={[
          {
            title: "Bewoners ontmoeten makers",
            body: "Makers zijn geconcentreerd op één plek, terwijl bewoners verspreid rondom het complex wonen. Open ateliers en gezamenlijke maakprojecten brengen deze groepen samen.",
          },
          {
            title: "Makers onder elkaar",
            body: "Gedeelde werkruimtes en een gedeeld atelier voor startende makers creëren meer contactmomenten met diverse achtergronden en versterken de sociale cohesie binnen het complex.",
          },
          {
            title: "Community-gevoel",
            body: "Piet Hein Eek geeft expliciet aan dat het gemeenschapsgevoel binnen Strijp-R en Strijp-S nog mist. De Value Case richt zich daarom in de eerste plaats op het versterken hiervan.",
          },
          {
            title: "Ambachtsworkshops voor kinderen",
            body: "Kinderen uit de wijk maken via ambachtsworkshops kennis met het maakbedrijf, waardoor het gebied ook voor jongere bewoners betekenis krijgt.",
          },
        ]}
        quote="De ambitie is dat huurders over tien jaar met plezier in het pand zitten en meer met elkaar samenwerken."
        quoteAttr="P. Eek, persoonlijke communicatie, 26 mei 2026"
      />

      {/* SLIDE 5 — ECONOMISCH */}
      <ValueSection
        id="economisch"
        kicker="05 · Economische waarde"
        title="Verbondenheid die activiteit aanjaagt"
        color="economic"
        alt
        lead="Wanneer bewoners zich verbonden voelen met het maakbedrijf, ontstaat economische activiteit: aankopen in de winkel, deelname aan betaalde workshops en directe opdrachten van bewoners aan makers. Tussen makers onderling leidt samenwerking tot gezamenlijke opdrachten en nieuwe producten."
        cards={[
          {
            title: "Bewoners → maker",
            body: "Bewoners van Strijp-R ontvangen een bewonerspas waarmee zij workshopdeelnames, aankopen in de winkel en opdrachten bij makers kunnen activeren — en de locatiemanager dit kan registreren.",
          },
          {
            title: "Samenwerking tussen makers",
            body: "Door expertise en netwerken te delen, kunnen makers gezamenlijk projecten ontwikkelen, nieuwe producten en diensten creëren en opdrachten verwerven die zij individueel niet hadden kunnen krijgen.",
          },
          {
            title: "Betaalbare werkruimte",
            body: "De huurprijs voor een studio van 60 m² ligt op € 800 per maand exclusief, jaarlijks meestijgend met de inflatie. Door schaal- en samenwerkingsvoordelen blijft het maakbedrijf weerbaarder en de huur betaalbaar.",
          },
          {
            title: "Minder kwetsbaar maakbedrijf",
            body: "Samenwerking en gedeelde faciliteiten verminderen de afhankelijkheid van grote incidentele opdrachten en hoge personeelslasten. Een hoger rendement maakt het mogelijk de huur voor makers betaalbaar te houden.",
          },
        ]}
      />

      {/* SLIDE 6 — ECOLOGISCH */}
      <ValueSection
        id="ecologisch"
        kicker="06 · Ecologische waarde"
        title="Delen, hergebruik & circulariteit"
        color="ecological"
        lead="Ecologische waarde ontstaat op Strijp-R door het delen van werkruimtes en materialen. Ruimtes worden efficiënter benut, materialen worden hergebruikt en de circulaire werkwijze die Piet Hein Eek al decennialang toepast, wordt de standaard."
        cards={[
          {
            title: "Gedeelde werkruimtes",
            body: "Door werkruimtes te delen ontstaat capaciteit voor meer makers en wordt de bezettingsgraad van gedeelde voorzieningen hoger.",
          },
          {
            title: "Gedeelde materialen",
            body: "Materialen die onderling gedeeld en hergebruikt worden, hoeven minder vaak weggegooid te worden. Het materiaalgebruik per gebruiker neemt jaarlijks af.",
          },
          {
            title: "Circulair erfgoed",
            body: "Het industriële Philips-erfgoed leeft voort als een circulaire ontmoetingsplek waarin productie, creativiteit en gemeenschap samenkomen.",
          },
          {
            title: "Verduurzaming van het pand",
            body: "Er is geïnvesteerd in 1300 zonnepanelen en een grootschalig energieopslagsysteem. Tegelijk vragen het vele staal, enkelglas en daklekkages om voortdurende aandacht en verdere verduurzaming.",
          },
        ]}
      />

      {/* SLIDE 7 — SAMENHANG */}
      <Slide id="samenhang" alt>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            kicker="07 · Samenhang"
            title="De waarden versterken elkaar"
            intro="De drie waarden van de Waardebloem zijn geen losse bloembladen — ze grijpen op elkaar in."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Linkage from="Sociaal" to="Economisch" color="social">
              Een sterker community-gevoel leidt tot meer aankopen in de winkel, meer
              workshopdeelnames en directe opdrachten van bewoners aan makers.
            </Linkage>
            <Linkage from="Economisch" to="Sociaal" color="economic">
              Een gezonder financieel fundament houdt huurprijzen voor makers betaalbaar,
              waardoor de creatieve gemeenschap niet wordt verdrongen.
            </Linkage>
            <Linkage from="Ecologisch" to="Sociaal" color="ecological">
              Het gezamenlijk benutten van ruimtes en materialen creëert extra ontmoetingen,
              kennisdeling en samenwerking tussen makers — naast efficiënter grondstofgebruik.
            </Linkage>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Een eenzijdige focus op economische waarde is onvoldoende. De behoefte aan
            sociale cohesie, verduurzaming en inclusiviteit groeit — en juist daar weeft
            Strijp-R wonen, maken en ontmoeten structureel met elkaar.
          </p>
        </div>
      </Slide>

      {/* SLIDE 8 — CONCLUSIE */}
      <Slide id="conclusie">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Kicker>08 · Conclusie</Kicker>
          <h2 className="mt-5 text-4xl sm:text-5xl">
            Strijp-R als voorbeeld van{" "}
            <span className="text-primary">meervoudige waardecreatie</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Rondom het maakbedrijf van Piet Hein Eek ontstaat een gebied waarin sociale,
            economische en ecologische waarde elkaar versterken. Het community-gevoel groeit,
            de creatieve broedplaats wordt economisch weerbaarder en circulariteit wordt
            de standaard. Het industriële erfgoed van Philips leeft voort als een
            ontmoetingsplek waar productie, creativiteit en gemeenschap samenkomen —
            zichtbaar gemaakt in de Waardebloem.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="rounded-full border border-border px-3 py-1">Sociaal</span>
            <span className="rounded-full border border-border px-3 py-1">Economisch</span>
            <span className="rounded-full border border-border px-3 py-1">Ecologisch</span>
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Neem contact op
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Slide>

      {/* SLIDE 9 — CONTACT */}
      <Slide id="contact" alt>
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            kicker="09 · Contact"
            title="Vragen of feedback?"
            intro="Deze Value Case is opgesteld in het kader van Vastgoedkunde & Facility Management. Reacties, vragen en suggesties zijn welkom."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <h3 className="text-lg">E-mail</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Voor inhoudelijke vragen over de Value Case Strijp-R.
              </p>
              <a
                href="mailto:valuecase@strijp-r.nl"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                valuecase@strijp-r.nl
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="text-lg">Locatie</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Strijp-R, gebied rond het maakbedrijf van Piet Hein Eek.
              </p>
              <p className="mt-4 text-sm font-medium">Halvemaanstraat, Eindhoven</p>
            </div>
          </div>

          <form
            className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Naam
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  placeholder="Uw naam"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  placeholder="naam@voorbeeld.nl"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-sm font-medium">
                Bericht
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                placeholder="Uw vraag of feedback…"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Verstuur bericht
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Slide>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div>Value Case · Vastgoedkunde & Facility Management</div>
          <div>Strijp-R · Eindhoven</div>
        </div>
      </footer>
    </div>
  );
}

function Slide({
  id,
  alt,
  children,
}: {
  id: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`flex min-h-screen scroll-mt-16 items-center border-b border-border py-20 ${
        alt ? "bg-muted/40" : "bg-background"
      }`}
    >
      <div className="w-full">{children}</div>
    </section>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-base font-semibold">{value}</dd>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-balance text-4xl sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5">
      <h3 className="mb-3 text-lg">{title}</h3>
      <p className="text-sm leading-relaxed text-foreground/80">{children}</p>
    </div>
  );
}

function ValueSection({
  id,
  kicker,
  title,
  color,
  lead,
  cards,
  quote,
  quoteAttr,
  alt,
}: {
  id: string;
  kicker: string;
  title: string;
  color: "social" | "economic" | "ecological";
  lead: string;
  cards: { title: string; body: string }[];
  quote?: string;
  quoteAttr?: string;
  alt?: boolean;
}) {
  return (
    <Slide id={id} alt={alt}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-7 w-1 rounded-full"
            style={{ backgroundColor: `var(--${color})` }}
          />
          <Kicker>{kicker}</Kicker>
        </div>
        <h2 className="mt-5 max-w-3xl text-balance text-4xl sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{lead}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <span
                className="absolute left-0 top-0 h-full w-1"
                style={{ backgroundColor: `var(--${color})` }}
              />
              <h3 className="text-lg">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{c.body}</p>
            </article>
          ))}
        </div>

        {quote && (
          <figure
            className="mt-12 rounded-2xl border-l-4 bg-card p-6 shadow-[var(--shadow-soft)]"
            style={{ borderLeftColor: `var(--${color})` }}
          >
            <blockquote className="text-2xl italic leading-snug">“{quote}”</blockquote>
            {quoteAttr && (
              <figcaption className="mt-3 text-sm text-muted-foreground">— {quoteAttr}</figcaption>
            )}
          </figure>
        )}
      </div>
    </Slide>
  );
}

function Linkage({
  from,
  to,
  color,
  children,
}: {
  from: string;
  to: string;
  color: "social" | "economic" | "ecological";
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <span>{from}</span>
        <span aria-hidden style={{ color: `var(--${color})` }}>
          →
        </span>
        <span>{to}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

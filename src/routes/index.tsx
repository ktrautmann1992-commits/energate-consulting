import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Car,
  CalendarCheck,
  Check,
  ChevronDown,
  Factory,
  Gauge,
  Hotel,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Receipt,
  Settings2,
  ShoppingCart,
  Store,
  Sun,
  type LucideIcon,
} from "lucide-react";
import heroImg from "@/assets/hero-cool.jpg";
import { CountUp } from "@/components/site/CountUp";
import { Button } from "@/components/ui/button";
import { SiteLayout, ctaGhostDark, ctaPrimary } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import {
  ADDRESS,
  BOOKING_URL,
  EMAIL,
  PHONE,
  faqs,
  industries,
  models,
  services,
  stats,
  steps,
} from "@/lib/content";
import { cn } from "@/lib/utils";

const TITLE = "EGC Energie – Dienstleister in der Energiewirtschaft | Waldmohr";
const DESC =
  "Energie strategisch einkaufen. Effizienz messbar steigern. Ihr unabhängiger Dienstleister in der Energiewirtschaft für Energieeinkauf, Energienebenkosten, Batteriespeicher, PV und Smart Metering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons: Record<string, LucideIcon> = {
  cart: ShoppingCart,
  receipt: Receipt,
  battery: BatteryCharging,
  sun: Sun,
  gauge: Gauge,
  chart: LineChart,
  factory: Factory,
  cog: Settings2,
  hotel: Hotel,
  store: Store,
  building: Building2,
  car: Car,
};

function SectionHead({
  eyebrow,
  title,
  text,
  light,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className={cn("eyebrow", light && "text-energy")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
          light && "text-on-dark",
        )}
      >
        {title}
      </h2>
      {text && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            light ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Procurement />
      <Industries />
      <Process />
      <About />
      <Faq />
      <Contact />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary-deep">
      <img
        src={heroImg}
        alt=""
        width={1600}
        height={1104}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-hero" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-36">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-on-dark/20 bg-on-dark/10 px-4 py-1.5 text-sm font-semibold text-on-dark">
            <span className="size-2 rounded-full bg-energy" /> Unabhängiger Dienstleister in der Energiewirtschaft
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-on-dark sm:text-6xl lg:text-7xl">
            Energie strategisch einkaufen.{" "}
            <span className="text-energy">Effizienz messbar steigern.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-muted sm:text-xl">
            Wir betreuen Industrie, Mittelstand und Immobilienportfolios bei strategischem
            Energieeinkauf, Energienebenkosten, Batteriespeichern, PV-Großanlagen und Smart Metering
            — datenbasiert, unabhängig und planbar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className={ctaPrimary}>
              <CalendarCheck className="size-5" /> Kostenloses Erstgespräch
            </a>
            <a href="#kontakt" className={ctaGhostDark}>
              Angebot anfragen <ArrowRight className="size-4" />
            </a>
          </div>
          <p className="mt-8 text-sm font-bold tracking-[0.3em] text-on-dark-muted">
            ENERGIE. EFFIZIENZ. ERFOLG.
          </p>
        </Reveal>
        <Reveal
          delay={150}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-on-dark/15 bg-on-dark/15 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-primary-deep/70 p-5 backdrop-blur sm:p-6">
              <p className="text-3xl font-extrabold text-on-dark sm:text-4xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-1 text-sm text-on-dark-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHead
        eyebrow="Leistungen"
        title="Alles, was Ihre Energieabteilung leisten müsste"
        text="Wir arbeiten dauerhaft für Sie, nicht projektweise: Marktbeobachtung, Beschaffung, Verträge, Fristen und Rechnungsprüfung in einer Hand."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Gauge;
          return (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-accent text-energy-strong transition group-hover:bg-energy group-hover:text-energy-foreground">
                    <Icon className="size-6" />
                  </span>
                  <span className="text-sm font-bold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-sm font-medium">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-energy-strong" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Procurement() {
  const [active, setActive] = useState(2);
  const m = models[active];
  if (!m) return null;
  return (
    <section id="beschaffung" className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          light
          eyebrow="Energiebeschaffung"
          title="Viele Modelle. Ein klarer Plan."
          text="Wir kombinieren Festpreis, Spotmarkt, Tranchen und PPA zu einem Beschaffungsmix, der zu Ihrem Lastgang, Ihrem Risikoprofil und Ihren Nachhaltigkeitszielen passt."
        />
        <div
          role="tablist"
          aria-label="Beschaffungsmodelle"
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
        >
          {models.map((x, i) => (
            <Button
              variant="ghost"
              key={x.key}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "min-h-12 shrink-0 rounded-full px-5 text-sm font-bold transition",
                i === active
                  ? "bg-energy text-energy-foreground"
                  : "border border-on-dark/25 text-on-dark hover:bg-on-dark/10",
              )}
            >
              {x.key}
            </Button>
          ))}
        </div>
        <div
          key={m.key}
          className="mt-8 grid gap-6 rounded-3xl bg-card p-7 text-card-foreground shadow-lift animate-in fade-in duration-500 sm:p-10 lg:grid-cols-[1.2fr_1fr_1fr]"
        >
          <div>
            <h3 className="text-2xl font-extrabold">{m.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{m.text}</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener" className={cn(ctaPrimary, "mt-7")}>
              Strategiegespräch vereinbaren
            </a>
          </div>
          {[
            ["Für wen geeignet", m.forWhom],
            ["Ihre Vorteile", m.benefits],
          ].map(([h, list]) => (
            <div key={h as string} className="rounded-2xl bg-secondary p-6">
              <p className="eyebrow">{h as string}</p>
              <ul className="mt-4 space-y-3 text-sm font-medium">
                {(list as string[]).map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-energy-strong" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const [active, setActive] = useState(1);
  const startedCounters = useRef(new Set<string>());
  const ind = industries[active];
  if (!ind) return null;
  return (
    <section id="branchen" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHead
        eyebrow="Branchen"
        title="Ihre Branche, Ihre Herausforderungen"
        text="Wählen Sie Ihren Bereich — dahinter liegt jeweils eine eigene Seite mit Angebotsanfrage und Checkliste."
      />
      <div
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        role="tablist"
        aria-label="Branchen"
      >
        {industries.map((x, i) => {
          const Icon = icons[x.icon] ?? Factory;
          return (
            <Button
              variant="ghost"
              key={x.key}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "flex h-auto min-h-28 whitespace-normal flex-col items-start justify-between gap-3 rounded-2xl border p-4 text-left text-sm font-bold transition",
                i === active
                  ? "border-energy bg-energy text-energy-foreground shadow-lift hover:bg-energy hover:text-energy-foreground"
                  : "border-border bg-card hover:border-energy/40 hover:shadow-card",
              )}
            >
              <Icon
                className={cn(
                  "size-6",
                  i === active ? "text-energy-foreground" : "text-energy-strong",
                )}
              />
              {x.key}
            </Button>
          );
        })}
      </div>
      <div
        key={ind.key}
        className="mt-6 grid gap-8 rounded-3xl border border-border bg-card p-7 shadow-card animate-in fade-in duration-500 sm:p-10 lg:grid-cols-2"
      >
        <div>
          <h3 className="text-2xl font-extrabold">{ind.subtitle}</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{ind.text}</p>
          <div className="mt-7 inline-flex max-w-full flex-wrap items-baseline gap-3 rounded-2xl bg-accent px-5 py-4">
            <span className="text-3xl font-extrabold text-energy-strong">
              <CountUp
                value={ind.kpi}
                animate={!startedCounters.current.has(ind.key)}
                onStart={() => {
                  startedCounters.current.add(ind.key);
                }}
              />
            </span>
            <span className="text-sm font-medium text-accent-foreground">{ind.kpiLabel}</span>
          </div>
          <div className="mt-7">
            <a href={ind.url} target="_blank" rel="noopener" className={ctaPrimary}>
              Angebot anfragen <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-secondary p-6 sm:p-8">
          <p className="eyebrow">Typische Themen</p>
          <ul className="mt-5 space-y-4">
            {ind.topics.map((t) => (
              <li key={t} className="flex gap-3 font-medium">
                <Check className="mt-0.5 size-5 shrink-0 text-energy-strong" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="ablauf" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead eyebrow="Ablauf" title="So starten wir gemeinsam" />
        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-primary/20 lg:left-6 lg:right-6 lg:h-px lg:w-auto"
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <li className="relative flex gap-5 lg:flex-col">
                <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-energy text-energy-foreground text-base font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12">
          <a href={BOOKING_URL} target="_blank" rel="noopener" className={ctaPrimary}>
            <CalendarCheck className="size-5" /> 30-Minuten-Termin buchen
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber-uns" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <SectionHead
          eyebrow="Über uns"
          title="EGC Energie — Ihr Dienstleister in der Energiewirtschaft"
          text="Wir arbeiten dauerhaft für Sie, nicht projektweise: Marktbeobachtung, Beschaffung, Verträge, Fristen und Rechnungsprüfung in einer Hand."
        />
        <Reveal delay={120}>
          <div className="rounded-3xl bg-deep p-8 text-on-dark shadow-lift sm:p-10">
            <MapPin className="size-7 text-energy" />
            <p className="mt-5 text-xl font-bold">{ADDRESS.person}</p>
            <p className="mt-1 text-on-dark-muted">
              {ADDRESS.street}, {ADDRESS.city}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-on-dark/15 pt-6">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold">
                    <CountUp value={s.value} />
                  </p>
                  <p className="text-sm text-on-dark-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="fragen" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <SectionHead eyebrow="Häufige Fragen" title="Kurz beantwortet" />
        <Reveal>
          <Accordion.Root
            type="single"
            collapsible
            className="divide-y divide-border rounded-2xl border border-border bg-card shadow-card"
          >
            {faqs.map((f) => (
              <Accordion.Item key={f.q} value={f.q}>
                <Accordion.Header>
                  <Accordion.Trigger className="group flex min-h-16 w-full items-center justify-between gap-4 px-6 py-4 text-left text-lg font-bold">
                    {f.q}
                    <ChevronDown className="size-5 shrink-0 text-energy-strong transition group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden px-6 pb-5 leading-relaxed text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  {f.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(1, "Bitte Namen angeben").max(100),
  betrieb: z.string().trim().max(150).optional(),
  email: z.string().trim().email("Bitte gültige E-Mail angeben").max(255),
  telefon: z.string().trim().max(40).optional(),
  nachricht: z.string().trim().max(2000).optional(),
});

const field =
  "mt-1.5 block min-h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setErrors(
        Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message])),
      );
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: "Angebotsanfrage über egc-energie.de" }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="bg-deep py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <div>
          <SectionHead light eyebrow="Kontakt" title="Sprechen wir über Ihre Energiekosten" />
          <Reveal className="mt-10 space-y-5 text-on-dark">
            <p className="font-bold">{ADDRESS.company}</p>
            <p className="flex gap-3 text-on-dark-muted">
              <MapPin className="size-5 shrink-0 text-energy" />
              <span>
                {ADDRESS.person}
                <br />
                {ADDRESS.street}
                <br />
                {ADDRESS.city}
              </span>
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="flex min-h-12 items-center gap-3 font-semibold hover:text-energy"
            >
              <Mail className="size-5 text-energy" />
              {EMAIL}
            </a>
            {PHONE && (
              <a
                href={`tel:${PHONE.tel}`}
                className="flex min-h-12 items-center gap-3 font-semibold hover:text-energy"
              >
                <Phone className="size-5 text-energy" />
                {PHONE.display}
              </a>
            )}
            <a href={BOOKING_URL} target="_blank" rel="noopener" className={cn(ctaPrimary, "mt-2")}>
              <CalendarCheck className="size-5" /> 30-Minuten-Termin buchen
            </a>
          </Reveal>
          <Reveal className="mt-12">
            <p className="eyebrow text-energy">Branchenseiten</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {industries.map((i) => (
                <a
                  key={i.key}
                  href={i.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center rounded-full border border-on-dark/25 px-4 text-sm font-semibold text-on-dark hover:bg-on-dark/10"
                >
                  {i.key} →
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl bg-card p-6 text-card-foreground shadow-lift sm:p-10"
          >
            <h3 className="text-2xl font-extrabold">Angebot anfragen</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold sm:col-span-2">
                Ihre Branche
                <select name="branche" className={field} defaultValue="Industrie">
                  {industries.map((i) => (
                    <option key={i.key}>{i.key}</option>
                  ))}
                  <option>Andere Branche</option>
                </select>
              </label>
              <label className="text-sm font-semibold">
                Name *
                <input
                  name="name"
                  autoComplete="name"
                  className={field}
                  aria-invalid={!!errors["name"]}
                />
                {errors["name"] && (
                  <span className="mt-1 block text-destructive">{errors["name"]}</span>
                )}
              </label>
              <label className="text-sm font-semibold">
                Betrieb
                <input name="betrieb" autoComplete="organization" className={field} />
              </label>
              <label className="text-sm font-semibold">
                E-Mail *
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={field}
                  aria-invalid={!!errors["email"]}
                />
                {errors["email"] && (
                  <span className="mt-1 block text-destructive">{errors["email"]}</span>
                )}
              </label>
              <label className="text-sm font-semibold">
                Telefon
                <input name="telefon" type="tel" autoComplete="tel" className={field} />
              </label>
              <label className="text-sm font-semibold">
                Stromverbrauch pro Jahr
                <input
                  name="strom"
                  inputMode="numeric"
                  placeholder="250.000 kWh"
                  className={field}
                />
              </label>
              <label className="text-sm font-semibold">
                Erdgasverbrauch pro Jahr
                <input name="gas" inputMode="numeric" placeholder="400.000 kWh" className={field} />
              </label>
              <label className="text-sm font-semibold sm:col-span-2">
                Vertragsbindung bis (optional)
                <input name="vertragsbindung" type="date" className={field} />
              </label>
              <label className="text-sm font-semibold sm:col-span-2">
                Ihre Nachricht (optional)
                <textarea name="nachricht" rows={4} className={cn(field, "py-3")} />
              </label>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(ctaPrimary, "mt-7 w-full disabled:opacity-60")}
            >
              {status === "sending" ? "Wird gesendet …" : "Angebot anfragen"}
            </button>
            <div aria-live="polite" className="mt-4 text-sm font-semibold">
              {status === "ok" && (
                <p className="text-primary">
                  Vielen Dank – wir melden uns innerhalb eines Werktags.
                </p>
              )}
              {status === "error" && (
                <p className="text-destructive">
                  Senden fehlgeschlagen. Bitte schreiben Sie uns an {EMAIL}.
                </p>
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Alternativ direkt einen Termin wählen:{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                className="font-semibold text-primary underline underline-offset-4"
              >
                30-Minuten-Erstgespräch buchen
              </a>
              .
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pflicht sind Name und E-Mail. Wir antworten innerhalb eines Werktags.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

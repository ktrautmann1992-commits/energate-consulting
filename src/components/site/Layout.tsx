import { Link } from "@tanstack/react-router";
import { useEffect, useId, useState, type ReactNode } from "react";
import { CalendarCheck, Mail, Menu, Phone, X } from "lucide-react";
import { ADDRESS, BOOKING_URL, EMAIL, PHONE } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { hash: "leistungen", label: "Leistungen" },
  { hash: "beschaffung", label: "Beschaffung" },
  { hash: "branchen", label: "Branchen" },
  { hash: "ablauf", label: "Ablauf" },
  { hash: "fragen", label: "Fragen" },
  { hash: "kontakt", label: "Kontakt" },
];

export const ctaPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-energy px-6 text-base font-bold text-energy-foreground shadow-energy transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
export const ctaGhostDark =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-on-dark/30 px-6 text-base font-semibold text-on-dark transition hover:bg-on-dark/10";
export const ctaOutline =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/25 px-6 text-base font-semibold text-primary transition hover:bg-accent";

function EgcLogo({ light, className }: { light?: boolean; className?: string }) {
  const gid = useId().replace(/:/g, "");
  // Original-Logo von egc-energie.de: weiß auf dunklem Grund, Markenblau auf hellem Grund
  const fill = light ? "#FFFFFF" : "#0F2440";
  return (
    <svg viewBox="0 0 670 200" fill="none" role="img" aria-label="EGC Energie" className={className}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2E6B2A" />
          <stop offset="1" stopColor="#7BC63F" />
        </linearGradient>
      </defs>
      <g fill={fill}>
        <path d="M0 0 H150 L138 34 H0 Z" />
        <path d="M14 83 H120 L108 117 H2 Z" />
        <path d="M0 166 H150 L138 200 H0 Z" />
        <path d="M380.7 29.3 A100 100 0 1 0 380.7 170.7 L367.1 133 A66 66 0 1 1 367.1 67 Z" />
        <path d="M640.7 29.3 A100 100 0 1 0 640.7 170.7 L627.1 133 A66 66 0 1 1 627.1 67 Z" />
      </g>
      <path d="M300 83 H428 L416 117 H288 Z" fill={`url(#${gid})`} />
    </svg>
  );
}

function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="EGC Energie – Startseite">
      <EgcLogo light={light} className="h-8 w-auto shrink-0 sm:h-9" />
      <span
        className={cn(
          "border-l pl-3 text-xs font-medium leading-tight",
          light
            ? "border-on-dark/25 text-on-dark-muted"
            : "border-border text-muted-foreground",
        )}
      >
        Dienstleister in der
        <br />
        Energiewirtschaft
      </span>
    </Link>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all",
        scrolled || open
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <Link
              key={n.hash}
              to="/"
              hash={n.hash}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className={cn(ctaPrimary, "hidden min-h-11 px-5 text-sm sm:inline-flex")}
          >
            Kostenloses Erstgespräch
          </a>
          <Button
            variant="ghost"
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          className="border-t border-border px-5 pb-6 pt-2 lg:hidden"
          aria-label="Mobile Navigation"
        >
          {nav.map((n) => (
            <Link
              key={n.hash}
              to="/"
              hash={n.hash}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-border text-lg font-semibold"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className={cn(ctaPrimary, "mt-5 w-full")}
          >
            Kostenloses Erstgespräch
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-deep pb-28 pt-14 text-on-dark-muted md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            EGC Energie · Inhaber Karsten Trautmann · {ADDRESS.street}, {ADDRESS.city}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-bold text-on-dark">Kontakt</p>
          <a href={`mailto:${EMAIL}`} className="mt-3 block hover:text-on-dark">
            {EMAIL}
          </a>
          {PHONE && (
            <a href={`tel:${PHONE.tel}`} className="mt-1 block hover:text-on-dark">
              {PHONE.display}
            </a>
          )}
        </div>
        <div className="text-sm">
          <p className="font-bold text-on-dark">Rechtliches</p>
          <Link to="/impressum" className="mt-3 block hover:text-on-dark">
            Impressum
          </Link>
          <Link to="/datenschutz" className="mt-1 block hover:text-on-dark">
            Datenschutz
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-5 text-xs lg:px-8">
        © {new Date().getFullYear()} EGC Energie
      </p>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      {PHONE ? (
        <a href={`tel:${PHONE.tel}`} className={cn(ctaOutline, "px-3")}>
          <Phone className="size-5" /> Anrufen
        </a>
      ) : (
        <a href={`mailto:${EMAIL}`} className={cn(ctaOutline, "px-3")}>
          <Mail className="size-5" /> E-Mail
        </a>
      )}
      <a href={BOOKING_URL} target="_blank" rel="noopener" className={cn(ctaPrimary, "px-3")}>
        <CalendarCheck className="size-5" /> Erstgespräch
      </a>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileBar />
    </div>
  );
}

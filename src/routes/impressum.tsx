import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const T = "Impressum – EGC Energie";
const D = "Impressum der EGC Energie, Einzelunternehmen von Karsten Trautmann, In den Erlenwiesen 11, 66914 Waldmohr.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Impressum" title="Angaben gemäß § 5 DDG">
      <section>
        <p className="text-foreground">
          Karsten Trautmann<br />EGC Energie (Einzelunternehmen)<br />In den Erlenwiesen 11<br />66914 Waldmohr
        </p>
        <p className="mt-4 text-foreground">
          Telefon: <a className="text-primary underline" href="tel:+4963738920114">06373 8920114</a><br />
          E-Mail: <a className="text-primary underline" href="mailto:anfrage@egc-energie.de">anfrage@egc-energie.de</a>
        </p>
        <p className="mt-4 text-foreground">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE365107489</p>
        <p className="mt-4">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Karsten Trautmann, In den Erlenwiesen 11, 66914 Waldmohr.
        </p>
      </section>
      <section>
        <h2>Haftung und Urheberrecht</h2>
        <p>Inhalte wurden mit Sorgfalt erstellt; für Richtigkeit und Aktualität übernehmen wir keine Gewähr. Für verlinkte Seiten ist der jeweilige Anbieter verantwortlich. Logo, Texte und Gestaltung sind urheberrechtlich geschützt.</p>
      </section>
      <section>
        <h2>Streitschlichtung</h2>
        <p>Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.</p>
      </section>
    </LegalPage>
  ),
});

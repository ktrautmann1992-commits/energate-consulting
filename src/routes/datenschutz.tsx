import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const T = "Datenschutzhinweise – EGC Energie";
const D = "Datenschutzhinweise der EGC Energie: Kontaktformular, Dienstleister, Speicherdauer und Ihre Rechte.";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Datenschutz" title="Datenschutzhinweise">
      <p className="text-foreground">Verantwortlich: Karsten Trautmann, EGC Energie (Einzelunternehmen), In den Erlenwiesen 11, 66914 Waldmohr, Telefon 06373 8920114, anfrage@egc-energie.de.</p>
      <section>
        <h2>Kontaktformular</h2>
        <p>Wir verarbeiten Name, Betrieb, E-Mail, Telefon und Ihre Nachricht ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. f DSGVO.</p>
      </section>
      <section>
        <h2>Dienstleister</h2>
        <p>Der technische Versand des Formulars erfolgt über FormSubmit, die Terminvergabe über Calendly. Beide verarbeiten Ihre Eingaben und IP-Adresse. Keine Weitergabe zu Werbezwecken.</p>
      </section>
      <section>
        <h2>Speicherdauer</h2>
        <p>Wir speichern Daten, solange es für die Bearbeitung nötig ist, längstens bis zum Ablauf gesetzlicher Aufbewahrungsfristen.</p>
      </section>
      <section>
        <h2>Ihre Rechte</h2>
        <p>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde. Diese Seite setzt keine Tracking-Cookies.</p>
      </section>
    </LegalPage>
  ),
});

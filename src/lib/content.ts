// Alle Inhalte wortgetreu von https://egc-energie.de übernommen.
export const BOOKING_URL = "https://egc-energie-kostenloses-erstgespr-ch-cd-5e6080205c.netlify.app/";
export const EMAIL = "anfrage@egc-energie.de";
/** Auf der Live-Seite ist keine Telefonnummer angegeben – hier eintragen, dann erscheint automatisch der Anrufen-Button. */
export const PHONE: { display: string; tel: string } | null = { display: "06373 8920114", tel: "+4963738920114" };

export const ADDRESS = {
  company: "EGC Energie · Inhaber Karsten Trautmann",
  person: "Karsten Trautmann",
  street: "In den Erlenwiesen 11",
  city: "66914 Waldmohr",
};

export const stats = [
  { value: "40+", label: "Versorger im Zugriff" },
  { value: "300 GWh", label: "Jahresvolumen" },
  { value: "6 Jahre +", label: "Markterfahrung" },
  { value: "100 %", label: "unabhängig" },
];

export const services = [
  {
    title: "Strategischer Energieeinkauf",
    text: "Wir entwickeln eine individuelle Beschaffungsstrategie aus Festpreis-, Spot-, Tranchen- und PPA-Komponenten. Marktbeobachtung, Risikomanagement und Ausschreibung aus einer Hand.",
    points: ["Bedarfs- und Lastganganalyse", "Lieferantenausschreibungen und Verhandlung", "Vertragsmanagement über die Laufzeit"],
    icon: "cart",
  },
  {
    title: "Energienebenkosten",
    text: "Netzentgelte, Konzessionsabgabe, Umlagen und Steuern machen oft mehr als die Hälfte Ihrer Energiekosten aus. Wir prüfen jede Position und holen zu Unrecht gezahlte Beträge zurück.",
    points: ["Rechnungsprüfung und Rückforderung", "Befreiungen und Privilegien (StromStG, BesAR)", "Optimierung Netzentgelte (§ 19 StromNEV)"],
    icon: "receipt",
  },
  {
    title: "Industriebatteriespeicher",
    text: "Vom Business Case bis zur Inbetriebnahme: Wirtschaftlichkeit, Auslegung und Multi-Use-Strategien für Großspeicher im industriellen Einsatz.",
    points: ["Wirtschaftlichkeitsanalyse und Förderung", "Auslegung und Ausschreibung", "Vermarktung Regelleistung und Peak-Shaving"],
    icon: "battery",
  },
  {
    title: "PV-Großanlagen",
    text: "Aufdach- und Freiflächen-PV mit Eigenverbrauch, Direktvermarktung oder PPA. Wir unterstützen bei der Dimensionierung und begleiten die Auswahl des Umsetzungspartners.",
    points: ["Standort- und Ertragsanalyse", "Eigenverbrauchs- und PPA-Modelle", "Dimensionierung und Partnerauswahl"],
    icon: "sun",
  },
  {
    title: "Smart Meter & Monitoring",
    text: "Wir integrieren intelligente Messsysteme in Ihre Betriebsführung und schaffen die Datengrundlage für aktives Lastmanagement und automatisierte Reports.",
    points: ["iMSys-Rollout und Anbindung", "Lastgangmonitoring in Echtzeit", "KPI-Reporting für die Geschäftsleitung"],
    icon: "gauge",
  },
  {
    title: "Marktmonitoring",
    text: "Tägliche Bewertung der Spot- und Terminmärkte mit klaren Handlungsempfehlungen — damit Ihr Einkaufszeitpunkt keine Bauchentscheidung bleibt.",
    points: ["Tägliche Marktbewertung", "Handlungsempfehlung zum Einkaufszeitpunkt", "Reporting für Einkauf und Geschäftsführung"],
    icon: "chart",
  },
] as const;

export const models = [
  {
    key: "Festpreis",
    title: "Festpreis — volle Kostensicherheit",
    text: "Der Energiepreis wird für einen definierten Lieferzeitraum fest vereinbart. Sie wissen von Beginn an exakt, welche Kosten auf Sie zukommen — ein Vorteil für Budgetplanung und finanzielle Sicherheit.",
    forWhom: ["Unternehmen mit hohem Planungsbedarf und festen Budgets", "Risikoaverse Einkäufer, die Marktschwankungen vermeiden wollen", "Betriebe ohne eigene Beschaffungskapazitäten", "Stabiler, gut prognostizierbarer Verbrauch"],
    benefits: ["Volle Kostentransparenz über die Laufzeit", "Schutz vor steigenden Marktpreisen", "Einfache Budgetplanung", "Geringer administrativer Aufwand"],
  },
  {
    key: "Spotmarkt",
    title: "Spotmarkt — maximale Flexibilität",
    text: "Sie beziehen Energie zu den aktuellen Tages- oder Stundenpreisen an der Börse und profitieren von günstigen Preisphasen. Das erfordert aktive Marktbeobachtung — oder einen erfahrenen Partner.",
    forWhom: ["Unternehmen mit höherer Risikobereitschaft", "Betriebe mit flexiblem, steuerbarem Verbrauch", "Betriebe, die kurzfristig auf Preisbewegungen reagieren können", "Einkäufer, die Marktchancen nutzen möchten"],
    benefits: ["Direkter, transparenter Marktzugang", "Chance auf günstige Tagespreise", "Maximale Flexibilität bei der Beschaffung", "Keine langfristige Preisbindung"],
  },
  {
    key: "Tranchenmodell",
    title: "Tranchenmodell — Risiko gestaffelt streuen",
    text: "Der Bedarf wird nicht zu einem einzigen Zeitpunkt, sondern in mehreren Teilmengen zu verschiedenen Zeitpunkten eingekauft. So vermeiden Sie den ungünstigen Einkaufstag und erreichen einen ausgeglichenen Durchschnittspreis.",
    forWhom: ["Mittleres Risikoprofil zwischen Festpreis und Spot", "Größerer, planbarer Jahresverbrauch", "Einkäufer, die Preisspitzen aktiv vermeiden wollen", "Mehrjähriger Beschaffungshorizont"],
    benefits: ["Risikostreuung durch gestaffelten Einkauf", "Ausgeglichener Durchschnittspreis", "Schutz vor ungünstigem Einkaufszeitpunkt", "Mit anderen Modellen kombinierbar"],
  },
  {
    key: "PPA-Verträge",
    title: "PPA — langfristig und grün",
    text: "Ein Power Purchase Agreement ist ein langfristiger Liefervertrag direkt mit einem Erzeuger erneuerbarer Energien, etwa einem Wind- oder Solarpark: planbare Konditionen über Jahre und nachvollziehbare Herkunft.",
    forWhom: ["Unternehmen mit Nachhaltigkeitszielen und CSR-Berichtspflichten", "Langfristiger Planungshorizont (10 Jahre und mehr)", "Hoher, stabiler Energiebedarf", "Einkäufer, die Grünstrom glaubwürdig nachweisen wollen"],
    benefits: ["Langfristige Preisplanung", "Nachvollziehbare Grünstromherkunft", "Beitrag zu Nachhaltigkeits- und CSR-Zielen", "Unabhängigkeit von kurzfristigen Marktschwankungen"],
  },
];

const P = "https://egc-energie-produktionsbetriebe-cd-e303bd1dad.netlify.app/";
export const industries = [
  { key: "Industrie", icon: "factory", subtitle: "Mittelständische Industrieunternehmen", text: "Steigende Energiekosten, komplexe Beschaffungsmärkte und wachsende regulatorische Anforderungen. Wir schaffen Transparenz über Verbrauch und Lastgänge und senken die Kosten nachhaltig.", kpi: "300 GWh", kpiLabel: "betreutes Jahresvolumen", url: P,
    topics: ["Individuelle Beschaffungsstrategie aus Terminmarkt, Tranchen, Spotmarkt und PPA", "Netzentgelte und Leistungspreise optimieren", "Lastganganalyse und Energiemonitoring", "Steuer- und Umlagenentlastungen prüfen", "Batteriespeicher und Photovoltaik integrieren"] },
  { key: "Produktionsbetriebe", icon: "cog", subtitle: "Lohnfertigung, Metall- und Kunststoffverarbeitung", text: "Lastspitzen bestimmen Ihren Leistungspreis, Umlagen und Abgaben oft über die Hälfte der Rechnung. Wir analysieren, beantragen und beschaffen.", kpi: "18 %", kpiLabel: "geringere Kosten im reinen Energieeinkauf", url: P,
    topics: ["Lastgang auswerten und Spitzen über Batteriespeicher kappen", "Stromsteuerrückerstattung beantragen", "Netzentgelte, Umlagen und Abgaben prüfen", "Beschaffung über Termin- und Spotmarkt"] },
  { key: "Hotels & Gastronomie", icon: "hotel", subtitle: "Hotels, Restaurants und Betriebsgastronomie", text: "Jährlich steigende Abrechnungen ohne Änderung im Haus? Wir schreiben Ihren Bedarf bei über 40 Versorgern aus und übernehmen die Fristenkontrolle.", kpi: "3 Min.", kpiLabel: "bis zur fertigen Anfrage", url: "https://egc-energie-angebot-f-r-hotels-amp-gastr-cd-7b1dbd36ff.netlify.app/",
    topics: ["Extrem hohe Abrechnungen prüfen und einordnen", "Beschaffung über Tranchen statt Festpreis an einem Tag", "Fristen und Verträge aller Häuser im Blick", "Digitales Portal statt Aktenordner"] },
  { key: "Bäckereien & Filialisten", icon: "store", subtitle: "Bäckereien, Konditoreien, Filialbetriebe", text: "Öfen nachts, Kühlung rund um die Uhr, jede Filiale mit eigenem Vertrag. Wir führen alles zusammen und schreiben das gebündelte Volumen aus.", kpi: "37 %", kpiLabel: "geringere Energiekosten", url: "https://egc-energie-baeckereien-cd-d9afd7b4bc.netlify.app/",
    topics: ["Alle Standorte in einer Lieferstellenliste", "Gebündelte Menge im Einkauf statt Einzelverträge", "Nacht- und Dauerverbrauch in der Ausschreibung", "Zentrale Verwaltung aller Backshops"] },
  { key: "Hausverwaltungen", icon: "building", subtitle: "Immobilien- und WEG-Verwaltung", text: "Viele Objekte, viele Versorger, viele Laufzeiten. Wir bündeln Allgemeinstrom und Heizzentralen und liefern ein Portal für Lieferstellen und Rechnungen.", kpi: "50 %", kpiLabel: "weniger Verwaltungsaufwand", url: "https://egc-energie-hausverwaltungen-cd-f1d2a3cd3f.netlify.app/",
    topics: ["Kein Zählerablesen mehr durch Fernauslesung", "Alle Lieferstellen und Rechnungen an einem Ort", "Rechnungsprüfung auf Preisbestandteile und Plausibilität", "Zentrale Fristenkontrolle je Lieferstelle"] },
  { key: "KFZ & Lackierbetriebe", icon: "car", subtitle: "Werkstätten, Lackierbetriebe, Karosseriebau", text: "Trockenkabine, Kompressor und Absaugung laufen mit — der Preis muss nicht. Wir lesen Ihr Lastprofil aus und beschaffen passend dazu.", kpi: "3.057 €", kpiLabel: "Einsparung pro Jahr beim Lackierbetrieb", url: "https://egc-energie-kfz-werkst-tten-und-lackierb-cd-a68901ba64.netlify.app/",
    topics: ["Verbrauch der Trockenkabine sichtbar machen", "Lastprofil der Werkstatt für die Ausschreibung nutzen", "Abschläge und Netzentgelte prüfen", "Vertragsende und Kündigungsfristen überwachen"] },
] as const;

export const steps = [
  { title: "Erstgespräch", text: "30 Minuten, kostenlos: Verträge, Verbräuche und Fristen gemeinsam ansehen." },
  { title: "Analyse", text: "Lastgang, Rechnungen und Preisbestandteile prüfen, Potenzial benennen." },
  { title: "Ausschreibung", text: "Ihr Bedarf geht an über 40 Versorger, wir vergleichen und wählen den Zeitpunkt." },
  { title: "Betreuung", text: "Abschluss, Fristenkontrolle, Rechnungsprüfung und Portal — dauerhaft." },
];

export const faqs = [
  { q: "Was kostet uns die Zusammenarbeit?", a: "Das Erstgespräch und die Markteinschätzung sind kostenlos. Die Vergütung klären wir transparent vor Beauftragung — abhängig von Volumen und Leistungsumfang." },
  { q: "Müssen wir unseren Versorger wechseln?", a: "Nein. Wir arbeiten mit Partnerschaften statt Wechselmodellen. Wenn Ihr bestehender Versorger das beste Angebot macht, bleiben Sie dort." },
  { q: "Welche Unterlagen brauchen Sie von uns?", a: "Für den Start genügt die letzte Jahresabrechnung. Für die Feinanalyse zusätzlich der Lastgang, den Sie beim Netzbetreiber kostenlos erhalten." },
  { q: "Wie lange dauert eine Ausschreibung?", a: "In der Regel wenige Werktage von der Datenaufnahme bis zu vergleichbaren Angeboten. Der Beschaffungszeitpunkt richtet sich nach Markt und Vertragsende." },
  { q: "Für welche Betriebsgrößen arbeiten Sie?", a: "Von kleinen Betrieben bis zu Konzernkunden. Entscheidend ist nicht die Größe, sondern ob Ihr Verbrauchsprofil Gestaltungsspielraum bietet." },
];

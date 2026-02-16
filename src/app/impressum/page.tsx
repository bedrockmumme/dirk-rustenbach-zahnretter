import { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Impressum | Dirk Rustenbach – Der Zahnretter",
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>

      <p>
        <strong>{"{{VORNAME}} {{NACHNAME}}"}</strong>
        <br />
        {"{{ggf. akademischer Grad}}"}
      </p>
      <p>
        {"{{PRAXISNAME}}"}
        <br />
        {"{{STRAßE}} {{HAUSNUMMER}}"}
        <br />
        {"{{PLZ}} {{ORT}}"}
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: {"{{TELEFONNUMMER}}"}
        <br />
        E-Mail: {"{{E-MAIL-ADRESSE}}"}
        <br />
        Website: {"{{WEBSITE-URL}}"}
      </p>

      <h3>Berufsbezeichnung und berufsrechtliche Angaben</h3>
      <p>
        <strong>Berufsbezeichnung:</strong> Zahnarzt
        <br />
        <strong>Verliehen in:</strong> Bundesrepublik Deutschland
      </p>

      <p>
        <strong>Zuständige Kammer:</strong>
        <br />
        Zahnärztekammer Niedersachsen
        <br />
        Zeißstraße 11a
        <br />
        30519 Hannover
        <br />
        Tel.: 0511 83391-0
        <br />
        <a href="https://www.zkn.de" target="_blank" rel="noopener noreferrer">
          www.zkn.de
        </a>
      </p>

      <p>
        <strong>Zuständige Kassenzahnärztliche Vereinigung:</strong>
        <br />
        Kassenzahnärztliche Vereinigung Niedersachsen (KZVN)
        <br />
        Zeißstraße 11a
        <br />
        30519 Hannover
        <br />
        <a href="https://www.kzvn.de" target="_blank" rel="noopener noreferrer">
          www.kzvn.de
        </a>
      </p>

      <p>
        <strong>Zuständige Aufsichtsbehörde:</strong>
        <br />
        Zahnärztekammer Niedersachsen
        <br />
        Zeißstraße 11a
        <br />
        30519 Hannover
      </p>

      <h3>Berufsrechtliche Regelungen</h3>
      <p>Es gelten folgende berufsrechtliche Regelungen:</p>
      <ul>
        <li>
          <strong>Zahnheilkundegesetz (ZHG)</strong> — einsehbar unter:{" "}
          <a
            href="https://www.gesetze-im-internet.de/zanheilkg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.gesetze-im-internet.de/zanheilkg
          </a>
        </li>
        <li>
          <strong>Berufsordnung der Zahnärztekammer Niedersachsen</strong> —
          einsehbar unter:{" "}
          <a href="https://www.zkn.de" target="_blank" rel="noopener noreferrer">
            www.zkn.de
          </a>
        </li>
        <li>
          <strong>Heilberufsgesetz Niedersachsen (HKG)</strong> — einsehbar
          unter:{" "}
          <a
            href="https://www.voris.niedersachsen.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.voris.niedersachsen.de
          </a>
        </li>
      </ul>

      <h3>Umsatzsteuer-Identifikationsnummer</h3>
      <p>
        Zahnärztliche Heilbehandlungen sind gemäß § 4 Nr. 14 UStG von der
        Umsatzsteuer befreit.
      </p>

      <h3>Streitschlichtung</h3>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h3>Haftungshinweis</h3>
      <p>
        <strong>Haftung für Inhalte:</strong> Die Inhalte dieser Seite und der
        zugehörigen Social-Media-Profile dienen der allgemeinen Information. Sie
        ersetzen keine individuelle zahnärztliche Beratung, Diagnose oder
        Behandlung. Für eine persönliche Beratung wenden Sie sich bitte direkt
        an die Praxis.
      </p>
      <p>
        <strong>Haftung für Links:</strong> Diese Seite enthält Links zu
        externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
        oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum
        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links
        umgehend entfernen.
      </p>

      <hr />
      <p>
        <em>Stand: {"{{DATUM}}"}</em>
      </p>
    </LegalLayout>
  );
}

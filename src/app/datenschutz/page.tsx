import { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Dirk Rustenbach – Der Zahnretter",
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Verantwortlicher</h2>
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
      <p>
        Telefon: {"{{TELEFONNUMMER}}"}
        <br />
        E-Mail: {"{{E-MAIL-ADRESSE}}"}
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Diese Datenschutzerklärung gilt für die Website {"{{WEBSITE-URL}}"} sowie
        für die Social-Media-Auftritte von {"{{VORNAME}} {{NACHNAME}}"} auf
        folgenden Plattformen:
      </p>
      <ul>
        <li>TikTok (@dirkrustenbach)</li>
        <li>Instagram (@dirk.rustenbach)</li>
        <li>YouTube (@dirkrustenbach)</li>
        <li>Facebook (@dirkrustenbach)</li>
      </ul>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten ernst und behandeln Ihre
        personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
        Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>

      <h2>3. Hosting</h2>
      <p>Diese Website wird bei Vercel gehostet.</p>
      <p>
        <strong>Anbieter:</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, USA
        <br />
        <strong>Datenschutzerklärung:</strong>{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://vercel.com/legal/privacy-policy
        </a>
      </p>
      <p>
        Beim Besuch dieser Website erfasst der Server automatisch folgende Daten
        in sogenannten Server-Logfiles:
      </p>
      <ul>
        <li>Browsertyp und -version</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL (zuvor besuchte Seite)</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>IP-Adresse (ggf. anonymisiert)</li>
        <li>Uhrzeit der Serveranfrage</li>
      </ul>
      <p>
        Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der technisch fehlerfreien Darstellung und Sicherheit der
        Website).
      </p>
      <p>
        <strong>Datenübermittlung in die USA:</strong> Vercel Inc. hat seinen Sitz
        in den USA. Die Datenübermittlung in die USA erfolgt auf Grundlage des
        EU-US Data Privacy Frameworks (DPF). Vercel hat sich unter dem DPF
        zertifiziert. Weitere Informationen:{" "}
        <a
          href="https://www.dataprivacyframework.gov"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.dataprivacyframework.gov
        </a>
      </p>
      <p>
        <strong>Auftragsverarbeitung:</strong> Vercel verarbeitet Daten in unserem
        Auftrag. Die Nutzung erfolgt auf Grundlage von Art. 28 DSGVO und den
        Standardvertragsklauseln der EU-Kommission.
      </p>

      <h2>4. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers von „http://" auf „https://" wechselt
        und an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Diese Website verwendet keine eigenen Cookies. Vercel kann technisch
        notwendige Cookies setzen, die für den Betrieb der Website erforderlich
        sind.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der technischen Bereitstellung der Website).
      </p>

      <h2>5a. Vercel Web Analytics</h2>
      <p>
        Diese Website nutzt Vercel Web Analytics, einen datenschutzfreundlichen
        Analysedienst von Vercel Inc.
      </p>
      <p>
        Vercel Web Analytics erhebt <strong>keine personenbezogenen Daten</strong>,
        verwendet <strong>keine Cookies</strong> und speichert{" "}
        <strong>keine IP-Adressen</strong>. Es werden ausschließlich aggregierte,
        anonymisierte Nutzungsdaten erhoben (Seitenaufrufe, Referrer,
        Gerätekategorie, Land/Region).
      </p>
      <p>
        <strong>Anbieter:</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, USA
        <br />
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der Analyse der Website-Nutzung in anonymisierter Form).
        <br />
        <strong>Weitere Informationen:</strong>{" "}
        <a
          href="https://vercel.com/docs/analytics/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://vercel.com/docs/analytics/privacy-policy
        </a>
      </p>

      <h2>6. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben
        (Name, Kontaktdaten, Inhalt der Anfrage) zum Zweck der Bearbeitung Ihrer
        Anfrage bei uns gespeichert.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der Beantwortung von Anfragen).
      </p>
      <p>
        <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald Ihre
        Anfrage abschließend bearbeitet wurde, es sei denn, gesetzliche
        Aufbewahrungspflichten stehen dem entgegen.
      </p>

      <h2>7. Social-Media-Auftritte</h2>
      <p>
        Wir unterhalten Online-Präsenzen auf den folgenden sozialen Netzwerken:
      </p>

      <h3>7.1 TikTok</h3>
      <p>
        <strong>Anbieter:</strong> TikTok Technology Limited, 10 Earlsfort Terrace,
        Dublin, D02 T380, Irland (für den EWR)
        <br />
        <strong>Datenschutzerklärung:</strong>{" "}
        <a
          href="https://www.tiktok.com/legal/privacy-policy-eea"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.tiktok.com/legal/privacy-policy-eea
        </a>
      </p>

      <h3>7.2 Instagram / Facebook</h3>
      <p>
        <strong>Anbieter:</strong> Meta Platforms Ireland Limited, Merrion Road,
        Dublin 4, D04 X2K5, Irland
        <br />
        <strong>Datenschutzerklärung:</strong>{" "}
        <a
          href="https://privacycenter.instagram.com/policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://privacycenter.instagram.com/policy
        </a>
        <br />
        <strong>Seiten-Insights-Ergänzung:</strong>{" "}
        <a
          href="https://www.facebook.com/legal/terms/page_controller_addendum"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.facebook.com/legal/terms/page_controller_addendum
        </a>
      </p>

      <h3>7.3 YouTube</h3>
      <p>
        <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow
        Street, Dublin 4, Irland
        <br />
        <strong>Datenschutzerklärung:</strong>{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/privacy
        </a>
      </p>

      <h3>Gemeinsame Verantwortlichkeit</h3>
      <p>
        Beim Besuch unserer Social-Media-Profile werden durch die jeweilige
        Plattform Daten erhoben und verarbeitet. Wir sind als Betreiber der
        Profile gemeinsam mit dem jeweiligen Plattformbetreiber für die dabei
        stattfindende Datenverarbeitung verantwortlich (Art. 26 DSGVO).
      </p>
      <p>
        Wir weisen darauf hin, dass Ihre Daten durch die Plattformbetreiber auch
        außerhalb der Europäischen Union verarbeitet werden können. Die
        Plattformbetreiber haben sich jeweils zur Einhaltung der
        EU-Standardvertragsklauseln verpflichtet.
      </p>
      <p>
        Wir haben keinen Einfluss auf Art und Umfang der durch die Plattformen
        verarbeiteten Daten, die Art der Verarbeitung und Nutzung oder die
        Weitergabe dieser Daten an Dritte. Auch haben wir keine wirksamen
        Kontrollmöglichkeiten.
      </p>
      <p>
        Nähere Informationen finden Sie in den oben verlinkten
        Datenschutzerklärungen der jeweiligen Anbieter.
      </p>

      <h2>8. Ihre Rechte als betroffene Person</h2>
      <p>Sie haben folgende Rechte gegenüber dem Verantwortlichen:</p>
      <ul>
        <li>
          <strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)
        </li>
        <li>
          <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)
        </li>
        <li>
          <strong>Recht auf Löschung</strong> (Art. 17 DSGVO)
        </li>
        <li>
          <strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18
          DSGVO)
        </li>
        <li>
          <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)
        </li>
        <li>
          <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)
        </li>
        <li>
          <strong>Recht auf Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3
          DSGVO)
        </li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannten
        Kontaktdaten.
      </p>

      <h2>9. Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
        Daten gegen die DSGVO verstößt, haben Sie das Recht, sich bei einer
        Datenschutz-Aufsichtsbehörde zu beschweren.
      </p>
      <p>
        <strong>Zuständige Aufsichtsbehörde:</strong>
        <br />
        Die Landesbeauftragte für den Datenschutz Niedersachsen
        <br />
        Prinzenstraße 5
        <br />
        30159 Hannover
        <br />
        Telefon: 0511 120-4500
        <br />
        E-Mail: poststelle@lfd.niedersachsen.de
        <br />
        Website:{" "}
        <a
          href="https://www.lfd.niedersachsen.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.lfd.niedersachsen.de
        </a>
      </p>

      <h2>10. Änderung dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie stets
        den aktuellen rechtlichen Anforderungen anzupassen oder um Änderungen
        unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren
        erneuten Besuch gilt dann die neue Datenschutzerklärung.
      </p>

      <hr />
      <p>
        <em>Stand: {"{{DATUM}}"}</em>
      </p>
    </LegalLayout>
  );
}

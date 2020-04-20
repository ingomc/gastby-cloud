import React from "react";
import Layout from "../components/layout";
import Helmet from 'react-helmet'


const IndexPage = ({ data }) => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "body--gradient",
      }}
    />
    <huk-homepage-hero-container
      head-line="Autoversicherung"
      layout="cols-1-1-1"
      background-width="p60"
      background-color="transparent"
    >
      <huk-homepage-hero-card
        modifier="small-teaser"
        badge-label="Jetzt neu!"
        badge-style="uc big white"
        teaser-image="https://www.huk24.de/content/dam/huk24/web/produkte/leben/risikolebensversicherung/aktionen/2020/april_2020/april_19/rlv_homepage_aktionsteaser.png"
        head-line="Risikolebensversicherung für Familien- und Kreditabsicherung"
        head-line-style="dark"
        cta-label="Angebot berechnen"
        cta-href="/risikolebensversicherung?page=hp_hero_rlv"
        cta-style="forward small"
        promo-background-color="#263238"
        promo-text-color="#fff"
      ></huk-homepage-hero-card>

      <huk-homepage-hero-card
        modifier="small-teaser"
        badge-label="Hausratversicherung"
        badge-style="uc big orange"
        teaser-image="https://www.huk24.de/content/dam/huk24/web/produkte/hus/hausratversicherung/sofa_teaser_grau.jpg"
        head-line="Hausratversicherung: Ihr Zuhause schützt Sie. Wir schützen Ihr Zuhause."
        head-line-style="dark"
        cta-label="Angebot berechnen"
        cta-href="/hausratversicherung?page=hp_hero_hr"
        cta-style="forward small"
        promo-background-color="#263238"
        promo-text-color="#fff"
      ></huk-homepage-hero-card>

      <huk-homepage-hero-card
        modifier="small-teaser"
        badge-label="Haftpflicht"
        badge-style="uc big orange"
        teaser-image="https://www.huk24.de/content/dam/huk24/web/keyvisuals/statisch/homepage_cards/grau/vase_optimized.jpg"
        head-line="Haftpflichtversicherung einfach online abschließen"
        head-line-style="dark"
        cta-label="Angebot berechnen"
        cta-href="/haftpflichtversicherung?page=hp_hero_ph"
        cta-style="forward small"
        promo-background-color="#263238"
        promo-text-color="#fff"
      ></huk-homepage-hero-card>
    </huk-homepage-hero-container>

    <huk-homepage-hero-linklist
      variant="huk24"
      modifier="default"
      head-line="Weitere Versicherungen"
      link-list='[{"label":"Unfall","href":"#"},{"label":"Wohngeäude","href":"#"},{"label":"Rechtsschutz","href":"#"},{"label":"Motorrad","href":"#"},{"label":"Risikolebensversicherung","href":"#"}]'
    ></huk-homepage-hero-linklist>

    <huk-accordion-cms
      teaser-line="FAQ"
      head-line="Häufige Fragen und Antworten"
      headline-tag="h1"
    >
      <huk-accordion-item label="Wie beantrage ich eine elektronische Versicherungsbestätigung, die eVB?">
        <p>
          Schließen Sie im Beitragsrechner Ihre Kfz-Direktversicherung ab.
          Direkt danach erhalten Sie eine eVB, Ihre elektronische
          Versicherungsbestätigung, per E-Mail. Damit können Sie Ihr Fahrzeug
          zulassen.
        </p>
        <p>
          In seltenen Fällen erreicht die E-Mail Sie erst am nächsten Werktag.
        </p>
        <p>&nbsp;</p>
        <p>
          <b>Jetzt Angebot berechnen:</b>
        </p>
        <ul>
          <li>
            <a href="/autoversicherung">Zur Autoversicherung</a>&nbsp;
          </li>
          <li>
            <a href="/motorradversicherung">Zur Motorradversicherung</a>
          </li>
          <li>
            <a href="/wohnmobilversicherung">Zur Wohnmobilversicherung</a>
          </li>
          <li>
            <a href="/lieferwagenversicherung">Zur Lieferwagenversicherung</a>
          </li>
          <li>
            <a href="/anhaengerversicherung">Zur Anhängerversicherung</a>
          </li>
        </ul>
      </huk-accordion-item>
      <huk-accordion-item label="Wie kann ich mit meinem Fahrzeug zur HUK24 wechseln?">
        <p>
          So gehen Sie vor, wenn Sie mit Ihrem Fahrzeug zur HUK24 wechseln
          wollen:
        </p>
        <p>&nbsp;</p>
        <p>
          <b>1. Kündigen Sie Ihre aktuelle Kfz-Versicherung</b>.
        </p>
        <ul>
          <li>
            Autoversicherungen laufen in der Regel bis zum 01.01. eines jeden
            Jahres und verlängern sich automatisch, wenn sie nicht einen Monat
            vor Vertragsablauf gekündigt werden. Daher muss Ihre schriftliche
            Kündigung spätestens bis zum 30.11. des jeweiligen Jahres dem
            aktuellen Versicherer vorliegen. (Den gültigen Vertragsablauf können
            Sie meist Ihrem Versicherungsschein entnehmen.)
          </li>
          <li>
            Ihre zweite Wechsel-Möglichkeit: Erhöht der Versicherer den Beitrag,
            können Sie innerhalb eines Monats nach Erhalt der Beitragsrechnung
            kündigen und zur HUK24 wechseln.
          </li>
        </ul>
        <p>&nbsp;</p>
        <p>
          <b>2. Stellen Sie einen Antrag bei der HUK24.</b>
        </p>
        <ul>
          <li>
            Berechnen Sie sich Ihr persönliches Angebot.&nbsp;
            <span>
              Hier haben Sie auch die Möglichkeit Änderungen gegenüber Ihres
              alten Vertrages wie z.B. Halterwechsel oder den Einschluss eines
              neuen Fahrers.
            </span>
          </li>
          <li>
            Sagt Ihnen der Beitrag zu? Stellen Sie direkt online Ihren Antrag
            auf Versicherungsschutz.
          </li>
          <li>
            Sie möchten noch überlegen? Speichern Sie Ihr Angebot und schließen
            Sie später ab.
          </li>
        </ul>
        <p>&nbsp;</p>
        <p>
          <b>Wie geht es weiter?</b>
        </p>
        <p>
          Wir bestätigen den Empfang Ihres Antrags innerhalb weniger Minuten per
          E-Mail. Den Versicherungsschein (Police) erhalten Sie in der Regel
          kurz vor Versicherungsbeginn.
        </p>
      </huk-accordion-item>
      <huk-accordion-item label="Wie kann ich meinen Vertrag ändern?">
        <p>
          In Ihrem persönlichen Servicebereich <a href="">Meine HUK24</a> können
          Sie einen Vertrag jederzeit ändern. Sie können zum Beispiel:
        </p>
        <ul>
          <li>
            Zusatzbausteine wie den Haus- und Wohnungsschutzbrief einschließen
          </li>
          <li>Die Versicherungssumme erhöhen</li>
          <li>Ihre Adresse ändern oder eine neue E-Mail-Adresse hinterlegen</li>
          <li>Die jährliche Fahrleistung anpassen</li>
          <li>Auf einen neuen Tarif umstellen</li>
          <li>Ihre Zahlungsweise ändern</li>
        </ul>
        <p>&nbsp;</p>
        <p>
          <b>So einfach geht’s:</b>
        </p>
        <p>
          Melden Sie sich in Ihrem Servicebereich <a href="">Meine HUK24</a> an.
          Wählen Sie den Vertrag in der Vertragsübersicht aus. Klicken Sie auf
          „Anzeigen". Über die Stift-Icons können Sie nun die verschiedenen
          Aspekte Ihres Vertrags anpassen.&nbsp;
        </p>
      </huk-accordion-item>
      <huk-accordion-item label="Wann erhalte die Beitragsrechnung für mein versichertes Fahrzeug?">
        <p>
          Wir versenden die Kfz-Beitragsrechnungen im Zeitraum von Mitte Oktober
          bis Ende November.
        </p>
      </huk-accordion-item>
    </huk-accordion-cms>

    <div className="cardSlider">
      <huk-card-slider
        teaser-line="Auszeichnungen"
        head-line="So bewerten uns unabhängige Tester"
        text="&lt;p>Mehr als 2 Millionen Kunden schenken der HUK24 bereits ihr Vertrauen. Und das mit gutem Grund: Unsere Versicherungen erhalten regelmäßig Bestnoten in Umfragen und Tests.&lt;/p>
&lt;p>&lt;a href=&#34;/huk24-im-test&#34;>Alle Auszeichnungen&lt;/a>&lt;/p>
"
        image-path="https://www.huk24.de/content/dam/huk24/web/allgemein/zentralelemente/home_auszeichnung_03.png"
        image-position="left"
        cta-style="forward"
      >
        <div slot="slider-items">
          <div className="card">
            <huk-card
              id="af0724cd-b689-45bb-af92-5d13c1aaad90/par/cardslider/slider-par/card"
              front-face="emphasize-asset"
              image-path="https://www.huk24.de/content/dam/huk24/web/allgemein/siegel/2019/BesterKfzDirektversicherer_2019.jpg"
              label="&lt;p>Bester Kfz-Direktversicherer&lt;/p>
"
              info-text="&lt;p>Die HUK24 erhält von FOCUS Money die Auszeichnung &amp;quot;Bester Kfz-Direktversicherer 2019&amp;quot;. Bewertet wurde der günstigste Beitrag im Standard- und Basis-Tarif repräsentativ über acht unterschiedliche Fahrerprofile.&lt;/p>
"
            ></huk-card>
          </div>

          <div className="card">
            <huk-card
              id="af0724cd-b689-45bb-af92-5d13c1aaad90/par/cardslider/slider-par/card_1725634560"
              front-face="emphasize-asset"
              image-path="https://www.huk24.de/content/dam/huk24/web/allgemein/siegel/2019/n-tv-Spar-Champions-Sieger-Kfz-Versicherer-2019.png"
              label="&lt;p>Spar Champion&lt;/p>
"
              info-text="&lt;p>Knapp 22.000 Preisdaten von 237 Unternehmen hat das Deutsche Institut für Service Qualität (DISQ) miteinander verglichen. Das Ergebnis: Die HUK24 ist Sieger in der Kategorie Kfz-Versicherer&lt;/p>
"
            ></huk-card>
          </div>

          <div className="card">
            <huk-card
              id="af0724cd-b689-45bb-af92-5d13c1aaad90/par/cardslider/slider-par/card_1623013784"
              front-face="emphasize-asset"
              image-path="https://www.huk24.de/content/dam/huk24/web/allgemein/siegel/2018/Focus_Money_Beste_Finanzkraft_2018_Card.png"
              label="&lt;p>Beste Finanzkraft&lt;/p>
"
              info-text="&lt;p>Mit einer Lebensversicherung der HUK24 ist Ihr Geld sicher angelegt. Das bestätigt FOCUS Money und bewertet die Finanzkraft der HUK24 als &amp;quot;Extrem stark (Note 1,0)&amp;quot;.&lt;/p>
"
            ></huk-card>
          </div>

          <div className="card">
            <huk-card
              id="af0724cd-b689-45bb-af92-5d13c1aaad90/par/cardslider/slider-par/card_198391537"
              front-face="emphasize-asset"
              image-path="https://www.huk24.de/content/dam/huk24/web/allgemein/siegel/2018/assekurata_2018_icon.png"
              label="&lt;p>Exzellente Unternehmensqualität&lt;br />
&lt;/p>
"
              info-text="&lt;p>In der jährlichen Beurteilung bescheinigte die auf Versicherungsunternehmen spezialisierte Ratingagentur Assekurata der HUK24 im Jahr 2018 eine exzellente Unternehmensqualität.&lt;/p>
"
            ></huk-card>
          </div>

          <div className="card">
            <huk-card
              id="af0724cd-b689-45bb-af92-5d13c1aaad90/par/cardslider/slider-par/card_499447799"
              front-face="emphasize-asset"
              image-path="https://www.huk24.de/content/dam/huk24/web/allgemein/siegel/2017/Testsiegel_HUK24_Hausrat_Classic.png"
              label="&lt;p>Hausrat Classic: Sehr gut&lt;/p>
"
              info-text="&lt;p>Unser Classic-Tarif erhält im Verbraucherschutz-Check von &amp;quot;tarifair&amp;quot; die Note „SEHR GUT“ (1,0).&lt;/p>
"
            ></huk-card>
          </div>

          <div className="card">
            <huk-card
              id="af0724cd-b689-45bb-af92-5d13c1aaad90/par/cardslider/slider-par/card_107477974"
              front-face="emphasize-asset"
              image-path="https://www.huk24.de/content/dam/huk24/web/allgemein/siegel/2019/n-tv-KB-Service-Kfz-Versicherer-Direktvers-2019.png"
              label="&lt;p>Bester Service&amp;nbsp;&lt;/p>
"
            ></huk-card>
          </div>

          <div className="card">
            <huk-card
              id="af0724cd-b689-45bb-af92-5d13c1aaad90/par/cardslider/slider-par/card_697976710"
              front-face="emphasize-asset"
              image-path="https://www.huk24.de/content/dam/huk24/web/allgemein/siegel/2019/n-tv-KB-Premium-Kfz-Versicherer-Direktvers-2019.png"
              label="&lt;p>Premium Kfz-Versicherer&amp;nbsp;&lt;/p>
"
            ></huk-card>
          </div>
        </div>
      </huk-card-slider>
    </div>
  </Layout>
);

export default IndexPage;

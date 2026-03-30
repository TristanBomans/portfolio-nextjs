"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 35,
    fontFamily: "Helvetica",
    fontSize: 10,
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#2dd4bf",
    paddingBottom: 12,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 3,
  },
  title: {
    fontSize: 13,
    color: "#2dd4bf",
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    fontSize: 9,
    color: "#666666",
  },
  contactItem: {
    fontSize: 9,
    color: "#666666",
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    paddingBottom: 4,
  },
  subsectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
    marginTop: 6,
  },
  text: {
    fontSize: 9,
    lineHeight: 1.4,
    color: "#444444",
    textAlign: "justify",
    marginBottom: 4,
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  experienceTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111111",
    flex: 1,
  },
  experienceDate: {
    fontSize: 9,
    color: "#666666",
    textAlign: "right",
  },
  experienceLocation: {
    fontSize: 9,
    color: "#888888",
    marginBottom: 4,
  },
  experienceDesc: {
    fontSize: 9,
    lineHeight: 1.35,
    color: "#555555",
    textAlign: "justify",
  },
  techList: {
    fontSize: 8,
    color: "#666666",
    fontStyle: "italic",
    marginTop: 3,
  },
  twoColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  column: {
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  tableLabel: {
    width: 100,
    fontSize: 9,
    fontWeight: "bold",
    color: "#444444",
  },
  tableValue: {
    flex: 1,
    fontSize: 9,
    color: "#555555",
  },
  languageRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  languageName: {
    width: 80,
    fontSize: 9,
    fontWeight: "bold",
    color: "#444444",
  },
  languageLevel: {
    flex: 1,
    fontSize: 9,
    color: "#666666",
  },
  certTable: {
    marginTop: 4,
  },
  certRow: {
    flexDirection: "row",
    marginBottom: 2,
    fontSize: 9,
  },
  certTopic: {
    flex: 2,
    color: "#444444",
  },
  certProvider: {
    flex: 1,
    color: "#666666",
  },
  certDate: {
    flex: 0.8,
    color: "#888888",
    textAlign: "right",
  },
  footer: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    fontSize: 8,
    color: "#999999",
    textAlign: "center",
  },
});

const cvContent = {
  nl: {
    personalia: {
      naam: "Tristan Bomans",
      woonplaats: "Grimbergen",
      geboortedatum: "25/01/1997",
      geslacht: "Man",
      nationaliteit: "Belg",
    },
    profiel: "Tristan is een gemotiveerde medewerker. Hij wilt voortdurend bijleren en zijn technieken verbeteren. Dit doet hij door op regelmatige basis zichzelf uit te dagen in code en kritisch te zijn voor zichzelf. Tristan is een sociaal persoon met een goede kennis van Engels en Nederlands.",
    werkervaring: [
      {
        title: "Fluvius (freelance)",
        role: ".NET Developer",
        date: "Januari 2024 – Maart 2025",
        location: "Melle",
        description: "Tristan heeft gewerkt als contractor bij Fluvius als full stack developer aan de Mijn Fluvius-portal. Binnen dit project lag de focus op de ontwikkeling en optimalisatie van modules in mijn fluvius voor aansluitingen, premies, verbruik en alles er rond. Hij was verantwoordelijk voor zowel de frontend als de backend en nam daarnaast ook infrastructuurgerelateerde taken op zich. Het project had een sterke focus op cloud-native ontwikkeling en automatisering, waarbij hij intensief werkte met Azure-services en CI/CD-processen.",
        tech: ".NET 9, MSSQL, Swagger, Angular 19, Azure DevOps (CI/CD, YAML Pipelines), Azure Storage, Azure KeyVault, Azure App Services, Azure Managed Identities, Azure Api Management, Application Insights, Bicep files, SonarQube, Jira, Confluence, Agile & Scrum werking.",
      },
      {
        title: "Ferm vzw (freelance)",
        role: ".NET Developer",
        date: "Januari 2022 – December 2023",
        location: "Leuven",
        description: "Tristan werkte als contractor voor Ferm vzw op een uitgebreide applicatie waar verschillende technologieën werden gebruikt waar hij nog minder ervaring mee had. Zo zetten ze bij Ferm stevig in op DDD, werken ze met NGRX voor state management, en werken ze onder andere met Dapper als ORM. Hij was naast de ontwikkeling medeverantwoordelijk voor de deployment van de applicaties via Azure pipelines. Hij had ook toegang tot de hosting-server-vms die in Azure draaiden. Wanneer er problemen met IIS of dergelijke waren, sprong hij ten hulp. De applicatie had als doel om hun thuiszorg en huishoudhulp dienstverleningen te kunnen beheren.",
        tech: "C# .NET Core, Angular (15), SQL, Rebus, Azure DevOps, Hangfire, Azure (pipelines, DevOps, KeyVault, Functions), IIS, Application Insights",
      },
      {
        title: "Private Bank Delen",
        role: ".NET Developer",
        date: "Augustus 2020 – Januari 2022",
        location: "Antwerpen",
        description: "Tristan heeft gewerkt als interne medewerker bij private bank Delen. Het project legde een grote focus bij het gebruik maken van microservices en deed dat door onder andere te werken met docker containers in kubernetes. Tristan kreeg veel verantwoordelijkheid en vrijheid. Het project had als doel om oude (Cobol) banking services om te zetten naar nieuwe, moderne C# Applicaties.",
        tech: "C# .NET Core, Angular 9, SQL, Elastic Kibana, NServiceBus (RabbitMq), Azure DevOps (Boards, Pipelines, Releases), Lokalise, Minio, Jobscheduler, SonarQube, HashiCorp Vault",
      },
      {
        title: "Deloitte (Cegeka)",
        role: "Analyst Developer",
        date: "Februari 2020 – Augustus 2020",
        location: "Zaventem",
        description: "Tristan heeft gewerkt als consultant bij Cegeka's klant Deloitte. Hij werd geplaatst binnen het juridisch departement van Deloitte. Tristan werkte aan applicaties die gebruikt werden door klanten over de hele wereld. Hij werkte aan een gevarieerde applicatie die zowel gebruik maakte van oude als recente technologieën. Hij kreeg voor het eerst de kans om te werken met Azure.",
        tech: "C#, nHibernate, Angular 8, Web Forms, WCF, TFS, Azure Devops, SQL",
      },
      {
        title: "AT&T (Cegeka)",
        role: "Analyst Developer",
        date: "Augustus 2018 – Februari 2020",
        location: "Vilvoorde",
        description: "Bij dit project heeft Tristan als consultant voor AT&T gewerkt. Hij werd in hetzelfde automation team geplaatst als tijdens zijn voorgaande stage. Het grote verschil met zijn stage was dat hij nu meer verantwoordelijkheid had en een grote rol speelde bij het nemen van beslissingen. Sinds het begin van zijn periode bij AT&T was hij onder andere medeverantwoordelijk voor het opbouwen van de tweede versie van een facturatieplatform (een platform om facturatiedata te valideren) binnen AT&T. Door de vrijheid in keuze die AT&T biedt heeft hij op dit nieuwe platform met technologieën kunnen experimenteren.",
        tech: "C#, Entity Framework, Angular 8, Git, SSIS, PowerBi, ngPrime, codemirror, signalR, AutoMapper",
      },
      {
        title: "AT&T Stage (Cegeka)",
        role: "Intern .NET Developer",
        date: "Februari 2018 – Mei 2018",
        location: "Vilvoorde",
        description: "Tristan volgde gedurende 15 weken een stage als Cegeka consultant in een automation team binnen AT&T. Hier draaide hij mee als een volwaardig teamlid. Tijdens deze stage heeft hij grotendeels aan de eerste versie van AT&T's facturatieplatform gewerkt. Gedurende deze 15 weken heeft hij leren programmeren op een professionele werkwijze, gebruikmakende van agile & scrum. Tijdens de stage moest hij zelfstandig frontend, backend (C#) en database scripts ontwikkelen.",
        tech: "C#, Entity Framework, Angular JS, Git, T-SQL",
      },
    ],
    opleiding: {
      title: "Professionele bachelor in toegepaste informatica",
      school: "Hogeschool Erasmus Brussel",
      period: "2015 – 2018",
    },
    certificaten: [
      { topic: ".NET Best Practices: Architecture & Design Patterns", provider: "U2U", date: "November 2019" },
      { topic: "Examen: Programming in C# 70-483", provider: "Microsoft", date: "Oktober 2019" },
      { topic: "Microsoft MTA (Software development fundamentals)", provider: "Microsoft", date: "Mei 2019" },
    ],
    talen: [
      { taal: "Nederlands", spreken: "Moedertaal", lezen: "Moedertaal", schrijven: "Moedertaal" },
      { taal: "Engels", spreken: "Zeer goed", lezen: "Zeer goed", schrijven: "Zeer goed" },
      { taal: "Frans", spreken: "Matig", lezen: "Matig", schrijven: "Matig" },
    ],
    labels: {
      personalia: "Personalia",
      profiel: "Profiel",
      werkervaring: "Werkervaring",
      opleiding: "Opleiding",
      certificaten: "Training & Certificaten",
      talen: "Talenkennis",
      spreken: "Spreken",
      lezen: "Lezen",
      schrijven: "Schrijven",
    },
  },
  en: {
    personalia: {
      naam: "Tristan Bomans",
      woonplaats: "Grimbergen",
      geboortedatum: "25/01/1997",
      geslacht: "Male",
      nationaliteit: "Belgian",
    },
    profiel: "Tristan is a motivated professional who continuously seeks to learn and improve his technical skills. He challenges himself regularly through coding exercises and maintains a critical eye on his own work. Tristan is a social person with excellent proficiency in both English and Dutch.",
    werkervaring: [
      {
        title: "Fluvius (freelance)",
        role: ".NET Developer",
        date: "January 2024 – March 2025",
        location: "Melle",
        description: "Tristan worked as a contractor at Fluvius as a full stack developer on the Mijn Fluvius portal. The project focused on developing and optimizing modules for connections, premiums, consumption, and related features. He was responsible for both frontend and backend development, as well as infrastructure-related tasks. The project had a strong focus on cloud-native development and automation, working extensively with Azure services and CI/CD processes.",
        tech: ".NET 9, MSSQL, Swagger, Angular 19, Azure DevOps (CI/CD, YAML Pipelines), Azure Storage, Azure KeyVault, Azure App Services, Azure Managed Identities, Azure Api Management, Application Insights, Bicep files, SonarQube, Jira, Confluence, Agile & Scrum.",
      },
      {
        title: "Ferm vzw (freelance)",
        role: ".NET Developer",
        date: "January 2022 – December 2023",
        location: "Leuven",
        description: "Tristan worked as a contractor for Ferm vzw on an extensive application using various technologies he had less experience with. Ferm heavily invested in DDD, used NGRX for state management, and worked with Dapper as ORM, among other technologies. Besides development, he was co-responsible for deploying applications via Azure pipelines. He also had access to hosting server VMs running in Azure and helped troubleshoot IIS and related issues. The application managed their home care and domestic help services.",
        tech: "C# .NET Core, Angular (15), SQL, Rebus, Azure DevOps, Hangfire, Azure (pipelines, DevOps, KeyVault, Functions), IIS, Application Insights",
      },
      {
        title: "Private Bank Delen",
        role: ".NET Developer",
        date: "August 2020 – January 2022",
        location: "Antwerp",
        description: "Tristan worked as an internal employee at Private Bank Delen. The project focused heavily on microservices architecture, working with Docker containers in Kubernetes. Tristan received significant responsibility and freedom. The project's goal was to modernize legacy (COBOL) banking services into new C# applications.",
        tech: "C# .NET Core, Angular 9, SQL, Elastic Kibana, NServiceBus (RabbitMq), Azure DevOps (Boards, Pipelines, Releases), Lokalise, Minio, Jobscheduler, SonarQube, HashiCorp Vault",
      },
      {
        title: "Deloitte (Cegeka)",
        role: "Analyst Developer",
        date: "February 2020 – August 2020",
        location: "Zaventem",
        description: "Tristan worked as a consultant at Cegeka's client Deloitte, placed within Deloitte's legal department. He worked on applications used by clients worldwide on a varied application using both legacy and modern technologies. This was his first opportunity to work with Azure.",
        tech: "C#, nHibernate, Angular 8, Web Forms, WCF, TFS, Azure Devops, SQL",
      },
      {
        title: "AT&T (Cegeka)",
        role: "Analyst Developer",
        date: "August 2018 – February 2020",
        location: "Vilvoorde",
        description: "Tristan worked as a consultant for AT&T, placed in the same automation team as during his previous internship. The major difference from his internship was that he now had more responsibility and played a significant role in decision-making. From the start of his period at AT&T, he was co-responsible for building the second version of an invoicing platform (a platform to validate invoicing data) within AT&T. The freedom of choice offered by AT&T allowed him to experiment with various technologies on this new platform.",
        tech: "C#, Entity Framework, Angular 8, Git, SSIS, PowerBi, ngPrime, codemirror, signalR, AutoMapper",
      },
      {
        title: "AT&T Internship (Cegeka)",
        role: "Intern .NET Developer",
        date: "February 2018 – May 2018",
        location: "Vilvoorde",
        description: "Tristan completed a 15-week internship as a Cegeka consultant in an automation team within AT&T, participating as a full team member. During this internship, he primarily worked on the first version of AT&T's invoicing platform. Over these 15 weeks, he learned to program professionally using agile & scrum methodologies. During the internship, he independently developed frontend, backend (C#), and database scripts.",
        tech: "C#, Entity Framework, Angular JS, Git, T-SQL",
      },
    ],
    opleiding: {
      title: "Professional Bachelor in Applied Computer Science",
      school: "Erasmus University College Brussels",
      period: "2015 – 2018",
    },
    certificaten: [
      { topic: ".NET Best Practices: Architecture & Design Patterns", provider: "U2U", date: "November 2019" },
      { topic: "Exam: Programming in C# 70-483", provider: "Microsoft", date: "October 2019" },
      { topic: "Microsoft MTA (Software development fundamentals)", provider: "Microsoft", date: "May 2019" },
    ],
    talen: [
      { taal: "Dutch", spreken: "Native", lezen: "Native", schrijven: "Native" },
      { taal: "English", spreken: "Very good", lezen: "Very good", schrijven: "Very good" },
      { taal: "French", spreken: "Moderate", lezen: "Moderate", schrijven: "Moderate" },
    ],
    labels: {
      personalia: "Personal Information",
      profiel: "Profile",
      werkervaring: "Work Experience",
      opleiding: "Education",
      certificaten: "Training & Certificates",
      talen: "Languages",
      spreken: "Speaking",
      lezen: "Reading",
      schrijven: "Writing",
    },
  },
};

const ResumePDF = ({ lang }) => {
  const content = cvContent[lang];
  const isNL = lang === "nl";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Tristan Bomans</Text>
          <Text style={styles.title}>.NET Software Engineer</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>Grimbergen, Belgium</Text>
            <Text style={styles.contactItem}>•</Text>
            <Text style={styles.contactItem}>bomanstristan@gmail.com</Text>
          </View>
        </View>

        {/* Personalia */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{content.labels.personalia}</Text>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>{isNL ? "Naam:" : "Name:"}</Text>
            <Text style={styles.tableValue}>{content.personalia.naam}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>{isNL ? "Woonplaats:" : "Location:"}</Text>
            <Text style={styles.tableValue}>{content.personalia.woonplaats}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>{isNL ? "Geboortedatum:" : "Date of birth:"}</Text>
            <Text style={styles.tableValue}>{content.personalia.geboortedatum}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>{isNL ? "Nationaliteit:" : "Nationality:"}</Text>
            <Text style={styles.tableValue}>{content.personalia.nationaliteit}</Text>
          </View>
        </View>

        {/* Profiel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{content.labels.profiel}</Text>
          <Text style={styles.text}>{content.profiel}</Text>
        </View>

        {/* Werkervaring */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{content.labels.werkervaring}</Text>
          {content.werkervaring.map((job, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceTitle}>{job.title} — {job.role}</Text>
                <Text style={styles.experienceDate}>{job.date}</Text>
              </View>
              <Text style={styles.experienceLocation}>{job.location}</Text>
              <Text style={styles.experienceDesc}>{job.description}</Text>
              <Text style={styles.techList}>{job.tech}</Text>
            </View>
          ))}
        </View>

        {/* Opleiding & Certificaten in 2 kolommen */}
        <View style={[styles.section, styles.twoColumn]}>
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>{content.labels.opleiding}</Text>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "#333", marginBottom: 2 }}>
              {content.opleiding.title}
            </Text>
            <Text style={{ fontSize: 9, color: "#666", marginBottom: 2 }}>{content.opleiding.school}</Text>
            <Text style={{ fontSize: 9, color: "#888" }}>{content.opleiding.period}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.sectionTitle}>{content.labels.certificaten}</Text>
            {content.certificaten.map((cert, index) => (
              <View key={index} style={styles.certRow}>
                <Text style={styles.certTopic}>{cert.topic}</Text>
                <Text style={styles.certDate}>{cert.date}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Talen */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{content.labels.talen}</Text>
          <View style={{ flexDirection: "row", marginBottom: 4 }}>
            <Text style={{ width: 80, fontSize: 9, fontWeight: "bold", color: "#444" }}></Text>
            <Text style={{ flex: 1, fontSize: 9, fontWeight: "bold", color: "#666" }}>{content.labels.spreken}</Text>
            <Text style={{ flex: 1, fontSize: 9, fontWeight: "bold", color: "#666" }}>{content.labels.lezen}</Text>
            <Text style={{ flex: 1, fontSize: 9, fontWeight: "bold", color: "#666" }}>{content.labels.schrijven}</Text>
          </View>
          {content.talen.map((taal, index) => (
            <View key={index} style={{ flexDirection: "row", marginBottom: 2 }}>
              <Text style={{ width: 80, fontSize: 9, fontWeight: "bold", color: "#444" }}>{taal.taal}</Text>
              <Text style={{ flex: 1, fontSize: 9, color: "#555" }}>{taal.spreken}</Text>
              <Text style={{ flex: 1, fontSize: 9, color: "#555" }}>{taal.lezen}</Text>
              <Text style={{ flex: 1, fontSize: 9, color: "#555" }}>{taal.schrijven}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>© {new Date().getFullYear()} Tristan Bomans — {isNL ? "Alle rechten voorbehouden" : "All rights reserved"}</Text>
        </View>
      </Page>
    </Document>
  );
};

export const PDFDownloadButton = ({ lang }) => {
  const isNL = lang === "nl";
  const filename = `Tristan-Bomans-CV-${isNL ? "NL" : "EN"}.pdf`;
  const label = "CV";
  
  return (
    <PDFDownloadLink
      document={<ResumePDF lang={lang} />}
      fileName={filename}
      title={label}
      className="link"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 12px",
        border: "1px solid #262626",
        borderRadius: "8px",
        color: "#ededed",
        background: "rgba(255, 255, 255, 0.03)",
        fontSize: "13px",
        fontWeight: "500",
        textDecoration: "none",
        transition: "all 0.2s ease",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {({ loading }) => (
        <>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {loading ? (
              <circle cx="12" cy="12" r="10" opacity="0.3">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            ) : (
              <>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </>
            )}
          </svg>
          {loading ? (isNL ? "Laden..." : "Loading...") : label}
        </>
      )}
    </PDFDownloadLink>
  );
};

export default ResumePDF;

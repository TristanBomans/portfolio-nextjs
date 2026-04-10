import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { cvContent } from "./content";

export default function ResumePDF({ lang }) {
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
                <Text style={styles.experienceTitle}>
                  {job.title} — {job.role}
                </Text>
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
          <Text>
            © {new Date().getFullYear()} Tristan Bomans — {isNL ? "Alle rechten voorbehouden" : "All rights reserved"}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

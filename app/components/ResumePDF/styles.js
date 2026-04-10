import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
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

"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";

export function PDFDownloadButton({ lang }) {
  const isNL = lang === "nl";
  const filename = `Tristan-Bomans-CV-${isNL ? "NL" : "EN"}.pdf`;
  const label = "CV";

  return (
    <PDFDownloadLink
      document={<ResumePDF lang={lang} />}
      fileName={filename}
      title={label}
      className="link"
      aria-label="Download CV (PDF)"
    >
      {({ loading }) => (
        // Keep the label and icon fixed while the PDF is (re)generated so
        // the row of link buttons never changes width.
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
            style={{ opacity: loading ? 0.4 : 1, transition: "opacity 0.2s" }}
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {label}
        </>
      )}
    </PDFDownloadLink>
  );
}

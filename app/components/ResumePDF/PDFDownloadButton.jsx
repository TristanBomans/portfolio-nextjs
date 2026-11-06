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
}

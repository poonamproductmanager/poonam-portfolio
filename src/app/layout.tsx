import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poonam M — Product Manager & Technical Product Owner",
  description:
    "Product leader with 8+ years owning products across public-sector infrastructure, fintech and regulated gaming, built on 13 years in software development and QA. London, SC eligible.",
  openGraph: {
    title: "Poonam M — Product Manager & Technical Product Owner",
    description:
      "Product leader across public-sector infrastructure, fintech and regulated gaming. London, SC eligible.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

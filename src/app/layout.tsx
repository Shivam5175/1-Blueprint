import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import Backdrop from "@/components/Backdrop";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Variable display serif with optical sizing — sets the "world-class" tone.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "1% Blueprint — Compound Your Way to Greatness",
  description:
    "Discover the power of compounding, financial wisdom, and motivational principles. Build wealth while you sleep with the 1% Blueprint.",
  keywords: [
    "compounding",
    "wealth building",
    "financial wisdom",
    "motivation",
    "law of attraction",
    "1 percent better",
  ],
  openGraph: {
    title: "1% Blueprint — Compound Your Way to Greatness",
    description:
      "Discover the power of compounding, financial wisdom, and motivational principles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-body antialiased">
        <Backdrop />
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

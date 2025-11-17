import type { Metadata } from "next";
import { Playfair_Display, Lato, Manrope, Inter } from "next/font/google";
import "@/styles/globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Two Wings | From Vision to Flight",
  description:
    "Professional web solutions at smart prices. Custom code, no-code, and low-code development tailored to your goals.",
  keywords: [
    "web development",
    "custom code",
    "no-code",
    "low-code",
    "UX/UI design",
    "e-commerce",
    "mobile applications",
  ],
  authors: [{ name: "Two Wings" }],
  openGraph: {
    title: "Two Wings | From Vision to Flight",
    description:
      "Professional web solutions at smart prices. Custom code, no-code, and low-code development.",
    type: "website",
    locale: "en_US",
  },
};

import { Navigation, Footer } from "@/layouts";
import { ScrollToTop } from "@/components/ui";
import { ModalProvider } from "@/contexts/ModalContext";
import { ContactUsModal } from "@/components/modals";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} ${manrope.variable} ${inter.variable} antialiased bg-background-DEFAULT text-text-body`}
      >
        <ModalProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
          <ContactUsModal />
        </ModalProvider>
      </body>
    </html>
  );
}

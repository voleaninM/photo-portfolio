import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Photo Gallery by Max",
  description: "It can be your photos on here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibm.className} ${ibm.variable}`}>
      <body>
        <Header />
        {children}
        footer
      </body>
    </html>
  );
}

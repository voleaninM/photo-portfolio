import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/colors.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./layout.module.css";
import Image from "next/image";
import background from "../../public/photographer.jpg";
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
      <body className={styles.body}>
        <Image
          alt="background"
          src={background}
          className={styles.bgImage}
          placeholder="blur"
        />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins= Poppins({
  variable:'poppins',
  subsets:["latin"],
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Webillien",
  description: "Webillien est une agence de marketing digital spécialisée dans l'accompagnement des entreprises et des particuliers à développer leurs business en ligne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}

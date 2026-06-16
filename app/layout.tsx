import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Online Quran Classes | Learn Quran Online with Live 1-on-1 Tutors",
  description: "Learn Quran online with experienced tutors. One-on-one live classes via Zoom for kids, adults & sisters. Hifz, Tajweed, Qaida, Tafseer & Translation. Female teachers available. Book a free trial class today.",
  openGraph: {
    title: "Online Quran Classes | Learn Quran Online with Live 1-on-1 Tutors",
    description: "Learn Quran online with experienced tutors. One-on-one live classes via Zoom for kids, adults & sisters. Hifz, Tajweed, Qaida, Tafseer & Translation. Female teachers available. Book a free trial class today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "name": "Quran Online Lessons",
    "description": "Learn Quran online with experienced tutors. One-on-one live classes via Zoom for kids, adults & sisters. Hifz, Tajweed, Qaida, Tafseer & Translation. Female teachers available.",
    "areaServed": ["United Kingdom", "Australia"],
    "sameAs": "https://instagram.com/quran_online_lessons"
  };

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <GoogleAnalytics gaId="G-YW2WQ0KRLF" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Only used for "Der Zahnretter" accent text
const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dirk Rustenbach | Der Zahnretter",
  description:
    "Dirk Rustenbach – Der Zahnretter. Zahnarzt aus Leidenschaft. Ehrlich. Direkt. Auf allen Kanälen.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dirk Rustenbach | Der Zahnretter",
    description:
      "Zahnarzt aus Leidenschaft – spezialisiert auf Zahnrettung. Folge mir auf TikTok, Instagram, YouTube und Facebook.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${garamond.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

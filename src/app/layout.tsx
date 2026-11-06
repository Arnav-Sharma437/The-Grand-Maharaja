import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { constructMetadata } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${cinzel.variable} ${cormorant.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#0D0C0A] text-[#1A1A1A] dark:text-[#F5F1EB] font-sans antialiased selection:bg-[#7D6328] selection:text-white transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

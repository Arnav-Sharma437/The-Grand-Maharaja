import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { constructMetadata } from "@/lib/seo";
import "./globals.css";

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
      className={`${cinzel.variable} ${cormorant.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#FAF7F2] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
        {children}
      </body>
    </html>
  );
}

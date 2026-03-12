import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jackson Stuwart | AI Engineer",
  description: "I design systems, orchestrate agents, and ship AI-native products end-to-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-white bg-zinc-950 selection:bg-violet-500/30 selection:text-violet-200 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

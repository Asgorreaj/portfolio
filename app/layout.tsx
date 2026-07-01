import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Asgor Hossain Reaj — Software Engineer & AI Researcher",
  description: "Portfolio of Md. Asgor Hossain Reaj — Software Engineer at DataSoft, AI/ML Researcher with 6 published papers in IEEE and Springer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body suppressHydrationWarning>
    <SmoothScroll />
    {children}
  </body>
</html>
  );
}


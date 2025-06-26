import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bavarian Auto Werkz | BMW Specialist & Exotic Car Service",
  description: "Premier BMW specialist and exotic car service center. From routine maintenance to high-performance modifications. Owner operates twin turbo Lamborghinis and Bentley.",
  keywords: "BMW service, exotic car repair, performance tuning, BMW specialist, Lamborghini service, Bentley repair, automotive performance",
  authors: [{ name: "Bavarian Auto Werkz" }],
  openGraph: {
    title: "Bavarian Auto Werkz | BMW Specialist & Exotic Car Service",
    description: "Premier BMW specialist and exotic car service center with expertise in exotic vehicles.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bavarian Auto Werkz | BMW Specialist & Exotic Car Service",
    description: "Premier BMW specialist and exotic car service center with expertise in exotic vehicles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData type="AutoRepair" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased scrollbar-premium`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SYSTEM INC AI",
    template: "%s | SYSTEM INC AI",
  },

  description:
    "The AI Company Operating System. Build, launch and operate AI-powered companies.",

  applicationName: "SYSTEM INC AI",

  keywords: [
    "AI",
    "Artificial Intelligence",
    "Company",
    "Startup",
    "Business",
    "Enterprise",
    "Operating System",
    "Automation",
    "AI Agents",
    "Company Factory",
  ],

  authors: [
    {
      name: "BLACK&",
    },
  ],

  creator: "BLACK&",

  publisher: "BLACK&",

  metadataBase: new URL("https://systeminc.ai"),

  openGraph: {
    title: "SYSTEM INC AI",
    description:
      "The AI Company Operating System",
    type: "website",
    siteName: "SYSTEM INC AI",
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
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

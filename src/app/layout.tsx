import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janitorial Leads Co | Marketing for Commercial Cleaning Companies",
  description: "Stop competing on price. Start winning contracts. We help commercial cleaning companies generate qualified leads, build authority, and grow predictably.",
  keywords: "commercial cleaning marketing, janitorial company leads, cleaning business growth, BSC marketing agency",
  openGraph: {
    title: "Janitorial Leads Co | Marketing for Commercial Cleaning Companies",
    description: "Stop competing on price. Start winning contracts. Marketing exclusively for commercial cleaning companies.",
    type: "website",
    locale: "en_US",
    siteName: "Janitorial Leads Co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janitorial Leads Co",
    description: "Marketing exclusively for commercial cleaning companies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

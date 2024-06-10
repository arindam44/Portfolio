import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Arindam Roy",
  description: "Arindam Roy Developer Portfolio",
  robots: "index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";

import "@/styles/globals.scss";
// import Navbar from "@/components/ui/Navbar/Navbar";

import { Poppins, Inter, DM_Sans } from "next/font/google";
import Navbar from "@/components/ui/Navbar";

// Load fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const dm_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Workspace job application",
  description: "Frontend job application for Workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${dm_Sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

//styles and fonts
import "@/styles/globals.scss";
import { Poppins, Inter, DM_Sans } from "next/font/google";

//components
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

// Load fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
const dm_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Workspace job application route pages",
  description: "Route pages for Workspace job application",
};

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${dm_Sans.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

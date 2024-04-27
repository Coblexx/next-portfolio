// next
import type { Metadata } from "next";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

// css
import "./globals.css";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "New portfolio created using NextJS",
};

// components
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

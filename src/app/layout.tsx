// next
import type { Metadata } from "next";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Radosław Głogowski",
    default: "My portfolio - Radosław Głogowski",
  },
  description: "My portfolio created using NextJS",
};

// css
import "./globals.css";

// components
import NavBar from "@/ui/nav/NavBar";
import Footer from "@/ui/Footer";

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

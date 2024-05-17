import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FooterBlock from "@/package/FooterBlock/FooterBlock";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "OTT App",
//   description: "OTT application",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`}>
        <Header />
        {children}
        <FooterBlock />
      </body>
    </html>
  );
}

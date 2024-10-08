import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import MobileFooter from "./components/mobile/MobileFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
    <body className="pb-[110px]">
      <Header/>
      {children}
      <MobileFooter/>

    </body>
  </html>
  );
}

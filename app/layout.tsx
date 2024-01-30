import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Find, Book, or rent a Car : Quickly and easily!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="realtive">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

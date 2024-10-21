import type { Metadata } from "next";
//import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const container = {
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "1rem",
};

export const metadata: Metadata = {
  title: "stadtgesundheit",
  description: "stadtgesundheit project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <div style={container}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

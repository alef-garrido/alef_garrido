import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alef • Lemat",
  description: "Business Automation & Full time traveling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid place-items-center p-8 bg-slate-200`}>
        
          {children}
        
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oscar • Lemat",
  description: "Business Automation & Full time traveling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[440px] grid place-items-center bg-square`}>
        
          {children}
        
      </body>
    </html>
  );
}

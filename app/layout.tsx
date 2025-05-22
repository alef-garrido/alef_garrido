import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QuizProvider } from "./_context/QuizContext";

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
    <html lang="en" className="dark">
      <body className={`${inter.className} min-w-[440px] grid place-items-center bg-square`}>
        <QuizProvider>
          {children}
        </QuizProvider>
      </body>
    </html>
  );
}

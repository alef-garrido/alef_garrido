import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QuizProvider } from "./_context/QuizContext";
import { LoadingProvider } from "./_context/LoadingContext";
import { LoadingState } from "./components/ui/loading-state";
import { LoadingOverlay } from "./components/ui/loading-overlay";

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
      <body className={`${inter.className} bg-square flex flex-col min-h-screen`}>
        <LoadingProvider>
          <QuizProvider>
            <LoadingState />
            <LoadingOverlay />
       
            <main className="flex-1 grid place-items-center w-full transition-opacity duration-300">
             <div className="max-w-[1080px] h-dvh">
              {children}
             </div>
            </main>
            
          </QuizProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}

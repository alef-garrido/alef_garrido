"use client";
import { useLoading } from "@/app/_context/LoadingContext";
import Image from "next/image";

export function LoadingOverlay() {
  const { showLoading } = useLoading();

  return showLoading ? (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#ffffff", // solid dark color
        transition: "opacity 0.4s",
        opacity: 1,
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <Image 
          src="/MD_Logo_861x163.png" 
          width={861}
          height={163}
          alt="MD Logo" 
          className="w-32 h-auto object-contain mb-4"
        />
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes buzz {
          0%, 97.5% { transform: scale(1) rotate(0deg); }
          98% { transform: scale(1.05) rotate(-8deg); }
          98.2% { transform: scale(0.95) rotate(8deg); }
          98.4% { transform: scale(1.04) rotate(-4deg); }
          98.6% { transform: scale(0.98) rotate(4deg); }
          98.8% { transform: scale(1.02) rotate(-2deg); }
          99% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .spinner-buzz {
          animation: spin 1s linear infinite, buzz 8s linear infinite;
        }
      `}</style>
    </div>
  ) : null;
}

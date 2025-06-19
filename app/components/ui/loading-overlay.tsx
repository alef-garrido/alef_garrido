"use client";
import { useLoading } from "@/app/_context/LoadingContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export function LoadingOverlay() {
  const { showLoading } = useLoading();
  const [visible, setVisible] = useState(showLoading);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showLoading) {
      setVisible(true);
    } else {
      timeout = setTimeout(() => setVisible(false), 600); // match transition duration
    }
    return () => clearTimeout(timeout);
  }, [showLoading]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: 'url("/bg-texture-header.svg") center center / cover no-repeat',
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)", // softer transition
        opacity: showLoading ? 1 : 0,
        pointerEvents: showLoading ? "auto" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)", // subtle blur for softness
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <div className="flex flex-col items-center gap-4 transition-all duration-500 ease-in-out">
        <Image
          src="/a_lemat_logo.png"
          width={861}
          height={163}
          alt="MD Logo"
          className="w-32 h-auto object-contain mb-4 drop-shadow-lg transition-all duration-500 ease-in-out"
        />
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded-full transition-all duration-500 ease-in-out"></div>
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
  );
}

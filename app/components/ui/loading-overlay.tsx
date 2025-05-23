"use client";
import { useLoading } from "@/app/_context/LoadingContext";

export function LoadingOverlay() {
  const { showLoading } = useLoading();

  return showLoading ? (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#18181b", // solid dark color
        transition: "opacity 0.4s",
        opacity: 1,
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="spinner-buzz" style={{
        width: 64,
        height: 64,
        border: "6px solid rgba(255,255,255,0.2)",
        borderTop: "6px solid #fff",
        borderRadius: "50%",
      }} />
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

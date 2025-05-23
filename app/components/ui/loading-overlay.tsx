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
      <div style={{
        width: 64,
        height: 64,
        border: "6px solid rgba(255,255,255,0.2)",
        borderTop: "6px solid #fff",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  ) : null;
}

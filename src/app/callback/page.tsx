"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CallbackContent() {
  const params = useSearchParams();
  const code = params.get("code");
  const error = params.get("error");

  return (
    <div style={{ fontFamily: "monospace", background: "#0c0a09", color: "#fafaf9", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div style={{ maxWidth: 600, textAlign: "center" }}>
        {error ? (
          <>
            <h1 style={{ color: "#ef4444" }}>Error</h1>
            <p>{error}</p>
          </>
        ) : code ? (
          <>
            <h1 style={{ color: "#22c55e", marginBottom: 20 }}>Auth code received</h1>
            <p style={{ marginBottom: 20, color: "#a8a29e" }}>Copy this code and paste it in your terminal:</p>
            <div style={{ background: "#1c1917", padding: 20, borderRadius: 12, border: "1px solid #292524", wordBreak: "break-all", fontSize: 14, color: "#f59e0b" }}>
              {code}
            </div>
          </>
        ) : (
          <p>No code received.</p>
        )}
      </div>
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense fallback={<div style={{ background: "#0c0a09", minHeight: "100vh" }} />}>
      <CallbackContent />
    </Suspense>
  );
}

import { ImageResponse } from "next/og";

export const alt = "AzexAI Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b1218",
          color: "#f4f7fb",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 10, color: "#c9a45a" }}>
          ΛZEXΛI SYSTEMS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 62, lineHeight: 1.05, maxWidth: 920, fontWeight: 600 }}>
            A platform for verifiable analytical results.
          </div>
          <div style={{ fontSize: 20, color: "#2b7fd4", letterSpacing: 3 }}>
            UNCERTAINTY → EVIDENCE → STRUCTURE → RESULT → UNDERSTANDING
          </div>
        </div>
      </div>
    ),
    size,
  );
}

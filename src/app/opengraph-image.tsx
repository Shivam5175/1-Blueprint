import { ImageResponse } from "next/og";

// Edge runtime avoids @vercel/og's Node-runtime font path resolution, which
// throws "Invalid URL" when the project path contains a space (e.g. "New folder").
export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "1% Blueprint — Compound Your Way to Greatness";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#070709",
          padding: "80px",
          color: "#f5f5f5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "44px",
          }}
        >
          <div
            style={{
              width: "92px",
              height: "92px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #f0d45e, #b8941e)",
              color: "#1a1305",
              fontSize: "50px",
              fontWeight: 800,
              marginRight: "28px",
            }}
          >
            1
          </div>
          <div style={{ fontSize: "34px", color: "#d4af37", fontWeight: 600 }}>
            1% Blueprint
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "78px", fontWeight: 800, lineHeight: 1.05 }}>
          Compound Your Way
        </div>
        <div style={{ display: "flex", fontSize: "78px", fontWeight: 800, lineHeight: 1.05, color: "#d4af37" }}>
          to Greatness
        </div>
        <div style={{ display: "flex", fontSize: "30px", color: "#b4b4be", marginTop: "32px" }}>
          The principles of wealth, mindset & growth — visualized.
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

// Edge runtime avoids @vercel/og's Node-runtime font path resolution, which
// throws "Invalid URL" when the project path contains a space (e.g. "New folder").
export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f0d45e, #b8941e)",
          color: "#1a1305",
          fontSize: 120,
          fontWeight: 800,
          borderRadius: 40,
        }}
      >
        1
      </div>
    ),
    { ...size }
  );
}

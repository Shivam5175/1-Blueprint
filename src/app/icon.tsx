import { ImageResponse } from "next/og";

// Edge runtime avoids @vercel/og's Node-runtime font path resolution, which
// throws "Invalid URL" when the project path contains a space (e.g. "New folder").
export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 22,
          fontWeight: 800,
          borderRadius: "50%",
        }}
      >
        1
      </div>
    ),
    { ...size }
  );
}

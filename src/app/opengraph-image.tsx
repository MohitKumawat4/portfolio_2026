import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amit Saini — Full Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #4E85BF, #89AACC)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            AS
          </div>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              margin: "0",
              textAlign: "center",
            }}
          >
            Amit Saini
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#89AACC",
              margin: "0",
              textAlign: "center",
            }}
          >
            Full Stack Developer & AI Engineer
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#666666",
              margin: "0",
              textAlign: "center",
            }}
          >
            Next.js | React | Node.js | Python | AI/ML
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#555555",
              margin: "16px 0 0 0",
              textAlign: "center",
            }}
          >
            sainiamit.com
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}

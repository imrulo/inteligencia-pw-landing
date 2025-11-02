import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  const domainName = process.env.NEXT_PUBLIC_DOMAIN_NAME || "Inteligencia.pw";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #1e293b 0%, #d4af37 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div style={{ fontSize: 96, fontWeight: "bold" }}>{domainName}</div>
          <div style={{ fontSize: 48, opacity: 0.9 }}>
            Premium Intelligence Domain
          </div>
          <div style={{ fontSize: 36, opacity: 0.8, marginTop: 20 }}>
            Available for Acquisition
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}


import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Generator Repair Services Gauteng"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 60,
        background: "linear-gradient(to bottom, #0066cc, #0052a3)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: 20 }}>Generator Repair Services</div>
        <div style={{ fontSize: 40, opacity: 0.9, marginBottom: 30 }}>Professional Repairs Across Gauteng</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 35,
            background: "rgba(255,255,255,0.2)",
            padding: "20px 40px",
            borderRadius: 15,
          }}
        >
          <div>📞 069 382 4908</div>
          <div>|</div>
          <div>🕐 24/7 Emergency Service</div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}

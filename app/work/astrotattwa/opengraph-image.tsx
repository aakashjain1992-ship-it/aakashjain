import { ImageResponse } from "next/og";

export const alt = "Astrotattwa — Case Study — Aakash Jain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#06080f",
          backgroundImage:
            "radial-gradient(circle at 780px 90px, rgba(255,61,242,0.14), transparent 55%), radial-gradient(circle at 120px 560px, rgba(0,229,255,0.10), transparent 55%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(0,229,255,0.16) 2px, transparent 2px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#ff3df2",
            fontSize: 22,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#ff3df2",
            }}
          />
          solo-built · production
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 600,
            color: "#e9edf6",
            lineHeight: 1.1,
          }}
        >
          Astrotattwa
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "#98a1b3",
            maxWidth: 900,
          }}
        >
          Vedic astrology platform, solo-built — live in ~1 month, shipped
          continuously for 5.5 months.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 26,
            color: "#00e5ff",
            gap: "28px",
          }}
        >
          <span>761 commits, solo</span>
          <span style={{ color: "#4a5265" }}>·</span>
          <span>6,400+ monthly visitors</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

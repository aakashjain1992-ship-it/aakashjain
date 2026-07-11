import { ImageResponse } from "next/og";

export const alt = "Netarch 2.0 SQL Console — Case Study — Aakash Jain";
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
            "radial-gradient(circle at 780px 90px, rgba(0,229,255,0.16), transparent 55%), radial-gradient(circle at 120px 560px, rgba(255,61,242,0.10), transparent 55%)",
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
            color: "#00e5ff",
            fontSize: 22,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#00e5ff",
            }}
          />
          at Akamai · internal tool
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 600,
            color: "#e9edf6",
            lineHeight: 1.15,
          }}
        >
          Netarch 2.0 SQL Console
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
          Prototype → user feedback → Claude Code integration.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 34,
            color: "#b6ff2e",
            fontWeight: 600,
          }}
        >
          1 quarter planned → shipped in 1 mo
        </div>
      </div>
    ),
    { ...size }
  );
}

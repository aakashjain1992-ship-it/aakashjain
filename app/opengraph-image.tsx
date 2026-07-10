import { ImageResponse } from "next/og";

export const alt = "Aakash Jain — Senior Technical Product Manager";
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
        {/* dot grid */}
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
            color: "#b6ff2e",
            fontSize: 22,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#b6ff2e",
            }}
          />
          available — open to senior PM roles
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 68,
            fontWeight: 600,
            color: "#e9edf6",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          <span style={{ marginRight: 18 }}>Product management,</span>
          <span style={{ color: "#00e5ff", marginRight: 18 }}>built</span>
          <span>the way I build things.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#98a1b3",
            maxWidth: 820,
          }}
        >
          Aakash Jain — Senior Technical Product Manager
        </div>
      </div>
    ),
    { ...size }
  );
}

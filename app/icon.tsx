import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06080f",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 12L8 4L13 12"
            stroke="#00e5ff"
            strokeWidth="1.4"
            strokeOpacity="0.7"
          />
          <circle cx="8" cy="4" r="2" fill="#00e5ff" />
          <circle cx="3" cy="12" r="2" fill="#ff3df2" />
          <circle cx="13" cy="12" r="2" fill="#00e5ff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

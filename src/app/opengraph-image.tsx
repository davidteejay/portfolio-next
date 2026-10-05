import { ImageResponse } from "next/og";

export const alt =
  "Chibuokem Onyekwelu — Senior / Lead React Native Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          background: "#f7f7f7",
          color: "#171717",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #e4e7e4",
            borderRadius: 28,
            padding: "52px 58px",
            background: "#ffffff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: 999,
                background: "#39715f",
              }}
            />
            <span
              style={{
                color: "#39715f",
                fontSize: 21,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Senior / Lead Mobile Engineer
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontSize: 64,
                fontWeight: 700,
                letterSpacing: -3,
                lineHeight: 1.05,
              }}
            >
              Chibuokem Onyekwelu
            </span>
            <span style={{ color: "#555e59", fontSize: 30 }}>
              Building and leading React Native products for iOS and Android.
            </span>
          </div>
          <span style={{ color: "#39715f", fontSize: 22, fontWeight: 600 }}>
            chibuokem.dev
          </span>
        </div>
      </div>
    ),
    size,
  );
}

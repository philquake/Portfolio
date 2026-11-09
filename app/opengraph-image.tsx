import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0c0e",
          color: "#ecebe7",
        }}
      >
        <div style={{ fontSize: 28, color: "#4fd1b5" }}>{site.title}</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 34, color: "#9a9da4", marginTop: 24 }}>Building practical software. Creating digital solutions.</div>
      </div>
    ),
    size,
  );
}

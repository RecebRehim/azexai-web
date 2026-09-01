import { ImageResponse } from "next/og";

const mark = (
  <svg width="32" height="32" viewBox="13 11 94 98" fill="none">
    <path
      d="M60 14 L104 40 L104 80 L60 106 L16 80 L16 40 Z"
      stroke="#2b7fd4"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path d="M16 40 L60 66 L104 40" stroke="#2b7fd4" strokeWidth="5" />
    <path d="M60 66 L60 106" stroke="#2b7fd4" strokeWidth="5" />
    <path
      d="M60 38 L82 51 L82 72 L60 85 L38 72 L38 51 Z"
      stroke="#e4c57a"
      strokeWidth="4.2"
      strokeLinejoin="round"
    />
    <path d="M38 51 L60 64 L82 51" stroke="#e4c57a" strokeWidth="4.2" />
    <path d="M60 64 L60 85" stroke="#e4c57a" strokeWidth="4.2" />
  </svg>
);

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
          background: "transparent",
        }}
      >
        {mark}
      </div>
    ),
    size,
  );
}

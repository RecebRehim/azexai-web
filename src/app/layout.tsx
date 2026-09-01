import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Machine Painting Co Ltd",
  description:
    "Professional spray painting, wall finishing, waterproofing, and decorating for homes, businesses, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
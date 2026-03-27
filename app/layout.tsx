import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AHMAD DAKIK | Official Portfolio",
  description:
    "Ahmad Dakik — Lebanese actor based in Beirut. Portfolio, showreel, credits, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Manrope:wght@200..800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background selection:bg-primary/30">{children}</body>
    </html>
  );
}

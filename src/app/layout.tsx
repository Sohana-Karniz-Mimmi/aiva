import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIVA",
  description: "Explore the intersection of creativity and technology. Turning ideas into innovative digital experiences.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}

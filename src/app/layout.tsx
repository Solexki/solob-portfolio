import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6147a7",
};

export const metadata: Metadata = {
  title: "Solomon Portfolio",
  description: "Solomon's portfolio showcasing projects and skills.",
  keywords: "portfolio, web development, projects, skills",
  authors: [{ name: "Solomon" }],
  icons: {
    icon: "/fav/favicon.ico",
    apple: "/fav/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

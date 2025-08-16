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
  title: "Solomon Obafemi | Full-Stack Developer",
  description:
    "Solomon Obafemi's portfolio showcasing projects, skills, and experience in building dynamic and scalable web applications with React, React Native, Node.js, Firebase, etc.",
  keywords: [
    "Full stack developer",
    "React",
    "Node.js",
    "Firebase",
    "Portfolio",
    "Solomon Obafemi",
  ],
  authors: [{ name: "Solomon Obafemi", url: "https://solob.dev" }],
  openGraph: {
    title: "Solomon Obafemi | Full-Stack Developer",
    description:
      "Explore Solomon's portfolio: scalable web apps, innovative projects, and modern tech stacks.",
    url: "https://solob.dev",
    siteName: "Solomon Portfolio",
    images: [
      {
        url: "https://solob.dev/preview.png", // (1200x630px)
        width: 1200,
        height: 630,
        alt: "Solomon Obafemi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solomon Obafemi | Full-Stack Developer",
    description:
      "Building dynamic and scalable applications with React, React Native, Node.js, Firebase, etc.",
    creator: "@solexki",
    images: ["https://solob.dev/preview.png"],
  },
  icons: {
    icon: "/fav/favicon.ico",
    apple: "/fav/apple-touch-icon.png",
  },
  metadataBase: new URL("https://solob.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Solomon Obafemi",
              url: "https://solob.dev",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/solexki",
                "https://www.linkedin.com/in/solexki/",
                "https://twitter.com/solexki",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

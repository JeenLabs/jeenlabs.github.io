import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const page_font = Jost({ subsets: ["latin"], variable: "--font-sans", weight: "400"});

export const metadata: Metadata = {
  title: "JeenLabs",
  description: "JeenLabs is your indispensable partner because we specialize in our Products of digital empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={page_font.className}>{children}</body>
    </html>
  );
}

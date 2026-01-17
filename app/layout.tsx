import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Hubert Kuc | AR/VR Software Engineer @ Apple",
  description: "AR/VR Software Engineer at Apple, building the future of spatial computing. Expertise in Swift, visionOS, and immersive technologies.",
  keywords: ["AR", "VR", "Apple", "Vision Pro", "Swift", "visionOS", "software engineer", "spatial computing"],
  authors: [{ name: "Hubert Kuc" }],
  openGraph: {
    title: "Hubert Kuc | AR/VR Software Engineer @ Apple",
    description: "AR/VR Software Engineer at Apple, building the future of spatial computing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-terminal-bg text-terminal-text`}>
        {children}
      </body>
    </html>
  );
}

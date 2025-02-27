import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forefront Industrial Solutions",
  description: "Excellence in Innovation. Reliability in Solutions",
};

const polySans = localFont({
  src: [
    {
      path: "/fonts/PolySans-Neutral.ed4fa8b2.woff2",
      weight: "400 ",
      style: "normal",
    },
    {
      path: "/fonts/PolySans-Slim.79c29571.woff",
      weight: "300 ",
      style: "normal",
    },
  ],
  variable: "--font-poly", // Custom CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${polySans.variable} relative`}>{children}</body>
    </html>
  );
}

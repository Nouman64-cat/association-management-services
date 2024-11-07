import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BaseNavbar from "./components/navbar/BaseNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AMS | Association Management Services",
  description: "Expert Administration and Consulting Services for Community Groups and Membership-Based Organizations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BaseNavbar />
        {children}
      </body>
    </html>
  );
}

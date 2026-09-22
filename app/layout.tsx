import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora Labs | Software House",
  description: "Nexora Labs builds websites, mobile applications, and digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="site-header">
          <Link className="site-logo" href="/" aria-label="Nexora Labs home">
            NEXORA<span>LABS</span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/about">About</Link>
            <Link href="/about/contact">Contact</Link>
            <Link className="site-nav__location" href="/location">
              <span>Location</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

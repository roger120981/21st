import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from 'jotai';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} p-4 h-full`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

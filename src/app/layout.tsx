import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ผู้ชาย ขายน้ำ💦",
  icons:"/favicon.ico"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Head><link rel="icon"href="/favicon.ico" sizes="any"></link></Head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}

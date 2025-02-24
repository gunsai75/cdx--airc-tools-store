import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import Navigation from '@/components/layout/navigation-menu';


 const inter = Inter({ subsets: ['latin'] })
 

export const metadata: Metadata = {
  title: "AIRC Tools Store",
  description: "Use all the latest tools you need in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}

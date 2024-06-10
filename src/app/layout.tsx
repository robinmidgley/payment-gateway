import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/utils/tw";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payment Gateway",
  description: "A modern payment gateway landing page.",
  authors: [{ name: "Robin", url: "https://robin.ac" }],
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>{children}</body>
    </html>
  );
}

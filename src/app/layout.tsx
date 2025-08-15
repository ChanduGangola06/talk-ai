import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "TalkAI",
  description: "AI Powered Interview Taker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <html lang="en">
        <body
          className={`${inter.className} antialiased`}
        >
          <Toaster />
          {children}
        </body>
      </html>
    </NuqsAdapter>
  );
}

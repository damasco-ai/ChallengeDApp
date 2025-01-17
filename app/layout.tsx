import { Orbitron, Prompt } from "next/font/google";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import MatrixEffect from "@/components/shared/matrix-background";
import { Toaster } from "@/components/ui/sonner";

import { GoogleTagManager } from "@next/third-parties/google";

import Providers from "./providers";

import "./globals.css";

const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
});

const orbitronFont = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_TAG} />
      <body
        className={`${promptFont.variable} ${orbitronFont.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-J5GJX38Q24"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>
          <div className="min-h-screen flex flex-col w-full items-stretch overflow-hidden relative">
            <MatrixEffect />
            <Header />
            <main className="flex flex-col items-stretch flex-1 bg-background overflow-hidden">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

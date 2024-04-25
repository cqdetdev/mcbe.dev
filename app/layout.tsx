import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mcbe.dev",
  description: "Powerful, user-drive discussions on Minecraft: Bedrock Edition",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

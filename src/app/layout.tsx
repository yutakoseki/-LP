import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BtoB特化型LPテンプレート | コンバージョン率向上をサポート",
  description: "売れるロジックを取り入れたBtoB特化型ランディングページテンプレート。制作時間を短縮し、コンバージョン率を向上させます。",
  keywords: "ランディングページ, BtoB, テンプレート, コンバージョン率, マーケティング",
  authors: [{ name: "BtoB COMPANY" }],
  robots: "index, follow",
  openGraph: {
    title: "BtoB特化型LPテンプレート | コンバージョン率向上をサポート",
    description: "売れるロジックを取り入れたBtoB特化型ランディングページテンプレート。制作時間を短縮し、コンバージョン率を向上させます。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "BtoB特化型LPテンプレート | コンバージョン率向上をサポート",
    description: "売れるロジックを取り入れたBtoB特化型ランディングページテンプレート。制作時間を短縮し、コンバージョン率を向上させます。",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
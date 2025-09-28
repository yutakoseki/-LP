import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sideline - プロフェッショナル向けマッチングプラットフォーム",
  description:
    "高品質なプロフェッショナル同士を繋ぐ特化型マッチングサービス。専門性を活かしたビジネスパートナーシップを構築し、新たなビジネス機会を創出します。",
  keywords:
    "プロフェッショナル, マッチング, ビジネスパートナー, 専門性, ネットワーキング, BtoB",
  authors: [{ name: "Sideline Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Sideline - プロフェッショナル向けマッチングプラットフォーム",
    description:
      "高品質なプロフェッショナル同士を繋ぐ特化型マッチングサービス。専門性を活かしたビジネスパートナーシップを構築し、新たなビジネス機会を創出します。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sideline - プロフェッショナル向けマッチングプラットフォーム",
    description:
      "高品質なプロフェッショナル同士を繋ぐ特化型マッチングサービス。専門性を活かしたビジネスパートナーシップを構築し、新たなビジネス機会を創出します。",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

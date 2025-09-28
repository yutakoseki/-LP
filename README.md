# マッチングアプリ特化型ランディングページテンプレート

需要と供給を差し替えながら複数のLPを作成できるマッチングアプリ特化型のランディングページテンプレートです。Next.js + TypeScript + TailwindCSSで構築されており、Notion/スプレッドシート連携のウェイティングリスト機能を搭載しています。

## 特徴

- 🚀 **Next.js App Router** - 最新の Next.js App Router を使用
- 💎 **TypeScript** - 型安全性を確保
- 🎨 **TailwindCSS** - モダンなスタイリング
- 📱 **レスポンシブ対応** - スマートフォンからデスクトップまで対応
- 🔄 **需要・供給の切り替え** - 環境変数やURLパラメータで簡単に切り替え可能
- 📧 **ウェイティングリスト機能** - Notion/スプレッドシート/メール連携
- 🎯 **マッチングアプリ特化** - 恋愛・ビジネスマッチングに最適化されたコンテンツ
- ⚡ **Vercel 最適化** - Vercel でのデプロイに最適化

## セットアップ

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

### 3. 本番ビルド

```bash
pnpm build
pnpm start
```

## コンテンツのカスタマイズ

### 基本設定

`src/data/content.ts` ファイルを編集して、ランディングページの内容を変更できます。

```typescript
export const defaultContent: LandingPageContent = {
  hero: {
    title: "あなたのメインタイトル",
    description: "あなたの説明文",
    // ...
  },
  // ...
};
```

### 画像の差し替え

1. `public/images/` フォルダに画像を配置
2. `src/data/content.ts` で画像パスを更新

### 色のカスタマイズ

`tailwind.config.ts` でカラーパレットを変更できます。

## デプロイ

### Vercel でのデプロイ

1. GitHub リポジトリにプッシュ
2. [Vercel](https://vercel.com)でプロジェクトをインポート
3. 自動デプロイが開始されます

### 環境変数の設定

本番環境では以下の環境変数を設定してください：

- `EMAIL_SERVICE_API_KEY` - メール送信用の API キー
- `EMAIL_FROM` - 送信者メールアドレス
- `EMAIL_TO` - 受信者メールアドレス

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API ルート
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/            # Reactコンポーネント
│   ├── sections/          # セクションコンポーネント
│   └── ui/                # UIコンポーネント
├── data/                  # データ・設定ファイル
├── types/                 # TypeScript型定義
└── utils/                 # ユーティリティ関数
```

## セクション構成

1. **ヒーローセクション** - メインタイトルと CTA
2. **問題提起** - 顧客の課題を提示
3. **解決策** - サービスの特長を説明
4. **導入事例** - 成功事例の紹介
5. **利用の流れ** - ステップバイステップの説明
6. **FAQ** - よくある質問
7. **フッター** - 会社情報と CTA

## カスタマイズ例

### 新しいセクションの追加

1. `src/types/content.ts` に型定義を追加
2. `src/data/content.ts` にデータを追加
3. `src/components/sections/` にコンポーネントを作成
4. `src/app/page.tsx` にセクションを追加

### ウェイティングリスト機能の拡張

`src/app/api/waiting-list/route.ts` を編集して、メール送信サービスやデータベースとの連携を追加できます。

## ライセンス

MIT License

## サポート

ご質問やサポートが必要な場合は、お気軽にお問い合わせください。

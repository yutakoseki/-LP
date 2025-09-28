import { MatchingAppContent } from "@/types/matching-app";

export const demandContent: MatchingAppContent = {
  targetAudience: "demand",
  hero: {
    title: "理想の人との出会いを見つけよう",
    subtitle: "マッチングプラットフォーム",
    description:
      "あなたに最適な人との出会いをサポート。シンプルで効果的なマッチングシステムで、真剣な出会いを提供します。",
    ctaText: "今すぐ登録する",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8M3x8Y291cGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: "人と人との出会いのイメージ",
    stats: [
      { label: "登録者数", value: "50,000+" },
      { label: "マッチング成功率", value: "85%" },
      { label: "月間マッチング数", value: "2,500+" },
    ],
  },
  problem: {
    title: "こんな悩みありませんか？",
    description:
      "私たちのマッチングプラットフォームで、これらの問題を解決できます。",
    problems: [
      {
        title: "理想の人との出会いがない",
        description: "出会いの場が限られていて、理想の人と出会う機会が少ない。",
        icon: "heart",
      },
      {
        title: "時間をかけて探すのが大変",
        description:
          "忙しい毎日の中で、真剣な出会いを探す時間を確保するのが難しい。",
        icon: "clock",
      },
      {
        title: "信頼できる相手かわからない",
        description: "相手の本気度や信頼性がわからず、安心して出会えない。",
        icon: "shield",
      },
    ],
  },
  feature: {
    title: "私たちのマッチングプラットフォームの特徴",
    description:
      "シンプルで効果的なマッチングシステムで、あなたに最適な人との出会いを提供します。",
    features: [
      {
        title: "シンプルなマッチングシステム",
        description:
          "複雑な設定は不要。プロフィールを見て、気になる人にマッチングを送るだけのシンプルな仕組みです。",
        icon: "target",
        benefits: ["直感的な操作", "迷わない設計", "すぐに始められる"],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8c2ltcGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "シンプルなマッチングシステムのイメージ",
      },
      {
        title: "安心・安全な環境",
        description:
          "本人確認済みの会員のみが利用でき、プライバシーを徹底保護します。",
        icon: "shield",
        benefits: ["本人確認必須", "プライバシー保護", "24時間サポート"],
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8c2VjdXJpdHl8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "セキュリティとプライバシー保護のイメージ",
      },
      {
        title: "真剣な出会いをサポート",
        description:
          "真剣な出会いを求める方々が集まる、質の高いコミュニティです。",
        icon: "star",
        benefits: ["真剣度チェック", "質の高い会員", "安心して出会える"],
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8M3x8Y291cGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "真剣な出会いのイメージ",
      },
    ],
  },
  cases: {
    title: "成功事例",
    description:
      "私たちのマッチングプラットフォームで素晴らしい出会いを見つけた方々の声をご紹介します。",
    cases: [
      {
        company: "田中さん（30代・会社員）",
        title: "3ヶ月で理想の人と出会えました",
        description:
          "忙しい仕事の中で出会いを探していましたが、シンプルなマッチングシステムのおかげで、価値観の合う理想の人と出会うことができました。",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8M3x8Y291cGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "素晴らしい出会い",
        category: "30代",
      },
      {
        company: "佐藤さん（20代・学生）",
        title: "同じ趣味を持つ相手と出会えました",
        description:
          "趣味が合う相手を探していましたが、プロフィールを見て同じ趣味を持つ素敵な人と出会えました。",
        image:
          "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NXx8Y291cGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "継続的な関係",
        category: "20代",
      },
      {
        company: "山田さん（40代・自営業）",
        title: "真剣な出会いを求めて正解でした",
        description:
          "真剣な出会いを求めていましたが、このプラットフォームで同じ気持ちの相手と出会い、現在も良い関係を続けています。",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8Y291cGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "継続的な関係",
        category: "40代",
      },
    ],
  },
  flow: {
    title: "利用の流れ",
    description: "簡単4ステップで理想の人との出会いをスタートできます。",
    steps: [
      {
        step: 1,
        title: "無料登録",
        description:
          "メールアドレスと基本情報を入力して、無料でアカウントを作成します。",
        icon: "user-plus",
      },
      {
        step: 2,
        title: "プロフィール作成",
        description: "あなたの趣味、価値観、理想の人像などを詳しく入力します。",
        icon: "users",
      },
      {
        step: 3,
        title: "マッチング",
        description: "気になる人のプロフィールを見て、マッチングを送ります。",
        icon: "heart",
      },
      {
        step: 4,
        title: "メッセージ交換",
        description:
          "マッチングした相手とメッセージを交換し、お互いを知り合います。",
        icon: "message",
      },
    ],
  },
  faq: {
    title: "よくある質問",
    description:
      "マッチングプラットフォームに関するよくある質問と回答をご紹介します。",
    faqs: [
      {
        question: "利用料金はかかりますか？",
        answer:
          "基本機能は無料でご利用いただけます。プレミアム機能をご利用の場合は月額980円の料金が発生します。",
      },
      {
        question: "個人情報は安全ですか？",
        answer:
          "はい、お客様の個人情報は暗号化され、厳重に管理されています。第三者に提供することはありません。",
      },
      {
        question: "年齢制限はありますか？",
        answer:
          "18歳以上の方にご利用いただけます。年齢確認のため、身分証明書の提出をお願いしています。",
      },
      {
        question: "マッチングはどのように行われますか？",
        answer:
          "シンプルな仕組みです。気になる人のプロフィールを見て、マッチングを送るだけです。相手が承認すればマッチング成立です。",
      },
      {
        question: "退会はいつでもできますか？",
        answer:
          "はい、いつでも退会可能です。退会手続きはアプリ内の設定画面から簡単に行えます。",
      },
    ],
  },
  footer: {
    companyName: "株式会社マッチングテック",
    address: "〒150-0001東京都渋谷区神宮前1-1-1",
    phone: "03-1234-5678",
    email: "support@matching-tech.com",
    copyright: "©︎2024 マッチングテック All Rights Reserved.",
  },
};

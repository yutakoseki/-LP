import { MatchingAppContent } from "@/types/matching-app";

export const supplyContent: MatchingAppContent = {
  targetAudience: "supply",
  hero: {
    title: "あなたのサービスを必要としている人と出会いませんか？",
    subtitle: "サービス提供者向け",
    description:
      "あなたのサービスや商品を必要としている人々と出会い、新しいビジネスチャンスを創出しましょう。",
    ctaText: "今すぐ登録する",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: "サービス提供者のイメージ",
    stats: [
      { label: "登録者数", value: "5,000+" },
      { label: "マッチング成功率", value: "90%" },
      { label: "月間取引額", value: "2億円+" },
    ],
  },
  problem: {
    title: "こんな課題ありませんか？",
    description:
      "私たちのマッチングプラットフォームで、これらの課題を解決できます。",
    problems: [
      {
        title: "理想のクライアントが見つからない",
        description:
          "あなたのサービスを必要としている人を探すのに時間がかかり、なかなか理想のクライアントと出会えない。",
        icon: "handshake",
      },
      {
        title: "信頼できる相手かわからない",
        description:
          "相手の実績や信頼性がわからず、安心してビジネスを始められない。",
        icon: "shield",
      },
      {
        title: "マッチングの効率が悪い",
        description:
          "従来の方法では時間がかかりすぎて、効率的にクライアントを見つけられない。",
        icon: "clock",
      },
    ],
  },
  feature: {
    title: "私たちのマッチングプラットフォームの特徴",
    description:
      "シンプルで効果的なマッチングシステムで、あなたに最適なクライアントを見つけます。",
    features: [
      {
        title: "シンプルなマッチングシステム",
        description:
          "複雑な設定は不要。プロフィールを見て、気になるクライアントにマッチングを送るだけのシンプルな仕組みです。",
        icon: "target",
        benefits: ["直感的な操作", "迷わない設計", "すぐに始められる"],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8c2ltcGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "シンプルなマッチングシステムのイメージ",
      },
      {
        title: "信頼性の高い会員",
        description:
          "認証済みの会員のみが利用でき、実績と信頼性を確認できます。",
        icon: "shield",
        benefits: ["認証必須", "実績データ公開", "レビューシステム"],
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8c2VjdXJpdHl8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "セキュリティと信頼性のイメージ",
      },
      {
        title: "ビジネス特化の機能",
        description:
          "サービス提供者に特化した機能で、効率的にクライアントを見つけられます。",
        icon: "trending-up",
        benefits: ["業界別マッチング", "プロジェクト管理", "契約サポート"],
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        imageAlt: "ビジネス機能のイメージ",
      },
    ],
  },
  cases: {
    title: "成功事例",
    description:
      "私たちのプラットフォームで成功したビジネスパートナーシップをご紹介します。",
    cases: [
      {
        company: "株式会社テックソリューション",
        title: "新規事業のパートナーを見つけました",
        description:
          "AIマッチングシステムのおかげで、私たちの新規事業に最適なパートナー企業と出会うことができました。",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "年間売上2億円達成",
        category: "IT企業",
      },
      {
        company: "株式会社マーケティングプロ",
        title: "海外展開のパートナーと提携",
        description:
          "海外展開を考えていましたが、適切なパートナー企業と出会い、成功裏に海外市場に参入できました。",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "海外売上50%増加",
        category: "マーケティング企業",
      },
      {
        company: "株式会社イノベーション",
        title: "技術提携で新商品開発",
        description:
          "技術力の高いパートナー企業と出会い、革新的な新商品の開発に成功しました。",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "新商品売上1億円突破",
        category: "製造業",
      },
    ],
  },
  flow: {
    title: "利用の流れ",
    description: "簡単4ステップでクライアントとの出会いをスタートできます。",
    steps: [
      {
        step: 1,
        title: "無料登録",
        description: "企業情報と基本情報を入力して、アカウントを作成します。",
        icon: "user-plus",
      },
      {
        step: 2,
        title: "サービスプロフィール作成",
        description:
          "あなたのサービス内容、業界、提供可能な内容などを詳しく入力します。",
        icon: "users",
      },
      {
        step: 3,
        title: "マッチング",
        description:
          "気になるクライアントのプロフィールを見て、マッチングを送ります。",
        icon: "heart",
      },
      {
        step: 4,
        title: "メッセージ交換",
        description:
          "マッチングしたクライアントとメッセージを交換し、具体的なサービス提供を検討します。",
        icon: "message",
      },
    ],
  },
  faq: {
    title: "よくある質問",
    description:
      "サービス提供者向けマッチングプラットフォームに関するよくある質問と回答をご紹介します。",
    faqs: [
      {
        question: "利用料金はかかりますか？",
        answer:
          "基本機能は無料でご利用いただけます。プレミアム機能をご利用の場合は月額5,000円の料金が発生します。",
      },
      {
        question: "企業情報は安全ですか？",
        answer:
          "はい、お客様の企業情報は暗号化され、厳重に管理されています。競合他社に漏れることはありません。",
      },
      {
        question: "どのような業界の方が登録していますか？",
        answer:
          "IT、製造業、サービス業、小売業など、様々な業界の方が登録しています。業界別の検索も可能です。",
      },
      {
        question: "マッチングはどのように行われますか？",
        answer:
          "シンプルな仕組みです。気になるクライアントのプロフィールを見て、マッチングを送るだけです。相手が承認すればマッチング成立です。",
      },
      {
        question: "契約サポートはありますか？",
        answer:
          "はい、サービス提供契約のサポートを行っています。法務チームが契約書の作成をサポートします。",
      },
    ],
  },
  footer: {
    companyName: "株式会社ビジネスマッチング",
    address: "〒150-0001東京都渋谷区神宮前1-1-1",
    phone: "03-1234-5678",
    email: "business@matching-tech.com",
    copyright: "©︎2024 ビジネスマッチング All Rights Reserved.",
  },
};

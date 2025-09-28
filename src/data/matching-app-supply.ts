import { MatchingAppContent } from "@/types/matching-app";

export const supplyContent: MatchingAppContent = {
  targetAudience: "supply",
  hero: {
    title: "あなたのサービスを必要としている人と出会いませんか？",
    subtitle: "サービス提供者向け",
    description:
      "あなたのサービスや商品を必要としている人々と出会い、新しいビジネスチャンスを創出しましょう。",
    ctaText: "ウェイティングリストに登録する",
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
      "私たちのプラットフォームで理想のクライアントを見つけたサービス提供者の声をご紹介します。",
    cases: [
      {
        company: "田中デザイン事務所",
        title: "継続的なクライアントとの関係を築けました",
        description:
          "Webデザイナーとして独立したばかりでしたが、このプラットフォームで信頼できるクライアントと出会うことができました。継続的な案件をいただき、安定した収入を得られるようになりました。",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "月収100万円達成",
        category: "Webデザイン",
      },
      {
        company: "プログラミングスクール",
        title: "多くの生徒さんとの出会いで事業拡大",
        description:
          "プログラミング講師として活動していましたが、このプラットフォームで多くの学習者と出会い、オンラインスクールを立ち上げることができました。現在は50名以上の生徒さんに指導しています。",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8M3x8Y291cGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "生徒数50名突破",
        category: "教育・指導",
      },
      {
        company: "経営コンサルタント事務所",
        title: "大手企業との契約で事業が飛躍",
        description:
          "中小企業向けのコンサルティングを行っていましたが、このプラットフォームで大手企業の経営者と出会い、大きなプロジェクトを任せていただけるようになりました。",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8Y29uc3VsdGluZ3xlbnwwfHx8fHwxNjgwNTczNTE5&ixlib=rb-4.0.3&q=80&w=1080",
        result: "年商5000万円達成",
        category: "経営コンサル",
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
        icon: "star",
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

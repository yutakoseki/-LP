import { MatchingAppContent } from "@/types/matching-app";

export const demandContent: MatchingAppContent = {
  targetAudience: "demand",
  hero: {
    title: "理想のパートナーとの出会いを見つけよう",
    subtitle: "マッチングプラットフォーム",
    description:
      "あなたに最適なパートナーとの出会いをサポート。シンプルで効果的なマッチングシステムで、真剣な出会いを提供します。",
    ctaText: "ウェイティングリストに登録する",
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
        title: "理想のパートナーが見つからない",
        description:
          "出会いの場が限られていて、理想のパートナーと出会う機会が少ない。",
        icon: "handshake",
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
      "シンプルで効果的なマッチングシステムで、あなたに最適なパートナーとの出会いを提供します。",
    features: [
      {
        title: "シンプルなマッチングシステム",
        description:
          "複雑な設定は不要。プロフィールを見て、気になるパートナーにマッチングを送るだけのシンプルな仕組みです。",
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
        title: "真剣なパートナーシップをサポート",
        description:
          "真剣なパートナーシップを求める方々が集まる、質の高いコミュニティです。",
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
      "私たちのマッチングプラットフォームで理想のサービス提供者を見つけた依頼者の声をご紹介します。",
    cases: [
      {
        company: "田中さん（30代・会社員）",
        title: "3ヶ月で理想のデザイナーと出会えました",
        description:
          "Webサイトのリニューアルを依頼したかったのですが、信頼できるデザイナーを探すのに苦労していました。このプラットフォームで、私たちの要望を理解してくれる素晴らしいデザイナーと出会うことができました。",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "満足のいくWebサイト完成",
        category: "Web制作",
      },
      {
        company: "佐藤さん（20代・学生）",
        title: "プログラミング学習のメンターを見つけました",
        description:
          "プログラミングを独学で学んでいましたが、行き詰まってしまいました。このプラットフォームで経験豊富なメンターを見つけ、効率的にスキルアップすることができました。",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8M3x8Y291cGxlfGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "プログラミングスキル習得",
        category: "教育・学習",
      },
      {
        company: "山田さん（40代・自営業）",
        title: "経営コンサルタントとの出会いで事業が拡大",
        description:
          "事業の成長に悩んでいましたが、このプラットフォームで優秀な経営コンサルタントと出会い、戦略的なアドバイスを受けることができました。その結果、売上を大幅に伸ばすことができました。",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8Y29uc3VsdGluZ3xlbnwwfHx8fHwxNjgwNTczNTE5&ixlib=rb-4.0.3&q=80&w=1080",
        result: "売上200%増加",
        category: "経営コンサル",
      },
    ],
  },
  flow: {
    title: "利用の流れ",
    description:
      "簡単4ステップで理想のパートナーとの出会いをスタートできます。",
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
        description:
          "あなたの趣味、価値観、理想のパートナー像などを詳しく入力します。",
        icon: "star",
      },
      {
        step: 3,
        title: "マッチング",
        description:
          "気になるパートナーのプロフィールを見て、マッチングを送ります。",
        icon: "heart",
      },
      {
        step: 4,
        title: "メッセージ交換",
        description:
          "マッチングしたパートナーとメッセージを交換し、お互いを知り合います。",
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
          "シンプルな仕組みです。気になるパートナーのプロフィールを見て、マッチングを送るだけです。相手が承認すればマッチング成立です。",
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

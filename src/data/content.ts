import { LandingPageContent } from '@/types/content';

export const defaultContent: LandingPageContent = {
  hero: {
    title: "LP制作の効率化・最適化でCVR向上をサポートするBtoB特化型テンプレート",
    subtitle: "Elevate your business",
    description: "売れるロジックを取り入れた構成で、制作時間を短縮し、コンバージョン率を向上させます。",
    ctaText: "まずは資料請求（無料）",
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fHx8MTY4MDU3MzUxOQ&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: "ビジネスイメージ画像"
  },
  problem: {
    title: "こんな問題抱えてませんか？",
    description: "このような問題をテンプレートを使用すれば解決できます！",
    problems: [
      {
        title: "LPの最適化がわからない",
        description: "コンバージョンしてもらうためにはどうすればいいか分からない。",
        icon: "❓"
      },
      {
        title: "LP公開まで時間がかかる",
        description: "すぐにLPを制作してPDCAをまわしたいが、制作期間に時間が掛かりすぎてしまう。",
        icon: "⏰"
      },
      {
        title: "デザイナーがいない",
        description: "サクッとLPを制作し、公開後の検証・結果を行いたいが自社にデザイナーがいないので困っている。",
        icon: "🎨"
      }
    ]
  },
  feature: {
    title: "テンプレート3つの特長",
    description: "BtoB特化型のランディングページテンプレートで、効率的な制作と高いコンバージョン率を実現します。",
    features: [
      {
        title: "売れるロジックを取り入れた構成",
        description: "このテンプレートは「成功ポイントが詰まったワイヤーフレーム」を元に設計してます。BtoBのランディングページは、顧客の興味を引き、コンバージョン率を高めるために、効果的な情報の伝達が必要です。",
        icon: "🎯"
      },
      {
        title: "制作時間を短縮できる",
        description: "BtoBのランディングページ制作には、短期間での高品質な制作が求められることがあります。LPテンプレートを活用することで、制作期間を短縮することができます。",
        icon: "⚡"
      },
      {
        title: "見やすくシンプルなデザイン",
        description: "BtoBのランディングページ制作には、短期間での高品質な制作が求められることがあります。LPテンプレートを活用することで、見やすくシンプルで高品質なデザインで制作できます。",
        icon: "✨"
      }
    ]
  },
  cases: {
    title: "導入事例",
    description: "多くの企業様にご利用いただいている実績をご紹介します。",
    cases: [
      {
        company: "株式会社ABC",
        title: "ランディングページ導入によるコンバージョン率50%の向上",
        description: "弊社のBtoB向け商品ページにランディングページを導入したところ、コンバージョン率が50%向上しました。ランディングページのデザインには、導線の整理やコンバージョンにつながるコピーの追加など、売れるロジックを取り入れています。",
        image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mzl8fGJ1c2luZXNzfGVufDB8fHx8MTY4MDc1MDY1Mw&ixlib=rb-4.0.3&q=80&w=1080",
        result: "コンバージョン率50%向上"
      },
      {
        company: "株式会社DEF",
        title: "ランディングページ導入による問い合わせ数の増加",
        description: "ランディングページを導入する前は、問い合わせ数が少なく、営業にとっても苦労していました。ランディングページの導入により、問い合わせ数が増加し、営業の負担を軽減することができました。",
        image: "https://images.unsplash.com/photo-1590650486895-79681b6f26a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MTIyfHxjb21wYW55fGVufDB8fHx8MTY4MjQwNTYxNQ&ixlib=rb-4.0.3&q=80&w=1080",
        result: "問い合わせ数大幅増加"
      },
      {
        company: "株式会社GHI",
        title: "ランディングページ導入による制作期間の短縮",
        description: "ランディングページを制作する際、私たちはデザインのテンプレートを活用しました。その結果、制作期間を大幅に短縮することができ、顧客の要望に迅速に対応することができました。",
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8OTl8fGJ1c2luZXNzfGVufDB8fHx8MTY4MjMzODYyMA&ixlib=rb-4.0.3&q=80&w=1080",
        result: "制作期間50%短縮"
      }
    ]
  },
  flow: {
    title: "ご利用の流れ",
    description: "簡単5ステップでランディングページを制作・公開できます。",
    steps: [
      {
        step: 1,
        title: "お問い合わせ",
        description: "メールフォームまたはお電話にて受けつけております。お気軽にお問い合わせください。お問い合わせいただいた内容については、担当者より２営業日以内に返信します。",
        icon: "📞"
      },
      {
        step: 2,
        title: "ヒアリング",
        description: "ご希望のランディングページの目的や、想定するターゲット層、予算、制作期間など、お客様のご要望をお伺いします。弊社では、お客様のご要望に合わせた最適なランディングページをご提案いたします。",
        icon: "💬"
      },
      {
        step: 3,
        title: "ご提案",
        description: "ヒアリングで得た情報をもとに、お客様に最適なランディングページの提案をいたします。また、制作費用を抑えられるテンプレートを活用することで、低価格で高品質なランディングページをご提供できます。",
        icon: "📋"
      },
      {
        step: 4,
        title: "ご契約",
        description: "ご提案内容に納得いただけましたら、ご契約いただきます。契約内容には、制作期間や料金、納品物の内容などが明記されます。また、ご契約いただく前に、契約書についての説明をさせていただきますので、ご安心ください。",
        icon: "📝"
      },
      {
        step: 5,
        title: "サービス提供",
        description: "ご契約後、弊社にてランディングページの制作を開始いたします。デザインやコピーの制作を進めつつ、お客様からいただいたフィードバックにも迅速に対応いたします。制作完了後は、動作確認や納品前の最終確認を行い、お客様にご納品いたします。",
        icon: "🚀"
      }
    ]
  },
  faq: {
    title: "よくあるご質問",
    description: "お客様からよくいただく質問と回答をご紹介します。",
    faqs: [
      {
        question: "どのようなプランがありますか？",
        answer: "初心者向けの基本プランから、上級者向けのカスタマイズプランまで、様々なプランをご用意しています。お客様のニーズに合わせ、ご提案させていただきます。"
      },
      {
        question: "制作期間はどのくらいですか？",
        answer: "お客様のご希望によって異なりますが、通常は1週間から2週間程度の制作期間を予定しています。詳細はお問い合わせください。"
      },
      {
        question: "カスタマイズは可能ですか？",
        answer: "はい、可能です。お客様のニーズに合わせて、カスタマイズしたプランをご提案いたします。"
      },
      {
        question: "サポートはありますか？",
        answer: "制作後も、問題や不具合があればいつでもご相談いただけます。また、初心者の方には、使い方や運用方法についてもご説明いたします。"
      },
      {
        question: "支払い方法は何がありますか？",
        answer: "クレジットカードや銀行振り込みに対応しています。詳細については、お問い合わせください。"
      }
    ]
  },
  footer: {
    companyName: "株式会社BtoB COMPANY",
    address: "〒000-0000東京都港区芝公園４丁目２−８ 東京タワー",
    phone: "000-000-0000",
    email: "info@btob-company.com",
    copyright: "©︎BtoB COMPANY All Rights Reserved."
  }
};

import { TargetAudience } from '@/types/matching-app';

export interface LPConfig {
  targetAudience: TargetAudience;
  siteName: string;
  domain: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl?: string;
  faviconUrl?: string;
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  waitingListConfig: {
    title: string;
    description: string;
    buttonText: string;
    successMessage: string;
    integrationType: 'notion' | 'spreadsheet' | 'email';
    notionDatabaseId?: string;
    notionToken?: string;
    spreadsheetId?: string;
    googleServiceAccountEmail?: string;
    googlePrivateKey?: string;
    emailTo?: string;
  };
}

export const defaultConfig: LPConfig = {
  targetAudience: 'demand',
  siteName: 'マッチングアプリ',
  domain: 'matching-app.com',
  primaryColor: '#3b82f6',
  secondaryColor: '#64748b',
  waitingListConfig: {
    title: '今すぐ登録する',
    description: '理想のパートナーとの出会いを始めましょう',
    buttonText: '無料で登録する',
    successMessage: '登録が完了しました！まもなくご連絡いたします。',
    integrationType: 'email',
    emailTo: 'admin@matching-app.com'
  }
};

export const demandConfig: LPConfig = {
  ...defaultConfig,
  targetAudience: 'demand',
  siteName: '恋愛マッチングアプリ',
  domain: 'love-matching.com',
  waitingListConfig: {
    ...defaultConfig.waitingListConfig,
    title: '今すぐ登録する',
    description: '理想のパートナーとの出会いを始めましょう',
    buttonText: '無料で登録する',
    successMessage: '登録が完了しました！まもなくご連絡いたします。'
  }
};

export const supplyConfig: LPConfig = {
  ...defaultConfig,
  targetAudience: 'supply',
  siteName: 'ビジネスマッチング',
  domain: 'business-matching.com',
  waitingListConfig: {
    ...defaultConfig.waitingListConfig,
    title: 'ビジネスパートナーを探す',
    description: '理想のビジネスパートナーとの出会いを始めましょう',
    buttonText: '無料で登録する',
    successMessage: '登録が完了しました！まもなくご連絡いたします。'
  }
};

// 環境変数から設定を読み込む関数
export function getConfigFromEnv(): LPConfig {
  const targetAudience = (process.env.NEXT_PUBLIC_TARGET_AUDIENCE as TargetAudience) || 'demand';
  
  if (targetAudience === 'supply') {
    return {
      ...supplyConfig,
      waitingListConfig: {
        ...supplyConfig.waitingListConfig,
        integrationType: (process.env.NEXT_PUBLIC_INTEGRATION_TYPE as 'notion' | 'spreadsheet' | 'email') || 'email',
        notionDatabaseId: process.env.NOTION_DATABASE_ID,
        notionToken: process.env.NOTION_TOKEN,
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        googleServiceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY,
        emailTo: process.env.EMAIL_TO || supplyConfig.waitingListConfig.emailTo
      }
    };
  }
  
  return {
    ...demandConfig,
    waitingListConfig: {
      ...demandConfig.waitingListConfig,
      integrationType: (process.env.NEXT_PUBLIC_INTEGRATION_TYPE as 'notion' | 'spreadsheet' | 'email') || 'email',
      notionDatabaseId: process.env.NOTION_DATABASE_ID,
      notionToken: process.env.NOTION_TOKEN,
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      googleServiceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY,
      emailTo: process.env.EMAIL_TO || demandConfig.waitingListConfig.emailTo
    }
  };
}

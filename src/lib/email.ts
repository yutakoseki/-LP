interface EmailData {
  lastName: string;
  firstName: string;
  gender: string;
  birthDate: string;
  company?: string;
  email: string;
  phone?: string;
  targetAudience: "demand" | "supply";
}

export class EmailClient {
  private to: string;

  constructor(to: string) {
    this.to = to;
  }

  async sendEmail(data: EmailData): Promise<void> {
    // 日本時間を取得
    const now = new Date();
    const japanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000); // UTC+9
    const japanTimeString = japanTime
      .toISOString()
      .replace("T", " ")
      .slice(0, 19);

    // 性別を日本語に変換
    const genderMap: { [key: string]: string } = {
      male: "男性",
      female: "女性",
      other: "その他",
    };

    // 生年月日を日本語形式に変換
    const formatBirthDate = (dateString: string) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}年${month}月${day}日`;
    };

    // 実際の実装では、SendGrid、Mailgun、AWS SES等を使用
    // ここではコンソールログとして出力
    console.log("Email would be sent to:", this.to);
    console.log("Email data:", {
      to: this.to,
      subject: `新しいウェイティングリスト登録 - ${
        data.targetAudience === "demand" ? "需要" : "供給"
      }`,
      body: `
新しいウェイティングリスト登録がありました。

姓: ${data.lastName}
名: ${data.firstName}
性別: ${genderMap[data.gender] || data.gender}
生年月日: ${formatBirthDate(data.birthDate)}
${data.company ? `会社名: ${data.company}` : ""}
メールアドレス: ${data.email}
${data.phone ? `電話番号: ${data.phone}` : ""}
対象オーディエンス: ${data.targetAudience === "demand" ? "需要" : "供給"}
登録日時: ${japanTimeString} (JST)
      `.trim(),
    });

    // 実際のメール送信実装例（SendGrid使用の場合）
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: this.to,
      from: process.env.FROM_EMAIL,
      subject: `新しいウェイティングリスト登録 - ${data.targetAudience === 'demand' ? '需要' : '供給'}`,
      text: `
新しいウェイティングリスト登録がありました。

姓: ${data.lastName}
名: ${data.firstName}
性別: ${genderMap[data.gender] || data.gender}
生年月日: ${formatBirthDate(data.birthDate)}
${data.company ? `会社名: ${data.company}` : ''}
メールアドレス: ${data.email}
${data.phone ? `電話番号: ${data.phone}` : ''}
対象オーディエンス: ${data.targetAudience === 'demand' ? '需要' : '供給'}
登録日時: ${japanTimeString} (JST)
      `.trim(),
    };
    
    await sgMail.send(msg);
    */
  }
}

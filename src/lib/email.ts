interface EmailData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  targetAudience: 'demand' | 'supply';
}

export class EmailClient {
  private to: string;

  constructor(to: string) {
    this.to = to;
  }

  async sendEmail(data: EmailData): Promise<void> {
    // 実際の実装では、SendGrid、Mailgun、AWS SES等を使用
    // ここではコンソールログとして出力
    console.log('Email would be sent to:', this.to);
    console.log('Email data:', {
      to: this.to,
      subject: `新しいウェイティングリスト登録 - ${data.targetAudience === 'demand' ? '需要' : '供給'}`,
      body: `
新しいウェイティングリスト登録がありました。

名前: ${data.name}
${data.company ? `会社名: ${data.company}` : ''}
メールアドレス: ${data.email}
${data.phone ? `電話番号: ${data.phone}` : ''}
対象: ${data.targetAudience === 'demand' ? '需要' : '供給'}
登録日時: ${new Date().toISOString()}
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

名前: ${data.name}
${data.company ? `会社名: ${data.company}` : ''}
メールアドレス: ${data.email}
${data.phone ? `電話番号: ${data.phone}` : ''}
対象: ${data.targetAudience === 'demand' ? '需要' : '供給'}
登録日時: ${new Date().toISOString()}
      `.trim(),
    };
    
    await sgMail.send(msg);
    */
  }
}

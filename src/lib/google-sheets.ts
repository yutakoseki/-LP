import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export class GoogleSheetsClient {
  private doc: GoogleSpreadsheet;
  private jwt: JWT;

  constructor(
    spreadsheetId: string,
    serviceAccountEmail: string,
    privateKey: string
  ) {
    this.jwt = new JWT({
      email: serviceAccountEmail,
      key: privateKey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.doc = new GoogleSpreadsheet(spreadsheetId, this.jwt);
  }

  async addRow(data: {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    targetAudience: 'demand' | 'supply';
  }): Promise<void> {
    try {
      await this.doc.loadInfo();
      
      // シート名を取得（最初のシートを使用）
      const sheet = this.doc.sheetsByIndex[0];
      
      // ヘッダー行を追加（初回のみ）
      if (sheet.rowCount === 0) {
        await sheet.addRow({
          '名前': 'Name',
          '会社名': 'Company',
          'メールアドレス': 'Email',
          '電話番号': 'Phone',
          '対象': 'Target Audience',
          'ステータス': 'Status',
          '登録日時': 'Created At',
        });
      }

      // データ行を追加
      await sheet.addRow({
        '名前': data.name,
        '会社名': data.company || '',
        'メールアドレス': data.email,
        '電話番号': data.phone || '',
        '対象': data.targetAudience === 'demand' ? '需要' : '供給',
        'ステータス': '新規登録',
        '登録日時': new Date().toISOString(),
      });
    } catch (error) {
      console.error('Google Sheets error:', error);
      throw new Error('Failed to add row to Google Sheets');
    }
  }
}

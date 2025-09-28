import { NotionClient } from './notion';
import { GoogleSheetsClient } from './google-sheets';
import { EmailClient } from './email';
import { getConfigFromEnv } from '@/config/lp-config';

interface WaitingListData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  targetAudience: 'demand' | 'supply';
}

export class WaitingListService {
  private config = getConfigFromEnv();

  async addToWaitingList(data: WaitingListData): Promise<void> {
    const { integrationType } = this.config.waitingListConfig;

    try {
      switch (integrationType) {
        case 'notion':
          await this.addToNotion(data);
          break;
        case 'spreadsheet':
          await this.addToGoogleSheets(data);
          break;
        case 'email':
        default:
          await this.addToEmail(data);
          break;
      }

      // ローカルストレージにも保存（バックアップ用）
      this.saveToLocalStorage(data);
    } catch (error) {
      console.error('Waiting list service error:', error);
      throw new Error('Failed to add to waiting list');
    }
  }

  private async addToNotion(data: WaitingListData): Promise<void> {
    const { notionToken, notionDatabaseId } = this.config.waitingListConfig;
    
    if (!notionToken || !notionDatabaseId) {
      throw new Error('Notion configuration is missing');
    }

    const notionClient = new NotionClient(notionToken, notionDatabaseId);
    await notionClient.createPage(data);
  }

  private async addToGoogleSheets(data: WaitingListData): Promise<void> {
    const { 
      spreadsheetId, 
      googleServiceAccountEmail, 
      googlePrivateKey 
    } = this.config.waitingListConfig;
    
    if (!spreadsheetId || !googleServiceAccountEmail || !googlePrivateKey) {
      throw new Error('Google Sheets configuration is missing');
    }

    const sheetsClient = new GoogleSheetsClient(
      spreadsheetId,
      googleServiceAccountEmail,
      googlePrivateKey
    );
    await sheetsClient.addRow(data);
  }

  private async addToEmail(data: WaitingListData): Promise<void> {
    const { emailTo } = this.config.waitingListConfig;
    
    if (!emailTo) {
      throw new Error('Email configuration is missing');
    }

    const emailClient = new EmailClient(emailTo);
    await emailClient.sendEmail(data);
  }

  private saveToLocalStorage(data: WaitingListData): void {
    if (typeof window === 'undefined') return;

    try {
      const existingData = JSON.parse(localStorage.getItem('waitingList') || '[]');
      const newEntry = {
        ...data,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      };
      
      localStorage.setItem('waitingList', JSON.stringify([...existingData, newEntry]));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }

  async getWaitingListData(): Promise<WaitingListData[]> {
    if (typeof window === 'undefined') return [];

    try {
      const data = localStorage.getItem('waitingList');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to get waiting list data:', error);
      return [];
    }
  }
}

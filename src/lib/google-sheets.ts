import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

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
      key: privateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    this.doc = new GoogleSpreadsheet(spreadsheetId, this.jwt);
  }

  async addRow(data: {
    lastName: string;
    firstName: string;
    gender: string;
    birthDate: string;
    company?: string;
    email: string;
    phone?: string;
    targetAudience: "demand" | "supply";
  }): Promise<void> {
    try {
      await this.doc.loadInfo();

      // シート名を取得（最初のシートを使用）
      const sheet = this.doc.sheetsByIndex[0];

      // ヘッダー行を追加（初回のみ）
      if (sheet.rowCount === 0) {
        await sheet.addRow({
          姓: "Last Name",
          名: "First Name",
          性別: "Gender",
          生年月日: "Birth Date",
          会社名: "Company",
          メールアドレス: "Email",
          電話番号: "Phone",
          対象オーディエンス: "Target Audience",
          ステータス: "Status",
          登録日時: "Created At",
        });
      }

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

      // データ行を追加
      await sheet.addRow({
        姓: data.lastName,
        名: data.firstName,
        性別: genderMap[data.gender] || data.gender,
        生年月日: formatBirthDate(data.birthDate),
        会社名: data.company || "",
        メールアドレス: data.email,
        電話番号: data.phone || "",
        対象オーディエンス: data.targetAudience === "demand" ? "需要" : "供給",
        ステータス: "新規登録",
        登録日時: japanTimeString,
      });
    } catch (error) {
      console.error("Google Sheets error:", error);
      throw new Error("Failed to add row to Google Sheets");
    }
  }
}

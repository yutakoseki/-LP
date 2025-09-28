import { NextRequest, NextResponse } from "next/server";
import { WaitingListService } from "@/lib/waiting-list-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      lastName,
      firstName,
      gender,
      birthDate,
      company,
      email,
      phone,
      targetAudience,
    } = body;

    // バリデーション
    if (!lastName || !firstName || !gender || !birthDate || !email) {
      return NextResponse.json(
        { error: "必須フィールドが不足しています" },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    // 対象オーディエンスのバリデーション
    if (targetAudience && !["demand", "supply"].includes(targetAudience)) {
      return NextResponse.json(
        { error: "無効な対象オーディエンスです" },
        { status: 400 }
      );
    }

    // ウェイティングリストサービスを使用してデータを保存
    const waitingListService = new WaitingListService();
    await waitingListService.addToWaitingList({
      lastName,
      firstName,
      gender,
      birthDate,
      company,
      email,
      phone,
      targetAudience: targetAudience || "demand",
    });

    // 成功レスポンス
    return NextResponse.json(
      { message: "登録が完了しました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing waiting list submission:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}

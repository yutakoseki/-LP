interface NotionProperties {
  LastName: {
    rich_text: Array<{
      text: {
        content: string;
      };
    }>;
  };
  FirstName: {
    rich_text: Array<{
      text: {
        content: string;
      };
    }>;
  };
  Gender: {
    select: {
      name: string;
    };
  };
  BirthDate: {
    date: {
      start: string;
    };
  };
  Company?: {
    rich_text: Array<{
      text: {
        content: string;
      };
    }>;
  };
  Email: {
    email: string;
  };
  Phone?: {
    phone_number: string;
  };
  TargetAudience: {
    select: {
      name: string;
    };
  };
  Status: {
    select: {
      name: string;
    };
  };
  CreatedAt: {
    created_time: string;
  };
}

interface NotionPage {
  properties: NotionProperties;
}

export class NotionClient {
  private token: string;
  private databaseId: string;

  constructor(token: string, databaseId: string) {
    this.token = token;
    this.databaseId = databaseId;
  }

  async createPage(data: {
    lastName: string;
    firstName: string;
    gender: string;
    birthDate: string;
    company?: string;
    email: string;
    phone?: string;
    targetAudience: "demand" | "supply";
  }): Promise<NotionPage> {
    // 日本時間を取得
    const now = new Date();
    const japanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000); // UTC+9

    // 性別を日本語に変換
    const genderMap: { [key: string]: string } = {
      male: "男性",
      female: "女性",
      other: "その他",
    };

    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: {
          database_id: this.databaseId,
        },
        properties: {
          LastName: {
            rich_text: [
              {
                text: {
                  content: data.lastName,
                },
              },
            ],
          },
          FirstName: {
            rich_text: [
              {
                text: {
                  content: data.firstName,
                },
              },
            ],
          },
          Gender: {
            select: {
              name: genderMap[data.gender] || data.gender,
            },
          },
          BirthDate: {
            date: {
              start: data.birthDate,
            },
          },
          ...(data.company && {
            Company: {
              rich_text: [
                {
                  text: {
                    content: data.company,
                  },
                },
              ],
            },
          }),
          Email: {
            email: data.email,
          },
          ...(data.phone && {
            Phone: {
              phone_number: data.phone,
            },
          }),
          TargetAudience: {
            select: {
              name: data.targetAudience === "demand" ? "需要" : "供給",
            },
          },
          Status: {
            select: {
              name: "新規登録",
            },
          },
          CreatedAt: {
            created_time: japanTime.toISOString(),
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Notion API error: ${response.status} ${error}`);
    }

    return response.json();
  }
}

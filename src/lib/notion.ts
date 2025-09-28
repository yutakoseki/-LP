interface NotionProperties {
  Name: {
    title: Array<{
      text: {
        content: string;
      };
    }>;
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
    name: string;
    company?: string;
    email: string;
    phone?: string;
    targetAudience: 'demand' | 'supply';
  }): Promise<NotionPage> {
    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: {
          database_id: this.databaseId,
        },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: data.name,
                },
              },
            ],
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
              name: data.targetAudience === 'demand' ? '需要' : '供給',
            },
          },
          Status: {
            select: {
              name: '新規登録',
            },
          },
          CreatedAt: {
            created_time: new Date().toISOString(),
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

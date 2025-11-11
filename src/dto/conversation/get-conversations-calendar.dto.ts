// GET /api/conversations

// ----------------------------------------------------Request
export interface GetConversationsCalendarQueryParam {
    year: number;
    month: number;
    childProfileId?: number; // 생략 시 부모의 모든 자녀 조회
}

// ----------------------------------------------------Response

export interface ConversationsCalendarChildCount {
    childProfileId: number;
    childName: string;
    childAvatarMediaId: string | null;
    count: number;
}

export interface ConversationsCalendarDaySummary {
    date: string;
    count: number;
    children: ConversationsCalendarChildCount[];
}

export interface GetConversationsCalendarResponseData {
    year: number;
    month: number;
    totalCount: number;
    days: ConversationsCalendarDaySummary[];
}

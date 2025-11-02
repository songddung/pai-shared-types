// POST /api/conversation/record

// ----------------------------------------------------Request
export interface RecordConversationRequestDto {
    conversationSessionId: string | null;
    questionText: string;
    imageMediaId: string | null;
    keyword: string | null;
    answerText: string;
}

// ----------------------------------------------------Response
export interface RecordConversationResponseData {
    conversationSessionId: string;
    questionOrder: number;
    firstMediaId?: string;
}
// POST api/conversation/:conversationSessionId/end

// ----------------------------------------------------Request
export interface EndConversationPathParam {
    conversationSessionId: string;
}

// ----------------------------------------------------Response
export interface EndConversationResponseData {
    conversationId?: string;
}
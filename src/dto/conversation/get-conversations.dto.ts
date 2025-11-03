
// GET /api/conversations

// ----------------------------------------------------Request
export interface GetConversationsQueryParam {
  childProfileId: number; 
  date?: string; 
  cursor?: string; 
  limit?: number; 
}

// ----------------------------------------------------Response
export interface ConversationGalleryItemDto {
  conversationId: string; 
  startDate: string; 
  title: string | null; 
  firstMediaId: string | null; 
}

export interface GetConversationsResponseData {
  items: ConversationGalleryItemDto[];
  nextCursor: string | null;
  hasNext: boolean;
}

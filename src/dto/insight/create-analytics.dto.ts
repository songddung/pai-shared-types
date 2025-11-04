export interface CreateAnalyticsRequestDto {
  childId: string;
  conversationId: string;
  extractedKeywords: string[];
}

export interface CreateAnalyticsResponseData {
  title: string;
}

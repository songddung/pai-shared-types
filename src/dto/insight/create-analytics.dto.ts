export interface CreateAnalyticsRequestDto {
  profileId: string;
  conversationId: string;
  extractedKeywords: string[];
}

export interface CreateAnalyticsResponseData {
  updatedKeywords: string[];
  createdKeywords: string[];
}

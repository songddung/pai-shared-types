export interface CreateAnalyticsRequestDto {
  profileId: string;
  conversationId: string;
  extractedKeywords: string[];
  categoryScores: { [category: string]: number };
}

export interface CreateAnalyticsResponseData {
  updatedKeywords: string[];
  createdKeywords: string[];
}

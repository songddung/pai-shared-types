export interface CreateAnalyticsRequestDto {
  profileId: string;
  extractedKeywords: string[];
  categoryScores: { [category: string]: number };
  analysisDate: string;
}

export interface CreateAnalyticsResponseData {
  updatedKeywords: string[];
  createdKeywords: string[];
}

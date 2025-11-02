export interface CreateAnalyticsRequestDto {
  profileId: string;
  extracted_keywords: string[];
  category_scores: { [category: string]: number };
  analysis_date: string;
}

export interface CreateAnalyticsResponseData {
  updated_keywords: string[];
  created_keywords: string[];
}

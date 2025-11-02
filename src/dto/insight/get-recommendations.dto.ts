export interface RecommendationItem {
  id: string; // 추천 항목 고유 ID
  title: string; // 제목
  description: string; // 설명
  category: string; // 카테고리 (축제, 전시, 체험 등)
  location?: string; // 위치
  startDate?: string; // 시작일
  endDate?: string; // 종료일
  imageUrl?: string; // 이미지 URL
  link?: string; // 상세 링크
  relevantKeywords: string[]; // 매칭된 관심사 키워드
}

export interface GetRecommendationsResponseData {
  recommendations: RecommendationItem[];
  totalCount: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

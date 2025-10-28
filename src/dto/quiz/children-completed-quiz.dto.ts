/**
 * GET /api/quiz/children/completed
 * - 결과: "본인이 푼" 퀴즈만 반환
 */

// ----------------------------------------------------Request
export interface ChildrenCompletedQueryParam {
  limit?: number; // 페이지 크기(기본 20, 최대 50)
  cursor?: string; // Base64로 인코딩된 "publishDate|quizId" (없으면 첫 페이지)
}

// ----------------------------------------------------Response
export interface ChildrenCompletedItemDto {
  quizId: string;  // BigInt
  publishDate: string; // yyyy-MM-dd (Asia/Seoul 기준)
  question: string;
  answer: string; 
  reward: string | null; // 완료 목록이므로 항상 노출 가능
  authorParentProfileId: number;  // Int
  authorParentName: string;
  authorParentAvatarMediaId: string | null;  // BigInt
}

export interface ChildrenCompletedResponseData {
  items: ChildrenCompletedItemDto[]; // 최신순
  nextCursor: string | null; // 다음 페이지 커서(Base64), 없으면 null
  hasNext: boolean;
}

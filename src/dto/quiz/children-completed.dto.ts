/**
 * GET /api/quiz/children/completed
 * - 정렬: publishDate 내림차순, 같은 날짜는 quizId 내림차순
 * - cursor: Base64("publishDate|quizId")  예: "IjIwMjUtMTAtMDN8MTAxIg=="
 * - 결과: "본인이 푼" 퀴즈만 반환
 */

export interface ChildrenCompletedQueryDto {
  /** 페이지 크기 (기본 20, 최대 50) */
  limit?: number | string;
  /** Base64로 인코딩된 "publishDate|quizId" (없으면 첫 페이지) */
  cursor?: string | null;
}

export interface ChildrenCompletedItemDto {
  quizId: number;
  status: 'COMPLETED';
  /** yyyy-MM-dd (Asia/Seoul 기준) */
  publishDate: string;

  question: string;
  answer: string;
  /** 완료 목록이므로 항상 노출 가능 */
  reward?: string;

  /** 출제자 정보 */
  authorParentProfileId: number;
  authorParentName: string;
  authorParentAvatarMediaId: number | null;
}

export interface ChildrenCompletedResponseData {
  /** 최신일 먼저 */
  items: ChildrenCompletedItemDto[];
  /** 다음 페이지 커서(Base64), 없으면 null */
  nextCursor: string | null;
  hasNext: boolean;
}

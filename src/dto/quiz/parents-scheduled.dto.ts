/**
 * GET /api/quiz/parents/scheduled
 * - 정렬: publishDate 오름차순, 같은 날짜는 quizId 오름차순
 * - cursor: Base64("publishDate|quizId")  예: "IjIwMjUtMTAtMDd8MTIzIg=="
 */

export interface ParentsScheduledQueryDto {
  /** 페이지 크기 (기본 20, 최대 50) */
  limit?: number | string;
  /** Base64로 인코딩된 "publishDate|quizId" */
  cursor?: string | null;
}

export interface ParentsScheduledItemDto {
  quizId: number;
  /** yyyy-MM-dd (예정일) */
  publishDate: string;

  question: string;
  answer: string;
  hint?: string;
  reward?: string;

  authorParentProfileId: number;
  authorParentName: string;
  authorParentAvatarMediaId: number | null;

  /** 작성자 본인 + 예정 상태면 true */
  isEditable: boolean;
}

export interface ParentsScheduledResponseData {
  /** 가까운 날짜 순 */
  items: ParentsScheduledItemDto[];
  /** 다음 페이지 커서(Base64), 없으면 null */
  nextCursor: string | null;
  hasNext: boolean;
}

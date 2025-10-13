/**
 * GET /api/quiz/parents/completed
 * - 정렬: publishDate 내림차순, 같은 날짜는 quizId 내림차순
 * - cursor: Base64("publishDate|quizId")  예: "IjIwMjUtMTAtMDN8MTAxIg=="
 */

export interface ParentsCompletedQueryDto {
  /** 페이지 크기 (기본 20, 최대 50) */
  limit?: number;
  /** Base64로 인코딩된 "publishDate|quizId" */
  cursor?: string;
}

export interface ParentsCompletedChildResultDto {
  childProfileId: number;
  childName: string;
  childAvatarMediaId: number | null;
  isSolved: boolean;
  rewardGranted: boolean;
}

export interface ParentsCompletedItemDto {
  quizId: number;
  status: 'COMPLETED';
  /** yyyy-MM-dd (Asia/Seoul 기준) */
  publishDate: string;

  question: string;
  answer: string;
  reward?: string;

  authorParentProfileId: number;
  authorParentName: string;
  authorParentAvatarMediaId: number | null;

  children: ParentsCompletedChildResultDto[];
}

export interface ParentsCompletedResponseData {
  /** 최신일 먼저 */
  items: ParentsCompletedItemDto[];
  /** 다음 페이지 커서(Base64), 없으면 null */
  nextCursor: string | null;
  hasNext: boolean;
}

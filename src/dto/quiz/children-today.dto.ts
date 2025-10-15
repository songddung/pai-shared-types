/**
 * GET /api/quiz/children/today
 * - cursor: Base64("quizId")
 */

export interface ChildrenTodayQueryDto {
  /** 페이지 크기 (기본 20, 최대 50) */
  limit?: number;
  /** Base64로 인코딩된 마지막 quizId (예: "IjEyMyI=") */
  cursor?: string;
}

export interface ChildrenTodayItemDto {
  quizId: number;
  status: 'TODAY';
  question: string;
  hint?: string;
  // 아이용 TODAY에서는 정답 미노출(정책 변경 시 추가 가능)
  // answer: string;

  reward?: string;

  authorParentProfileId: number;
  authorParentName: string;
  authorParentAvatarMediaId: number | null;

  /** 내가 풀었는지 (재풀이 비활성화 판단용) */
  isSolved: boolean;
}

export interface ChildrenTodayResponseData {
  items: ChildrenTodayItemDto[];
  /** 다음 페이지 커서(Base64), 없으면 null */
  nextCursor: string | null;
  hasNext: boolean;
}

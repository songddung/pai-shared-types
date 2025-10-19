/**
 * GET /api/quiz/parents/today
 * - cursor: Base64("quizId")
 */

export interface ParentsTodayQueryDto {
  /** 페이지 크기 (기본 20, 최대 50) */
  limit?: number;
  /** Base64로 인코딩된 마지막 quizId (예: "IjEyMyI=") */
  cursor?: string;
}

export interface ParentsTodayChildStatusDto {
  childProfileId: number;
  childName: string;
  childAvatarMediaId: number | null;
  isSolved: boolean;
}

export interface ParentsTodayItemDto {
  quizId: number;
  question: string;
  hint?: string;
  answer: string;
  reward?: string;

  authorParentProfileId: number;
  authorParentName: string;
  authorParentAvatarMediaId: number | null;

  children: ParentsTodayChildStatusDto[];
}

export interface ParentsTodayResponseData {
  items: ParentsTodayItemDto[];
  /** 다음 페이지 커서(Base64), 없으면 null */
  nextCursor: string | null;
  hasNext: boolean;
}

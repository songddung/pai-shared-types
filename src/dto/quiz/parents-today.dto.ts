/**
 * GET /api/quiz/parents/today
 * - cursor: Base64("quizId")
 */

export interface ParentsTodayQueryDto {
  limit?: string;
  cursor?: string;
}

export interface ParentsTodayChildStatusDto {
  childProfileId: string;
  childName: string;
  childAvatarMediaId: string | null;
  isSolved: boolean;
}

export interface ParentsTodayItemDto {
  quizId: string;
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  authorParentProfileId: string;
  authorParentName: string;
  authorParentAvatarMediaId: string | null;
  children: ParentsTodayChildStatusDto[];
}

export interface ParentsTodayResponseData {
  items: ParentsTodayItemDto[];
  nextCursor: string | null;
  hasNext: boolean;
}

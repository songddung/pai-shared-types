/**
 * GET /api/quiz/parents/today
 */

// ----------------------------------------------------Request
export interface ParentsTodayQueryParam {
  limit?: number;
  cursor?: string; // Base64("quizId")
}

// ----------------------------------------------------Response
export interface ParentsTodayChildStatusDto {
  childProfileId: number;  // Int
  childName: string;
  childAvatarMediaId: string | null;  // BigInt
  isSolved: boolean;
}

export interface ParentsTodayItemDto {
  quizId: string;  // BigInt
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  authorParentProfileId: number;  // Int
  authorParentName: string;
  authorParentAvatarMediaId: string | null;  // BigInt
  children: ParentsTodayChildStatusDto[];
}

export interface ParentsTodayResponseData {
  items: ParentsTodayItemDto[];
  nextCursor: string | null;
  hasNext: boolean;
}

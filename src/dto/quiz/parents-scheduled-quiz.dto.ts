/**
 * GET /api/quiz/parents/scheduled
 */

// ----------------------------------------------------Request
export interface ParentsScheduledQueryParam {
  limit?: number;
  cursor?: string; // Base64("publishDate|quizId")  예: "IjIwMjUtMTAtMDd8MTIzIg=="
}

// ----------------------------------------------------Response
export interface ParentsScheduledItemDto {
  quizId: string;  // BigInt
  publishDate: string;
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  authorParentProfileId: number;  // Int
  authorParentName: string;
  authorParentAvatarMediaId: string | null;  // BigInt
  isEditable: boolean;
}

export interface ParentsScheduledResponseData {
  items: ParentsScheduledItemDto[];
  nextCursor: string | null;
  hasNext: boolean;
}

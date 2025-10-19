/**
 * GET /api/quiz/parents/scheduled
 * - 정렬: publishDate 오름차순, 같은 날짜는 quizId 오름차순
 * - cursor: Base64("publishDate|quizId")  예: "IjIwMjUtMTAtMDd8MTIzIg=="
 */

export interface ParentsScheduledQueryDto {
  limit?: number;
  cursor?: string;
}

export interface ParentsScheduledItemDto {
  quizId: string;
  publishDate: string;
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  authorParentProfileId: string;
  authorParentName: string;
  authorParentAvatarMediaId: string | null;
  isEditable: boolean;
}

export interface ParentsScheduledResponseData {
  items: ParentsScheduledItemDto[];
  nextCursor: string | null;
  hasNext: boolean;
}

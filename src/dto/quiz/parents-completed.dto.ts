/**
 * GET /api/quiz/parents/completed
 * - 정렬: publishDate 내림차순, 같은 날짜는 quizId 내림차순
 * - cursor: Base64("publishDate|quizId")  예: "IjIwMjUtMTAtMDN8MTAxIg=="
 */

export interface ParentsCompletedQueryDto {
  limit?: number; // 페이지 크기(기본 20, 최대 50)
  cursor?: string; // Base64
}

export interface ParentsCompletedChildResultDto {
  childProfileId: string;
  childName: string;
  childAvatarMediaId: string | null;
  isSolved: boolean;
  rewardGranted: boolean;
}

export interface ParentsCompletedItemDto {
  quizId: string;
  publishDate: string;
  question: string;
  answer: string;
  reward: string | null;
  authorParentProfileId: string;
  authorParentName: string;
  authorParentAvatarMediaId: string | null;
  children: ParentsCompletedChildResultDto[];
}

export interface ParentsCompletedResponseData {
  items: ParentsCompletedItemDto[];
  nextCursor: string | null;
  hasNext: boolean;
}

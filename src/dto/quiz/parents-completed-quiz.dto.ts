/**
 * GET /api/quiz/parents/completed
 */

// ----------------------------------------------------Request
export interface ParentsCompletedQueryParam {
  limit?: number; // 페이지 크기(기본 20, 최대 50)
  cursor?: string; // Base64("publishDate|quizId")  예: "IjIwMjUtMTAtMDN8MTAxIg=="
}

// ----------------------------------------------------Response
export interface ParentsCompletedChildResultDto {
  childProfileId: number;  // Int
  childName: string;
  childAvatarMediaId: string | null;  // BigInt
  isSolved: boolean;
  rewardGranted: boolean;
}

export interface ParentsCompletedItemDto {
  quizId: string;  // BigInt
  publishDate: string;
  question: string;
  answer: string;
  reward: string | null;
  authorParentProfileId: number;  // Int
  authorParentName: string;
  authorParentAvatarMediaId: string | null;  // BigInt
  children: ParentsCompletedChildResultDto[];
}

export interface ParentsCompletedResponseData {
  items: ParentsCompletedItemDto[];
  nextCursor: string | null;
  hasNext: boolean;
}

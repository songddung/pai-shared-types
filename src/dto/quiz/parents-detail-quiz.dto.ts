/**
 * GET /api/quiz/:quizId (부모용 상세 조회)
 * - 예정(SCHEDULED)인 퀴즈만 수정 가능 (isEditable = true)
 * - 본문은 수정 폼을 채우기 위한 최소 필드로 구성.
 */

// ----------------------------------------------------Request
export interface ParentsQuizDetailPathParam {
  quizId: string;  // BigInt
}

// ----------------------------------------------------Request
export interface ParentsQuizDetailResponseData {
  quizId: string;  // BigInt
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  publishDate: string;
  isEditable: boolean;
}

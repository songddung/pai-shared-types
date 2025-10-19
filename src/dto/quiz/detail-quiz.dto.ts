/**
 * GET /api/quiz/:quizId (부모용 상세 조회)
 * - 예정(SCHEDULED)인 퀴즈만 수정 가능. (isEditable = true)
 * - 본문은 수정 폼을 채우기 위한 최소 필드로 구성.
 */

export interface ParentsQuizDetailPathParam {
  quizId: string; // 컨트롤러에서 number로 파싱
}

export interface ParentsQuizDetailResponseData {
  quizId: string;
  question: string;
  answer: string;
  hint: string | null;
  reward: string | null;
  publishDate: string;
  isEditable: boolean;
}

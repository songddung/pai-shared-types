/**
 * GET /api/quiz/:quizId (부모용 상세 조회)
 * - 예정(SCHEDULED)인 퀴즈만 수정 가능. (isEditable = true)
 * - 본문은 수정 폼을 채우기 위한 최소 필드로 구성.
 */

export interface ParentsQuizDetailPathParam {
  /** Path parameter: /api/quiz/:quizId */
  quizId: number | string; // 컨트롤러에서 number로 파싱
}

export interface ParentsQuizDetailResponseData {
  quizId: number;

  /** 수정폼 필드 */
  question: string | null;
  answer: string | null;
  hint?: string | null;
  reward?: string | null;

  /** yyyy-MM-dd (Asia/Seoul 기준 의미의 date-only) */
  publishDate: string;

  /** 현재 시점에 수정 가능 여부 (작성자 AND SCHEDULED) */
  isEditable: boolean;
}

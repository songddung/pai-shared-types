/**
 * PATCH /api/quiz/:quizId Response
 * - 수정된 퀴즈 정보를 반환
 */
export interface UpdateQuizResponseData {
  quizId: number;

  /** 수정된 필드 */
  question: string | null;
  answer: string | null;
  hint?: string | null;
  reward?: string | null;

  /** yyyy-MM-dd (Asia/Seoul 기준 의미의 date-only) */
  publishDate: string;

  /** 수정 가능 여부 (SCHEDULED 상태) */
  isEditable: boolean;
}

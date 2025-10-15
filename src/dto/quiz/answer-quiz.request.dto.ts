/**
 * POST /api/quiz/children/:quizId/answer
 * - 주관식, 힌트는 클라이언트에서만 노출/버튼 처리(서버 저장 X)
 */
export interface AnswerQuizRequestDto {
  /** 주관식 답안 (필수) */
  answer: string;

  /**
   * 간단 정규화 적용 여부(선택)
   * - lowercasing, trim, 기호 제거, Unicode NFKC
   * - 기본값: false
   */
  normalize?: boolean;
}

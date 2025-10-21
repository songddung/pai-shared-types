/**
 * POST /api/quiz/children/:quizId/answer
 * - 주관식, 힌트는 클라이언트에서만 노출/버튼 처리(서버 저장 X)
 */
export interface AnswerQuizPathParam {
  quizId: number;
}

export interface AnswerQuizRequestDto {
  answer: string;
}

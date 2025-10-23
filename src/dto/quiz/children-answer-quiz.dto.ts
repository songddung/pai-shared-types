/**
 * POST /api/quiz/children/:quizId/answer
 */

// ----------------------------------------------------Request
export interface AnswerQuizPathParam {
  quizId: string;  // BigInt
}

export interface AnswerQuizRequestDto {
  answer: string; // 제출한 답
}

// ----------------------------------------------------Response
export interface AnswerQuizResponseData {
  quizId: string; // 제출 대상 퀴즈 ID(BigInt)
  isSolved: boolean; // 정답 여부
  reward?: string; // 정답 시에만 반환되는 보상 오답이면(undefined)
}
